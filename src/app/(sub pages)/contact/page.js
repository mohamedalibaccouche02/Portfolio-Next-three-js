"use client"
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/app/components/contact/Form";



export default function contact() {
    return (
      <>
        <Image
          src={bg}
          alt="Next.js Portfolio website's about page background image"
          className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
          priority
          sizes="100vw"
        />
        <article   className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
            <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
              <h1 className="text-accent font-semibold text-4xl text-center capitalize text-sm xs:text-base">Contact Me</h1>
              </div>
              <Form/>

               



        </article>
  
      </>
    );
  }
