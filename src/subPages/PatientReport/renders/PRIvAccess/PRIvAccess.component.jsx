// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
} from "./PRIvAccess.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: PRIvAccess
export default function PRIvAccess({
  selectedPatient,
  patientIVData,
  drugsMedsData,
  isLoading,
}) {
  //#region ivAccessRender = IV Access
  const ivAccessRender = patientIVData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Type"
            data={patient.IV_ID ? patient.IV_ID : null}
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
            field="Size"
            data={patient.IV_Size ? patient.IV_Size : null}
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
            field="Site"
            data={patient.IV_Site ? patient.IV_Site : null}
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
            field="Successful"
            data={patient.IV_Successful ? patient.IV_Successful : null}
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
            field="Flushed"
            data={patient.IV_Flushed ? patient.IV_Flushed : null}
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
            field="Non-touch Technique"
            data={patient.IV_Non_Touch ? patient.IV_Non_Touch : null}
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
            field="Attempts"
            data={patient.IV_Attempts ? patient.IV_Attempts : null}
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
            field="By"
            data={patient.IV_By ? patient.IV_By : null}
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
  //#endregion /ivAccessRender = IV Access

  //#region ivRefusalRender = IV Refusal
  const ivRefusalRender = patientIVData.map((patient) =>
    patient.IV_ID === "" ? (
      <React.Fragment key={patient.id}>
        <Grid>
          <Column>
            <FieldData
              field="Type"
              data={patient.IV_Type_Refusal ? patient.IV_Type_Refusal : null}
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
              field="By"
              data={patient.IV_By_Refusal ? patient.IV_By_Refusal : null}
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
    ) : null
  );
  //#endregion /ivRefusalRender = IV Refusal

  //#region drugsMedsRender = Drugs/Meds
  const drugsMedsRender = drugsMedsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Drug"
            data={patient.Name ? patient.Name : null}
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
            field="Pouch No."
            data={patient.Pouch ? patient.Pouch : null}
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
            field="Time"
            data={patient.Time ? patient.Time : null}
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
            field="Dosage"
            data={patient.Dosage ? patient.Dosage : null}
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
            field="Unit"
            data={patient.Unit ? patient.Unit : null}
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
            field="Route"
            data={patient.Route ? patient.Route : null}
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
            field="By"
            data={patient.By ? patient.By : null}
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
            field="Own Medication"
            data={patient.Own_Meds ? patient.Own_Meds : null}
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
            field="Admin PGD"
            data={patient.Admin_PGD ? patient.Admin_PGD : null}
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
  //#endregion /drugsMedsRender = Drugs/Meds

  //#region drugsMedsRefusalRender = Drugs Refusal
  const drugsMedsRefusalRender = drugsMedsData.map((patient) =>
    patient.Time === "" ? (
      <React.Fragment key={patient.id}>
        <Grid>
          <Column>
            <FieldData
              field="Type"
              data={patient.Drug_Refusal ? patient.Drug_Refusal : null}
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
              field="Drug"
              data={patient.Name ? patient.Name : null}
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
              field="By"
              data={patient.Drug_By_Refusal ? patient.Drug_By_Refusal : null}
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
    ) : null
  );
  //#endregion /drugsMedsRefusalRender = Drugs Refusal

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="IV Access and Medications"
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
          text="IV Access and Medications"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {selectedPatient === null ? (
            <FieldData data="Please select a Patient from the Patient list" />
          ) : patientIVData &&
            patientIVData.length > 0 &&
            drugsMedsData &&
            drugsMedsData.length > 0 ? (
            <>
              {/* IV Access */}
              {patientIVData && patientIVData.length > 0 ? (
                <>
                  <HeadingSecondary text="IV Access" />
                  {ivAccessRender}
                </>
              ) : null}

              {/* IV Not Cannulated */}
              {patientIVData && patientIVData.length > 0 ? (
                <>
                  <HeadingSecondary text="IV Not Cannulated" marginTop="2rem" />
                  {ivRefusalRender}
                </>
              ) : null}

              {/* Drugs/Meds */}
              {drugsMedsData && drugsMedsData.length > 0 ? (
                <>
                  <HeadingSecondary text="Drugs / Meds" marginTop="2rem" />
                  {drugsMedsRender}
                </>
              ) : null}

              {/* Drugs/Meds Refusal */}
              {drugsMedsData && drugsMedsData.length > 0 ? (
                <>
                  <HeadingSecondary text="Drugs Refusal" marginTop="2rem" />
                  {drugsMedsRefusalRender}
                </>
              ) : null}
            </>
          ) : (
            <FieldData data="There is no IV Access and Medications data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
