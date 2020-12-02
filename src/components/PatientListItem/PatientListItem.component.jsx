// Import: Dependencies
import React from "react";

// Import: Icons
import { FaUserAlt as UserIcon } from "react-icons/fa";

// Import: Elements
import {
  Container,
  IconContainer,
  Icon,
  ContentWrapper,
  Details,
  DetailItem,
  StatusWrapper,
  StatusItem,
} from "./PatientListItem.elements";

// Component: PatientListItem
export default function PatientListItem({
  id,
  PD_Firstname,
  PD_Surname,
  PD_Gender,
  PD_DOB,
  PD_Reported_Condition,
  PVN_Transport,
  PD_Incident_Number,
  ePR_Date,
  ePR_CallSign,
  complete,
}) {
  // Only shows the last n characters of the PD_Incident_Number string
  const n = 10;

  // Calculates time difference between ePR_Date and current time
  // Calculates seconds since admission date (current Date - ePR_Date)
  const secondsSinceAdmission = Math.floor(
    // (1000 * 3600 * 24) =
    // milliseconds to seconds, seconds to hours, hours to days
    (Date.now() - new Date(ePR_Date).getTime()) / 1000
  );

  // Converts secondsSinceAdmission into hours, minutes and seconds
  function secondsToHoursMinutesSeconds(sec) {
    sec = Number(sec);
    let hours = Math.floor(sec / 3600);
    let minutes = Math.floor((sec % 3600) / 60);
    let seconds = Math.floor((sec % 3600) % 60);

    let hoursDisplay =
      hours > 0 ? hours + (hours === 1 ? " hour, " : " hours, ") : "";
    let minutesDisplay =
      minutes > 0 ? minutes + (minutes === 1 ? " minute, " : " minutes, ") : "";
    let secondsDisplay =
      seconds > 0 ? seconds + (seconds === 1 ? " second, " : " seconds, ") : "";

    return hoursDisplay + minutesDisplay + secondsDisplay;
  }

  return (
    <Container key={id}>
      <IconContainer>
        <Icon>
          <UserIcon />
        </Icon>

        <span>{PVN_Transport ? PVN_Transport : <span>Transport</span>}</span>
      </IconContainer>

      <ContentWrapper>
        <Details>
          <DetailItem>
            {PD_Firstname ? <h2>{PD_Firstname}</h2> : <h2>Firstname</h2>}
          </DetailItem>
          <DetailItem>
            {PD_Surname ? <h2>{PD_Surname}</h2> : <h2>Surname</h2>}
          </DetailItem>

          <DetailItem>{PD_Gender ? PD_Gender : "Gender"}</DetailItem>
          <DetailItem>{PD_DOB ? PD_DOB : "Date of Birth"}</DetailItem>

          <DetailItem>
            {PD_Reported_Condition
              ? PD_Reported_Condition
              : "Reported Condition"}
          </DetailItem>
        </Details>

        <StatusWrapper>
          <StatusItem>
            {PD_Incident_Number
              ? "..." +
                PD_Incident_Number.substring(PD_Incident_Number.length - n)
              : "Null"}
          </StatusItem>

          <StatusItem>
            {ePR_Date ? (
              secondsToHoursMinutesSeconds(secondsSinceAdmission)
            ) : (
              <span>ePR Date</span>
            )}
          </StatusItem>

          <StatusItem>
            {ePR_CallSign ? ePR_CallSign : "ePR CallSign"}
          </StatusItem>

          <StatusItem>
            <p>Status:</p>
            {complete ? <span>Ready to Print</span> : <span>In Progress</span>}
          </StatusItem>
        </StatusWrapper>
      </ContentWrapper>
    </Container>
  );
}
