// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./DoDExpected.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: DoDExpected
export default function DoDExpected({
  selectedPatient,
  diagnosisOfDeathData,
  isLoading,
}) {
  //#region reportRender = Expected Death...
  const reportRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Expected Death due to a terminal illness"
            data={patient.DoD_Terminal ? patient.DoD_Terminal : "Not recorded"}
          />
        </Column>

        <Column>
          <FieldData
            field="Explanation"
            data={
              patient.Terminal_Illness
                ? patient.Terminal_Illness
                : "Not recorded"
            }
          />
        </Column>

        <Column>
          <></>
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Expected Death...

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-procedures"
            text="E. Expected Death Due to Illness or Pre-Existing Condition"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Loader background="#3a3a40" />
          </Render>
        </ReportContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Heading>
        <HeadingPrimary
          icon="fas fa-procedures"
          text="E. Expected Death Due to Illness or Pre-Existing Condition"
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
            <FieldData data="There is no Expected Death... data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
