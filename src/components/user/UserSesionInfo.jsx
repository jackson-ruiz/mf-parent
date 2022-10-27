import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import Button from "../forms/Button";

const buttonContent = (
  <div class="flex items-center m-auto">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 mr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
      />
    </svg>
    SALIR
  </div>
);

const handleClick = () => {
  alert("Se ha dado click en el botón");
};

const UserSesionInfo = () => {
  return (
    <>
      <h1 className="text-white text-center text-xl">Nombre Usuario.</h1>
      <UserIcon className="mt-2 w-20 text-white m-auto" />
      <Button buttonContent={buttonContent} buttonAcction={handleClick} />
    </>
  );
};

export default UserSesionInfo;
