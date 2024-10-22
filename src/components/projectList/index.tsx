import { useState } from "react";
import Card from "../card";
import CardSkeletonLoader from "../loader/card";
import Notification from "../notification";
import SearchBar from "../searchBar";
import { useMediaQuery } from "react-responsive";
import useFetchProjects from "../../hooks/useFetchProjects";
import { IProject } from "../../interfaces/project";

const ProjectList = () => {
    const { isLoading, errorMessage, projects } = useFetchProjects();
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const [searchTerm, setSearchTerm] = useState("");
    const [visibleCount, setVisibleCount] = useState(20);

    const filterProjects = (projects: IProject[], searchTerm: string | null | undefined): IProject[] => {
        if (!searchTerm) {
            return projects;
        }
        
        const lowerCaseTerm = searchTerm.toLowerCase();
        return projects.filter(project => 
            project.title.toLowerCase().includes(lowerCaseTerm) || 
            project.description.toLowerCase().includes(lowerCaseTerm)
        );
    };

    const filteredProjects = filterProjects(projects, searchTerm);

    const handleSeeMore = () => {
        setVisibleCount(prevCount => prevCount + 20);
    };

    if (isLoading) {
        return (
            <div style={styles.projectList}>
                {Array.from({ length: 10 }, (_, index) => (
                    <CardSkeletonLoader key={index} />
                ))}
            </div>
        );
    }

    return (
        <>
            {errorMessage && (
                <Notification
                    message={errorMessage}
                    type="error"
                />
            )}
            <div style={isMobile ? styles.searchContainerMobile : styles.searchContainerDesktop}>
                <SearchBar 
                    onSearch={(term) => setSearchTerm(term)} 
                />
            </div>
            <div style={styles.projectList}>
                {filteredProjects.slice(0, visibleCount).map((project) => (
                    <Card
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        image_url={project.image_url}
                    />
                ))}
            </div>
            {visibleCount < filteredProjects.length && (
                <button style={styles.seeMoreButton} onClick={handleSeeMore}>
                    See More
                </button>
            )}
        </>
    );
};

const styles = {
    projectList: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "16px",
        padding: "20px",
    },
    searchContainerDesktop: {
        width: "70%",
    },
    searchContainerMobile: {
        width: "100%",
    },
    seeMoreButton: {
        margin: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: "20px",
    },
};

export default ProjectList;
