import useJobs from './hooks/useJobs';
import JobCard from './components/JobCards';
import FilterPanel from './components/FilterPanel';
import ThemeToggle from './components/ThemeToggle';
import { useTheme } from './contexts/ThemeContext';
import './App.css';

function App() {
  const { jobs, loading, error, filters, setFilters } = useJobs();
  const { darkMode } = useTheme();

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <div className="container">
        <header>
          <h1>JOBS</h1>
          <ThemeToggle />
        </header>

        <FilterPanel filters={filters} setFilters={setFilters} />

        {loading && (
          <div className="loading">
            <p>Loading jobs...</p>
          </div>
        )}

        {error && (
          <div className="error">
            Error: {error}
          </div>
        )}

        {!loading && !error && (
          <div className="jobs-container">
            <p className="jobs-count">{jobs.length} jobs found</p>
            <div className="jobs-grid">
              {jobs.map(job => (
                <JobCard key={job.slug} job={job} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;