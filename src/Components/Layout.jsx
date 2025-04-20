import React from "react";

const Layout = (props) => {
  const { children } = props;
  const header = (
    <header>
      <h1 className="text-gradient">The Brogram</h1>
      <p>
        <strong>The 30 simple Workout Programs</strong>
      </p>
    </header>
  );
  const footer = (
    <footer>
      <p>
        Built by{" "}
        <a href="" target="_blank">
          Parth T
        </a>
        <br />
      </p>
    </footer>
  );
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
};

export default Layout;
