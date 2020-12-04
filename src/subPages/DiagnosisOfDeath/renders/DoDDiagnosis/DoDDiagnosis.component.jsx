// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./DoDDiagnosis.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: DoDDiagnosis
export default function DoDDiagnosis({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region reportRender = Diagnosis of Death
  const reportRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Diagnosis of Death Timed At"
            data={patient.DoD_Time ? patient.DoD_Time : "Not recorded"}
          />
        </Column>

        <Column>
          <FieldData
            field="Privacy"
            data={patient.Privacy ? patient.Privacy : "Not recorded"}
          />
        </Column>

        <Column>
          <FieldData
            field="Diagnosis of Death Confirmed By"
            data={patient.Confirmed ? patient.Confirmed : "Not recorded"}
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Diagnosis of Death

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-procedures"
            text="Diagnosis of Death"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {selectedPatient === null ? (
              <FieldData data="Please select a Patient from the Patient list" />
            ) : isLoading ? (
              <>
                <FieldData data="Loading..." />
                <Loader background="#3a3a40" />
              </>
            ) : diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
              reportRender
            ) : (
              <FieldData data="There is no Diagnosis of Death data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
