import { useState } from "react"
import { AuthLayout, Onboarding } from "../components/templates"
import SignupForm from "../components/templates/SignupForm"

const Login = () => {
  const [show, setShow] = useState(false)
  const showOnboarding = () => {
    setShow(true)
  }
  return (
    <AuthLayout>
      <SignupForm showOnboarding={showOnboarding} />
      {
        show && <Onboarding />
      }
    </AuthLayout>
  )
}

export default Login