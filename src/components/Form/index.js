import { useForm } from "react-hook-form";
import styles from "./style.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form className="form-control" onSubmit={handleSubmit(onSubmit)}>
      <p className="form-header">
        היי, מלא/י את הטופס, ככל שתפרט/י נוכל לדייק את המענה. אנחנו מתחייבים
        לשמור על דיסקרטיות!
      </p>
      <label htmlFor="fullName">שם מלא</label>
      <input
        id="fullName"
        aria-invalid={errors.firstName ? "true" : "false"}
        {...register("fullName", { required: true })}
      />
      {errors.fullName && <span role="alert">This field is required</span>}

      <label htmlFor="age">גיל</label>
      <input
        id="age"
        aria-invalid={errors.age ? "true" : "false"}
        {...register("age", { required: true })}
      />
      {errors.age && <span role="alert">This field is required</span>}

      <label htmlFor="phoneNumber">טלפון</label>
      <input
        id="phoneNumber"
        aria-invalid={errors.phoneNumber ? "true" : "false"}
        {...register("phoneNumber", { required: true })}
      />
      {errors.phoneNumber && <span role="alert">This field is required</span>}

      <label htmlFor="adress">כתובת</label>
      <input
        id="adress"
        aria-invalid={errors.adress ? "true" : "false"}
        {...register("adress", { required: true })}
      />
      {errors.adress && <span role="alert">This field is required</span>}

      <label htmlFor="sector">מגזר</label>
      <select
        id="sector"
        aria-invalid={errors.sector ? "true" : "false"}
        {...register("sector", { required: true })}
      >
        <option value="Christian" selected>
          ללא סיווג דת
        </option>
        <option value="Jewish">יהודי</option>
        <option value="Muslim">מוסלמי</option>
        <option value="Druze">דרוזי</option>
        <option value="Christian">נוצרי</option>
      </select>
      {errors.sector && <span role="alert">This field is required</span>}

      <label htmlFor="gender">מגדר</label>
      <select
        id="gender"
        value="לא מוגדר"
        aria-invalid={errors.gender ? "true" : "false"}
        {...register("gender", { required: true })}
      >
        <option value="undefined" selected>
          לא מוגדר
        </option>
        <option value="Male">זכר</option>
        <option value="Female">נקבה</option>
      </select>
      {errors.gender && <span role="alert">This field is required</span>}

      <input className="btn" type="submit" />
    </form>
  );
};

export default Form;
