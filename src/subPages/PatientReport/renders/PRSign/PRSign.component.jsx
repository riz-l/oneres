// Import: Dependencies
import React from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Render } from "./PRSign.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: PRSign
export default function PRSign({
  selectedPatient,
  isLoading,
  signAndSyncData,
}) {
  //#region reportRender = Sign and Sync
  const reportRender = signAndSyncData.map((patient) => (
    <React.Fragment key={patient.id}>
      {/* Final Impression and Clinical Signatures */}
      <HeadingSecondary
        text="Final Impression and Clinical Signatures"
        marginBottom="0"
      />
      <Grid>
        <Column>
          <HeadingTertiary text="Final Impression" marginBottom="0" />
          <FieldData
            field="Final Impression"
            data={
              patient.Final_Impression
                ? patient.Final_Impression
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <HeadingTertiary
            text="Clinical Assessment Completed By"
            marginBottom="0"
          />
          <FieldData
            field="Staff Number"
            data={
              patient.staffNumberInput
                ? patient.staffNumberInput
                : "Not recorded"
            }
          />
          <FieldData
            field="Registration No."
            data={
              patient.professsional_Box || patient.professionalRegNoInput ? (
                <p>
                  {patient.professsional_Box} / {patient.professionalRegNoInput}
                </p>
              ) : (
                "Not recorded"
              )
            }
          />
          <FieldData field="Staff Signature" />
          {patient.signature && patient.signature.length > 0 ? (
            <img
              src={"data:image/png;base64," + patient.signature}
              alt="Staff Signature"
              style={{ marginBottom: "2rem" }}
            />
          ) : (
            "Not recorded"
          )}
        </Column>

        <Column>
          <HeadingTertiary
            text="Senior Clinician's Signature"
            marginBottom="0"
          />
          <FieldData
            field="Staff Number"
            data={
              patient.snrStaffNumberInput
                ? patient.snrStaffNumberInput
                : "Not recorded"
            }
          />
          <FieldData
            field="Registration No."
            data={
              patient.professsional_Box || patient.snrProfessionalRegNoInput ? (
                <p>
                  {patient.snrProfessional_Box} /{" "}
                  {patient.snrProfessionalRegNoInput}
                </p>
              ) : (
                "Not recorded"
              )
            }
          />
          <FieldData field="Senior Clinician's Signature" />
          {patient.signatureSnrSig && patient.signatureSnrSig.length > 0 ? (
            <img
              src={"data:image/png;base64," + patient.signatureSnrSig}
              alt="Senior Clinician Signature"
              style={{ marginBottom: "2rem" }}
            />
          ) : (
            "Not recorded"
          )}
        </Column>
      </Grid>

      {/* Patient Refusal */}
      <HeadingSecondary text="Patient Refusal" marginBottom="0" />
      <HeadingTertiary text="Refusal Statement/Signature" marginBottom="0" />
      <FieldData
        field="All the information and treatment options relating to my conditions/injuries have been explained. I fully understand the risks of refusing treatment or transport as advised by the ambulance clinician and I accept all responsibility for my own care."
        marginBottom="2rem"
      />

      <HeadingTertiary text="Patients / Guardians Name" marginBottom="0" />
      <Grid>
        <Column>
          <FieldData
            field="Name"
            data={
              patient.signatureRefusalName
                ? patient.signatureRefusalName
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <FieldData field="Patients/Guardians Signature" />
          {patient.signatureRefusal && patient.signatureRefusal.length > 0 ? (
            <img
              src={"data:image/png;base64," + patient.signatureRefusal}
              alt="Patients/Guardians Signature"
            />
          ) : (
            "Not recorded"
          )}
        </Column>

        <Column>
          <></>
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Sign and Sync

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Sign and Sync"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {selectedPatient === null ? (
              <FieldData data="Please select a Patient from the Patient list" />
            ) : isLoading ? (
              <>
                <FieldData data="Loading..." />
                <Loader background="#3a3a40" />
              </>
            ) : signAndSyncData && signAndSyncData.length > 0 ? (
              reportRender
            ) : (
              <FieldData data="There is no Sign and Sync data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
