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
  isLoading,
}) {
  return (
    <Container>
      {/* Diagnosis of Death */}
      <DoDDiagnosis
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
        isLoading={isLoading}
      />

      {/* Factors to Confirm... */}
      <DoDFactors
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
        isLoading={isLoading}
      />

      {/* Advance Decisions to Refuse... */}
      <DoDAdvance
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
        isLoading={isLoading}
      />

      {/* Termination of Resuscitation... */}
      <DoDTermination
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
        isLoading={isLoading}
      />

      {/* Conditions Unequivocally Associated... */}
      <DoDConditions
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
        isLoading={isLoading}
      />

      {/* Expected Death... */}
      <DoDExpected
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
        isLoading={isLoading}
      />

      {/* Attendance and Relatives */}
      <DoDAttendance
        selectedPatient={selectedPatient}
        diagnosisOfDeathData={diagnosisOfDeathData}
        isLoading={isLoading}
      />
    </Container>
  );
}
