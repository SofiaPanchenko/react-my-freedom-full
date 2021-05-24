import { useState, ReactFragment } from "react";
import { useForm } from "react-hook-form";
import {
  GENERAL,
  SELF_REPORT,
  REPORT_OTHER,
  ERRORS
} from "../../utils/constants";
import styles from "./style.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { isSelfReport, setReportMode } = useState(true);
  const onSubmit = (data) => console.log(data);

  return (
    <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="form-header">
          היי, מלא/י את הטופס, ככל שתפרט/י נוכל לדייק את המענה. אנחנו מתחייבים
          לשמור על דיסקרטיות!
        </p>
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
          />
          <label htmlFor="selfReporter" id="radioLabel">
            {REPORT_OTHER.reporterID}
          </label>
        </label>
      </div>

      {!isSelfReport && (
        <div>
          <label htmlFor="victimName">{REPORT_OTHER.victimID}</label>
          <input
            id="victimName"
            aria-invalid={errors.victimName ? "true" : "false"}
            {...register("victimName", { required: true })}
          />
          {errors.victimName && <span role="alert">{ERRORS.required}</span>}
        </div>
      )}

      {isSelfReport ? (
        <div>
          <label htmlFor="fullName">שם מלא</label>
          <input
            id="fullName"
            aria-invalid={errors.firstName ? "true" : "false"}
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span role="alert">{ERRORS.required}</span>}
        </div>
      ) : (
        <div>
          <label htmlFor="reporterInfoTitle">{REPORT_OTHER.reporterInfo}</label>
          <label htmlFor="fullName">{REPORT_OTHER.fullName}</label>
          <input
            id="fullName"
            aria-invalid={errors.fullName ? "true" : "false"}
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span role="alert">{ERRORS.required}</span>}
        </div>
      )}

      <div>
        <label htmlFor="age">{GENERAL.age}</label>
        <input
          id="age"
          aria-invalid={errors.age ? "true" : "false"}
          {...register("age", { required: true })}
        />
        {errors.age && <span role="alert">{ERRORS.required}</span>}
      </div>

      <div>
        <label htmlFor="phoneNumber">{GENERAL.phoneNumber}</label>
        <input
          id="phoneNumber"
          type="tel"
          aria-invalid={errors.phoneNumber ? "true" : "false"}
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && <span role="alert">{ERRORS.required}</span>}
      </div>

      <div>
        <label htmlFor="address">{GENERAL.address}</label>
        <input
          id="address"
          aria-invalid={errors.address ? "true" : "false"}
          {...register("address", { required: true })}
        />
        {errors.address && <span role="alert">{ERRORS.required}</span>}
      </div>

      <div>
        <label htmlFor="sector">{GENERAL.sector.sector}</label>
        <select
          id="sector"
          aria-invalid={errors.sector ? "true" : "false"}
          {...register("sector", { required: true })}
        >
          <option value="Christian" selected>
            {GENERAL.sector.noReligion}
          </option>
          <option value="Jewish">{GENERAL.sector.jewish}</option>
          <option value="Muslim">{GENERAL.sector.muslim}</option>
          <option value="Druze">{GENERAL.sector.druze}</option>
          <option value="Christian">{GENERAL.sector.christian}</option>
        </select>
        {errors.sector && <span role="alert">{ERRORS.required}</span>}
      </div>

      <div>
        <label htmlFor="gender">{GENERAL.gender.gender}</label>
        <select
          id="gender"
          value={GENERAL.gender.undefined}
          aria-invalid={errors.gender ? "true" : "false"}
          {...register("gender", { required: true })}
        >
          <option value="undefined" selected>
            {GENERAL.gender.undefined}
          </option>
          <option value="Male">{GENERAL.gender.male}</option>
          <option value="Female">{GENERAL.gender.female}</option>
        </select>
        {errors.gender && <span role="alert">{ERRORS.required}</span>}
      </div>

      {isSelfReport ? (
        <div>
          <input
            type="checkbox"
            {...register("closedCommunity", { required: true })}
          />
          <label htmlFor="closedCommunity" className="sameLineLabel">
            {SELF_REPORT.closedCommunity}
          </label>
          {errors.closedCommunity && (
            <span role="alert">{ERRORS.required}</span>
          )}
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            {...register("closedCommunity", { required: true })}
          />
          <label htmlFor="closedCommunity" className="sameLineLabel">
            {REPORT_OTHER.closedCommunity}
          </label>
          {errors.closedCommunity && (
            <span role="alert">{ERRORS.required}</span>
          )}
        </div>
      )}

      <input className="btn" type="submit" />
    </form>
  );
};

export default Form;

// checkbox

/*    <div>
        <label>Is developer?</label>
        <input type="checkbox" {...register("isDeveloper")} />
      </div> */
