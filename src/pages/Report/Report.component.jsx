// Import: Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  cadDetails,
  patientDetails,
  nok,
  clinicalObservations,
  patientIv,
  drugsMeds,
  cardiacChestPain,
  strokeAssessment,
  airwaysManagement,
  cardiacArrest,
  transportOptions,
  specialistPathways,
  majorTrauma,
  manchesterTriageSystem,
  pathfinders,
  jointDecisionMaking,
  skeletalTrauma,
  burns,
  communicationsConsentNotifications,
  patientRefusal,
  mentalCapacity,
  patientDecisions,
  patientCapacity,
  bestInterest,
  signAndSync,
  notes,
  diagnosisOfDeath,
} from "../../utils/axios";
import { Switch, Route } from "react-router-dom";

// Import: Elements
import { Container, Wrapper } from "./Report.elements";

// Import: SubPages, Components
import {
  DiagnosisOfDeath,
  Ecg,
  Media,
  Notes,
  PatientReport,
} from "../../subPages";
import { ReportHeader, SelectPatientWarning } from "../../components";

// Page: Report
export default function Report({ selectedPatient, isPatientListOpen }) {
  // State: isLoading
  const [isLoading, setIsLoading] = useState(false);

  // State: reportData
  const [cadDetailsData, setCadDetailsData] = useState([]); // Incident Information
  const [patientDetailsData, setPatientDetailsData] = useState([]); // Patient Details
  const [nokData, setNokData] = useState([]); // Patient Details
  const [clinicalObservationsData, setClinicalObservationsData] = useState([]); // Clinical Observations
  const [patientIVData, setPatientIVData] = useState([]); // IV Access and Medications
  const [drugsMedsData, setDrugsMedsData] = useState([]); // IV Access and Medications
  const [cardiacChestPainData, setCardiacChestPainData] = useState([]); // Cardiovascular Assessment
  const [strokeAssessmentData, setStrokeAssessmentData] = useState([]); // Cardiovascular Assessment
  const [airwaysManagementData, setAirwaysManagementData] = useState([]); // Airways Management
  const [cardiacArrestData, setCardiacArrestData] = useState([]); // Cardiac Arrest
  const [transportOptionsData, setTransportOptionsData] = useState([]); // Transport Options
  const [specialistPathwaysData, setSpecialistPathwaysData] = useState([]); // Triage and Pathfinder Support
  const [majorTraumaData, setMajorTraumaData] = useState([]); // Triage and Pathfinder Support
  const [manchesterTriageSystemData, setManchesterTriageSystemData] = useState(
    []
  ); // Triage and Pathfinder Support
  const [pathfindersData, setPathfindersData] = useState([]); // Triage and Pathfinder Support
  const [jointDecisionMakingData, setJointDecisionMakingData] = useState([]); // Triage and Pathfinder Support
  const [skeletalTraumaData, setSkeletalTraumaData] = useState([]); // Trauma Management
  const [burnsData, setBurnsData] = useState([]); // Trauma Management
  const [
    communicationsConsentNotificationsData,
    setCommunicationsConsentNotificationsData,
  ] = useState([]); // Communications, Consent and Notifications
  const [patientRefusalData, setPatientRefusalData] = useState([]); // Communications, Consent and Notifications
  const [mentalCapacityData, setMentalCapacityData] = useState([]); // Capacity to Consent
  const [patientDecisionsData, setPatientDecisionsData] = useState([]); // Capacity to Consent
  const [patientCapacityData, setPatientCapacityData] = useState([]); // Capacity to Consent
  const [bestInterestData, setBestInterestData] = useState([]); // Capacity to Consent
  const [signAndSyncData, setSignAndSyncData] = useState([]); // Sign and Sync

  // State: Notes
  const [notesData, setNotesData] = useState([]); // Notes

  // State: Diagnosis of Death
  const [diagnosisOfDeathData, setDiagnosisOfDeathData] = useState([]); // Diagnosis of Death

  // Effect: When selectedPatient changes, fetch relevant Patient reportData
  useEffect(() => {
    async function getApiData() {
      setIsLoading(true);

      if (selectedPatient !== null) {
        axios
          .all([
            cadDetails.get(`/${selectedPatient}`, {}),
            patientDetails.get(`/${selectedPatient}`, {}),
            nok.get(`/${selectedPatient}`, {}),
            clinicalObservations.get(`/${selectedPatient}`, {}),
            patientIv.get(`/${selectedPatient}`, {}),
            drugsMeds.get(`/${selectedPatient}`, {}),
            cardiacChestPain.get(`/${selectedPatient}`, {}),
            strokeAssessment.get(`/${selectedPatient}`, {}),
            airwaysManagement.get(`/${selectedPatient}`, {}),
            cardiacArrest.get(`/${selectedPatient}`, {}),
            transportOptions.get(`/${selectedPatient}`, {}),
            specialistPathways.get(`/${selectedPatient}`, {}),
            majorTrauma.get(`/${selectedPatient}`, {}),
            manchesterTriageSystem.get(`/${selectedPatient}`, {}),
            pathfinders.get(`/${selectedPatient}`, {}),
            jointDecisionMaking.get(`/${selectedPatient}`, {}),
            skeletalTrauma.get(`/${selectedPatient}`, {}),
            burns.get(`/${selectedPatient}`, {}),
            communicationsConsentNotifications.get(`/${selectedPatient}`, {}),
            patientRefusal.get(`/${selectedPatient}`, {}),
            mentalCapacity.get(`/${selectedPatient}`, {}),
            patientDecisions.get(`/${selectedPatient}`, {}),
            patientCapacity.get(`/${selectedPatient}`, {}),
            bestInterest.get(`/${selectedPatient}`, {}),
            signAndSync.get(`/${selectedPatient}`, {}),
            notes.get(`/${selectedPatient}`, {}),
            diagnosisOfDeath.get(`/${selectedPatient}`, {}),
          ])
          .then(
            axios.spread(
              (
                cadDetailsRes,
                patientDetailsRes,
                nokRes,
                clinicalObservationsRes,
                patientIvRes,
                drugsMedsRes,
                cardiacChestPainRes,
                strokeAssessmentRes,
                airwaysManagementRes,
                cardiacArrestRes,
                transportOptionsRes,
                specialistPathwaysRes,
                majorTraumaRes,
                manchesterTriageSystemRes,
                pathfindersRes,
                jointDecisionMakingRes,
                skeletalTraumaRes,
                burnsRes,
                communicationsConsentNotificationsRes,
                patientRefusalRes,
                mentalCapacityRes,
                patientDecisionsRes,
                patientCapacityRes,
                bestInterestRes,
                signAndSyncRes,
                notesRes,
                diagnosisOfDeathRes
              ) => [
                setCadDetailsData(cadDetailsRes.data),
                setPatientDetailsData(patientDetailsRes.data),
                setNokData(nokRes.data),
                setClinicalObservationsData(clinicalObservationsRes.data),
                setPatientIVData(patientIvRes.data),
                setDrugsMedsData(drugsMedsRes.data),
                setCardiacChestPainData(cardiacChestPainRes.data),
                setStrokeAssessmentData(strokeAssessmentRes.data),
                setAirwaysManagementData(airwaysManagementRes.data),
                setCardiacArrestData(cardiacArrestRes.data),
                setTransportOptionsData(transportOptionsRes.data),
                setSpecialistPathwaysData(specialistPathwaysRes.data),
                setMajorTraumaData(majorTraumaRes.data),
                setManchesterTriageSystemData(manchesterTriageSystemRes.data),
                setPathfindersData(pathfindersRes.data),
                setJointDecisionMakingData(jointDecisionMakingRes.data),
                setSkeletalTraumaData(skeletalTraumaRes.data),
                setBurnsData(burnsRes.data),
                setCommunicationsConsentNotificationsData(
                  communicationsConsentNotificationsRes.data
                ),
                setPatientRefusalData(patientRefusalRes.data),
                setMentalCapacityData(mentalCapacityRes.data),
                setPatientDecisionsData(patientDecisionsRes.data),
                setPatientCapacityData(patientCapacityRes.data),
                setBestInterestData(bestInterestRes.data),
                setSignAndSyncData(signAndSyncRes.data),
                setNotesData(notesRes.data),
                setDiagnosisOfDeathData(diagnosisOfDeathRes.data),
                setIsLoading(false),
              ]
            )
          )
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
            throw new Error(error);
          });
      }
    }

    getApiData();
  }, [selectedPatient]);

  return (
    <Container>
      <Wrapper>
        <SelectPatientWarning selectedPatient={selectedPatient} />
        <ReportHeader isPatientListOpen={isPatientListOpen} />

        <Switch>
          <Route path="/" exact>
            <PatientReport
              selectedPatient={selectedPatient}
              isLoading={isLoading}
              cadDetailsData={cadDetailsData}
              patientDetailsData={patientDetailsData}
              nokData={nokData}
              clinicalObservationsData={clinicalObservationsData}
              patientIVData={patientIVData}
              drugsMedsData={drugsMedsData}
              cardiacChestPainData={cardiacChestPainData}
              strokeAssessmentData={strokeAssessmentData}
              airwaysManagementData={airwaysManagementData}
              cardiacArrestData={cardiacArrestData}
              transportOptionsData={transportOptionsData}
              specialistPathwaysData={specialistPathwaysData}
              majorTraumaData={majorTraumaData}
              manchesterTriageSystemData={manchesterTriageSystemData}
              pathfindersData={pathfindersData}
              jointDecisionMakingData={jointDecisionMakingData}
              skeletalTraumaData={skeletalTraumaData}
              burnsData={burnsData}
              communicationsConsentNotificationsData={
                communicationsConsentNotificationsData
              }
              patientRefusalData={patientRefusalData}
              mentalCapacityData={mentalCapacityData}
              patientDecisionsData={patientDecisionsData}
              patientCapacityData={patientCapacityData}
              bestInterestData={bestInterestData}
              signAndSyncData={signAndSyncData}
            />
          </Route>

          <Route path="/notes">
            <Notes
              selectedPatient={selectedPatient}
              isLoading={isLoading}
              notesData={notesData}
            />
          </Route>

          <Route path="/media">
            <Media selectedPatient={selectedPatient} isLoading={isLoading} />
          </Route>

          <Route path="/ecg">
            <Ecg selectedPatient={selectedPatient} isLoading={isLoading} />
          </Route>

          <Route path="/diagnosis-of-death">
            <DiagnosisOfDeath
              selectedPatient={selectedPatient}
              isLoading={isLoading}
              diagnosisOfDeathData={diagnosisOfDeathData}
            />
          </Route>
        </Switch>
      </Wrapper>
    </Container>
  );
}
