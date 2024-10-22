import { Routes, Route } from "react-router-dom";
import Project from "./project";
import Header from "../components/header";

const Pages = () => {
    return (
        <div>
            <Header />
            <div style={styles.content}>
                <Routes>
                    <Route path="/" element={<Project />} />
                    <Route path="/projects" element={<Project />} />
                </Routes>
            </div>
        </div>
    )
}

const styles = {
    content: {
        background: "#f8f7f7",
        padding: "40px",
    }
}

export default Pages;