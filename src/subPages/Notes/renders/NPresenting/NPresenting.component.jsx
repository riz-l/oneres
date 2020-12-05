// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./NPresenting.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: NPresenting
export default function NPresenting({ selectedPatient, notesData, isLoading }) {
  //#region reportRender = Presenting Complaint
  const reportRender = notesData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            data={patient.AddtItem_PC ? patient.AddtItem_PC : "Not recorded"}
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Presenting Complaint

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Presenting Complaint"
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
          icon="fas fa-sticky-note"
          text="Presenting Complaint"
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
            <FieldData data="There is no Presenting Complaint data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
