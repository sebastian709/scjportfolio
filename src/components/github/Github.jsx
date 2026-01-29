import React, { useEffect, useState } from "react";
import "./Github.css";

const Github = () => {
  const username = "sebastian709";

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        const userData = await userRes.json();

        const repoRes = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100`
        );
        const repoData = await repoRes.json();

        setUser(userData);
        setRepos(repoData);
      } catch (error) {
        console.error("GitHub fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, [username]);

  if (loading) {
    return (
      <section className="github-section">
        <div className="github-container">
          <h2>GitHub Stats</h2>
          <p>Loading stats...</p>
        </div>
      </section>
    );
  }

  if (!user) return null;

  const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const totalForks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

  return (
    <section className="github-section" id="github">
      <div className="github-container">
        {/* Header */}
        <div className="github-header">
          <h2 className="github-title">GitHub Activity</h2>
        </div>

        {/* Contributions Card */}
        <div className="github-contributions-card">
          <div className="github-contributions">
            <img
              src={`https://github-contributions-api.deno.dev/${username}.svg`}
              alt={`GitHub Contributions`}
              className="github-contributions-img"
              style={{ filter: "brightness(1.05)" }}
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="github-stats-grid">
          <div className="github-stat-card">
            <span className="stat-number">{user.public_repos}</span>
            <span className="stat-label">Repositories</span>
          </div>

          <div className="github-stat-card">
            <span className="stat-number">{user.followers}</span>
            <span className="stat-label">Followers</span>
          </div>

          <div className="github-stat-card">
            <span className="stat-number">{totalStars}</span>
            <span className="stat-label">Total Stars</span>
          </div>

          <div className="github-stat-card">
            <span className="stat-number">{totalForks}</span>
            <span className="stat-label">Total Forks</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
