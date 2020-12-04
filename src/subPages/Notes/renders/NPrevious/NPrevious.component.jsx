// Import: Dependencies
import React from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Render } from "./NPrevious.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  ReportContainer,
} from "../../../../components";

// Render: NPrevious
export default function NPrevious({ selectedPatient, notesData }) {
  //#region reportRender = Previous Medical History Complaint
  const reportRender = notesData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            data={patient.AddtItem_PMH ? patient.AddtItem_PMH : "Not recorded"}
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Previous Medical History Complaint

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Previous Medical History Complaint"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {selectedPatient === null ? (
              <FieldData data="Please select a Patient from the Patient list" />
            ) : notesData && notesData.length > 0 ? (
              reportRender
            ) : (
              <FieldData data="There is no Previous Medical History Complaint data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
