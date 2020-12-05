// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./PRIncident.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: PRIncident
export default function PRIncident({
  selectedPatient,
  cadDetailsData,
  isLoading,
}) {
  //#region reportRender = Incident Information
  const reportRender = cadDetailsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Incident Number"
            data={patient.CAD_ID ? patient.CAD_ID : "Not recorded"}
          />
          <FieldData
            field="Call Sign"
            data={patient.ePR_User ? patient.ePR_User : "Not recorded"}
          />
          <FieldData
            field="Call Data"
            data={patient.CAD_Date ? patient.CAD_Date : "Not recorded"}
          />
          <FieldData
            field="Dispatch Complaint"
            data={
              patient.CAD_Complaint ? patient.CAD_Complaint : "Not recorded"
            }
          />
        </Column>

        <Column>
          <FieldData
            field="Crew"
            data={patient.CAD_ID ? patient.CAD_ID : "Not recorded"}
          />
          <FieldData
            field="Location of Incident"
            data={
              patient.CAD_LocAdd1 ||
              patient.CAD_LocAdd2 ||
              patient.CAD_LocCity ||
              patient.CAD_LocPCode ? (
                <>
                  {patient.CAD_LocAdd1}
                  <br />
                  {patient.CAD_LocAdd2}
                  <br />
                  {patient.CAD_LocCity}
                  <br />
                  {patient.CAD_LocPCode}
                </>
              ) : (
                "Not recorded"
              )
            }
          />
        </Column>

        <Column>
          <FieldData
            field="Received"
            data={
              patient.CAD_IncidentDate
                ? patient.CAD_IncidentDate
                : "Not recorded"
            }
          />
          <FieldData
            field="Mobile"
            data={patient.CAD_Enroute ? patient.CAD_Enroute : "Not recorded"}
          />
          <FieldData
            field="On Scene"
            data={
              patient.CAD_ArriveScene ? patient.CAD_ArriveScene : "Not recorded"
            }
          />
          <FieldData
            field="At Patient"
            data={
              patient.CAD_ArrivePatient
                ? patient.CAD_ArrivePatient
                : "Not recorded"
            }
          />
          <FieldData
            field="Left Scene"
            data={
              patient.CAD_DepartScene ? patient.CAD_DepartScene : "Not recorded"
            }
          />
          <FieldData
            field="Arrived Destination"
            data={
              patient.CAD_ArriveDest ? patient.CAD_ArriveDest : "Not recorded"
            }
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Incident Information

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Incident Information"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            <Loader background="#3a3a40" />
          </Render>
        </ReportContainer>
      </Container>
    );
  }

  return (
    <Container>
      <Heading>
        <HeadingPrimary
          icon="fas fa-file-medical-alt"
          text="Incident Information"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {selectedPatient === null ? (
            <FieldData data="Please select a Patient from the Patient list" />
          ) : cadDetailsData && cadDetailsData.length > 0 ? (
            reportRender
          ) : (
            <FieldData data="There is no Incident Information data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
