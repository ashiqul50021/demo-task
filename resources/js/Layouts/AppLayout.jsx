import React from "react";

const AppLayout = ({ children }) => (
    <div>
        <header>Header</header>
        <main>{children}</main>
        <footer>Footer</footer>
    </div>
);

export default AppLayout;
