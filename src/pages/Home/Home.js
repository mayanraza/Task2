import React from "react";
import Layout from "../../component/Layouts/Layout";
import Section1 from "./Section1";
import "../../styles/HomeStyle.css";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";

function Home() {
  return (
    <>
      <Layout>
        {/* ?section 1 */}
        <Section1 />
        {/* ?section 2 */}
        <Section2 />
        {/* ?section 3 */}
        <Section3 />
        {/* ?section 4 */}
        <Section4 />
        {/* ?section 5 */}
        <Section5 />
        {/* ?section 6 */}
        <Section6 />
       
      </Layout>
    </>
  );
}

export default Home;
