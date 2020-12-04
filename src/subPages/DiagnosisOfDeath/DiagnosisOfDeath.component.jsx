// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./DiagnosisOfDeath.elements";

// Import: Renders
import {
  DoDAdvance,
  DoDAttendance,
  DoDConditions,
  DoDDiagnosis,
  DoDExpected,
  DoDFactors,
  DoDTermination,
} from "./renders";

// SubPage: DiagnosisOfDeath
export default function DiagnosisOfDeath({
  selectedPatient,
  diagnosisOfDeathData,
}) {
  return (
    <Container>
      {/* Diagnosis of Death */}
      <DoDDiagnosis
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Factors to Confirm... */}
      <DoDFactors
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Advance Decisions to Refuse... */}
      <DoDAdvance
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Termination of Resuscitation... */}
      <DoDTermination
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Conditions Unequivocally Associated... */}
      <DoDConditions
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Expected Death... */}
      <DoDExpected
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />

      {/* Attendance and Relatives */}
      <DoDAttendance
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
      />
    </Container>
  );
}
