import React from "react";
import Modal from "../Modal";
import history from "../../history";
const StreamDelete = () => {
  const actions = () => {
    return (
      <>
        <button
          onClick={() => history.push("/")}
          className="ui button primary "
        >
          Cancel
        </button>
        <button className="ui button negative">Delete</button>
      </>
    );
  };
  return (
    <div>
      StreamDelete
      <Modal
        header="Delete Stream"
        content="Are you Sure to Delete the Stream?"
        action={actions}
        onDismiss={() => history.push("/")}
      />
    </div>
  );
};

export default StreamDelete;
