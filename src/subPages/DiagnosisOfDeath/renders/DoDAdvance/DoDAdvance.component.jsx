// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./DoDAdvance.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: DoDAdvance
export default function DoDAdvance({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region reportRender = Advance Decisions...
  const reportRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Decision"
            data={patient.Decision ? patient.Decision : "Not recorded"}
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Advance Decisions...

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-procedures"
            text="B. Advance Decisions to Refuse Treatment DNACPR/and That Fulfils Criteria Specified"
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
              <FieldData data="There is no Advance Decisions... data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
