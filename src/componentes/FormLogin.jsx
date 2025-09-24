import { useState } from "react"
import { useNavigation } from "react-router-dom"

const FormLogin = () => {
  const [password, setPassword] = useState()
  const [message, setMessage] = useState()
  const [error, setError] = useState()
  const navigate = useNavigate()

  const PASS = "pepe123"

  const validatePassword = () => {
    setMessage(null)
    setError(null)

    if (password === PASS)
      setMessage("contraseña valida, seras redirigido.")
    setTimeout(() => {
      navigate("/chat")
    }, 3000)
  } else {
    setError("Contraseña invalida, intentelo nuevamente.")
}
}



const handleSubmit = (e) => {
  e.preventDefault()
  validatePassword()
}

return (
  <form onSubmit={handleSubmit}>
    <label htmlFor="">Contraseña de acceso</label>
    <input type="password" onChange={(event) => setPassword(event.target.value)} />
    <button>Acceder</button>
    {message && <p style={{ color: "green" }}>{message}</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}


  </form>
)


export default FormLogin