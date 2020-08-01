import React from "react";
import { Field, reduxForm } from "redux-form";
import { createStream } from "../../actions";
import { connect } from "react-redux";
class StreamCreate extends React.Component {
  renderError = ({ touched, error }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = (formProps) => {
    const classname = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : null
    }`;
    return (
      <div className={classname}>
        <label>{formProps.label}</label>
        <input
          type="text"
          placeholder="enter"
          {...formProps.input}
          autoComplete="off"
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };
  render() {
    return (
      <form
        className="ui form error"
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

const formredux = reduxForm({ form: "streamCreate", validate: formValidate })(
  StreamCreate
);

export default connect(null, { createStream })(formredux);
