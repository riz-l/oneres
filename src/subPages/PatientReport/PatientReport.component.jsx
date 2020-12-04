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
}) {
  return (
    <Container>
      {/* Incident Information */}
      <PRIncident
        selectedPatient={selectedPatient}
        cadDetailsData={cadDetailsData}
      />

      {/* Patient Details */}
      <PRPatient
        selectedPatient={selectedPatient}
        patientDetailsData={patientDetailsData}
        nokData={nokData}
      />

      {/* Clinical Observations */}
      <PRClinical
        selectedPatient={selectedPatient}
        clinicalObservationsData={clinicalObservationsData}
      />

      {/* IV Access and Medications */}
      <PRIvAccess
        selectedPatient={selectedPatient}
        patientIVData={patientIVData}
        drugsMedsData={drugsMedsData}
      />

      {/* Cardiovascular Assessment */}
      <PRCardiovascular
        selectedPatient={selectedPatient}
        cardiacChestPainData={cardiacChestPainData}
        strokeAssessmentData={strokeAssessmentData}
      />

      {/* Airways Mangement */}
      <PRAirways
        selectedPatient={selectedPatient}
        airwaysManagementData={airwaysManagementData}
      />

      {/* Cardiac Arrest    */}
      <PRCardiac
        selectedPatient={selectedPatient}
        cardiacArrestData={cardiacArrestData}
      />

      {/* Transport Options */}
      <PRTransport
        selectedPatient={selectedPatient}
        transportOptionsData={transportOptionsData}
      />

      {/* Triage and Pathfinder Support */}
      <PRTriage
        selectedPatient={selectedPatient}
        specialistPathwaysData={specialistPathwaysData}
        majorTraumaData={majorTraumaData}
        manchesterTriageSystemData={manchesterTriageSystemData}
        pathfindersData={pathfindersData}
        jointDecisionMakingData={jointDecisionMakingData}
      />

      {/* Trauma Management */}
      <PRTrauma
        selectedPatient={selectedPatient}
        skeletalTraumaData={skeletalTraumaData}
        burnsData={burnsData}
      />

      {/* Communications, Consent, and Notifications */}
      <PRCommunications
        selectedPatient={selectedPatient}
        communicationsConsentNotificationsData={
          communicationsConsentNotificationsData
        }
        patientRefusalData={patientRefusalData}
      />

      {/* Capacity to Consent */}
      <PRCapacity
        selectedPatient={selectedPatient}
        mentalCapacityData={mentalCapacityData}
        patientDecisionsData={patientDecisionsData}
        patientCapacityData={patientCapacityData}
        bestInterestData={bestInterestData}
      />

      {/* Sign and Sync */}
      <PRSign
        selectedPatient={selectedPatient}
        signAndSyncData={signAndSyncData}
      />
    </Container>
  );
}
