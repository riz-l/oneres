// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./PRClinical.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: PRClinical
export default function PRClinical({
  selectedPatient,
  clinicalObservationsData,
  isLoading,
}) {
  //#region reportRender = Clinical Observations
  const reportRender = clinicalObservationsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Time"
            data={patient.Obs_Time ? patient.Obs_Time : null}
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
            field="Resp Rate"
            data={patient.Obs_Resp_Rate ? patient.Obs_Resp_Rate : null}
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
            field="SpO2 (&#37;)"
            data={patient.Obs_SpO2 ? patient.Obs_SpO2 : null}
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
            field="Air/Oxygen"
            data={patient.Obs_Oxygen ? patient.Obs_Oxygen : null}
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
            field="Temp (&#176;C)"
            data={patient.Obs_Temp ? patient.Obs_Temp : null}
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
            field="BP (MMHG)"
            data={
              patient.Obs_BP_Sys || patient.Obs_BP_Dia ? (
                <>
                  {patient.Obs_BP_Sys} / {patient.Obs_BP_Dia}
                </>
              ) : null
            }
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
            field="Heart Rate"
            data={patient.Obs_Heart_Rate ? patient.Obs_Heart_Rate : null}
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
            field="ACVPU"
            data={patient.Obs_AVPU ? patient.Obs_AVPU : null}
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
            field="NEWS2 Total"
            data={patient.Obs_NEWS_Total ? patient.Obs_NEWS_Total : null}
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
            field="Cap Refill (sec)"
            data={patient.Obs_Cap_Refill ? patient.Obs_Cap_Refill : null}
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
            field="GCS"
            data={
              patient.Obs_EVM_Eye ||
              patient.Obs_EVM_Voice ||
              patient.Obs_EVM_Motor ? (
                <>
                  {patient.Obs_EVM_Eye} / {patient.Obs_EVM_Voice} /{" "}
                  {patient.Obs_EVM_Motor}
                </>
              ) : null
            }
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
            field="GCS Total"
            data={patient.Obs_EVM_Total ? patient.Obs_EVM_Total : null}
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
            field="BM (M/Mol)"
            data={patient.Obs_BM ? patient.Obs_BM : null}
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
            field="Pupils Size (mm)"
            data={
              patient.Obs_Pupils_Size_Left || patient.Obs_Pupils_Size_Right ? (
                <>
                  {patient.Obs_Pupils_Size_Left} /{" "}
                  {patient.Obs_Pupils_Size_Right}
                </>
              ) : null
            }
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
            field="Pupils React"
            data={
              patient.Obs_Pupils_React_Left ||
              patient.Obs_Pupils_React_Right ? (
                <>
                  {patient.Obs_Pupils_React_Left} /{" "}
                  {patient.Obs_Pupils_React_Right}
                </>
              ) : null
            }
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
            field="Pain Score"
            data={patient.Obs_Pain_Score ? patient.Obs_Pain_Score : null}
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
            field="Peak Flow (l/min)"
            data={patient.Obs_Peak_Flow ? patient.Obs_Peak_Flow : null}
            fieldMarginBottom="0"
            paddingBottom="2px"
            fontSize="0.71rem"
            fieldFontWeight="700"
            fieldMinHeight="40px"
            fieldTextTransform="uppercase"
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /reportRender = Clinical Observations

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Clinical Observations"
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
          text="Clinical Observations"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {selectedPatient === null ? (
            <FieldData data="Please select a Patient from the Patient list" />
          ) : clinicalObservationsData &&
            clinicalObservationsData.length > 0 ? (
            reportRender
          ) : (
            <FieldData data="There is no Clinical Observations data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
