'use client';
import { Button, Input } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { API_URL } from "@/constants";

export default function LoginPage(){
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    let authData: any = {}
    authData.userEmail = formData.get("userEmail");
    authData.userPassword = formData.get("userPassword");
    const {data} = await axios.post(`${API_URL}/auth/login`, {...authData},{
      withCredentials: true
    });
    return;
  }
    return (<form className="bg-orange-400 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
        <p className="text-2xl my-4 text-white text-center">Iniciar sesión</p>
        <div className="flex flex-col gap-2 items-center">
          <Input label="Email" name="userEmail" type="email" isRequired={true} size="sm" />
          <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="sm" />
        </div>
        <div className="my-3 flex flex-col items-center gap-2">
          <Button type="submit" className=" w-1/2" color="primary">
            Iniciar sesión
          </Button>
          <p className=" text-white text-sm text-center">
            ¿Aún no tienes cuenta? <Link href="/signup" className="underline bold">Regístrate</Link>
          </p>
        </div>
      </form>
      );
}