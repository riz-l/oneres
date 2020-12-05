// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Spinner } from "./Loader.elements";

// Component: Loader
export default function Loader({ background }) {
  return (
    <Container>
      <Spinner>
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
        <div style={{ background: `${background}` }} />
      </Spinner>
    </Container>
  );
}
