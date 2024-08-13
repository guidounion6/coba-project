"use client"
import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import Swal from "sweetalert2"



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
  
      const response = await fetch('https://formsubmit.co/guidocontartese90@gmail.com', {
        method: 'POST',
        body: JSON.stringify(values),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: '¡Correo enviado con éxito!',
          text: 'Tu mensaje ha sido enviado correctamente.',
        });
       
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.log("Error al enviar el mensaje", error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Error al enviar el mensaje, revisa los campos e intenta nuevamente.',
      });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <section  className="h-[100vh] w-full bg-[url(/assets/img/Fondos/Fondo5.jpg)] bg-cover" id="contacto">
      <div className='flex w-full h-full justify-center items-center' >
        <div className='w-1/2 h-full backdrop-blur-lg rounded-md flex flex-col  justify-between pt-6 '>
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
                    className='block text-xl font-semibold mb-1'
                  >
                    Nombre
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-1"
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
                    className="mt-1 block w-full px-1"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-lg" />
                </div>
                <div className='flex flex-col p-5 min-w-[400px]'>
                  <label
                    htmlFor="asunto"
                    className="block text-xl font-semibold mb-1"
                  >
                    Asunto
                  </label>
                  <Field
                    type="text"
                    id="asunto"
                    name="asunto"
                    className="mt-1 block w-full px-1"
                  />
                  <ErrorMessage name="asunto" component="div" className="text-red-500 text-lg" />
                </div>
                <div className='flex flex-col p-5 min-w-[400px]'>
                  <label
                    htmlFor="mensaje"
                    className='block text-xl font-semibold mb-1'
                  >
                    Mensaje
                  </label>
                  <Field
                    type="text"
                    id="mensaje"
                    name="mensaje"
                    className="mt-1 block w-full h-[100px] px-1"
                  />
                  <ErrorMessage name="mensaje" component="div" className="text-red-500 text-lg" />
                </div>
                <div className='flex items-center justify-center'>

                  <button
                    type="submit"
                    className=" h-auto min-w-auto items-center text-center bg-white px-2 hover:bg-gray-300"
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