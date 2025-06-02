import React from "react";

const Container = ({ children, newStyle = {} }) => {
    const baseStyle = {
        maxWidth: "5000px",
        margin: "0 auto",
        padding: "0 1rem",
        backgroundColor: "#E0F7FA", /* azul claro */
    };

    return (
        <div className="full-width" style={{ ...baseStyle, ...newStyle }}>
            {children}
        </div>
    );
};

export default Container;