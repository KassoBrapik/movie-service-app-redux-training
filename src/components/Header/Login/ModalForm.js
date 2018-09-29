import React, { Component } from "react";
import FormField from "./FormField";
import { API_KEY_3 } from "../../../utils";

export default class ModalForm extends Component {
  state = {
    username: "",
    password: "",
    repeatPassword: "",
    errors: {}
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate = values => {
    // console.log(values);
    const errorsData = {}; //определеям обьект для работы ф-и Валидации с целью закиинуть в него инфу, кторая будет выводиться в случае ошибок
    if (values.username === "") {
      errorsData.username = "Не должен быть пустым";
    }
    if (values.password === "") {
      errorsData.password = "Не должен быть пустым";
    }
    if (values.repeatPassword !== values.password) {
      errorsData.repeatPassword = "Должен совпадать с паролем";
    }

    return errorsData;
  };

  handleClick = event => {
    // console.log(event.target);
    const errorsForValidate = this.validate(this.state); //передаем в переменную ОшибкиДляВалидации результат ф-и Валидация с вкинутыми значениями полей в State (получаем значение обьекта ДанныеОшибок)
    if (Object.keys(errorsForValidate).length > 0) {
      this.setState({
        errors: errorsForValidate
      });
    }
    //How do I generate a session id?
    //1)Create a new REQUEST TOKEN
    // const link = `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY_3}`;
    // fetch(link)
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(responseData => {
    //     // console.log(data);
    //     const { request_token } = responseData;
    //   });
  };

  render() {
    const { errors, username, password, repeatPassword } = this.state;
    // console.log("this.state.errorsFirst", this.state.errors);
    return (
      <form>
        <h2 className="text-center">Авторизация</h2>
        <FormField
          labelText="Имя пользователя"
          id="username"
          placeholder="Введите имя пользователя"
          type="text"
          name="username"
          value={username}
          errors={errors.username}
          onChange={this.handleChange}
        />
        <FormField
          labelText="Пароль"
          id="password"
          placeholder="Введите пароль"
          type="password"
          name="password"
          value={password}
          errors={errors.password}
          onChange={this.handleChange}
        />
        <FormField
          labelText="Подтвердите пароль"
          id="repeatPassword"
          placeholder="Подтвердите пароль"
          type="password"
          name="repeatPassword"
          value={repeatPassword}
          errors={errors.repeatPassword}
          onChange={this.handleChange}
        />
        <div className="button-wrapper d-flex justify-content-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleClick}
          >
            Войти
          </button>
        </div>
      </form>
    );
  }
}
