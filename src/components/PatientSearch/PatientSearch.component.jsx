// Import: Dependencies
import React, { useState } from "react";

// Import: Elements
import { Container } from "./PatientSearch.elements";

// Component: PatientSearch
export default function PatientSearch(
  isSearchMenuOpen,
  setIsSearchMenuOpen,
  patients,
  selectedPatient,
  setSelectedPatient
) {
  // State = search
  const [searchIncidentNo, setSearchIncidentNo] = useState(""); // Incident No., PD_Incident_Number
  const [searchCallSign, setSearchCallSign] = useState(""); // Call Sign, ePR_CallSign
  const [searchEprUser, setSearchEprUser] = useState(""); // ePR User, ePR_User
  const [searchFirstname, setSearchFirstname] = useState(""); // Patient Firstname, PD_Firstname
  const [searchSurname, setSearchSurname] = useState(""); // Patient Surname, PD_Surname
  const [searchNhsNo, setSearchNhsNo] = useState(""); // NHS No., PD_NHS_No
  const [searchReceivingLocation, setSearchReceivingLocation] = useState(""); // Receiving Location, PD_Receiving_Location

  // State = isAnonymousHidden
  const [isAnonymousHidden, setIsAnonymousHidden] = useState(true);

  // form: handleSubmit
  function handleSubmit(event) {
    event.preventDefault();
  }

  // form: resetSearch
  function resetSearch() {
    setIsSearchMenuOpen((isSearchMenuOpen) => !isSearchMenuOpen);
    setSearchIncidentNo("");
    setSearchCallSign("");
    setSearchEprUser("");
    setSearchFirstname("");
    setSearchSurname("");
    setSearchNhsNo("");
    setSearchReceivingLocation("");
  }

  return (
    <Container>
      <h2>Patient Search</h2>
    </Container>
  );
}
