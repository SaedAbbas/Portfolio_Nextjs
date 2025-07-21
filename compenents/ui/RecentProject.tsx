import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const RecentProject = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>

    </div>
  );
};

export default RecentProject;
