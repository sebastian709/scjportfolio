import React, { useEffect, useState } from 'react';
import './Github.css';

const username = 'sebastian709';

const formatDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const getStartOfWeek = (date) => {
  const result = new Date(date);
  const offset = (result.getDay() + 6) % 7;
  result.setDate(result.getDate() - offset);
  result.setHours(0, 0, 0, 0);
  return result;
};

const buildContributionMap = (events = []) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const start = new Date(today);
  start.setDate(today.getDate() - 89);
  const calendarStart = getStartOfWeek(start);

  const counts = new Map();

  events.forEach((event) => {
    const created = new Date(event.created_at);
    if (Number.isNaN(created.getTime())) return;
    const key = formatDateKey(created);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });

  const weeks = [];
  for (let weekIndex = 0; weekIndex < 14; weekIndex += 1) {
    const week = [];
    for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
      const date = new Date(calendarStart);
      date.setDate(calendarStart.getDate() + weekIndex * 7 + dayIndex);
      const key = formatDateKey(date);
      const count = counts.get(key) ?? 0;

      week.push({
        date,
        key,
        count,
        level: count === 0 ? 0 : Math.min(count, 4),
      });
    }
    weeks.push(week);
  }

  return weeks;
};

const Github = () => {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [contributionError, setContributionError] = useState('');

  useEffect(() => {
    async function fetchGithubData() {
      try {
        const [userResult, repoResult, eventsResult] = await Promise.allSettled([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100`),
          fetch(`https://api.github.com/users/${username}/events/public?per_page=100`),
        ]);

        if (userResult.status !== 'fulfilled' || repoResult.status !== 'fulfilled' || !userResult.value.ok || !repoResult.value.ok) {
          throw new Error('GitHub data request failed');
        }

        const userData = await userResult.value.json();
        const repoData = await repoResult.value.json();

        setUser(userData);
        setRepos(repoData);
        if (eventsResult.status === 'fulfilled' && eventsResult.value.ok) {
          setContributions(buildContributionMap(await eventsResult.value.json()));
          setContributionError('');
        } else {
          setContributionError('Public GitHub activity is unavailable right now.');
        }
      } catch (error) {
        console.error('GitHub fetch error:', error);
        setContributionError('GitHub contribution activity unavailable right now.');
      } finally {
        setLoading(false);
      }
    }

    fetchGithubData();
  }, []);

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
        <div className="github-header">
          <h2 className="github-title">GitHub Activity</h2>
        </div>

        <div className="github-contributions-card">
          {contributionError ? (
            <div className="github-contributions-fallback" role="status" aria-live="polite">
              <p>{contributionError}</p>
              <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
                View GitHub Profile
              </a>
            </div>
          ) : (
            <div className="github-contributions" aria-label={`${username} public GitHub activity from the last 90 days`}>
              <p className="github-activity-note">Public activity from GitHub&apos;s events API (last 90 days).</p>
              <div className="github-contribution-grid" style={{ gridTemplateColumns: `repeat(${contributions.length}, minmax(10px, 1fr))` }}>
                {contributions.map((week, weekIndex) =>
                  week.map((day, dayIndex) => (
                    <span
                      key={`${day.key}-${weekIndex}-${dayIndex}`}
                      className={`github-day github-level-${day.level}`}
                      title={`${day.count} contribution${day.count === 1 ? '' : 's'} on ${new Date(day.date).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}`}
                    />
                  ))
                )}
              </div>
            </div>
          )}
        </div>

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
