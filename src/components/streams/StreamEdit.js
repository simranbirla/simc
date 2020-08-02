import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import { formValues } from "redux-form";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>;
    }

    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          onSubmitt={this.onSubmit}
          initialValues={_.pick(this.props.stream, "title", "description")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const num = ownProps.match.params.id;
  return { stream: state.streams[num] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
