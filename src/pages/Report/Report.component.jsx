// Import: Dependencies
import React, { useState, useEffect } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

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

  // State = Notes
  const [notesData, setNotesData] = useState([]); // Notes

  // State = Diagnosis of Death
  const [diagnosisOfDeathData, setDiagnosisOfDeathData] = useState([]); // Diagnosis of Death

  // Effect: When selectedPatient changes, fetch relevant Patient reportData
  useEffect(() => {
    async function getApiData() {
      setIsLoading(true);

      if (selectedPatient !== null) {
        //#region Incident Information (cadDetails)
        cadDetails
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setCadDetailsData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Incident Information (cadDetails)

        //#region Patient Details (patientDetails)
        patientDetails
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setPatientDetailsData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Patient Details (patientDetails)

        //#region Next of Kin (nok)
        nok
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setNokData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Next of Kin (nok)

        //#region Clinical Observations (clinicalObservations)
        clinicalObservations
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setClinicalObservationsData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Clinical Observations (clinicalObservations)

        //#region Patient IV (patientIv)
        patientIv
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setPatientIVData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Patient IV (patientIv)

        //#region Drugs Meds (drugsMeds)
        drugsMeds
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setDrugsMedsData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Drugs Meds (drugsMeds)

        //#region Cardiac Chest Pain (cardiacChestPain)
        cardiacChestPain
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setCardiacChestPainData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Cardiac Chest Pain (cardiacChestPain)

        //#region Stroke Assessment (strokeAssessment)
        strokeAssessment
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setStrokeAssessmentData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Stroke Assessment (strokeAssessment)

        //#region Airways Management (airwaysManagement)
        airwaysManagement
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setAirwaysManagementData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Airways Management (airwaysManagement)

        //#region Cardiac Arrest (cardiacArrest)
        cardiacArrest
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setCardiacArrestData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Cardiac Arrest (cardiacArrest)

        //#region Transport Options (transportOptions)
        transportOptions
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setTransportOptionsData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Transport Options (transportOptions)

        //#region Specialist Pathways (specialistPathways)
        specialistPathways
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setSpecialistPathwaysData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Specialist Pathways (specialistPathways)

        //#region Major Trauma (majorTrauma)
        majorTrauma
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setMajorTraumaData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Major Trauma (majorTrauma)

        //#region Manchester Triage System (manchesterTriageSystem)
        manchesterTriageSystem
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setManchesterTriageSystemData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Manchester Triage System (manchesterTriageSystem)

        //#region Pathfinders (pathfinders)
        pathfinders
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setPathfindersData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Pathfinders (pathfinders)

        //#region Joint Decision Making (jointDecisionMaking)
        jointDecisionMaking
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setJointDecisionMakingData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Joint Decision Making (jointDecisionMaking)

        //#region Skeletal Trauma (skeletalTrauma)
        skeletalTrauma
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setSkeletalTraumaData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Skeletal Trauma (skeletalTrauma)

        //#region Burns (burns)
        burns
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setBurnsData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Burns (burns)

        //#region Communications, Consent and Notifications (communicationsConsentNotifications)
        communicationsConsentNotifications
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setCommunicationsConsentNotificationsData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Communications, Consent and Notifications (communicationsConsentNotifications)

        //#region Patient Refusal (patientRefusal)
        patientRefusal
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setPatientRefusalData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Patient Refusal (patientRefusal)

        //#region Mental Capacity (mentalCapacity)
        mentalCapacity
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setMentalCapacityData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Mental Capacity (mentalCapacity)

        //#region Patient Decisions (patientDecisions)
        patientDecisions
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setPatientDecisionsData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Patient Decisions (patientDecisions)

        //#region Patient Capacity (patientCapacity)
        patientCapacity
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setPatientCapacityData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Patient Capacity (patientCapacity)

        //#region Best Interest (bestInterest)
        bestInterest
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setBestInterestData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Best Interest (bestInterest)

        //#region Sign and Sync (signAndSync)
        signAndSync
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setSignAndSyncData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Sign and Sync (signAndSync)

        //#region Notes (notes)
        notes
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setNotesData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Notes (notes)

        //#region Diagnosis of Death (diagnosisOfDeath)
        diagnosisOfDeath
          .get(`/${selectedPatient}`, {})
          .then((res) => {
            const data = res.data;
            setDiagnosisOfDeathData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            setIsLoading(false);
            console.log(error);
          });
        //#endregion /Diagnosis of Death (diagnosisOfDeath)
      }
      setIsLoading(false);
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
              notesData={notesData}
              isLoading={isLoading}
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
              diagnosisOfDeathData={diagnosisOfDeathData}
              isLoading={isLoading}
            />
          </Route>
        </Switch>
      </Wrapper>
    </Container>
  );
}
