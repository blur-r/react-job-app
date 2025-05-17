import { useTheme } from '../contexts/ThemeContext';

const FilterPanel = ({ filters, setFilters }) => {
    const { darkMode } = useTheme();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <div className={`filter-panel ${darkMode ? 'dark' : ''}`}>
            <div className="filter-grid">
                <div className="filter-group">
                    <label>Search</label>
                    <input
                        type="text"
                        name="search"
                        value={filters.search}
                        onChange={handleChange}
                        placeholder="Job title or description"
                    />
                </div>
                <div className="filter-group">
                    <label>Company</label>
                    <input
                        type="text"
                        name="company"
                        value={filters.company}
                        onChange={handleChange}
                        placeholder="Company name"
                    />
                </div>
                <div className="filter-group">
                    <label>Location</label>
                    <input
                        type="text"
                        name="location"
                        value={filters.location}
                        onChange={handleChange}
                        placeholder="Location"
                    />
                </div>
                <div className="remote-filter">
                    <input
                        type="checkbox"
                        id="remote"
                        name="remote"
                        checked={filters.remote}
                        onChange={handleChange}
                    />
                    <label htmlFor="remote">Remote only</label>
                </div>
            </div>
        </div>
    );
};

export default FilterPanel;