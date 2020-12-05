// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Ecg.elements";

// Import: Renders
import { EEcg } from "./renders";

// SubPage: Ecg
export default function Ecg({ selectedPatient, isLoading }) {
  return (
    <Container>
      {/* ECG */}
      <EEcg selectedPatient={selectedPatient} isLoading={isLoading} />
    </Container>
  );
}
