// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./DoDConditions.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: DoDConditions
export default function DoDConditions({
  selectedPatient,
  isLoading,
  diagnosisOfDeathData,
}) {
  //#region reportRender = Conditions Unequivocally Associated...
  const reportRender = diagnosisOfDeathData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Condition"
            data={patient.Condition ? patient.Condition : "Not recorded"}
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Conditions Unequivocally Associated...

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-procedures"
            text="D. Conditions Unequivocally Associated With Death (in Cases of Rigor Mortis, Hypostasis, and Fetal Maceration, Take an ECG While Confirming No Pulse and Breathing"
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
              <FieldData data="There is no Conditions Unequivocally Associated... data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
