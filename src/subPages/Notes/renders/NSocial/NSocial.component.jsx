// Import: Dependencies
import React from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Render } from "./NSocial.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  ReportContainer,
} from "../../../../components";

// Render: NSocial
export default function NSocial({ selectedPatient, notesData }) {
  //#region reportRender = Social History
  const reportRender = notesData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            data={
              patient.AddtItem_Social_History
                ? patient.AddtItem_Social_History
                : "Not recorded"
            }
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Social History

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Social History"
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
              <FieldData data="There is no Social History data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
