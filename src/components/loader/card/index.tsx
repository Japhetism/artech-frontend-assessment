const CardSkeletonLoader = () => {
    return (
        <div style={styles.skeletonCard}>
            <div style={styles.skeletonImage} />
            <div style={styles.skeletonText} />
            <div style={styles.skeletonText} />
            <div style={styles.skeletonButton} />
        </div>
    )
}

const styles = {
    skeletonCard: {
        border: "1px solid #eee",
        borderRadius: "8px",
        padding: "16px",
        display: "grid",
        placeItems: "center",
        backgroundColor: "#f0f0f0",
    },
    skeletonImage: {
        width: "50%",
        height: "150px",
        backgroundColor: "#e0e0e0",
        borderRadius: "8px",
        marginBottom: "8px",
    },
    skeletonText: {
        width: "80%",
        height: "16px",
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
        margin: "4px 0",
    },
    skeletonButton: {
        width: "60%",
        height: "36px",
        backgroundColor: "#e0e0e0",
        borderRadius: "4px",
    },
};


export default CardSkeletonLoader;