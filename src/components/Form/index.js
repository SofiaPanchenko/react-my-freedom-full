import { useState, ReactFragment, useContext, Fragment } from "react";
import { useForm } from "react-hook-form";
import {
  GENERAL,
  SELF_REPORT,
  REPORT_OTHER,
  ERRORS,
  arrNumbers
} from "../../utils/constants";
import { ReporterContext } from "../../contexts/reporterContext";
import styles from "./style.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const { isSelfReport } = useContext(ReporterContext);
  const onSubmit = (data) => console.log(data);

  console.log(watch("violenceDuration"));

  const InputText = ({ id, labelText }) => (
    <Fragment>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        className="textInput"
        aria-invalid={errors.id ? "true" : "false"}
        aria-invalid={errors.id ? "true" : "false"}
        {...register(`${id}`, { required: true })}
      />
      {errors.id && (
        <span role="alert" className="error">
          {ERRORS.required}
        </span>
      )}
    </Fragment>
  );

  const Radio = ({ id, name, value }) => (
    <Fragment>
      <label htmlFor={id} className="sameLineLabel radioLabel">
        {value}
      </label>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        className="radio"
        {...register(`${name}`, { required: true })}
      />
    </Fragment>
  );

  return (
    <form className="formControl" onSubmit={handleSubmit(onSubmit)}>
      {!isSelfReport && (
        <div className="form-section">
          <InputText id="victimName" labelText={REPORT_OTHER.victimID} />
        </div>
      )}

      {isSelfReport ? (
        <div className="form-section">
          <InputText id="fullName" labelText={SELF_REPORT.fullName} />
        </div>
      ) : (
        <div className="form-section">
          <div className="form-section">
            <label htmlFor="reporterInfoTitle">
              {REPORT_OTHER.reporterInfo}
            </label>
          </div>
          <InputText id="fullName" labelText={REPORT_OTHER.fullName} />
        </div>
      )}

      <div className="form-section">
        <InputText id="age" labelText={GENERAL.age} />
      </div>

      <div className="form-section">
        <InputText id="phoneNumber" labelText={GENERAL.phoneNumber} />
      </div>

      <div className="form-section">
        <InputText id="address" labelText={GENERAL.address} />
      </div>

      <div className="form-section">
        <label htmlFor="sector">{GENERAL.sector.sector}</label>
        <select
          id="sector"
          aria-invalid={errors.sector ? "true" : "false"}
          {...register("sector", { required: true })}
        >
          <option value="">{GENERAL.chooseOption}</option>
          <option value="noReligion">{GENERAL.sector.noReligion}</option>
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

      <div className="form-section">
        <label htmlFor="gender">{GENERAL.gender.gender}</label>
        <select
          id="gender"
          aria-invalid={errors.gender ? "true" : "false"}
          {...register("gender", { required: true })}
        >
          <option value="">{GENERAL.chooseOption}</option>
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
          <div className="form-section">
            <input
              type="checkbox"
              {...register("closedCommunity", { required: true })}
            />
            <label
              htmlFor="closedCommunity"
              className="sameLineLabel radioLabel"
            >
              {SELF_REPORT.closedCommunity}
            </label>
            {errors.closedCommunity && (
              <span role="alert" className="error">
                {ERRORS.required}
              </span>
            )}
          </div>

          <div className="form-section">
            <input
              type="checkbox"
              {...register("specialNeeds", { required: true })}
            />
            <label htmlFor="specialNeeds" className="sameLineLabel radioLabel">
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
          <div className="form-section">
            <input
              type="checkbox"
              {...register("closedCommunity", { required: true })}
            />
            <label
              htmlFor="closedCommunity"
              className="sameLineLabel radioLabel"
            >
              {REPORT_OTHER.closedCommunity}
            </label>
            {errors.closedCommunity && (
              <span role="alert" className="error">
                {ERRORS.required}
              </span>
            )}
          </div>

          <div className="form-section">
            <input
              type="checkbox"
              {...register("specialNeeds", { required: true })}
            />
            <label htmlFor="specialNeeds" className="sameLineLabel radioLabel">
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

      <div className="form-section">
        {isSelfReport ? (
          <div className="rateSection">
            <label htmlFor="violenceType">
              {SELF_REPORT.violence.violenceType}
            </label>
            <label htmlFor="rateInfo" className="labelComment">
              {GENERAL.violence.rateInfo}
            </label>
          </div>
        ) : (
          <div className="rateSection">
            <label htmlFor="violenceType">
              {REPORT_OTHER.violence.violenceType}
            </label>
            <label htmlFor="rateInfo" className="labelComment">
              {GENERAL.violence.rateInfo}
            </label>
          </div>
        )}
      </div>

      <div className="form-section">
        <label htmlFor="physical" className="sameLineLabel radioTitleLabel">
          {GENERAL.violence.physical}
        </label>
        {arrNumbers.map((num) => {
          return (
            <Radio
              id={`physical-${num}`}
              name="physical"
              value={num}
              key={Number(num)}
            />
          );
        })}
      </div>

      <div className="form-section">
        <label htmlFor="sexual" className="sameLineLabel radioTitleLabel">
          {GENERAL.violence.sexual}
        </label>
        {arrNumbers.map((num) => {
          return (
            <Radio
              id={`sexual-${num}`}
              name="sexual"
              value={num}
              key={Number(num)}
            />
          );
        })}
      </div>

      <div className="form-section">
        <label htmlFor="mental" className="sameLineLabel radioTitleLabel">
          {GENERAL.violence.mental}
        </label>
        {arrNumbers.map((num) => {
          return (
            <Radio
              id={`mental-${num}`}
              name="mental"
              value={num}
              key={Number(num)}
            />
          );
        })}
      </div>

      <div className="form-section">
        <label htmlFor="economical" className="sameLineLabel radioTitleLabel">
          {GENERAL.violence.economical}
        </label>
        {arrNumbers.map((num) => {
          return (
            <Radio
              id={`economical-${num}`}
              name="economical"
              value={num}
              key={Number(num)}
            />
          );
        })}
      </div>

      <div className="form-section">
        <label htmlFor="neglect" className="sameLineLabel radioTitleLabel">
          {GENERAL.violence.neglect}
        </label>
        {arrNumbers.map((num) => {
          return (
            <Radio
              id={`neglect-${num}`}
              name="neglect"
              value={num}
              key={Number(num)}
            />
          );
        })}
      </div>

      <div className="form-section">
        <label
          htmlFor="preventPsychoTreatment"
          className="sameLineLabel radioTitleLabel"
        >
          {GENERAL.violence.preventPsychoTreatment}
        </label>
        {arrNumbers.map((num) => {
          return (
            <Radio
              id={`preventPsychoTreatment-${num}`}
              name="preventPsychoTreatment"
              value={num}
              key={Number(num)}
            />
          );
        })}
      </div>

      <div className="form-section">
        <label
          htmlFor="preventMedicalTreatment"
          className="sameLineLabel radioTitleLabel"
        >
          {GENERAL.violence.preventMedicalTreatment}
        </label>
        {arrNumbers.map((num) => {
          return (
            <Radio
              id={`preventMedicalTreatment-${num}`}
              name="preventMedicalTreatment"
              value={num}
              key={Number(num)}
            />
          );
        })}
      </div>

      <div className="form-section">
        <label htmlFor="lifeThreat" className="sameLineLabel radioTitleLabel">
          {GENERAL.violence.lifeThreat}
        </label>
        {arrNumbers.map((num) => {
          return (
            <Radio
              id={`lifeThreat-${num}`}
              name="lifeThreat"
              value={num}
              key={Number(num)}
            />
          );
        })}
      </div>

      <div className="form-section">
        <label
          htmlFor="socialDisconnection"
          className="sameLineLabel radioTitleLabel"
        >
          {GENERAL.violence.socialDisconnection}
        </label>
        <div className="radioWithLabelComment">
          <label htmlFor="freedomOfMovement" className="labelComment">
            {GENERAL.violence.freedomOfMovement}
          </label>
          {arrNumbers.map((num) => {
            return (
              <Radio
                id={`socialDisconnection-${num}`}
                name="socialDisconnection"
                value={num}
                key={Number(num)}
              />
            );
          })}
        </div>
      </div>

      <div className="form-section">
        <label htmlFor="violenceDuration">
          {GENERAL.violenceDuration.duration}
        </label>
        <select
          id="violenceDuration"
          aria-invalid={errors.violenceDuration ? "true" : "false"}
          {...register("violenceDuration", { required: true })}
        >
          <option value="">{GENERAL.chooseOption}</option>
          <option value="once">{GENERAL.violenceDuration.once}</option>
          <option value="lastHalfAYear">
            {GENERAL.violenceDuration.lastHalfAYear}
          </option>
          <option value="lastYearAndMore">
            {GENERAL.violenceDuration.lastYearAndMore}
          </option>
        </select>
        {errors.violenceDuration && (
          <span role="alert" className="error">
            {ERRORS.required}
          </span>
        )}
      </div>

      <div className="form-section">
        <label htmlFor="attacker">{GENERAL.attacker.q}</label>
        <select
          id="attacker"
          aria-invalid={errors.attacker ? "true" : "false"}
          {...register("attacker", { required: true })}
        >
          <option value="">{GENERAL.chooseOption}</option>
          <option value="spouse">{GENERAL.attacker.spouse}</option>
          <option value="parent">{GENERAL.attacker.parent}</option>
          <option value="child">{GENERAL.attacker.child}</option>
          <option value="educationalAuthority">
            {GENERAL.attacker.educationalAuthority}
          </option>
          <option value="religiousAuthority">
            {GENERAL.attacker.religiousAuthority}
          </option>
          <option value="other">{GENERAL.attacker.other}</option>
        </select>
        {errors.attacker && (
          <span role="alert" className="error">
            {ERRORS.required}
          </span>
        )}
      </div>

      <div className="form-section">
        {isSelfReport ? (
          <label htmlFor="tenantAttacker">{SELF_REPORT.tenantAttacker}</label>
        ) : (
          <label htmlFor="tenantAttacker">{REPORT_OTHER.tenantAttacker}</label>
        )}
        <Radio
          id="tenantAttacker-true"
          name="tenantAttacker"
          value={GENERAL.booleanAnswers.yes}
        />
        <Radio
          id="tenantAttacker-false"
          name="tenantAttacker"
          value={GENERAL.booleanAnswers.no}
        />
      </div>

      <div className="form-section">
        <label htmlFor="aidType">{GENERAL.aidType.q}</label>
        <select
          id="aidType"
          aria-invalid={errors.aidType ? "true" : "false"}
          {...register("aidType", { required: true })}
        >
          <option value="">{GENERAL.chooseOption}</option>
          <option value="police">{GENERAL.aidType.police}</option>
          <option value="shelter">{GENERAL.aidType.shelter}</option>
          <option value="treatmentCenter">
            {GENERAL.aidType.treatmentCenter}
          </option>
          <option value="welfareDepartment">
            {GENERAL.aidType.welfareDepartment}
          </option>
          <option value="anotherAuthority">
            {GENERAL.aidType.anotherAuthority}
          </option>
        </select>
        {errors.aidType && (
          <span role="alert" className="error">
            {ERRORS.required}
          </span>
        )}
      </div>

      <div className="form-section">
        {isSelfReport ? (
          <label htmlFor="injuryTreatment">{SELF_REPORT.injuryTreatment}</label>
        ) : (
          <label htmlFor="injuryTreatment">
            {REPORT_OTHER.injuryTreatment}
          </label>
        )}
        <Radio
          id="injuryTreatment-true"
          name="injuryTreatment"
          value={GENERAL.booleanAnswers.yes}
        />
        <Radio
          id="injuryTreatment-false"
          name="injuryTreatment"
          value={GENERAL.booleanAnswers.no}
        />
      </div>

      <div className="form-section">
        <label htmlFor="legalProcess">{GENERAL.legalProcess}</label>
        <Radio
          id="legalProcess-true"
          name="legalProcess"
          value={GENERAL.booleanAnswers.yes}
        />
        <Radio
          id="legalProcess-false"
          name="legalProcess"
          value={GENERAL.booleanAnswers.no}
        />
      </div>

      <div className="form-section">
        <InputText id="contactInfo" labelText={GENERAL.contactInfo} />
      </div>

      <div className="form-section">
        <InputText
          id="additionalComments"
          labelText={GENERAL.additionalComments}
        />
      </div>

      <input className="btn" type="submit" value={GENERAL.submit} />
    </form>
  );
};

export default Form;
