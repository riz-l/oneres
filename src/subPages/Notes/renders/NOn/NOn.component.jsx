// Import: Dependencies
import React from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Render } from "./NOn.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: NOn
export default function NOn({ selectedPatient, notesData, isLoading }) {
  //#region reportRender = On Examination
  const reportRender = notesData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            data={
              patient.AddtItem_On_Examination
                ? patient.AddtItem_On_Examination
                : "Not recorded"
            }
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = On Examination

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="On Examination"
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
          text="On Examination"
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
            <FieldData data="There is no On Examination data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
