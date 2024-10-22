import { useState } from 'react';
import { ICard } from "../../interfaces/card";

export const Card = ({
    id,
    title,
    description,
    image_url,
}: ICard) => {
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            key={id}
            style={{
                ...styles.projectCard,
                transform: isHovered ? "scale(1.05)" : "scale(1)",
                boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src={image_url} alt={title} style={styles.projectImage} />
            <h3>{title}</h3>
            <p style={styles.description}>{description}</p>
            <button style={styles.projectLink}>More Info</button>
        </div>
    );
}

const styles = {
    projectCard: {
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        transition: 'transform 0.2s, box-shadow 0.2s',
        display: "grid",
        placeItems: "center",
        background: "#FFFFFF",
    },
    projectImage: {
        width: "50%",
        borderRadius: "8px",
    },
    description: {
        width: "200px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
    projectLink: {
        display: "inline-block",
        marginTop: "8px",
        padding: "8px 16px",
        backgroundColor: "#007BFF",
        color: "#fff",
        borderRadius: "4px",
        textDecoration: "none",
        transition: "background-color 0.3s",
        border: "1px solid #007BFF",
    },
};

export default Card;
