import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
      {error.error.message}: {error.status} {error.statusText}
    </div>
  )
}

export default ErrorPage
