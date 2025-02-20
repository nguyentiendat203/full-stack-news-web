import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'

export default function AuthModal({ isOpen, onClose, isSignIn, setIsSignIn }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    // Email validation
    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    // Confirm password validation (only for sign up)
    if (!isSignIn) {
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password'
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      // Handle authentication here
      console.log('Form submitted:', { email, password, confirmPassword })
    }
  }

  const switchMode = () => {
    setIsSignIn(!isSignIn)
    setErrors({})
    setPassword('')
    setConfirmPassword('')
  }

  return (
    <div
      className={`fixed inset-0 backdrop-blur-sm bg-black/50 flex items-center justify-center p-4 transition-opacity duration-200 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className={`bg-white rounded-lg w-full max-w-md relative duration-200 ${!isOpen && 'scale-95 translate-y-4'}`}>
        <button
          onClick={() => {
            setErrors({})
            setEmail('')
            onClose()
          }}
          className='absolute right-4 top-4 text-gray-500 hover:text-gray-700'
        >
          <IoMdClose size={24} />
        </button>

        <div className='p-8'>
          <h2 className='text-2xl font-semibold text-center mb-8'>{isSignIn ? 'Sign in' : 'Sign up'}</h2>

          <form onSubmit={handleSubmit} className='space-y-4'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-1'>
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setErrors({ ...errors, email: undefined })
                }}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 transition-shadow ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder='name@example.com'
              />
              {errors.email && <p className='mt-1 text-sm text-red-500'>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-1'>
                Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                  setErrors({ ...errors, password: undefined })
                }}
                className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 transition-shadow ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.password && <p className='mt-1 text-sm text-red-500'>{errors.password}</p>}
            </div>

            {!isSignIn && (
              <div>
                <label htmlFor='confirmPassword' className='block text-sm font-medium text-gray-700 mb-1'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    setErrors({ ...errors, confirmPassword: undefined })
                  }}
                  className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 ${
                    errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.confirmPassword && <p className='mt-1 text-sm text-red-500'>{errors.confirmPassword}</p>}
              </div>
            )}

            <button
              type='submit'
              className='w-full bg-black text-white rounded-md py-2 mt-6 hover:bg-gray-800 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5'
            >
              {isSignIn ? 'Sign in' : 'Sign up'}
            </button>
          </form>

          <p className='mt-4 text-center text-sm text-gray-600'>
            {isSignIn ? 'Dont have an account?' : 'Already have an account? '}
            <button onClick={switchMode} className='text-brown-600 hover:text-brown-800 font-medium transition-colors'>
              {isSignIn ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
