import { Button, Input } from "@nextui-org/react";
import Link from "next/link";

export default function LoginPage(){
    return (<div className="bg-orange-400 px-10 py-2 rounded-md">
        <p className="text-2xl my-4 text-white text-center">Iniciar sesión</p>
        <div className="flex flex-col gap-2 items-center">
          <Input label="Email" type="email" isRequired={true} size="sm" />
          <Input label="Contraseña" type="password" isRequired={true} size="sm" />
        </div>
        <div className="my-3 flex flex-col items-center gap-2">
          <Button className=" w-1/2" color="primary">
            Registrarse
          </Button>
          <p className=" text-white text-sm text-center">
            ¿Aún no tienes cuenta? <Link href="/signup" className="underline bold">Regístrate</Link>
          </p>
        </div>
      </div>
      );
}