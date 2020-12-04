// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./DoDAttendance.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  ReportContainer,
} from "../../../../components";

// Render: DoDAttendance
export default function DoDAttendance({
  selectedPatient,
  diagnosisOfDeathData,
}) {
  //#region reportRender = Attendance and Relatives
  const reportRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Police Attendance"
            data={patient.Police ? patient.Police : "Not recorded"}
          />
          <FieldData
            field="Details of Police involvement"
            data={
              patient.Terminal_Additional
                ? patient.Terminal_Additional
                : "Not recorded"
            }
          />
        </Column>

        <Column>
          <FieldData
            field="GP Attendance"
            data={patient.GP ? patient.GP : "Not recorded"}
          />
          <FieldData
            field="Relatives Attendance"
            data={patient.Relative ? patient.Relative : "Not recorded"}
          />
        </Column>

        <Column>
          <FieldData
            field="Bereavement Leaflet provided and consider religious support"
            data={patient.DoD_Leaflet ? patient.DoD_Leaflet : "Not recorded"}
          />
          <FieldData
            field="Did the Patient have a known learning disability? If yes, inform support centre"
            data={
              patient.DoD_Disability ? patient.DoD_Disability : "Not recorded"
            }
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Attendance and Relatives

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-procedures"
            text="Attendance and Relatives"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {selectedPatient === null ? (
              <FieldData data="Please select a Patient from the Patient list" />
            ) : diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
              reportRender
            ) : (
              <FieldData data="There is no Attendance and Relatives data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
