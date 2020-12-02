// Import: Dependencies
import React from "react";

// Import: Icons
import { RiAlertLine as AlertIcon } from "react-icons/ri";

// Import: Elements
import { Container } from "./SelectPatientWarning.elements";

// Component: SelectPatientWarning
export default function SelectPatientWarning({ selectedPatient }) {
  return (
    <>
      {selectedPatient === null ? (
        <Container>
          <AlertIcon />
          <span>Please select a Patient</span>
        </Container>
      ) : null}
    </>
  );
}
