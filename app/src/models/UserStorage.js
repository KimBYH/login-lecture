"use strict";

const fs = require("fs").promises;

class UserStorage {
  static #getUserInfo() {
    const users = JSON.parse(data);

    const idx = users.id.indexOf(id);
    const userKey = Object.keys(users);
    const userInfo = userKey.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    console.log(userInfo);
    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getUserInfo();
      })
      .catch((err) => console.err);
  }

  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.pwd.push(userInfo.pwd);
    return { success: true };
  }
}

module.exports = UserStorage;
