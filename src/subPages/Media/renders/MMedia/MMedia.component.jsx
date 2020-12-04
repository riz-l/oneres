// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Render } from "./MMedia.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  ReportContainer,
} from "../../../../components";

// Render: MMedia
export default function MMedia({ selectedPatient }) {
  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary icon="fas fa-camera" text="Media" padding="0.6rem" />
        </Heading>

        <ReportContainer>
          <Render>
            {selectedPatient === null ? (
              <FieldData data="Please select a Patient from the Patient list" />
            ) : (
              <FieldData data="Media is currently under construction..." />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
