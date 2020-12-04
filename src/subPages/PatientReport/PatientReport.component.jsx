// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./PatientReport.elements";

// Import: Renders
import {
  PRAirways,
  PRCardiac,
  PRCardiovascular,
  PRClinical,
  PRIncident,
  PRIvAccess,
  PRPatient,
  PRTransport,
  PRTriage,
} from "./renders";

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

      {/* Patient Details */}
      <PRPatient
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        patientDetailsData={patientDetailsData}
        nokData={nokData}
      />

      {/* Clinical Observations */}
      <PRClinical
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        clinicalObservationsData={clinicalObservationsData}
      />

      {/* IV Access and Medications */}
      <PRIvAccess
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        patientIVData={patientIVData}
        drugsMedsData={drugsMedsData}
      />

      {/* Cardiovascular Assessment */}
      <PRCardiovascular
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        cardiacChestPainData={cardiacChestPainData}
        strokeAssessmentData={strokeAssessmentData}
      />

      {/* Airways Mangement */}
      <PRAirways
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        airwaysManagementData={airwaysManagementData}
      />

      {/* Cardiac Arrest    */}
      <PRCardiac
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        cardiacArrestData={cardiacArrestData}
      />

      {/* Transport Options */}
      <PRTransport
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        transportOptionsData={transportOptionsData}
      />

      {/* #TODO - Triage and Pathfinder Support */}
      <PRTriage
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        specialistPathwaysData={specialistPathwaysData}
        majorTraumaData={majorTraumaData}
        manchesterTriageSystemData={manchesterTriageSystemData}
        pathfindersData={pathfindersData}
        jointDecisionMakingData={jointDecisionMakingData}
      />

      {/* #TODO - Trauma Management */}

      {/* #TODO - Communications, Consent, and Notifications */}

      {/* #TODO - Capacity to Consent */}

      {/* #TODO - Sign and Sync */}
    </Container>
  );
}
