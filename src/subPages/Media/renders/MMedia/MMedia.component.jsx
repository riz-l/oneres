// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Render } from "./MMedia.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: MMedia
export default function MMedia({ selectedPatient, isLoading }) {
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
            ) : isLoading ? (
              <>
                <FieldData data="Loading..." />
                <Loader background="#3a3a40" />
              </>
            ) : (
              <FieldData data="Media is currently under construction..." />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
