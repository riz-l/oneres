// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  AssessmentGrid,
  Grid,
  Heading,
  Render,
} from "./PRCardiovascular.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: PRCardiovascular
export default function PRCardiovascular({
  selectedPatient,
  cardiacChestPainData,
  strokeAssessmentData,
  isLoading,
}) {
  //#region cardiacAssessmentRender = Clinical Observations
  const cardiacAssessmentRender = cardiacChestPainData.map((patient) => (
    <React.Fragment key={patient.id}>
      <AssessmentGrid>
        <Column>
          <FieldData
            field="Time Onset"
            data={patient.Time_Onset ? patient.Time_Onset : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>

        <Column>
          <FieldData
            field="Time Obtained"
            data={patient.Time_Obtained ? patient.Time_Obtained : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>

        <Column>
          <FieldData
            field="4 Rhythm"
            data={patient.Four_Rhythm ? patient.Four_Rhythm : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>

        <Column>
          <FieldData
            field="12 Rhythm"
            data={patient.Twelve_Rhythm ? patient.Twelve_Rhythm : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>

        <Column>
          <FieldData
            field="Other Rhythm"
            data={patient.ECG_Other ? patient.ECG_Other : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>

        <Column>
          <FieldData
            field="STEMI"
            data={patient.STEMI ? patient.STEMI : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>

        <Column>
          <FieldData
            field="PADS applied"
            data={patient.PADS_applied ? patient.PADS_applied : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>

        <Column>
          <FieldData
            field="Referred to Primary PCI"
            data={patient.Referred_To_PCI ? patient.Referred_To_PCI : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>

        <Column>
          <FieldData
            field="TCP"
            data={patient.TCP ? patient.TCP : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>
      </AssessmentGrid>
    </React.Fragment>
  ));
  //#endregion /cardiacAssessmentRender = Clinical Observations

  //#region strokeAssessmentRender = Stroke Assessment
  const strokeAssessmentRender = strokeAssessmentData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <HeadingTertiary text="Condition" marginBottom="0" />
          <FieldData
            field="Suspected Stroke"
            data={patient.SI_Suspected ? patient.SI_Suspected : "Not recorded"}
          />
          <FieldData
            field="Suspected TIA"
            data={patient.SI_TIA ? patient.SI_TIA : "Not recorded"}
          />
          <FieldData
            field="BM Recorded"
            data={patient.BM_Recorded ? patient.BM_Recorded : "Not recorded"}
          />
          <FieldData
            field="Referred to Hyper-Accute"
            data={
              patient.Referred_Acute ? patient.Referred_Acute : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <HeadingTertiary text="FAST Assessment" marginBottom="0" />
          <FieldData
            field="FAST Assessment Outcome"
            data={
              patient.FAST_Positive ? patient.FAST_Positive : "Not recorded"
            }
          />

          <Grid>
            <Column>
              <FieldData
                field="Face"
                data={patient.SI_Face ? patient.SI_Face : "Not recorded"}
              />
            </Column>

            <Column>
              <FieldData
                field="Side (Face)"
                data={patient.Face_Box ? patient.Face_Box : "Not recorded"}
              />
            </Column>
          </Grid>

          <Grid>
            <Column>
              <FieldData
                field="Arms"
                data={patient.SI_Arms ? patient.SI_Arms : "Not recorded"}
              />
            </Column>

            <Column>
              <FieldData
                field="Side (Arms)"
                data={patient.Arms_Box ? patient.Arms_Box : "Not recorded"}
              />
            </Column>
          </Grid>

          <FieldData
            field="Speech"
            data={patient.SI_Speech ? patient.SI_Speech : "Not recorded"}
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <FieldData
            field="Witnessed Onset"
            data={patient.Onset_Time ? patient.Onset_Time : "Not recorded"}
          />
          <FieldData
            field="Last time seen well"
            data={patient.Last_Time ? patient.Last_Time : "Not recorded"}
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /strokeAssessmentRender = Stroke Assessment

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Cardiovascular Assessment"
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
          text="Cardiovascular Assessment"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {selectedPatient === null ? (
            <FieldData data="Please select a Patient from the Patient list" />
          ) : cardiacChestPainData &&
            cardiacChestPainData.length > 0 &&
            strokeAssessmentData &&
            strokeAssessmentData.length > 0 ? (
            <>
              {/* Cardiac Assessment */}
              {cardiacChestPainData && cardiacChestPainData.length > 0 ? (
                <>
                  <HeadingSecondary text="Cardiac Assessment" />
                  {cardiacAssessmentRender}
                </>
              ) : null}

              {/* Stroke Assessment */}
              {strokeAssessmentData && strokeAssessmentData.length > 0 ? (
                <>
                  <HeadingSecondary text="Stroke Assessment" marginTop="2rem" />
                  {strokeAssessmentRender}
                </>
              ) : null}
            </>
          ) : (
            <FieldData data="There is no Cardiovascular Assessment data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
