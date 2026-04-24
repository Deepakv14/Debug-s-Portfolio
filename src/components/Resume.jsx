import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
// import pdf from '../assets/';
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  const resumeLink =
    "https://raw.githubusercontent.com/github-name/pdf-renderer/main/src/assets/resume.pdf";

  // https://drive.google.com/file/d/1obFH65it46k4tA8YrRKfhpSbcBm4fymx/view?usp=sharing

  const pdf = "https://drive.google.com/file/d/1Y6M7YSX5v9yyv8JlUxgiJDYxCk--CI44/edit"

  const [width, setWidth] = useState(1200);

  useEffect(() => {
    // default width is 1200px, but this hook sets the width of the resume to be the inner width of whatever screen the user is using
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        &nbsp;Download Resume
      </Button>
      <Row className="resume">

        <Document file={resumeLink} className="d-flex justify-content-center">

          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>
      <iframe
        src={pdf}
        title="Resume"
        width="100%"
        height="800px"
        allow="autoplay"
      />
    </Container>
  );
}

export default Resume;