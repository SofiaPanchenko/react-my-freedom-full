import { useState, ReactFragment, useContext, Fragment } from "react";
import { useForm } from "react-hook-form";
import {
  GENERAL,
  SELF_REPORT,
  REPORT_OTHER,
  ERRORS
} from "../../utils/constants";
import { ReporterContext } from "../../contexts/reporterContext";
import styles from "./style.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const { onSelfReportMode, onReportOtherMode, isSelfReport } =
    useContext(ReporterContext);
  const onSubmit = (data) => console.log(data);

  /*   const InputText = ({  }) => {
    <Fragment>
      <label htmlFor="victimName">{REPORT_OTHER.victimID}</label>
      <input
        id="victimName"
        aria-invalid={errors.victimName ? "true" : "false"}
        aria-invalid={errors.victimName ? "true" : "false"}
        {...register("victimName", { required: true })}
      />
      {errors.victimName && (
        <span role="alert" className="error">
          {ERRORS.required}
        </span>
      )}
    </Fragment>;
  } */

  const Radio = ({ id, value }) => (
    <Fragment>
      <label htmlFor={id} className="sameLineLabel radioLabel">
        {value}
      </label>
      <input
        id={id}
        type="radio"
        name="physical"
        value={value}
        className="radio"
        {...register("physical", { required: true })}
      />
    </Fragment>
  );

  return (
    <form className="formControl" onSubmit={handleSubmit(onSubmit)}>
      {!isSelfReport && (
        <div>
          <label htmlFor="victimName">{REPORT_OTHER.victimID}</label>
          <input
            id="victimName"
            aria-invalid={errors.victimName ? "true" : "false"}
            {...register("victimName", { required: true })}
          />
          {errors.victimName && (
            <span role="alert" className="error">
              {ERRORS.required}
            </span>
          )}
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
          {errors.fullName && (
            <span role="alert" className="error">
              {ERRORS.required}
            </span>
          )}
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
          {errors.fullName && (
            <span role="alert" className="error">
              {ERRORS.required}
            </span>
          )}
        </div>
      )}
      <div>
        <label htmlFor="age">{GENERAL.age}</label>
        <input
          id="age"
          aria-invalid={errors.age ? "true" : "false"}
          {...register("age", { required: true })}
        />
        {errors.age && (
          <span role="alert" className="error">
            {ERRORS.required}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="phoneNumber">{GENERAL.phoneNumber}</label>
        <input
          id="phoneNumber"
          type="tel"
          aria-invalid={errors.phoneNumber ? "true" : "false"}
          {...register("phoneNumber", { required: true })}
        />
        {errors.phoneNumber && (
          <span role="alert" className="error">
            {ERRORS.required}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="address">{GENERAL.address}</label>
        <input
          id="address"
          aria-invalid={errors.address ? "true" : "false"}
          {...register("address", { required: true })}
        />
        {errors.address && (
          <span role="alert" className="error">
            {ERRORS.required}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="sector">{GENERAL.sector.sector}</label>
        <select
          id="sector"
          aria-invalid={errors.sector ? "true" : "false"}
          {...register("sector", { required: true })}
        >
          <option value="Christian" defaultValue>
            {GENERAL.sector.noReligion}
          </option>
          <option value="Jewish">{GENERAL.sector.jewish}</option>
          <option value="Muslim">{GENERAL.sector.muslim}</option>
          <option value="Druze">{GENERAL.sector.druze}</option>
          <option value="Christian">{GENERAL.sector.christian}</option>
        </select>
        {errors.sector && (
          <span role="alert" className="error">
            {ERRORS.required}
          </span>
        )}
      </div>
      <div>
        <label htmlFor="gender">{GENERAL.gender.gender}</label>
        <select
          id="gender"
          value={GENERAL.gender.undefined}
          aria-invalid={errors.gender ? "true" : "false"}
          {...register("gender", { required: true })}
        >
          <option value="undefined" defaultValue>
            {GENERAL.gender.undefined}
          </option>
          <option value="Male">{GENERAL.gender.male}</option>
          <option value="Female">{GENERAL.gender.female}</option>
        </select>
        {errors.gender && (
          <span role="alert" className="error">
            {ERRORS.required}
          </span>
        )}
      </div>
      {isSelfReport ? (
        <Fragment>
          <div>
            <input
              type="checkbox"
              {...register("closedCommunity", { required: true })}
            />
            <label htmlFor="closedCommunity" className="sameLineLabel">
              {SELF_REPORT.closedCommunity}
            </label>
            {errors.closedCommunity && (
              <span role="alert" className="error">
                {ERRORS.required}
              </span>
            )}
          </div>
          <div>
            <input
              type="checkbox"
              {...register("specialNeeds", { required: true })}
            />
            <label htmlFor="specialNeeds" className="sameLineLabel">
              {SELF_REPORT.specialNeeds}
            </label>
            {errors.specialNeeds && (
              <span role="alert" className="error">
                {ERRORS.required}
              </span>
            )}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div>
            <input
              type="checkbox"
              {...register("closedCommunity", { required: true })}
            />
            <label htmlFor="closedCommunity" className="sameLineLabel">
              {REPORT_OTHER.closedCommunity}
            </label>
            {errors.closedCommunity && (
              <span role="alert" className="error">
                {ERRORS.required}
              </span>
            )}
          </div>
          <div>
            <input
              type="checkbox"
              {...register("specialNeeds", { required: true })}
            />
            <label htmlFor="specialNeeds" className="sameLineLabel">
              {REPORT_OTHER.specialNeeds}
            </label>
            {errors.specialNeeds && (
              <span role="alert" className="error">
                {ERRORS.required}
              </span>
            )}
          </div>
        </Fragment>
      )}

      <div>
        {isSelfReport ? (
          <Fragment>
            <label htmlFor="violenceType">
              {SELF_REPORT.violence.violenceType}
            </label>
            <label htmlFor="rateInfo" className="labelComment">
              {GENERAL.violence.rateInfo}
            </label>
          </Fragment>
        ) : (
          <Fragment>
            <label htmlFor="violenceType">
              {REPORT_OTHER.violence.violenceType}
            </label>
            <label htmlFor="rateInfo" className="labelComment">
              {GENERAL.violence.rateInfo}
            </label>
          </Fragment>
        )}
      </div>

      <div>
        <label htmlFor="violenceInfo">
          <label htmlFor="selfReporter" className="sameLineLabel">
            {GENERAL.violence.physical}
          </label>
          <Radio id="physical-0" value="0" />
          <Radio id="physical-1" value="1" />
          <Radio id="physical-2" value="2" />
          <Radio id="physical-3" value="3" />
          <Radio id="physical-4" value="4" />
          <Radio id="physical-5" value="5" />
          <br />
          {/*           <input
            id="reportForOther"
            type="radio"
            name="reporter"
            value={REPORT_OTHER.reporterID}
            className="radio"
            {...register("reporter", { required: true })}
            defaultChecked={isSelfReport === false}
            onClick={() => onReportOtherMode()}
          /> */}
          {/* <label htmlFor="selfReporter">{REPORT_OTHER.reporterID}</label> */}
        </label>
      </div>

      <input className="btn" type="submit" value={GENERAL.submit} />
    </form>
  );
};

export default Form;
