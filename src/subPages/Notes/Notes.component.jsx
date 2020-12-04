// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Notes.elements";

// Import: Renders
import {
  NAdditional,
  NFamily,
  NHistory,
  NImpression,
  NOn,
  NPlan,
  NPresenting,
  NPrevious,
  NSocial,
} from "./renders";

// SubPage: Notes
export default function Notes({ selectedPatient, notesData }) {
  return (
    <Container>
      {/* Presenting Complaint */}
      <NPresenting selectedPatient={selectedPatient} notesData={notesData} />

      {/* History of Presenting Complaint */}
      <NHistory selectedPatient={selectedPatient} notesData={notesData} />

      {/* Previous Medical History */}
      <NPrevious selectedPatient={selectedPatient} notesData={notesData} />

      {/* Social History */}
      <NSocial selectedPatient={selectedPatient} notesData={notesData} />

      {/* Family History */}
      <NFamily selectedPatient={selectedPatient} notesData={notesData} />

      {/* On Examination */}
      <NOn selectedPatient={selectedPatient} notesData={notesData} />

      {/* Impression */}
      <NImpression selectedPatient={selectedPatient} notesData={notesData} />

      {/* Plan / Treatment */}
      <NPlan selectedPatient={selectedPatient} notesData={notesData} />

      {/* Additional Information */}
      <NAdditional selectedPatient={selectedPatient} notesData={notesData} />
    </Container>
  );
}
