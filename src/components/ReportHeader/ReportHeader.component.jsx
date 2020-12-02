// Import: Dependencies
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Import: Assets
import { ReactComponent as DodIcon } from "../../assets/img/icon/dod.svg";
import { ReactComponent as EcgIcon } from "../../assets/img/icon/ecg.svg";
import { ReactComponent as MediaIcon } from "../../assets/img/icon/media.svg";
import { ReactComponent as NotesIcon } from "../../assets/img/icon/notes.svg";
import { ReactComponent as ReportIcon } from "../../assets/img/icon/report.svg";

// Import: Elements
import { Container, Navigation } from "./ReportHeader.elements";

// Component: ReportHeader
export default function ReportHeader({ isPatientListOpen }) {
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

  return (
    <Container isPatientListOpen={isPatientListOpen} windowWidth={windowWidth}>
      <Navigation>
        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 100ms linear",
          }}
          to="/"
          exact
        >
          <ReportIcon />
          <li>Report</li>
        </NavLink>

        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 100ms linear",
          }}
          to="/notes"
        >
          <NotesIcon />
          <li>Notes</li>
        </NavLink>

        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 100ms linear",
          }}
          to="/media"
        >
          <MediaIcon />
          <li>Media</li>
        </NavLink>

        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 100ms linear",
          }}
          to="/ecg"
        >
          <EcgIcon />
          <li>ECG</li>
        </NavLink>

        <NavLink
          activeStyle={{
            background: "#e0e0e0",
            borderTop: "3px solid #569fd3",
            transition: "background 100ms linear",
          }}
          to="/diagnosis-of-death"
        >
          <DodIcon />
          <li>DoD</li>
        </NavLink>
      </Navigation>
    </Container>
  );
}
