import React from "react";
import SingleComix from "./SingleComix";

export default function Results(props) {
  const { results } = props;
  return results.map(comix => {
    return <SingleComix key={comix.id} {...comix} />;
  });
}