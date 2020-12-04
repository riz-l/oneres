// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./NAdditional.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  ReportContainer,
} from "../../../../components";

// Render: NAdditional
export default function NAdditional({ selectedPatient, notesData }) {
  //#region reportRender = Additional Information
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
  //#endregion /reportRender = Additional Information

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-sticky-note"
            text="Additional Information"
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
              <FieldData data="There is no Additional Information data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
