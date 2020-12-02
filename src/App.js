// Import: Dependencies
import React, { useState } from "react";
import styled from "styled-components/macro";

// Import: Pages, Components
import { Report } from "./pages";
import { Header, PatientList, PatientSearch } from "./components";

export default function App() {
  // State: isPatientListOpen, patients, isSearchMenuOpen, selectedPatient
  const [isPatientListOpen, setIsPatientListOpen] = useState(true);
  const [patients, setPatients] = useState([]);
  const [isSearchMenuOpen, setIsSearchMenuOpen] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState(null);

  return (
    <Container>
      <Header
        setIsPatientListOpen={setIsPatientListOpen}
        setIsSearchMenuOpen={setIsSearchMenuOpen}
      />

      <Main
        style={
          !isPatientListOpen
            ? {
                gridTemplateColumns: "0 1fr",
              }
            : null
        }
      >
        <PatientListWrapper>
          <PatientList
            isPatientListOpen={isPatientListOpen}
            setIsPatientListOpen={setIsPatientListOpen}
            patients={patients}
            setPatients={setPatients}
            selectedPatient={selectedPatient}
            setSelectedPatient={setSelectedPatient}
          />
        </PatientListWrapper>

        <PatientSearch
          isSearchMenuOpen={isSearchMenuOpen}
          setIsSearchMenuOpen={setIsSearchMenuOpen}
          patients={patients}
          selectedPatient={selectedPatient}
          setSelectedPatient={setSelectedPatient}
        />

        <ReportWrapper
          style={
            !isPatientListOpen
              ? {
                  gridTemplateColumns: "0 1fr",
                }
              : null
          }
        >
          <Report
            selectedPatient={selectedPatient}
            isPatientListOpen={isPatientListOpen}
          />
        </ReportWrapper>
      </Main>
    </Container>
  );
}

// Element: Container
const Container = styled.div`
  background: #f0f1f6;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;

// Element: Main
const Main = styled.main`
  display: grid;
  grid-template-areas: "patient-list report";
  grid-template-columns: 400px 1fr;
  grid-template-rows: calc(100vh - 100px);
  transition: all 100ms linear;
`;

// Element: PatientListWrapper
const PatientListWrapper = styled.div`
  grid-area: patient-list;
`;

// Element: ReportWrapper
const ReportWrapper = styled.div`
  grid-area: report;
`;
