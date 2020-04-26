import React from "react";
import Highlight from 'react-highlight.js';
import { languages } from '../utils/constants';
import CenterLayout from "components/CenterLayout";
import Wave from "components/Wave";
import ProgrammingLanguages from "components/ProgrammingLanguages";

export default function ProgrammingLanguage({lan}){
  let language = languages.find(l=>l.name=lan);

  return (
    <CenterLayout>
      <h1 className="h1">{language.name}</h1>
      <Highlight language={language.name} >
        {language.code}
      </Highlight>
      <ProgrammingLanguages />
      <Wave />
    </CenterLayout>
  );
};
