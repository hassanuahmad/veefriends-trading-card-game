import { useRef, useEffect } from 'react'

import { useAuth } from '@redwoodjs/auth'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

const LoginPage = ({ redirectTo }) => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    console.log('isAuthenticated: ', isAuthenticated)
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef()
  useEffect(() => {
    emailRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')

      if (redirectTo) {
        navigate(redirectTo)
      }
    }
  }

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2
                className="rw-heading rw-heading-secondary"
                data-cy="login-header"
              >
                Login
              </h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="email"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    data-cy="email-label"
                  >
                    Email
                  </Label>

                  <TextField
                    name="email"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    data-cy="email"
                    ref={emailRef}
                    validation={{
                      required: {
                        value: true,
                        message: 'email is required',
                      },
                    }}
                  />

                  <FieldError
                    name="email"
                    className="rw-field-error"
                    data-cy="email-error"
                  />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                    data-cy="password-label"
                  >
                    Password
                  </Label>

                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    data-cy="password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                  />

                  <div className="rw-forgot-link">
                    <Link
                      to={routes.forgotPassword()}
                      className="rw-forgot-link"
                      data-cy="forgot-link"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <FieldError
                    name="password"
                    className="rw-field-error"
                    data-cy="password-error"
                  />

                  <div className="rw-button-group">
                    <Submit
                      className="rw-button rw-button-blue"
                      data-cy="submit"
                    >
                      Login
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>

          <div className="rw-login-link">
            <span>Don&apos;t have an account?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
