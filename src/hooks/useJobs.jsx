import { useState, useEffect } from 'react';
import axios from 'axios';

const useJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        search: '',
        remote: false,
        location: '',
        company: ''
    });

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('https://www.arbeitnow.com/api/job-board-api');
                setJobs(response.data.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(filters.search.toLowerCase()) ||
            job.description.toLowerCase().includes(filters.search.toLowerCase());
        const matchesRemote = !filters.remote || job.remote;
        const matchesLocation = !filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase());
        const matchesCompany = !filters.company || job.company_name.toLowerCase().includes(filters.company.toLowerCase());

        return matchesSearch && matchesRemote && matchesLocation && matchesCompany;
    });

    return { jobs: filteredJobs, loading, error, filters, setFilters };
};

export default useJobs;