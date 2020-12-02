// Import: Dependencies
import axios from "axios";

// Referencing .env parameter
const apiUrl = process.env.REACT_APP_API_URL;

// GET: /AirwaysManagement/ePRID/
export const airwaysManagement = axios.create({
  baseURL: `${apiUrl}/AirwaysManagement/ePRID/`,
});

// GET: /BestInterest/ePRID/
export const bestInterest = axios.create({
  baseURL: `${apiUrl}/BestInterest/ePRID/`,
});

// GET: /Burns/ePRID/
export const burns = axios.create({
  baseURL: `${apiUrl}/Burns/ePRID/`,
});

// GET: /CADDetails/ePRID/
export const cadDetails = axios.create({
  baseURL: `${apiUrl}/CADDetails/ePRID/`,
});

// GET: /CardiacArrest/ePRID/
export const cardiacArrest = axios.create({
  baseURL: `${apiUrl}/CardiacArrest/ePRID/`,
});

// GET: /CardiacChestPain/ePRID/
export const cardiacChestPain = axios.create({
  baseURL: `${apiUrl}/CardiacChestPain/ePRID/`,
});

// GET: /ClinicalObservations/ePRID/
export const clinicalObservations = axios.create({
  baseURL: `${apiUrl}/ClinicalObservations/ePRID/`,
});

// GET: /CommunicationsConsentNotifications/ePRID/
export const communicationsConsentNotifications = axios.create({
  baseURL: `${apiUrl}/CommunicationsConsentNotifications/ePRID/`,
});

// GET: /DiagnosisOfDeath/ePRID/
export const diagnosisOfDeath = axios.create({
  baseURL: `${apiUrl}/DiagnosisOfDeath/ePRID/`,
});

// GET: /DrugsMeds/ePRID/
export const drugsMeds = axios.create({
  baseURL: `${apiUrl}/DrugsMeds/ePRID/`,
});

// GET: /JointDecisionMaking/ePRID/
export const jointDecisionMaking = axios.create({
  baseURL: `${apiUrl}/JointDecisionMaking/ePRID/`,
});

// GET: /MajorTrauma/ePRID/
export const majorTrauma = axios.create({
  baseURL: `${apiUrl}/MajorTrauma/ePRID/`,
});

// GET: /ManchesterTriageSystem/ePRID/
export const manchesterTriageSystem = axios.create({
  baseURL: `${apiUrl}/ManchesterTriageSystem/ePRID/`,
});

// GET: /MentalCapacity/ePRID/
export const mentalCapacity = axios.create({
  baseURL: `${apiUrl}/MentalCapacity/ePRID/`,
});

// GET: /NoK/ePRID/
export const nok = axios.create({
  baseURL: `${apiUrl}/NoK/ePRID/`,
});

// GET: /Notes/ePRID/
export const notes = axios.create({
  baseURL: `${apiUrl}/Notes/ePRID/`,
});

// GET: /Pathfinders/ePRID/
export const pathfinders = axios.create({
  baseURL: `${apiUrl}/Pathfinders/ePRID/`,
});

// GET: /PatientCapacity/ePRID/
export const patientCapacity = axios.create({
  baseURL: `${apiUrl}/PatientCapacity/ePRID/`,
});

// GET: /PatientDecisions/ePRID/
export const patientDecisions = axios.create({
  baseURL: `${apiUrl}/PatientDecisions/ePRID/`,
});

// GET: /PatientDetails
export const allPatientDetails = axios.create({
  baseURL: `${apiUrl}/PatientDetails`,
});

// GET: /PatientDetails/ePRID/
export const patientDetails = axios.create({
  baseURL: `${apiUrl}/PatientDetails/ePRID/`,
});

// GET: /PatientRefusal/ePRID/
export const patientRefusal = axios.create({
  baseURL: `${apiUrl}/PatientRefusal/ePRID/`,
});

// GET: /PatientIV/ePRID/
export const patientIv = axios.create({
  baseURL: `${apiUrl}/PatientIV/ePRID/`,
});

// GET: /SignAndSync/ePRID/
export const signAndSync = axios.create({
  baseURL: `${apiUrl}/SignAndSync/ePRID/`,
});

// GET: /SkeletalTrauma/ePRID/
export const skeletalTrauma = axios.create({
  baseURL: `${apiUrl}/SkeletalTrauma/ePRID/`,
});

// GET: /SpecialistPathways/ePRID/
export const specialistPathways = axios.create({
  baseURL: `${apiUrl}/SpecialistPathways/ePRID/`,
});

// GET: /StrokeAssessment/ePRID/
export const strokeAssessment = axios.create({
  baseURL: `${apiUrl}/StrokeAssessment/ePRID/`,
});

// GET: /TransportOptions/ePRID/
export const transportOptions = axios.create({
  baseURL: `${apiUrl}/TransportOptions/ePRID/`,
});
