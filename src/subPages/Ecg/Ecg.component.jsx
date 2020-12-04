// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Ecg.elements";

// Import: Renders
import { EEcg } from "./renders";

// SubPage: Ecg
export default function Ecg({ selectedPatient }) {
  return (
    <Container>
      {/* ECG */}
      <EEcg selectedPatient={selectedPatient} />
    </Container>
  );
}
