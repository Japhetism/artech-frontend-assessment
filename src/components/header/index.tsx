import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header style={styles.header}>
            <h1 style={styles.title}>ARTECH</h1>
            <nav style={styles.nav}>
                <NavLink 
                    to="/projects" 
                    style={({ isActive }) => isActive ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem}
                >
                    Projects
                </NavLink>
                <NavLink 
                    to="/tasks" 
                    style={({ isActive }) => isActive ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem}
                >
                    Tasks
                </NavLink>
                <NavLink 
                    to="/settings" 
                    style={({ isActive }) => isActive ? { ...styles.navItem, ...styles.activeNavItem } : styles.navItem}
                >
                    Settings
                </NavLink>
            </nav>
        </header>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    header: {
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        padding: "20px",
        backgroundColor: "#282c6c",
        color: "#FFFFFF",
    },
    title: {
        fontSize: "24px",
        margin: 0,
    },
    nav: {
        display: "grid",
        gridAutoFlow: "column",
        gap: "20px",
    },
    navItem: {
        color: "#FFFFFF",
        textDecoration: "none",
        cursor: "pointer",
    },
    activeNavItem: {
        textDecoration: "underline",
    },
};

export default Header;
