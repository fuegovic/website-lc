import { useState, useEffect } from 'react'
import crypto from 'crypto'

const credentialsGenerator = () => {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - time >= 10000) {
        setCount(0)
        setTime(Date.now())
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [time])

  const generateCredentials = () => {
    if (count < 10) {
      const key = crypto.randomBytes(32).toString('hex')
      const iv = crypto.randomBytes(16).toString('hex')
      const jwt = crypto.randomBytes(32).toString('hex')
      const jwt2 = crypto.randomBytes(32).toString('hex')

      setCount(count + 1)

      return {
        CREDS_KEY: key,
        CREDS_IV: iv,
        JWT_SECRET: jwt,
        JWT_REFRESH_SECRET: jwt2,
      }
    }
    throw new Error('Rate limit exceeded. Wait for 10 seconds.')
  }

  return { generateCredentials }
}

export default credentialsGenerator
