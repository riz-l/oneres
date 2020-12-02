// Import: Dependencies
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

// Import: Elements
import { Container, Wrapper } from "./Report.elements";

// Import: Components
import { ReportHeader, SelectPatientWarning } from "../../components";

// Page: Report
export default function Report({ selectedPatient, isPatientListOpen }) {
  return (
    <Container>
      <Wrapper>
        <SelectPatientWarning selectedPatient={selectedPatient} />
        <ReportHeader isPatientListOpen={isPatientListOpen} />

        <h1>Report</h1>
      </Wrapper>
    </Container>
  );
}
