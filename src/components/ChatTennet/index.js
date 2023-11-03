import { useEffect, useMemo } from "react"
import './tennet.css'
import { tennetFn } from './tennet'

export const ChatTennet = ({
  id = '',
  name = '',
  email = '',
  extraCodeCourse = ''
}) => {

  const srcIframe = useMemo(() => (
    `https://tenetcomm.retool.com/embedded/public/3acf65c4-49a8-420e-a157-10370b3809d0?codigo_curso=${extraCodeCourse}&nombre_alumno=${name}&correo_alumno=${email}`
  ), [extraCodeCourse, name, email]) 

  useEffect(() => {
    if (extraCodeCourse) {
      tennetFn()
    }
  }, [extraCodeCourse])

  return (
    <div
      className="chat chat-container"
      data-tenet-id={id}
      data-session-name={name}
      data-session-email={email}
      data-extra-codigo-curso={extraCodeCourse}
    >
      {/* Boton */}
      <button className="chat-button bg-primary-700 hover:bg-primary-500">
        {/* Elemento de notificacion */}
        <span
          id="bubble"
          className="bg-red-500 rounded-full px-3 py-2 text-xs -top-3 right-2 absolute hidden"
        ></span>
        {/* Texto del boton */}
        <span className="chat-button__text">Chatea con tu docente</span>
        {/* Icono del botón */}
        <svg 
          className="chat-button__icon" 
          xmlns="http://www.w3.org/2000/svg"
          width="18.672"
          height="18.672"
          viewBox="153.164 17.664 18.672 18.672"
        >
          <path
            d="M169.969 17.664H155.03c-1.027 0-1.867.84-1.867 1.867v16.805l3.734-3.734h13.07c1.028 0 1.868-.84 1.868-1.868V19.531c0-1.027-.84-1.867-1.867-1.867Z"
            fill="#fff"
            fill-rule="evenodd"
            data-name="Icon material-chat-bubble"
          />
        </svg>
      </button>
      
      {/* Ventana del Chat */}
      <div className="chat-window flex hidden overflow-hidden flex-col inner-shadow shadow-md border border-gray-300">
        {/* Cabecera del Chat */}
        <div className="bg-primary-700 text-white chat-header">
          <span className="flex-grow">Chatea con tu docente</span>
          <button type="button" className="close pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFF" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
        </div>

        {/* Iframe del Chat */}
        <div className="flex-grow">
          <iframe
            id="chat-tennet-iframe"
            title="chat-iframe"
            className="w-full h-full tennet-iframe"
            src={srcIframe}
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
