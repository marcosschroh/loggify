import CenterLayout from "components/CenterLayout";
import LogTable from "components/LogTable";
import ProgrammingLanguages from "components/ProgrammingLanguages";
import Wave from "components/Wave";
import Head from 'next/head';
import Highlight from 'react-highlight.js';

export default function Index() {
  return (
    <>
    <Head>
      <title>Loggify</title>
      <link rel="stylesheet" href="https://highlightjs.org/static/demo/styles/railscasts.css" />
    </Head>
    <CenterLayout>
      <h1 className="h1">Loggify 📓</h1>
      <LogTable />
      <ProgrammingLanguages />
      <Highlight language={'python'} >
        #comment
      </Highlight>
      <Wave />
    </CenterLayout>
    </>
  );
}
