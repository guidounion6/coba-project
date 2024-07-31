"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"



const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Debe contener al menos 3 caracteres de largo')
    .max(25, "El nombre no debe superar los 25 caracteres")
    .required("Campo oblitagorio"),

  email: Yup.string()
    .min(3, 'Debe contener al menos 3 caracteres de largo')
    .email("Email invalido")
    .required("Campo oblitagorio"),
  asunto: Yup.string()
    .min(3, 'Debe contener al menos 3 caracteres de largo')
    .max(50, "El asunto no debe superar los 50 caracteres")
    .required("Campo oblitagorio"),
  mensaje: Yup.string()
    .min(10, 'Debe contener al menos 10 caracteres de largo')
    .max(100, "El nombre no debe superar los 100 caracteres")
    .required("Campo oblitagorio")
})

interface ContactFormValues {
  name: string;
  email: string;
  asunto: string;
  mensaje: string;
}

type SetSubmitting = (isSubmitting: boolean) => void

const Contact = () => {
  const [message, setMessage] = useState("")

  const handleSubmit = async (values: ContactFormValues, { setSubmitting }: { setSubmitting: SetSubmitting }) => {
    try {
      setSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setMessage("Mensaje Enviado");
    } catch (error) {
      console.log("Error al enviar el mensaje", error);
      setMessage("Error al enviar el mensaje, revisa los campos e intenta nuevamente");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section className="h-[100vh] w-full bg-[url(/assets/img/Fondos/Fondo6.jpg)] bg-cover">
      <div className='flex w-full h-full justify-center items-center '>
        <div className='w-1/2 h-full backdrop-blur-lg rounded-md flex flex-col items-center justify-between pt-6 '>
          <Formik
            initialValues={{ name: "", email: "", asunto: "", mensaje: "" }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className='flex flex-col p-4 min-w-[400px]'>
                  <label
                    htmlFor="name"
                    className='block text-xl font-semibold mb-1 text-center'
                  >
                    Nombre
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full"
                  />
                  <ErrorMessage name="name" component="span" className="text-red-500 text-lg" />
                </div>
                <div className='flex flex-col p-5 min-w-[400px]'>
                  <label
                    htmlFor="email"
                    className='block text-xl font-semibold mb-2'
                  >
                    Email: 
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-lg" />
                </div>
                <div className='flex flex-col p-5 min-w-[400px]'>
                  <label
                    htmlFor="asunto"
                    className='block text-xl font-semibold mb-1 text-center'
                  >
                    Asunto
                  </label>
                  <Field
                    type="text"
                    id="asunto"
                    name="asunto"
                    className="mt-1 block w-full"
                  />
                  <ErrorMessage name="asunto" component="div" className="text-red-500 text-lg" />
                </div>
                <div className='flex flex-col p-5 min-w-[400px]'>
                  <label
                    htmlFor="mensaje"
                    className='block text-xl font-semibold mb-1 text-center'
                  >
                    Mensaje
                  </label>
                  <Field
                    type="text"
                    id="mensaje"
                    name="mensaje"
                    className="mt-1 block w-full h-[100px]"
                  />
                  <ErrorMessage name="mensaje" component="div" className="text-red-500 text-lg" />
                </div>
                <div className='flex items-center justify-center'>

                  <button
                    type="submit"
                    className="w-1/3 h-auto items-center text-center bg-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando Mensaje..." : "Enviar Mensaje"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  )
}

export default Contact