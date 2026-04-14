import { useMemo, useState } from "react"
import Fuse from "fuse.js"
import RepoCard from "./RepoCard.jsx"

const PAGE_SIZE = 50

export default function RepoGrid({ repos, filters, search, userPins, userShelf, userTags, togglePin, toggleShelf, onSelect }) {
  const [page, setPage] = useState(1)

  // fuse search instance
  const fuse = useMemo(() => new Fuse(repos, {
    keys: ["name", "full_name", "description", "topics", "language", "category"],
    threshold: 0.3,
    includeScore: true,
  }), [repos])

  // filtered + sorted repos
  const filtered = useMemo(() => {
    let result = repos

    // search
    if (search.trim()) {
      result = fuse.search(search).map(r => r.item)
    }

    // filters
    if (filters.languages.length > 0)
      result = result.filter(r => filters.languages.includes(r.language))
    if (filters.projectTypes.length > 0)
      result = result.filter(r => filters.projectTypes.includes(r.project_type))
    if (filters.categories.length > 0)
      result = result.filter(r => filters.categories.includes(r.category))
    if (filters.starsMin > 0)
      result = result.filter(r => r.stars >= filters.starsMin)
    if (filters.starsMax !== Infinity)
      result = result.filter(r => r.stars <= filters.starsMax)

    // sort
    if (!search.trim()) {
      result = [...result].sort((a, b) => {
        if (filters.sortBy === "stars") return b.stars - a.stars
        if (filters.sortBy === "forks") return b.forks - a.forks
        if (filters.sortBy === "recent") return new Date(b.last_commit) - new Date(a.last_commit)
        return b.score - a.score
      })
    }

    return result
  }, [repos, search, filters, fuse])

  // reset page on filter change
  useMemo(() => setPage(1), [filtered])

  const paginated = filtered.slice(0, page * PAGE_SIZE)
  const hasMore = paginated.length < filtered.length

  return (
    <div className="grid-wrap">
      <div className="grid-header">
        <span className="grid-count mono">
          {filtered.length.toLocaleString()} repos
          {search && ` matching "${search}"`}
        </span>
      </div>
      <div className="repo-grid">
        {paginated.map(repo => (
          <RepoCard
            key={repo.full_name}
            repo={repo}
            isPinned={userPins[repo.full_name] || repo.layer >= 2}
            isShelf={userShelf[repo.full_name] || repo.layer === 3}
            tags={userTags[repo.full_name] || []}
            togglePin={togglePin}
            toggleShelf={toggleShelf}
            onSelect={onSelect}
          />
        ))}
      </div>
      {hasMore && (
        <button className="load-more" onClick={() => setPage(p => p + 1)}>
          load more ({filtered.length - paginated.length} remaining)
        </button>
      )}
      {filtered.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">∅</div>
          <div className="empty-text">no repos match your filters</div>
        </div>
      )}
    </div>
  )
}