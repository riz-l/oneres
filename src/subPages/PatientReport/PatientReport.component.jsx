// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./PatientReport.elements";

// Import: Renders
import {
  PRAirways,
  PRCapacity,
  PRCardiac,
  PRCardiovascular,
  PRClinical,
  PRCommunications,
  PRIncident,
  PRIvAccess,
  PRPatient,
  PRSign,
  PRTransport,
  PRTrauma,
  PRTriage,
} from "./renders";

// SubPage: PatientReport
export default function PatientReport({
  selectedPatient,
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
  isLoading,
}) {
  return (
    <Container>
      {/* Incident Information */}
      <PRIncident
        selectedPatient={selectedPatient}
        cadDetailsData={cadDetailsData}
        isLoading={isLoading}
      />

      {/* Patient Details */}
      <PRPatient
        selectedPatient={selectedPatient}
        patientDetailsData={patientDetailsData}
        nokData={nokData}
        isLoading={isLoading}
      />

      {/* Clinical Observations */}
      <PRClinical
        selectedPatient={selectedPatient}
        clinicalObservationsData={clinicalObservationsData}
        isLoading={isLoading}
      />

      {/* IV Access and Medications */}
      <PRIvAccess
        selectedPatient={selectedPatient}
        patientIVData={patientIVData}
        drugsMedsData={drugsMedsData}
        isLoading={isLoading}
      />

      {/* Cardiovascular Assessment */}
      <PRCardiovascular
        selectedPatient={selectedPatient}
        cardiacChestPainData={cardiacChestPainData}
        strokeAssessmentData={strokeAssessmentData}
        isLoading={isLoading}
      />

      {/* Airways Mangement */}
      <PRAirways
        selectedPatient={selectedPatient}
        airwaysManagementData={airwaysManagementData}
        isLoading={isLoading}
      />

      {/* Cardiac Arrest    */}
      <PRCardiac
        selectedPatient={selectedPatient}
        cardiacArrestData={cardiacArrestData}
        isLoading={isLoading}
      />

      {/* Transport Options */}
      <PRTransport
        selectedPatient={selectedPatient}
        transportOptionsData={transportOptionsData}
        isLoading={isLoading}
      />

      {/* Triage and Pathfinder Support */}
      <PRTriage
        selectedPatient={selectedPatient}
        specialistPathwaysData={specialistPathwaysData}
        majorTraumaData={majorTraumaData}
        manchesterTriageSystemData={manchesterTriageSystemData}
        pathfindersData={pathfindersData}
        jointDecisionMakingData={jointDecisionMakingData}
        isLoading={isLoading}
      />

      {/* Trauma Management */}
      <PRTrauma
        selectedPatient={selectedPatient}
        skeletalTraumaData={skeletalTraumaData}
        burnsData={burnsData}
        isLoading={isLoading}
      />

      {/* Communications, Consent, and Notifications */}
      <PRCommunications
        selectedPatient={selectedPatient}
        communicationsConsentNotificationsData={
          communicationsConsentNotificationsData
        }
        patientRefusalData={patientRefusalData}
        isLoading={isLoading}
      />

      {/* Capacity to Consent */}
      <PRCapacity
        selectedPatient={selectedPatient}
        mentalCapacityData={mentalCapacityData}
        patientDecisionsData={patientDecisionsData}
        patientCapacityData={patientCapacityData}
        bestInterestData={bestInterestData}
        isLoading={isLoading}
      />

      {/* Sign and Sync */}
      <PRSign
        selectedPatient={selectedPatient}
        signAndSyncData={signAndSyncData}
        isLoading={isLoading}
      />
    </Container>
  );
}
