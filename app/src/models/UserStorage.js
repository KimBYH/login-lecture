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

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKey = Object.keys(users);
    const userInfo = userKey.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pwd.push(userInfo.pwd);
    return { success: true };
  }
}

module.exports = UserStorage;
