// Import: Dependencies
import React from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Render } from "./PRAirways.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingTertiary,
  ReportContainer,
} from "../../../../components";

// Render: PRAirways
export default function PRAirways({ selectedPatient, airwaysManagementData }) {
  //#region reportRender = Airways Management
  const reportRender = airwaysManagementData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <HeadingTertiary text="Big Valve Mask" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.BVM ? patient.BVM : "Not recorded"}
          />

          <HeadingTertiary text="Nasopharyngeal Airway" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.NPA_Size ? patient.NPA_Size : "Not recorded"}
          />
          <FieldData
            field="By"
            data={patient.NPA_By ? patient.NPA_By : "Not recorded"}
          />

          <HeadingTertiary text="Oropharyngeal Airway" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.OPA_Size ? patient.OPA_Size : "Not recorded"}
          />
          <FieldData
            field="By"
            data={patient.OPA_By ? patient.OPA_By : "Not recorded"}
          />
        </Column>

        <Column>
          <HeadingTertiary text="Supraglottic Airway" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.LMA_Size ? patient.LMA_Size : "Not recorded"}
          />
          <FieldData
            field="By"
            data={patient.LMA_By ? patient.LMA_By : "Not recorded"}
          />

          <HeadingTertiary text="Endotracheal" marginBottom="0" />
          <FieldData
            field="Size"
            data={patient.ET_Size ? patient.ET_Size : "Not recorded"}
          />
          <FieldData
            field="By"
            data={patient.ET_By ? patient.ET_By : "Not recorded"}
          />
          <FieldData
            field="Grade of View"
            data={patient.GradeOfView ? patient.GradeOfView : "Not recorded"}
          />
        </Column>

        <Column>
          <HeadingTertiary text="Surgical Cric" marginBottom="0" />
          <FieldData
            data={
              patient.SurgicalCric
                ? patient.SurgicalCric === "True"
                  ? "Yes"
                  : "No"
                : "Not recorded"
            }
          />
          <FieldData
            field="By"
            data={
              patient.SurgicalCric_By ? patient.SurgicalCric_By : "Not recorded"
            }
          />

          <HeadingTertiary text="Suction" marginBottom="0" />
          <FieldData
            data={
              patient.Suction
                ? patient.Suction === "True"
                  ? "Yes"
                  : "No"
                : "Not recorded"
            }
          />
          <FieldData
            field="By"
            data={patient.Suction_By ? patient.Suction_By : "Not recorded"}
          />

          <HeadingTertiary text="Thoracostomy" marginBottom="0" />
          <FieldData
            data={
              patient.Thoracostomy
                ? patient.Thoracostomy === "True"
                  ? "Yes"
                  : "No"
                : "Not recorded"
            }
          />
          <FieldData
            field="By"
            data={
              patient.Thoracostomy_By ? patient.Thoracostomy_By : "Not recorded"
            }
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Airways Management

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Airways Management"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {selectedPatient === null ? (
              <FieldData data="Please select a Patient from the Patient list" />
            ) : airwaysManagementData && airwaysManagementData.length > 0 ? (
              reportRender
            ) : (
              <FieldData data="There is no Airways Management data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
