useEffect(() => {
  async function loadReadme() {
    setLoading(true)

    // check IndexedDB cache first
    const cached = await getCachedReadme(repo.full_name)
    if (cached) {
      setReadme(cached)
      setLoading(false)
      return
    }

    // try common branch names
    const branches = ["main", "master", "dev", "develop"]
    let content = null

    for (const branch of branches) {
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/${repo.full_name}/${branch}/README.md`
        )
        if (res.ok) {
          content = await res.text()
          break
        }
        // try lowercase readme too
        const res2 = await fetch(
          `https://raw.githubusercontent.com/${repo.full_name}/${branch}/readme.md`
        )
        if (res2.ok) {
          content = await res2.text()
          break
        }
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