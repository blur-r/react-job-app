import { useTheme } from '../contexts/ThemeContext';

const JobCard = ({ job }) => {
    const { darkMode } = useTheme();

    // Function to create markup from HTML string
    const createMarkup = (htmlString) => {
        return { __html: htmlString };
    };

    return (
        <div className={`job-card ${darkMode ? 'dark' : ''}`}>
            <h3>{job.title}</h3>
            <p className="company">{job.company_name}</p>
            <p className="location">{job.location} {job.remote && '(Remote)'}</p>
            <div className="tags">
                {job.tags.map((tag, index) => (
                    <span key={index} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div
                className="description"
                dangerouslySetInnerHTML={createMarkup(job.description)}
            />
            <a href={job.url} target="_blank" rel="noopener noreferrer" className="apply-button">
                Apply Now
            </a>
        </div>
    );
};

export default JobCard;