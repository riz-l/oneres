// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Media.elements";

// Import: Renders
import { MMedia } from "./renders";

// SubPage: Media
export default function Media({ selectedPatient, isLoading }) {
  return (
    <Container>
      {/* Media */}
      <MMedia selectedPatient={selectedPatient} isLoading={isLoading} />
    </Container>
  );
}
