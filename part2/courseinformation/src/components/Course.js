import React from "react";

import Header from "./Header";
import Content from "./Content";
import Sum from "./Sum";

const Course = ({ course }) => (
  <>
    <Header title={course.name} />
    <Content parts={course.parts} />
    <Sum parts={course.parts} />
  </>
);

export default Course;
