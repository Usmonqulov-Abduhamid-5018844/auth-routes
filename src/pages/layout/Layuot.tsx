import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "../../components/headers/Headers";

const Layuot = () => {
  return (
    <div>
      <Headers/>
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default React.memo(Layuot);
