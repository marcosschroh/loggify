import CenterLayout from "components/CenterLayout";
import DiagonalBox from "components/DiagonalBox";
import Head from "next/head";
import Highlight from "react-highlight.js";
import LogTable from "components/LogTable";
import ProgrammingLanguages from "components/ProgrammingLanguages";
import { languages } from "../utils/constants";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const lang =
    "lang" in router.query
      ? languages.find((l) => l.name === router.query.lang)
      : languages[0];
  return (
    <>
      <Head>
        <title>Loggify</title>
        <link
          rel="stylesheet"
          href="https://highlightjs.org/static/demo/styles/railscasts.css"
        />
        <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
      </Head>
      <CenterLayout>
        <h1 className="h1">Loggify 📓</h1>
        <LogTable />
        <DiagonalBox>
          <CenterLayout className="content">
            <ProgrammingLanguages selected={lang.name} />
            <div className="language-container">
              <div className="language-description">{lang.description}</div>
              <div className="language-code">
                <Highlight language={lang.name}>{lang.code}</Highlight>
              </div>
            </div>
          </CenterLayout>
        </DiagonalBox>
      </CenterLayout>
    </>
  );
}
