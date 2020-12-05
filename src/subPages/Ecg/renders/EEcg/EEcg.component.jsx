// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Render } from "./EEcg.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: EEcg
export default function EEcg({ selectedPatient, isLoading }) {
  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary icon="fas fa-heartbeat" text="ECG" padding="0.6rem" />
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
        <HeadingPrimary icon="fas fa-heartbeat" text="ECG" padding="0.6rem" />
      </Heading>

      <ReportContainer>
        <Render>
          {selectedPatient === null ? (
            <FieldData data="Please select a Patient from the Patient list" />
          ) : (
            <FieldData data="ECG is currently under construction..." />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
