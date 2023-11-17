import React from "react";
import Navbarofquiz from "../preview/Navbarofquiz";
import "./style.css";
import DropDownPlan from "./components/DropDownPlan";
import { poppins } from "../preview/page";
import MainPlan from "./components/MainAddQuizExam";
import GenerateForm from "./components/GenerateBtn";



type Props = {};

export default function PlanYourCourse({}: Props) {
  return (
    <div>
      <Navbarofquiz />
      <MainPlan title={"Course "}>
        <div className="mt-[60px] ">
          <DropDownPlan label="Select Category" />
          <DropDownPlan label="Select Difficulty" />
        </div>
        <div className="mt-[3rem] flex flex-col items-center mb-5  ">
          <h6 className={`${poppins.className} text-[16px] font-semibold text-[#2F327D] self-start`}>
            What will students learn in your course?
          </h6>
          <GenerateForm/>
        </div>
      </MainPlan>
    </div>
  );
}
