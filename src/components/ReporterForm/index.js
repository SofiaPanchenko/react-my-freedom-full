import { useState, ReactFragment, useContext } from "react";
import { useForm } from "react-hook-form";
import {
  GENERAL,
  SELF_REPORT,
  REPORT_OTHER,
  ERRORS
} from "../../utils/constants";
import { ReporterContext } from "../../contexts/reporterContext";
import styles from "./style.css";

const ReporterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { onSelfReportMode, onReportOtherMode, isSelfReport } =
    useContext(ReporterContext);
  const onSubmit = (data) => console.log(data);
  return (
    <form className="formControl">
      <div>
        <p>{GENERAL.guideTitle1}</p>
        <p>{GENERAL.guideTitle2}</p>
      </div>

      <br />

      <div>
        <label htmlFor="reporter">
          <input
            id="selfReporter"
            type="radio"
            name="reporter"
            value={SELF_REPORT.reporterID}
            className="radio"
            {...register("reporter", { required: true })}
            defaultChecked={isSelfReport === true}
            onClick={() => onSelfReportMode()}
          />
          <label htmlFor="selfReporter" className="sameLineLabel">
            {SELF_REPORT.reporterID}
          </label>
          <br />
          <input
            id="reportForOther"
            type="radio"
            name="reporter"
            value={REPORT_OTHER.reporterID}
            className="radio"
            {...register("reporter", { required: true })}
            defaultChecked={isSelfReport === false}
            onClick={() => onReportOtherMode()}
          />
          <label htmlFor="selfReporter" className="sameLineLabel">
            {REPORT_OTHER.reporterID}
          </label>
        </label>
        <br />
      </div>
    </form>
  );
};

export default ReporterForm;
