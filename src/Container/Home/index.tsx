import React from "react";
import { Link } from "react-router-dom";

import { Button } from "../../Components/Button";

const Home = () => {
  return (
    <div className="container mx-auto h-screen flex justify-center items-center">
      <div className="p-5">
        <h2>Text Counter</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, minus? Accusamus consequuntur quos omnis
          optio neque dolore molestiae ex officiis.
        </p>
        <Link to="/text-counter">
          <Button>View</Button>
        </Link>
      </div>
      <div className="p-5">
        <h2>Text Counter</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, minus? , ea vero sequi eaque quasi
          exercitationem eum sed non illo!
        </p>
        <Button>View</Button>
      </div>
      <div className="p-5">
        <h2>Text Counter</h2>
        <p>
          Lorem ipsum dolor, Accusamus consequuntur quos omnis optio neque dolore molestiae ex officiis, ea vero sequi
          eaque quasi exercitationem eum sed non illo!
        </p>
        <Button>View</Button>
      </div>
    </div>
  );
};

export default Home;
