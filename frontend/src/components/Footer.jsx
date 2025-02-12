import { LuFacebook, LuInstagram, LuMail, LuNewspaper, LuTwitter } from 'react-icons/lu'

export const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          {/* Brand Section */}
          <div className='space-y-4'>
            <div className='flex items-center space-x-2'>
              <LuNewspaper className='w-6 h-6 text-blue-400' />
              <span className='text-xl font-bold text-white'>News</span>
            </div>
            <p className='text-sm'>Delivering the latest and most important news stories.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>Quick Links</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-blue-400 transition'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition'>
                  World News
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition'>
                  Politics
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-blue-400 transition'>
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>Contact Us</h3>
            <ul className='space-y-2'>
              <li>123 Le Trong Tan</li>
              <li>TP. Ho Chi Minh</li>
              <li>Phone: 0987742553</li>
              <li>Email: nguyendat203.work@gmail.com</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4'>Follow Us</h3>
            <div className='flex space-x-4'>
              <a href='#' className='hover:text-blue-400 transition'>
                <LuFacebook className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-blue-400 transition'>
                <LuTwitter className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-blue-400 transition'>
                <LuInstagram className='w-6 h-6' />
              </a>
              <a href='#' className='hover:text-blue-400 transition'>
                <LuMail className='w-6 h-6' />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 mt-8 pt-8 text-sm text-center'>
          <p>&copy; {new Date().getFullYear()} News. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
