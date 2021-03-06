// Import: Dependencies
import React from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Render } from "./NHistory.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: NHistory
export default function NHistory({ selectedPatient, notesData, isLoading }) {
  //#region reportRender = History of Presenting Complaint
  const reportRender = notesData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            data={patient.AddtItem_HPC ? patient.AddtItem_HPC : "Not recorded"}
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = History of Presenting Complaint

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="History of Presenting Complaint"
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
          text="History of Presenting Complaint"
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
            <FieldData data="There is no History of Presenting Complaint data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
