import { AuthLayout } from "../components/templates"
import LoginForm from "../components/templates/LoginForm"

const Login = () => {
  return (
    <AuthLayout login>
      <LoginForm />
    </AuthLayout>
  )
}

export default Login