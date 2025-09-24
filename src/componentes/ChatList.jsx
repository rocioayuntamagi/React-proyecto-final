
import avatar from "../assets/avatar.jpeg"


const contacts = [
  { id: 1, name: "Vicent Porter", status: "left 7 mins ago", statusClass: "status-offline" },
  { id: 2, name: "Aiden Chevez", status: "online", statusClass: "status-online" },
  { id: 3, name: "Mike Thomas", status: "online", statusClass: "status-online" },
  { id: 4, name: "Christian Kelly", status: "left 10 hours ago", statusClass: "status-offline" },
  { id: 5, name: "Monica Ward", status: "online", statusClass: "status-online" },
  { id: 6, name: "Dean Henry", status: "offline since Oct 28", statusClass: "status-offline" },
]

const ChatList = () => {
  return (
    <ul>
      {
        contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <img src={avatar} alt="Foto de perfil por defecto" />
              <div>
                <h4>{contact.name}</h4>
                <p className="contacts status">{contact.status}</p>
              </div>
            </li>
          )
        })
      }
    </ul>

  )
}

export default ChatList