import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import { useSelector } from 'react-redux'
import { selectTheme } from './redux/sliceMode'

const data = {
  Name: 'Your Name',
  list: [
    {
      link: '/blog/',
      linkTitle: 'Blog'
    },
    {
      link: '/blog/projects',
      linkTitle: 'Projects'
    },
    {
      link: '/blog/about',
      linkTitle: 'About'
    },
    {
      link: '/blog/newlattes',
      linkTitle: 'Newsletter'
    }
  ]
}

const list = [
  { content: 'Twitter' },
  { content: 'LinkedIn' },
  { content: 'Email' },
  { content: 'RSS feed' },
  { content: 'Add to Feedly' }
]
function App() {
  const darkMode = useSelector(selectTheme);
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  return (
    <section className='dark:bg-darkColor dark:text-white w-full'>
      <div className='max-w-[1440px] w-full mx-auto'>
        <NavBar data={data} />
        <div>
          <Outlet />
        </div>
        <Footer ul={list} />
      </div>
    </section>
  )
}

export default App
