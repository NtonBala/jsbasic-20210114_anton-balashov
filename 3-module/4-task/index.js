/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
"use strict";

function showSalary(users, age) {
  if (!Array.isArray(users)) {
    throw new Error("first argument should be an array");
  }

  if (
    typeof age !== "number" ||
    isNaN(age) ||
    age > Number.MAX_SAFE_INTEGER ||
    age < Number.MIN_SAFE_INTEGER
  ) {
    throw new Error("second argument should be a valid number");
  }

  return users
    .filter((user) => user.age <= age)
    .map((user) => `${user.name}, ${user.balance}`)
    .join("\n");
}
