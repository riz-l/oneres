// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./PRTransport.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  ReportContainer,
} from "../../../../components";

// Render: PRTransport
export default function PRTransport({ selectedPatient, transportOptionsData }) {
  //#region reportRender = Transport Options
  const reportRender = transportOptionsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Receiving Location"
            data={
              patient.DestinationName ? patient.DestinationName : "Not recorded"
            }
          />
          <FieldData
            field="Destination Name"
            data={patient.WardName ? patient.WardName : "Not recorded"}
          />
          <FieldData
            field="Other Location"
            data={
              patient.OtherLocation ? patient.OtherLocation : "Not recorded"
            }
          />
          <FieldData
            field="Patient Own Meds Transported"
            data={
              patient.patientOwnMeds
                ? patient.patientOwnMeds === "True"
                  ? "Yes"
                  : "No"
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <HeadingTertiary text="Hospital Pre-Alert" marginBottom="0" />
          <FieldData
            field="Pre-Alert"
            data={patient.Pre_Alert ? patient.Pre_Alert : "Not recorded"}
          />
          <FieldData
            field="Status"
            data={patient.PreAlert_RAG ? patient.PreAlert_RAG : "Not recorded"}
            marginBottom="2rem"
          />

          <HeadingTertiary text="Non-Transport" marginBottom="0" />
          <FieldData
            field="Reason"
            data={
              patient.NonTransportReason
                ? patient.NonTransportReason
                : "Not recorded"
            }
          />
          <FieldData
            field="Other"
            data={patient.Other ? patient.Other : "Not recorded"}
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <HeadingTertiary text="Patients Mobility" marginBottom="0" />
          <FieldData
            field="Scene to Ambulance"
            data={
              patient.Scene_Mobility ? patient.Scene_Mobility : "Not recorded"
            }
          />
          <FieldData
            field="Ambulance to Hospital"
            data={patient.Amb_Mobility ? patient.Amb_Mobility : "Not recorded"}
            marginBottom="2rem"
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Transport Options

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Transport Options"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {selectedPatient === null ? (
              <FieldData data="Please select a Patient from the Patient list" />
            ) : transportOptionsData && transportOptionsData.length > 0 ? (
              reportRender
            ) : (
              <FieldData data="There is no Transport Options data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
