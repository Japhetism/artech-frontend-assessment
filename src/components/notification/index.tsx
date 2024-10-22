import { INotification } from "../../interfaces/notification";

const Notification = ({ message, type = "info" }: INotification) => {
    const getTypeStyles = () => {
        switch (type) {
            case "success":
                return { backgroundColor: "#d4edda", color: "#155724" };
            case "error":
                return { backgroundColor: "#f8d7da", color: "#721c24" };
            case "info":
            default:
                return { backgroundColor: "#cce5ff", color: "#004085" };
        }
    };

    return (
        <div style={{ ...styles.notification, ...getTypeStyles() }}>
            <span>{message}</span>
        </div>
    );
};

const styles = {
    notification: {
        padding: "10px 20px",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
        transition: "opacity 0.3s",
    },
};

export default Notification;
