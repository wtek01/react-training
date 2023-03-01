import React, { ComponentPropsWithoutRef, useState } from "react";

export default function TypeScript() {
  return (
    <UserCounter
      style={{ border: "2px solid red" }}
      title="User counter"
      username="Mohamed"
      email="mohamed@gmail.com"
    />
  );
}

type UserCounterProps = {
  username: string;
  email: string;
  defaultCount?: number;
} & ComponentPropsWithoutRef<"div">;
//ComponentPropsWithoutRef:  ajoute toutes les props d'un bouton ou d'un div,
// pour qu'on puisse les utiliser dans div à l'interieur du UserCounter

const UserCounter = ({
  username,
  email,
  defaultCount = 0,
  ...props // recupère toutes les props du div ComponentPropsWithoutRef<"div">;
}: UserCounterProps) => {
  const [count, setCount] = useState<number>(defaultCount);
  return (
    <>
      <div {...props}>
        <p>Username : {username}</p>
        <p>Email : {email}</p>
        <button onClick={() => setCount((c) => c + 1)}>{count}</button>
      </div>
      <p>
        Utilisation de ComponentPropsWithoutRef pour pouvoir récupérer toutes
        les props d'un div ou d'un bouton..
      </p>
    </>
  );
};
