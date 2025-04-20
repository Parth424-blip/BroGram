import { useState } from "react";

import Grid from "./Components/Grid";
import Layout from "./Components/Layout";
import Hero from "./Components/Hero";

function App() {
  return (
    <>
      <Layout>
        <main>
          <Hero />
          <Grid />
        </main>
      </Layout>
    </>
  );
}

export default App;
