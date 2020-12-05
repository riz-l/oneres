// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
  STWrapper,
  STGrid,
} from "./PRTrauma.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  HeadingTertiary,
  Loader,
  ReportContainer,
} from "../../../../components";

// Render: PRTrauma
export default function PRTrauma({
  selectedPatient,
  skeletalTraumaData,
  burnsData,
  isLoading,
}) {
  //#region skeletalTraumaRender = Skeletal Trauma
  const skeletalTraumaRender = skeletalTraumaData.map((patient) => (
    <React.Fragment key={patient.id}>
      <STWrapper>
        <STGrid>
          <Column>
            <FieldData
              field="Type"
              data={patient.ST_Type ? patient.ST_Type : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldTextTransform="uppercase"
            />
          </Column>

          <Column>
            <FieldData
              field="Site"
              data={patient.ST_Site ? patient.ST_Site : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldTextTransform="uppercase"
            />
          </Column>

          <Column>
            <FieldData
              field="Side"
              data={patient.ST_Side ? patient.ST_Side : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldTextTransform="uppercase"
            />
          </Column>

          <Column>
            <FieldData
              field="Area"
              data={patient.ST_Area ? patient.ST_Area : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldTextTransform="uppercase"
            />
          </Column>

          <Column>
            <FieldData
              field="Time"
              data={patient.ST_Time ? patient.ST_Time : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldTextTransform="uppercase"
            />
          </Column>

          <Column>
            <FieldData
              field="By"
              data={patient.ST_By ? patient.ST_By : "Not recorded"}
              paddingBottom="0"
              fontSize="0.71rem"
              fieldFontWeight="700"
              fieldTextTransform="uppercase"
            />
          </Column>
        </STGrid>
      </STWrapper>
    </React.Fragment>
  ));
  //#endregion /skeletalTraumaRender = Skeletal Trauma

  //#region burnsRender = Burns
  const burnsRender = burnsData.map((patient) => (
    <React.Fragment key={patient.id}>
      <FieldData
        field="Total &#37;"
        data={patient.TotalBox ? patient.TotalBox : "Not recorded"}
        marginBottom="1rem"
      />

      <Grid>
        <Column>
          <HeadingTertiary text="Head" marginBottom="0" />
          <FieldData
            field="Thickness"
            data={patient.t_Head ? patient.t_Head : "Not recorded"}
          />
          <FieldData
            field="&#37; Area"
            data={patient.HeadBox ? patient.HeadBox : "Not recorded"}
          />
          <FieldData
            field="Time Dressing Applied"
            data={
              patient.Head_Dressing_Time
                ? patient.Head_Dressing_Time
                : "Not recorded"
            }
          />
          <FieldData
            field="Time Cooling Applied"
            data={
              patient.Head_Cooling_Time
                ? patient.Head_Cooling_Time
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <HeadingTertiary text="Torso" marginBottom="0" />
          <FieldData
            field="Thickness"
            data={patient.t_Torso ? patient.t_Torso : "Not recorded"}
          />
          <FieldData
            field="&#37; Area"
            data={patient.TorsoBox ? patient.TorsoBox : "Not recorded"}
          />
          <FieldData
            field="Time Dressing Applied"
            data={
              patient.Torso_Dressing_Time
                ? patient.Torso_Dressing_Time
                : "Not recorded"
            }
          />
          <FieldData
            field="Time Cooling Applied"
            data={
              patient.Torso_Cooling_Time
                ? patient.Torso_Cooling_Time
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <HeadingTertiary text="Limbs" marginBottom="0" />
          <FieldData
            field="Thickness"
            data={patient.t_Limbs ? patient.t_Limbs : "Not recorded"}
          />
          <FieldData
            field="&#37; Area"
            data={patient.LimbsBox ? patient.LimbsBox : "Not recorded"}
          />
          <FieldData
            field="Time Dressing Applied"
            data={
              patient.Limbs_Dressing_Time
                ? patient.Limbs_Dressing_Time
                : "Not recorded"
            }
          />
          <FieldData
            field="Time Cooling Applied"
            data={
              patient.Limbs_Cooling_Time
                ? patient.Limbs_Cooling_Time
                : "Not recorded"
            }
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /burnsRender = Burns

  // isLoading ? render Loader
  if (isLoading && selectedPatient !== null) {
    return (
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Trauma Management"
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
          text="Trauma Management"
          padding="0.6rem"
        />
      </Heading>

      <ReportContainer>
        <Render>
          {selectedPatient === null ? (
            <FieldData data="Please select a Patient from the Patient list" />
          ) : skeletalTraumaData &&
            skeletalTraumaData.length > 0 &&
            burnsData &&
            burnsData.length > 0 ? (
            <>
              {/* Skeletal Trauma */}
              {skeletalTraumaData && skeletalTraumaData.length > 0 ? (
                <>
                  <HeadingSecondary text="Skeletal Trauma" marginBottom="0" />
                  {skeletalTraumaRender}
                </>
              ) : null}

              {/* Burns */}
              {burnsData && burnsData.length > 0 ? (
                <>
                  <HeadingSecondary
                    text="Burns"
                    marginBottom="0"
                    marginTop="2rem"
                  />
                  {burnsRender}
                </>
              ) : null}
            </>
          ) : (
            <FieldData data="There is no Trauma Management data for this Patient" />
          )}
        </Render>
      </ReportContainer>
    </Container>
  );
}
