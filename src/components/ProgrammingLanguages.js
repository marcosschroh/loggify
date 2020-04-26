import React from 'react';
import { languages } from "../utils/constants";
import { useRouter } from 'next/router'

export default function ProgrammingLanguages() {
  const router = useRouter();
  return (
    <div className="languages">
      {languages.map((lang, i) => 
        <div key={i} className="language">
          <img
            className="language-logo"
            src={lang.logo}
            alt={lang.name}
            onClick={()=>router.push(`/lan/${lang.name}`)}
          />
          <span className="language-text">{lang.name}</span>
        </div>
      )}
    </div>
  );
};
