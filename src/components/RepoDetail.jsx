import { useState, useEffect } from "react"
import { getCachedReadme, setCachedReadme, getSummary, setSummary } from "../db.js"

export default function RepoDetail({ repo, userPins, userShelf, togglePin, toggleShelf, onClose }) {
  const [tab, setTab] = useState("readme")
  const [readme, setReadme] = useState(null)
  const [summary, setSummaryState] = useState(null)
  const [loading, setLoading] = useState(false)

  // load readme from local public folder
  useEffect(() => {
    async function loadReadme() {
      setLoading(true)
      // check IndexedDB cache first
      const cached = await getCachedReadme(repo.full_name)
      if (cached) { setReadme(cached); setLoading(false); return }

      // fetch from public/readmes folder
      const folderIndex = Math.floor(
        // find repo index by matching full_name - use folder structure
        parseInt(repo.id) % 1000 < 1000 ? Math.floor(parseInt(repo.id) / 1000) : 0
      )
      const filename = `${repo.owner}_${repo.name}`
        .replace(/[^a-zA-Z0-9_.-]/g, "_")
        .slice(0, 100) + ".md"

      // try all folders since we dont have index->folder mapping in frontend
      let content = null
      for (let i = 0; i <= 32; i++) {
        try {
          const res = await fetch(`/readmes/${i}/${filename}`)
          if (res.ok) { content = await res.text(); break }
        } catch {}
      }

      if (content) {
        await setCachedReadme(repo.full_name, content)
        setReadme(content)
      } else {
        setReadme(`# ${repo.name}\n\n${repo.description || "No README available."}`)
      }
      setLoading(false)
    }

    async function loadSummary() {
      const saved = await getSummary(repo.full_name)
      if (saved) setSummaryState(saved)
    }

    loadReadme()
    loadSummary()
  }, [repo])

  async function handleUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    const text = await file.text()
    await setSummary(repo.full_name, { content: text, filename: file.name, uploaded: new Date().toISOString() })
    setSummaryState({ content: text, filename: file.name, uploaded: new Date().toISOString() })
    setTab("summary")
  }

  function handleCopyForClaude() {
    const text = `# ${repo.full_name}\n\nDescription: ${repo.description}\nStars: ${repo.stars} | Forks: ${repo.forks} | Language: ${repo.language}\nTopics: ${repo.topics?.join(", ")}\n\n---\n\n${readme || ""}`
    navigator.clipboard.writeText(text)
  }

  function handleDownloadReadme() {
    const blob = new Blob([readme || ""], { type: "text/markdown" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${repo.name}-readme.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  const isPinned = userPins[repo.full_name] || repo.layer >= 2
  const isShelf = userShelf[repo.full_name] || repo.layer === 3

  return (
    <div className="detail-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={e => e.stopPropagation()}>
        <div className="detail-header">
          <div className="detail-title">
            <span className="mono detail-name">{repo.full_name}</span>
            <a href={repo.url} target="_blank" rel="noreferrer" className="detail-link">
              ↗ open repo
            </a>
          </div>
          <div className="detail-header-actions">
            <button
              className={`action-btn-lg ${isShelf ? "active-yellow" : ""}`}
              onClick={() => toggleShelf(repo.full_name)}
            >◈ shelf</button>
            <button
              className={`action-btn-lg ${isPinned ? "active-accent" : ""}`}
              onClick={() => togglePin(repo.full_name)}
            >⊕ pin</button>
            <button className="close-btn" onClick={onClose}>×</button>
          </div>
        </div>

        <div className="detail-meta">
          <span>⭐ {repo.stars?.toLocaleString()}</span>
          <span>🍴 {repo.forks?.toLocaleString()}</span>
          <span>💻 {repo.language}</span>
          <span>📁 {repo.project_type}</span>
          <span>🏷 {repo.category}</span>
          {repo.license && <span>📜 {repo.license}</span>}
        </div>

        {repo.description && (
          <div className="detail-desc">{repo.description}</div>
        )}

        {repo.topics?.length > 0 && (
          <div className="detail-topics">
            {repo.topics.map(t => (
              <span key={t} className="topic-tag">#{t}</span>
            ))}
          </div>
        )}

        <div className="detail-tabs">
          <button className={`dtab ${tab === "readme" ? "active" : ""}`} onClick={() => setTab("readme")}>
            README
          </button>
          <button className={`dtab ${tab === "summary" ? "active" : ""}`} onClick={() => setTab("summary")}>
            SUMMARY {summary ? "✓" : ""}
          </button>
          <button className={`dtab ${tab === "upload" ? "active" : ""}`} onClick={() => setTab("upload")}>
            UPLOAD
          </button>
        </div>

        <div className="detail-body">
          {tab === "readme" && (
            <div className="readme-actions">
              <button className="action-pill" onClick={handleCopyForClaude}>
                copy for claude
              </button>
              <button className="action-pill" onClick={handleDownloadReadme}>
                download .md
              </button>
            </div>
          )}

          {tab === "readme" && (
            loading
              ? <div className="detail-loading mono">loading readme...</div>
              : <pre className="readme-content">{readme}</pre>
          )}

          {tab === "summary" && (
            summary
              ? <div>
                  <div className="summary-meta mono">
                    {summary.filename} · uploaded {new Date(summary.uploaded).toLocaleDateString()}
                  </div>
                  <pre className="readme-content">{summary.content}</pre>
                </div>
              : <div className="empty-summary">
                  <div className="empty-icon">∅</div>
                  <div>no summary uploaded yet</div>
                  <div className="empty-hint">copy the README, paste to Claude, upload the result</div>
                  <button className="action-pill" onClick={() => setTab("upload")}>
                    upload summary
                  </button>
                </div>
          )}

          {tab === "upload" && (
            <div className="upload-area">
              <div className="upload-instructions">
                <div className="upload-step">1. switch to README tab → click "copy for claude"</div>
                <div className="upload-step">2. paste in Claude chat and ask for a summary</div>
                <div className="upload-step">3. download the result as .md / .txt / .pdf / .docx</div>
                <div className="upload-step">4. upload it here - stored permanently in your browser</div>
              </div>
              <label className="upload-btn">
                <input type="file" accept=".md,.txt,.pdf,.docx" onChange={handleUpload} hidden />
                choose file to upload
              </label>
              {summary && (
                <div className="upload-existing mono">
                  current: {summary.filename} · {new Date(summary.uploaded).toLocaleDateString()}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}