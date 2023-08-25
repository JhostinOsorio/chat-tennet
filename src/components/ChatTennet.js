import { useEffect } from "react"

export const ChatTennet = ({
  id = '',
  name = '',
  email = '',
  extraCodeCourse = ''
}) => {

  const CDN = 'https://www.tenetcomm.com/cdn/webchat/v1/index.js'
  const generateChat = async (extraCodeCourse) => {
    if (extraCodeCourse) {
      await new Promise(resolve =>  setTimeout(() => resolve(true), 50))
      const resp = await fetch(CDN)
      const jsCode = await resp.text()

      const tennetFn = new Function(jsCode)
      tennetFn()
    }
  }

  useEffect(() => {
    generateChat(extraCodeCourse)
  }, [extraCodeCourse])

  return (
    <div
      className="chat"
      data-tenet-id={id}
      data-session-name={name}
      data-session-email={email}
      data-extra-codigo-curso={extraCodeCourse}
    />
  );
}
