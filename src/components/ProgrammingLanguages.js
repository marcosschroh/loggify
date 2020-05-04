import React from 'react';
import { languages } from "../utils/constants";
import Router from 'next/router'

export default function ProgrammingLanguages({selected}) {
  return (
    <div className="languages">
      {languages.map((lang, i) => 
        <div key={i} className={`language ${lang.name === selected && "language-selected"}`}>
          <img
            className={`language-logo`}
            src={lang.logo}
            alt={lang.name}
            onClick={()=>{Router.push({
              pathname: '/',
              query: { lang: lang.name },
            }) }}
          />
          <span className="language-text">{lang.name}</span>
        </div>
      )}
    </div>
  );
};
