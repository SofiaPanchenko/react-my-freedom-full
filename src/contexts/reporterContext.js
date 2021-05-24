import React, { createContext, useState } from "react";

export const ReporterContext = createContext();

const ReporterContextProvider = (props) => {
  const [isSelfReport, setReportMode] = useState(true);

  const onSelfReportMode = () => {
    setReportMode(true);
  };

  const onReportOtherMode = () => {
    setReportMode(false);
  };

  return (
    <ReporterContext.Provider
      value={{ isSelfReport, onSelfReportMode, onReportOtherMode }}
    >
      {props.children}
    </ReporterContext.Provider>
  );
};

export default ReporterContextProvider;
