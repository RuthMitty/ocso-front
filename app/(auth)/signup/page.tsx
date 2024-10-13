import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="bg-orange-400 px-10 py-2 rounded-md">
      <p className="text-2xl my-4 text-white text-center">Registrarse</p>
      <div className="flex flex-col gap-2 items-center">
        <Input label="Email" type="email" isRequired={true} size="sm" />
        <Input label="Contraseña" type="password" isRequired={true} size="sm" />
        <Input label="Repetir contraseña" type="password" isRequired={true} size="sm" />
      </div>
      <div className="my-3 flex flex-col items-center gap-2">
        <Button className=" w-1/2" color="primary">
          Registrarse
        </Button>
        <p className=" text-sm text-center text-white">
          ¿Ya tienes una cuenta? <Link href="/login" className="underline bold">Inicia sesión</Link>
        </p>
      </div>
    </div>
  );
}
