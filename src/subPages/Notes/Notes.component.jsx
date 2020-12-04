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
export default function Notes({ selectedPatient, notesData, isLoading }) {
  return (
    <Container>
      {/* Presenting Complaint */}
      <NPresenting
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        notesData={notesData}
      />

      {/* History of Presenting Complaint */}
      <NHistory
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        notesData={notesData}
      />

      {/* Previous Medical History */}
      <NPrevious
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        notesData={notesData}
      />

      {/* Social History */}
      <NSocial
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        notesData={notesData}
      />

      {/* Family History */}
      <NFamily
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        notesData={notesData}
      />

      {/* On Examination */}
      <NOn
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        notesData={notesData}
      />

      {/* Impression */}
      <NImpression
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        notesData={notesData}
      />

      {/* Plan / Treatment */}
      <NPlan
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        notesData={notesData}
      />

      {/* Additional Information */}
      <NAdditional
        selectedPatient={selectedPatient}
        isLoading={isLoading}
        notesData={notesData}
      />
    </Container>
  );
}
