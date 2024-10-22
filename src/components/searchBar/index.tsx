import { useState } from "react";
import { ISearchBar } from "../../interfaces/search";

const SearchBar = ({ onSearch }: ISearchBar) => {
    const [query, setQuery] = useState<string>('');

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div style={styles.container}>
            <input
                type="search"
                onChange={(e: any) => setQuery(e.target.value)}
                placeholder="Search..."
                style={styles.input}
            />
            <button style={styles.button} onClick={handleSearch}>Search</button>
        </div>
    );
};

const styles = {
    container: {
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        margin: "20px",
        gap: "10px",
    },
    input: {
        padding: "10px",
        fontSize: "16px",
        border: "1px solid #ccc",
        borderRadius: "4px",
        width: "100%",
    },
    button: {
        padding: "10px 15px",
        fontSize: "16px",
        border: "none",
        borderRadius: "4px",
        backgroundColor: "#007bff",
        color: "#FFFFFF",
        cursor: "pointer",
    }
}

export default SearchBar;
