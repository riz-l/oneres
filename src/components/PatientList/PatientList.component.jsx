// Import: Dependencies
import React, { useState, useEffect } from "react";
import { allPatientDetails } from "../../utils/axios";

// Import: Icons
import { FaRegHospital as HeadingIcon } from "react-icons/fa";

// Import: Elements
import {
  Container,
  Header,
  Heading,
  ListCount,
  Loading,
} from "./PatientList.elements";

// Import: Components
import { Loader, PatientListItem } from "../index";

// Component: Patientlist
export default function PatientList({
  isPatientListOpen,
  setIsPatientListOpen,
  patients,
  setPatients,
  selectedPatient,
  setSelectedPatient,
}) {
  // State = loading
  const [isLoading, setIsLoading] = useState(true);

  // Run getPatientData on load
  useEffect(() => {
    // Fetch Patient data
    function getPatientData() {
      setIsLoading(true);

      allPatientDetails
        .get(``, {})
        .then((res) => {
          const data = res.data;
          setPatients(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });
    }

    getPatientData();
  }, [setPatients]);

  // If loading === true, render loading message
  if (isLoading) {
    return (
      <Container>
        <Header>
          <Heading>
            <HeadingIcon />
            <h2>Patients Created in last 72 hours</h2>
          </Heading>

          <ListCount>Patient Count:</ListCount>

          <span>Please select from the list below:</span>
        </Header>

        <Loading>
          <p>Loading...</p>
          <Loader />
        </Loading>
      </Container>
    );
  }

  // Maps patientData through PatientListItem
  const patientListRender = patients.map(
    ({ Master_ePR_ID, ...otherPatientListProps }) => (
      <React.Fragment
        key={Master_ePR_ID}
        onClick={() => setSelectedPatient(Master_ePR_ID)}
        style={Master_ePR_ID === selectedPatient && { backgrouond: "#2a2a2e" }}
      >
        <React.Fragment
          onClick={
            window.innerWidth <= 768
              ? () =>
                  setIsPatientListOpen(
                    (isPatientListOpen) => !isPatientListOpen
                  )
              : null
          }
        >
          <PatientListItem {...otherPatientListProps} />
        </React.Fragment>
      </React.Fragment>
    )
  );

  return (
    <Container
      style={!isPatientListOpen ? { transform: "translateX(-100%" } : null}
    >
      <Header>
        <Heading>
          <HeadingIcon />
          <h2>Patients Created in last 72 hours</h2>
        </Heading>

        <ListCount>Patient Count:</ListCount>

        <span>Please select from the list below:</span>
      </Header>

      {patientListRender}
    </Container>
  );
}
