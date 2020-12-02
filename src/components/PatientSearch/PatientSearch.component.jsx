// Import: Dependencies
import React, { useState } from "react";

// Import: Icons
import { GoSearch as SearchIcon } from "react-icons/go";

// Import: Elements
import {
  Container,
  Wrapper,
  Header,
  Heading,
  ButtonContainer,
  Button,
  InputContainer,
  Label,
  Input,
  ResultsContainer,
  ResultsHeader,
  AnonymousButton,
  AnonymousResults,
} from "./PatientSearch.elements";

// Import: Components
import { PatientListItem } from "../index";

// Component: PatientSearch
export default function PatientSearch({
  isSearchMenuOpen,
  setIsSearchMenuOpen,
  patients,
  selectedPatient,
  setSelectedPatient,
}) {
  // State: search
  const [searchIncidentNo, setSearchIncidentNo] = useState(""); // Incident No., PD_Incident_Number
  const [searchCallSign, setSearchCallSign] = useState(""); // Call Sign, ePR_CallSign
  const [searchEprUser, setSearchEprUser] = useState(""); // ePR User, ePR_User
  const [searchFirstname, setSearchFirstname] = useState(""); // Patient Firstname, PD_Firstname
  const [searchSurname, setSearchSurname] = useState(""); // Patient Surname, PD_Surname
  const [searchNhsNo, setSearchNhsNo] = useState(""); // NHS No., PD_NHS_No
  const [searchReceivingLocation, setSearchReceivingLocation] = useState(""); // Receiving Location, PD_Receiving_Location

  // State: isAnonymousHidden
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
    <Container isSearchMenuOpen={isSearchMenuOpen}>
      <Wrapper>
        <Header>
          <Heading>
            <SearchIcon />
            <h3>Patient / Incident Search</h3>
          </Heading>

          <p>Please enter search criteria below:</p>
        </Header>

        <ButtonContainer>
          <Button type="submit">Search</Button>

          <Button onClick={resetSearch} type="button">
            Clear / Cancel
          </Button>
        </ButtonContainer>

        <InputContainer onSubmit={handleSubmit}>
          <Label htmlFor="incidentNo">Incident No.</Label>
          <Input
            placeholder="Incident No."
            name="incidentNo"
            id="incidentNo"
            type="text"
            value={searchIncidentNo}
            onChange={(event) => setSearchIncidentNo(event.target.value)}
          />

          <Label htmlFor="callSign">Call Sign</Label>
          <Input
            placeholder="Call Sign"
            name="callSign"
            id="callSign"
            type="text"
            value={searchCallSign}
            onChange={(event) => setSearchCallSign(event.target.value)}
          />

          <Label htmlFor="eprUser">ePR User</Label>
          <Input
            placeholder="ePR User"
            name="eprUser"
            id="eprUser"
            type="text"
            value={searchEprUser}
            onChange={(event) => setSearchEprUser(event.target.value)}
          />

          <Label htmlFor="patientFirstname">Patient Firstname</Label>
          <Input
            placeholder="Patient Firstname"
            name="patientFirstname"
            id="patientFirstname"
            type="text"
            value={searchFirstname}
            onChange={(event) => setSearchFirstname(event.target.value)}
          />

          <Label htmlFor="patientSurname">Patient Surname</Label>
          <Input
            placeholder="Patient Surname"
            name="patientSurname"
            id="patientSurname"
            type="text"
            value={searchSurname}
            onChange={(event) => setSearchSurname(event.target.value)}
          />

          <Label htmlFor="nhsNo">NHS No.</Label>
          <Input
            placeholder="NHS No."
            name="nhsNo"
            id="nhsNo"
            type="text"
            value={searchNhsNo}
            onChange={(event) => setSearchNhsNo(event.target.value)}
          />

          <Label htmlFor="receivingLocation">Receiving Location</Label>
          <Input
            placeholder="Receiving Location"
            name="receivingLocation"
            id="receivingLocation"
            type="text"
            value={searchReceivingLocation}
            onChange={(event) => setSearchReceivingLocation(event.target.value)}
          />
        </InputContainer>

        <ResultsContainer>
          <ResultsHeader>
            <h5>Results:</h5>
          </ResultsHeader>
          <div>
            {patients
              .filter(
                (patient) =>
                  patient.PD_Incident_Number.toLowerCase().includes(
                    searchIncidentNo.toLowerCase()
                  ) &&
                  patient.ePR_CallSign
                    .toLowerCase()
                    .includes(searchCallSign.toLowerCase()) &&
                  patient.ePR_User
                    .toLowerCase()
                    .includes(searchEprUser.toLowerCase()) &&
                  patient.PD_Firstname.toLowerCase().includes(
                    searchFirstname.toLowerCase()
                  ) &&
                  patient.PD_Surname.toLowerCase().includes(
                    searchSurname.toLowerCase()
                  ) &&
                  patient.PD_NHS_No !== null &&
                  patient.PD_NHS_No.includes(searchNhsNo) &&
                  patient.PD_Receiving_Location.toLowerCase().includes(
                    searchReceivingLocation.toLowerCase()
                  )
              )
              .map(({ Master_ePR_ID, ...otherPatientListProps }) =>
                searchIncidentNo.length > 0 ||
                searchCallSign.length > 0 ||
                searchEprUser.length > 0 ||
                searchFirstname.length > 0 ||
                searchSurname.length > 0 ||
                searchNhsNo.length > 0 ||
                searchReceivingLocation.length > 0 ? (
                  <div
                    key={Master_ePR_ID}
                    style={
                      Master_ePR_ID === selectedPatient
                        ? { background: "#3a3a40" }
                        : null
                    }
                    onClick={() => setSelectedPatient(Master_ePR_ID)}
                  >
                    <div onClick={() => resetSearch()}>
                      <PatientListItem {...otherPatientListProps} />
                    </div>
                  </div>
                ) : null
              )}
          </div>

          <ResultsHeader>
            <h5 style={{ marginTop: "1rem" }}>Anonymous Results:</h5>
            <AnonymousButton
              onClick={() =>
                setIsAnonymousHidden((isAnonymousHidden) => !isAnonymousHidden)
              }
            >
              {isAnonymousHidden ? "Show" : "Hide"}
            </AnonymousButton>
          </ResultsHeader>
          <AnonymousResults isAnonymousHidden={isAnonymousHidden}>
            {patients
              .filter((patient) => patient.PD_Firstname === "")
              .map(({ Master_ePR_ID, ...otherPatientListProps }) => (
                <div
                  key={Master_ePR_ID}
                  style={
                    Master_ePR_ID === selectedPatient
                      ? { background: "#3a3a40" }
                      : null
                  }
                  onClick={() => setSelectedPatient(Master_ePR_ID)}
                >
                  <div
                    onClick={() =>
                      setIsSearchMenuOpen(
                        (isSearchMenuOpen) => !isSearchMenuOpen
                      )
                    }
                  >
                    <PatientListItem {...otherPatientListProps} />
                  </div>
                </div>
              ))}
          </AnonymousResults>
        </ResultsContainer>
      </Wrapper>
    </Container>
  );
}
