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

      {/* Triage and Pathfinder Support */}
      <PRTriage
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        specialistPathwaysData={specialistPathwaysData}
        majorTraumaData={majorTraumaData}
        manchesterTriageSystemData={manchesterTriageSystemData}
        pathfindersData={pathfindersData}
        jointDecisionMakingData={jointDecisionMakingData}
      />

      {/* Trauma Management */}
      <PRTrauma
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        skeletalTraumaData={skeletalTraumaData}
        burnsData={burnsData}
      />

      {/* Communications, Consent, and Notifications */}
      <PRCommunications
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        communicationsConsentNotificationsData={
          communicationsConsentNotificationsData
        }
        patientRefusalData={patientRefusalData}
      />

      {/* Capacity to Consent */}
      <PRCapacity
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        mentalCapacityData={mentalCapacityData}
        patientDecisionsData={patientDecisionsData}
        patientCapacityData={patientCapacityData}
        bestInterestData={bestInterestData}
      />

      {/* Sign and Sync */}
      <PRSign
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        signAndSyncData={signAndSyncData}
      />
    </Container>
  );
}
