import React from "react";

const bucket = process.env.REACT_APP_AWS_S3_BUCKET || "debugv-resume";
const region = process.env.REACT_APP_AWS_S3_REGION || "ap-south-1";
const fileName = process.env.REACT_APP_FILE_NAME || "Deepak_SDE_IIT_Varanasi.pdf";

const Resume = () => {
  const pdf = `https://${bucket}.s3.${region}.amazonaws.com/${fileName}`;
  return (
    <div className="m-2 text-center">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center font-serif text-[#32012F] dark:text-white">
        Resume
      </h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-2">

        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-[#32012F] text-white dark:bg-white dark:text-[#32012F] rounded-lg shadow hover:bg-[#32012F]/80 dark:hover:bg-white/80 transition"
        >
          View Resume
        </a>

        <a
          href={pdf}
          download
          className="px-5 py-2 border border-[#32012F] text-[#32012F] dark:border-white dark:text-white rounded-lg hover:bg-[#32012F]/10 dark:hover:bg-white/10 transition"
        >
          Download
        </a>

      </div>

      {/* PDF Preview */}
      <div className="mt-2 flex justify-center">
        <iframe
          src={pdf}
          title="Resume"
          className="w-full max-w-4xl h-[600px] md:h-[800px] rounded-xs shadow-lg border dark:border-white/20 bg-white"
        />
      </div>

    </div>
  );
};

export default Resume;