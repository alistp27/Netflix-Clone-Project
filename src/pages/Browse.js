import React from "react";
import BrowserContainer from "../Container/browseContainer";
import useContent from "../hooks/use-content";
import sectionFILTER from "../utils/selection-map";
export function Browse() {
    const { series } = useContent("series");
    const { films } = useContent("films");

    const slides = sectionFILTER({ series, films });

    return(
      <BrowserContainer  slides={slides}/>
    )
  }
