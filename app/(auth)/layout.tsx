import Image from "next/image";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-orange-100 w-screen h-screen overflow-hidden grid">
      <div className="place-content-center place-self-center ">
        <div className="w-full flex flex-col items-center">
          <Image
            src="/oxxo-logo.svg"
            alt="Logo de Ocso"
            width={150}
            height={0}
            className="my-2"
          />
        </div>
        {children}
      </div>
    </div>
  );
}
