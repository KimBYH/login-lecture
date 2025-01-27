"use strict";

class UserStorage {
  static #users = {
    id: ["1234", "김", "kim"],
    pwd: ["1111", "1234", "123456"],
    name: ["김병현", "나개발", "김팀장"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;
