// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Elements
import {
  Column,
  Container,
  Grid,
  Heading,
  Render,
  JDMWrapper,
  JDMGrid,
} from "./PRTriage.elements";

// Import: Components
import {
  FieldData,
  HeadingPrimary,
  HeadingSecondary,
  ReportContainer,
} from "../../../../components";

// Render: PRTriage
export default function PRTriage({
  selectedPatient,
  specialistPathwaysData,
  majorTraumaData,
  manchesterTriageSystemData,
  pathfindersData,
  jointDecisionMakingData,
}) {
  // State: windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect: Checks and updates inner window width
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  //#region specialistPathwaysRender = Specialist Pathways
  const specialistPathwaysRender = specialistPathwaysData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Pathway Used"
            data={
              patient.Pathway_Refusal ? patient.Pathway_Refusal : "Not recorded"
            }
          />
          <FieldData
            field="Patient refused pathway"
            data={
              patient.Pathway_NotApplicable
                ? patient.Pathway_NotApplicable
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <FieldData
            field="Specialist Pathway"
            data={
              patient.SP_Specialist_Path
                ? patient.SP_Specialist_Path
                : "Not recorded"
            }
          />
          <FieldData
            field="Are there any indications that lead to a safeguarding concern?"
            data={
              patient.Safeguarding_Concern
                ? patient.Safeguarding_Concern
                : "Not recorded"
            }
          />
        </Column>

        <Column>
          <></>
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /specialistPathwaysRender = Specialist Pathways

  //#region majorTraumaRender = Major Trauma
  const majorTraumaRender = majorTraumaData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Pathway Used"
            data={
              patient.Pathway_Refusal ? patient.Pathway_Refusal : "Not recorded"
            }
          />
          <FieldData
            field="Patient refused pathway"
            data={
              patient.Pathway_NotApplicable
                ? patient.Pathway_NotApplicable
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <FieldData
            field="Major Trauma Pathfinder"
            data={
              patient.MajorTrauma_Pathfinder
                ? patient.MajorTrauma_Pathfinder
                : "Not recorded"
            }
          />
          <FieldData
            field="Discriminator"
            data={
              patient.MJ_Discriminator
                ? patient.MJ_Discriminator
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <FieldData
            field="Outcome"
            data={patient.MJOutcome ? patient.MJOutcome : "Not recorded"}
          />
          <FieldData
            field="Are there any indications that lead to a safeguarding concern?"
            data={
              patient.Safeguarding_Concern
                ? patient.Safeguarding_Concern
                : "Not recorded"
            }
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /majorTraumaRender = Major Trauma

  //#region manchesterTriageSystemRender = Manchester Triage System
  const manchesterTriageSystemRender = manchesterTriageSystemData.map(
    (patient) => (
      <React.Fragment key={patient.id}>
        <Grid>
          <Column>
            <FieldData
              field="Pathway Used"
              data={
                patient.Pathway_Refusal
                  ? patient.Pathway_Refusal
                  : "Not recorded"
              }
            />
            <FieldData
              field="Not Qualified To"
              data={
                patient.Pathway_NotAvailable
                  ? patient.Pathway_NotAvailable
                  : "Not recorded"
              }
            />
            <FieldData
              field="Patient refused pathway"
              data={
                patient.Pathway_NotApplicable
                  ? patient.Pathway_NotApplicable
                  : "Not recorded"
              }
              marginBottom="2rem"
            />
          </Column>

          <Column>
            <FieldData
              field="MTS Card"
              data={patient.MTS_Card ? patient.MTS_Card : "Not recorded"}
            />
            <FieldData
              field="MTS Discriminator"
              data={
                patient.MTS_Discriminator
                  ? patient.MTS_Discriminator
                  : "Not recorded"
              }
            />
            <FieldData
              field="Outcome Colour"
              data={patient.Outcome_RAB ? patient.Outcome_RAB : "Not recorded"}
              marginBottom="2rem"
            />
          </Column>

          <Column>
            <FieldData
              field="Outcome Code"
              data={
                patient.Outcome_Code ? patient.Outcome_Code : "Not recorded"
              }
            />
            <FieldData
              field="Are there any indications that lead to a safeguarding concern?"
              data={
                patient.Safeguarding_Concern
                  ? patient.Safeguarding_Concern
                  : "Not recorded"
              }
            />
          </Column>
        </Grid>
      </React.Fragment>
    )
  );
  //#endregion /manchesterTriageSystemRender = Manchester Triage System

  //#region pathfindersRender = Pathfinders
  const pathfindersRender = pathfindersData.map((patient) => (
    <React.Fragment key={patient.id}>
      <Grid>
        <Column>
          <FieldData
            field="Pathway Used"
            data={
              patient.Pathway_Refusal ? patient.Pathway_Refusal : "Not recorded"
            }
          />
          <FieldData
            field="Patient refused pathway"
            data={
              patient.Pathway_NotApplicable
                ? patient.Pathway_NotApplicable
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <FieldData
            field="Exclusion Reason"
            data={
              patient.Pathway_Exclude ? patient.Pathway_Exclude : "Not recorded"
            }
          />
          <FieldData
            field="Medical Pathfinder"
            data={
              patient.Pathfinder_Medical
                ? patient.Pathfinder_Medical
                : "Not recorded"
            }
          />
          <FieldData
            field="Pathfinder Discriminator"
            data={
              patient.Medical_Discriminator
                ? patient.Medical_Discriminator
                : "Not recorded"
            }
            marginBottom="2rem"
          />
        </Column>

        <Column>
          <FieldData
            field="Trauma Pathfinder"
            data={
              patient.Pathfinder_Trauma
                ? patient.Pathfinder_Trauma
                : "Not recorded"
            }
          />
          <FieldData
            field="Pathfinder Discriminator"
            data={
              patient.Trauma_Discriminator
                ? patient.Trauma_Discriminator
                : "Not recorded"
            }
          />
          <FieldData
            field="Pathfinder Outcome"
            data={
              patient.Pathfinder_Outcome
                ? patient.Pathfinder_Outcome
                : "Not recorded"
            }
          />
          <FieldData
            field="Are there any indications that lead to a safeguarding concern?"
            data={
              patient.Safeguarding_Concern
                ? patient.Safeguarding_Concern
                : "Not recorded"
            }
          />
        </Column>
      </Grid>
    </React.Fragment>
  ));
  //#endregion /pathfindersRender = Pathfinders

  //#region jointDecisionMakingRender = Joint Decision Making
  const jointDecisionMakingRender = jointDecisionMakingData.map((patient) => (
    <React.Fragment key={patient.id}>
      <JDMWrapper>
        <FieldData
          field="Action Taken"
          data={patient.ActionTaken ? patient.ActionTaken : "Not recorded"}
          marginBottom="1rem"
        />

        <JDMGrid>
          <Column>
            <FieldData
              field="Trauma Cell"
              data={
                patient.TraumaCellAdvice
                  ? patient.TraumaCellAdvice
                  : "Not recorded"
              }
              marginBottom="1rem"
              fieldMinHeight={windowWidth <= 544 ? "45px" : "0"}
            />
          </Column>

          <Column>
            <FieldData
              field="Clinical Hub"
              data={
                patient.ClinicalSupportAdvice
                  ? patient.ClinicalSupportAdvice
                  : "Not recorded"
              }
              marginBottom="1rem"
              fieldMinHeight={windowWidth <= 544 ? "45px" : "0"}
            />
          </Column>

          <Column>
            <FieldData
              field="Other"
              data={
                patient.OtherSupportAdvice
                  ? patient.OtherSupportAdvice
                  : "Not recorded"
              }
              marginBottom="1rem"
              fieldMinHeight={windowWidth <= 544 ? "45px" : "0"}
            />
          </Column>

          <Column>
            <FieldData
              field="Advice Given By"
              data={patient.AdviceForm ? patient.AdviceForm : "Not recorded"}
              marginBottom="1rem"
              fieldMinHeight={windowWidth <= 544 ? "45px" : "0"}
            />
          </Column>
        </JDMGrid>

        <FieldData
          field="Note"
          data={
            patient.ClinicalSupportNotes
              ? patient.ClinicalSupportNotes
              : "Not recorded"
          }
          marginBottom="1rem"
        />
        <FieldData
          field="Other (Please State)"
          data={patient.OtherAdvice ? patient.OtherAdvice : "Not recorded"}
        />
      </JDMWrapper>
    </React.Fragment>
  ));
  //#endregion /jointDecisionMakingRender = Joint Decision Making

  return (
    <>
      <Container>
        <Heading>
          <HeadingPrimary
            icon="fas fa-file-medical-alt"
            text="Triage and Pathfinder Support"
            padding="0.6rem"
          />
        </Heading>

        <ReportContainer>
          <Render>
            {selectedPatient === null ? (
              <FieldData data="Please select a Patient from the Patient list" />
            ) : specialistPathwaysData &&
              specialistPathwaysData.length > 0 &&
              majorTraumaData &&
              majorTraumaData.length > 0 &&
              manchesterTriageSystemData &&
              manchesterTriageSystemData.length > 0 &&
              pathfindersData &&
              pathfindersData.length > 0 &&
              jointDecisionMakingData &&
              jointDecisionMakingData.length > 0 ? (
              <>
                {/* Specialist Pathways */}
                {specialistPathwaysData && specialistPathwaysData.length > 0 ? (
                  <>
                    <HeadingSecondary
                      text="Specialist Pathways"
                      marginBottom="0"
                    />
                    {specialistPathwaysRender}
                  </>
                ) : null}

                {/* Major Trauma */}
                {majorTraumaData && majorTraumaData.length > 0 ? (
                  <>
                    <HeadingSecondary text="Major Trauma" marginBottom="0" />
                    {majorTraumaRender}
                  </>
                ) : null}

                {/* Manchester Triage System */}
                {manchesterTriageSystemData &&
                manchesterTriageSystemData.length > 0 ? (
                  <>
                    <HeadingSecondary
                      text="Manchester Triage System"
                      marginBottom="0"
                    />
                    {manchesterTriageSystemRender}
                  </>
                ) : null}

                {/* Pathfinders */}
                {pathfindersData && pathfindersData.length > 0 ? (
                  <>
                    <HeadingSecondary text="Pathfinders" marginBottom="0" />
                    {pathfindersRender}
                  </>
                ) : null}

                {/* Joint Decision Making */}
                {jointDecisionMakingData &&
                jointDecisionMakingData.length > 0 ? (
                  <>
                    <HeadingSecondary
                      text="Joint Decision Making"
                      marginBottom="0"
                    />
                    {jointDecisionMakingRender}
                  </>
                ) : null}
              </>
            ) : (
              <FieldData data="There is no Triage and Pathfinder Support data for this Patient" />
            )}
          </Render>
        </ReportContainer>
      </Container>
    </>
  );
}
