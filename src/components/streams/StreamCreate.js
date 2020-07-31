import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    console.log(formProps.meta);

    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input type="text" placeholder="enter" {...formProps.input} />
        <div>{formProps.meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }
  render() {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          label="Enter title of stream"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description of stream"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const formValidate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title"; //The key i.e errors.(title) interacts with FIELD NAME
  }

  if (!formValues.description) {
    errors.description = "You must enter a description"; //th key interacts with the FIELD
  }

  return errors;
};

export default reduxForm({ form: "streamCreate", validate: formValidate })(
  StreamCreate
);
