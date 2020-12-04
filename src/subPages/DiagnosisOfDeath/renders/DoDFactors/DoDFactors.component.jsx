// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./DoDFactors.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: DoDFactors
export default function DoDFactors({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region reportRender = Factors to Confirm...
  const reportRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="&#62; 15 minutes since the onset of collapse"
            data={patient.DoD_Onset ? patient.DoD_Onset : "Not recorded"}
          />
        </Column>

        <Column>
          <FieldData
            field="Asystole for &#62; 30 seconds on the ECG monitor"
            data={patient.DoD_ECG ? patient.DoD_ECG : "Not recorded"}
          />
        </Column>

        <Column>
          <FieldData
            field="No effective CPR prior to arrival of ambulance"
            data={patient.DoD_CPR ? patient.DoD_CPR : "Not recorded"}
          />
        </Column>
      </Grid>

      <HeadingTertiary
        text="All of the above MUST be confirmed"
        marginTop="2rem"
      />
    </React.Fragment>
  ));
  //#endregion /reportRender = Factors to Confirm...

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-procedures"
            text="A. Factors to Confirm Resuscitation Should Not Be Attempted (No Suspicion of Drowning)"
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
              <FieldData data="There is no Factors to Confirm... data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
