// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./PatientReport.elements";

// Import: Renders
import { PRClinical, PRIncident, PRPatient } from "./renders";

// SubPage: PatientReport
export default function PatientReport({
  selectedPatient,
  isLoading,
  cadDetailsData,
  patientDetailsData,
  nokData,
  clinicalObservationsData,
  patientIVData,
  drugsMedsData,
  cardiacChestPainData,
  strokeAssessmentData,
  airwaysManagementData,
  cardiacArrestData,
  transportOptionsData,
  specialistPathwaysData,
  majorTraumaData,
  manchesterTriageSystemData,
  pathfindersData,
  jointDecisionMakingData,
  skeletalTraumaData,
  burnsData,
  communicationsConsentNotificationsData,
  patientRefusalData,
  mentalCapacityData,
  patientDecisionsData,
  patientCapacityData,
  bestInterestData,
  signAndSyncData,
}) {
  return (
    <Container>
      {/* Incident Information */}
      <PRIncident
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        cadDetailsData={cadDetailsData}
      />

      {/* #TODO - Patient Details */}
      <PRPatient
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        patientDetailsData={patientDetailsData}
        nokData={nokData}
      />

      {/* #TODO - Clinical Observations */}
      <PRClinical
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        clinicalObservationsData={clinicalObservationsData}
      />

      {/* #TODO - IV Access and Medications */}

      {/* #TODO - Cardiovascular Assessment */}

      {/* #TODO - Airways Mangement */}

      {/* #TODO - Cardiac Arrest    */}

      {/* #TODO - Transport Options */}

      {/* #TODO - Triage and Pathfinder Support */}

      {/* #TODO - Trauma Management */}

      {/* #TODO - Communications, Consent, and Notifications */}

      {/* #TODO - Capacity to Consent */}

      {/* #TODO - Sign and Sync */}
    </Container>
  );
}
