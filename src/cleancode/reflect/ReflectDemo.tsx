import React from "react";

const ReflectDemo = () => {
  const person = {
    name: "Bob",
    [Symbol("email")]: "bob@evil.com",
  };

  Reflect.get(person, "name"); // = Bob
  Reflect.has(person, "email"); // = true
  Reflect.has(person, "phone"); // = false
  Reflect.getPrototypeOf(person); // = { constructor ... }
  Reflect.getOwnPropertyDescriptor(person, "name"); // = { value: 'Bob', writable: true, enumerable: true, configurable: true }
  Reflect.ownKeys(person); // name, Symbol(email)

  Reflect.defineProperty(person, "phone", { writable: true });
  Reflect.has(person, "phone"); // = true
  Reflect.set(person, "phone", "123456789");

  Reflect.deleteProperty(person, "phone");
  Reflect.has(person, "phone"); // = false

  return (
    <div>
      <div>Reflect.get(person, "name") : {Reflect.get(person, "name")}</div>
    </div>
  );
};

export default ReflectDemo;
