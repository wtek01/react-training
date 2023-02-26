import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    notes: "",
  });

  const handleChange = (fieldName: string) => (e: any) => {
    setValues({ ...values, [fieldName]: e.currentTarget.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={values.name}
        onChange={handleChange("name")}
      />
      <input
        type="text"
        placeholder="Enter your email"
        value={values.email}
        onChange={handleChange("email")}
      />
      <textarea
        placeholder="Enter some notes"
        value={values.notes}
        onChange={handleChange("notes")}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default Form;
