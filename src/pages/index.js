import CenterLayout from "components/CenterLayout";
import LogTable from "components/LogTable";
import ProgrammingLanguages from "components/ProgrammingLanguages";
import Wave from "components/Wave";
import Head from 'next/head';
import Highlight from 'react-highlight.js';
import { languages } from "../utils/constants";
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter();
  const lang = "lang" in router.query ? languages.find(l => l.name === router.query.lang) : languages[0];
  return (
    <>
    <Head>
      <title>Loggify</title>
      <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
    </Head>
    <CenterLayout>
      <h1 className="h1">Loggify 📓</h1>
      <LogTable />
      <ProgrammingLanguages selected={lang.name}/>
      <div className="language-container">
        <div className="language-description">
          {lang.description}
        </div>
        <div className="language-code">
          <Highlight language={lang.name} >
            {lang.code}
          </Highlight>
        </div>
      </div>
      <Wave />
    </CenterLayout>
    </>
  );
}
