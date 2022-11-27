import { useState } from 'react'

import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SignupPage = () => {
  const { client } = useAuth()
  const [error, setError] = useState(null)

  const onSubmit = async (data) => {
    setError(null)
    try {
      const response = await client.auth.signUp({
        email: data.email,
        password: data.password,
      })
      response?.error?.message
        ? setError(response.error.message)
        : navigate(routes.home())
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign Up</Submit>
      </Form>
    </>
  )
}

export default SignupPage
