import React from 'react'

const LoginForm = ({
  handleSubmit,
  username,
  handleUsernameChange,
  password,
  handlePasswordChange
}) => {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
                    username
          <input
            id='username'
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
                    password
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" id="login">Login</button>
      </form>
    </div>
  )
}

export default LoginForm