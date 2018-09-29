import React, { Component } from "react";
import ModalForm from "./ModalForm";
import { Modal, ModalBody } from "reactstrap";

export default class Login extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    return (
      <React.Fragment>
        <a className="nav-link login" onClick={this.toggle}>
          Войти
        </a>
        <Modal toggle={this.toggle} isOpen={this.state.modal}>
          <ModalBody>
            <ModalForm updateUser={this.props.updateUser} />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}
