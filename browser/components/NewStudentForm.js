import React, { Component } from "react";

export default class NewStudentForm extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <form>
        <label htmlFor="firstName">First Name</label>
        <input type="text" name="firstName" />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" name="lastName" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <input type="submit" />
      </form>
    );
  }
}
