import { useState } from 'react'
import { ChatTennet } from './components/ChatTennet';
import './App.css';

const initialTennetData = {
  id: '',
  name: '',
  email: '',
  extraCodeCourse: ''
}

const App = () => {

  const [ tennetData, setTennetData ] = useState(initialTennetData)

  const execute = () => {
    if (tennetData.id) {
      setTennetData(initialTennetData)
    } else {
      setTennetData({
        id: 'inlearning',
        name: 'Juan Garcia',
        email: 'mario.lema.ch@gmail.com',
        extraCodeCourse: '9999'
      })
    }
  }

  return (
    <div className="App">
      <button className='btn-local' onClick={execute}>
        { tennetData.id ? 'Remover' : 'Mostrar' } Chat
      </button>
      {
        tennetData.extraCodeCourse && (
          <ChatTennet
            id={tennetData.id}
            name={tennetData.name}
            email={tennetData.email}
            extraCodeCourse={tennetData.extraCodeCourse}
          />
        )
      }
    </div>
  );
}

export default App;
