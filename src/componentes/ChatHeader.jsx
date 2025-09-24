import avatar from "../assets/avatar.jpeg"
// import "../styles/components/ChatHeader.css"

const ChatHeader = () => {
  return (
    <header>
      <div>
        <img src={avatar} alt="imagen de perfil" />
        <h3>Aiden Chavez</h3>
        <p>Last seen: 2 hours ago</p>
      </div>
      <div>
        <button title="Tomar una foto">📷</button>
        <button title="Enviar una foto">🖼️</button>
        <button title="Configuración">⚙️</button>
        <button title="Ayuda">❓</button>
      </div>
    </header>
  )
}

export default ChatHeader