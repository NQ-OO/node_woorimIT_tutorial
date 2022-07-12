"use strict";

class UserStorage {
  static #users = {
    id: ["abc", "ded", "dfdf"], 
    psword : ["123", "1234","12345"],
  };

  static getUsers(...fields){
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {})
    return newUsers; 
  }

  static getUserInfo(id){
    const users = this.#users;
    const idx = users.id.indexOf(id);
    console.log("idx:", idx);
    const usersKeys = Object.keys(users);
    console.log("idx:", usersKeys);
    const userInfo = usersKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    return userInfo;
  }
}

module.exports = UserStorage;