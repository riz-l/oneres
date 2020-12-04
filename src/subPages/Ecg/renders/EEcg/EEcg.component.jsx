// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Render } from "./EEcg.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  ReportContainer,
} from "../../../../components";

// Render: EEcg
export default function EEcg({ selectedPatient }) {
  return (
    <>
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
    </>
  );
}
