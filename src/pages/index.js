import CenterLayout from "components/CenterLayout";
import LogTable from "components/LogTable"
import ProgrammingLanguages from "components/ProgrammingLanguages";
import Wave from "components/Wave";

export default function Index() {
  return (
    <CenterLayout>
      <h1>Loggify</h1>
      <LogTable />
      <Wave/>
      <ProgrammingLanguages />
    </CenterLayout>
  );
}
