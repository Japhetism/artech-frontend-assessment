import { useEffect, useState } from "react";
import axios from "axios";
import { IProject } from "../interfaces/project";

const BASE_URL = "http://127.0.0.1:8000";

const useFetchProjects = () => {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            setIsLoading(true);
            setErrorMessage(null);
            try {
                const response = await axios.get(`${BASE_URL}/projects`);
                setProjects(response.data.data);
            } catch (error) {
                setErrorMessage("Error fetching projects");
            } finally {
                setIsLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return {
        isLoading: isLoading,
        errorMessage: errorMessage,
        projects: projects,
    };

};

export default useFetchProjects;
