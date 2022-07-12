"use strict";

class UserStorage {
  static #users = {
    id: ["abc", "ded", "dfdf"], 
    psword : ["123", "1234","12345"],
    name : ["first_name", "second_name", "third_name"]
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

  static save(userInfo){
    const users = this.#users;
    users.id.push(userInfo.id);
    users.name.push(userInfo.name);
    users.psword.push(userInfo.psword);
    console.log(users);
  }

}

module.exports = UserStorage;