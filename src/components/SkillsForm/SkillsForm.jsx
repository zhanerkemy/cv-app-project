import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { addSkill } from "../../store/skillsSlice";

import "./SkillsForm.scss";

const validate = (values) => {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Skill name is a required field";
  }

  if (!values.range) {
    errors.range = "Skill range is a required field";
  } else if (Number.isNaN(Number(values.range))) {
    errors.range = "Skill range must be a 'number' type";
  } else if (Number(values.range) < 10) {
    errors.range = "Skill range must be greater than or equal to 10";
  } else if (Number(values.range) > 100) {
    errors.range = "Skill range must be less than or equal to 100";
  }

  return errors;
};

const SkillsForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", range: "" }}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        dispatch(
          addSkill({
            name: values.name.trim(),
            range: Number(values.range),
          })
        );

        resetForm();
      }}
    >
      {({ isValid, dirty }) => (
        <Form className="skills-form">
          <label className="skills-form__field">
            <span>Skill name:</span>
            <Field name="name" type="text" placeholder="Enter skill name" />
            <ErrorMessage
              className="skills-form__error"
              name="name"
              component="p"
            />
          </label>

          <label className="skills-form__field">
            <span>Skill range:</span>
            <Field name="range" type="text" placeholder="Enter skill range" />
            <ErrorMessage
              className="skills-form__error"
              name="range"
              component="p"
            />
          </label>

          <button
            className="skills-form__button"
            type="submit"
            disabled={!dirty || !isValid}
          >
            Add skill
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SkillsForm;