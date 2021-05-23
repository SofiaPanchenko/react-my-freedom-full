import {useForm} from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        aria-invalid={errors.firstName ? "true" : "false"}
        {...register('firstName', { required: true })}
      />
      {errors.firstName && (
        <span role="alert">
          This field is required
        </span>
      )}

      <input type="submit" />
    </form>
  );
};

export default Form