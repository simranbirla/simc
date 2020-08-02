import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions = () => {
    return (
      <>
        <button
          onClick={() => history.push("/")}
          className="ui button primary "
        >
          Cancel
        </button>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)} //SO that it will not be invoked instantaneously
          className="ui button negative"
        >
          Delete
        </button>
      </>
    );
  };

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }

    return `Are you sure want to delete the stream with title:${this.props.stream.title} `;
  }

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          header="Are you sure you want to delete this stream?"
          content={this.renderContent()}
          action={this.renderActions}
          onDismiss={() => history.push("/")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
