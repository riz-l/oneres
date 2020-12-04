// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./DoDTermination.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: DoDTermination
export default function DoDTermination({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region reportRender = Termination of Resuscitation...
  const reportRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Continuous chest compressions"
            data={patient.DoD_Chest ? patient.DoD_Chest : "Not recorded"}
          />
          <FieldData
            field="Circulatory Access (IV or IO)"
            data={
              patient.DoD_Circulatory ? patient.DoD_Circulatory : "Not recorded"
            }
          />
        </Column>

        <Column>
          <FieldData
            field="No palpable pulse"
            data={patient.DoD_Pulse ? patient.DoD_Pulse : "Not recorded"}
          />
          <FieldData
            field="20 minutes of Asystole. Printed ECG for &#62; 30 seconds"
            data={patient.DoD_ALS ? patient.DoD_ALS : "Not recorded"}
          />
        </Column>

        <Column>
          <FieldData
            field="Secured Airway (supraglottic or ET)"
            data={patient.DoD_Airway ? patient.DoD_Airway : "Not recorded"}
          />
          <FieldData
            field="Where appropriate, IV/IO admin of at least 4 x 1mg adrenaline and amiodarone"
            data={patient.DoD_Admin ? patient.DoD_Admin : "Not recorded"}
          />
          <FieldData
            field="No signs of respiration"
            data={
              patient.DoD_Respiration ? patient.DoD_Respiration : "Not recorded"
            }
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Termination of Resuscitation...

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-procedures"
            text="C. Termination of Resuscitation, if on Advanced Life Support for 20 Minutes Include"
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
            ) : diagnosisOfDeathData && diagnosisOfDeathData.length > 0 ? (
              reportRender
            ) : (
              <FieldData data="There is no Termination of Resuscitation... data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
