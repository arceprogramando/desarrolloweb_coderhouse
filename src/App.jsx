import { Header, Main, NavBar } from './components'
import { BrowserRouter } from 'react-router-dom'
import styles from './style'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={styles.flexCenter}>
          <Header />
          <NavBar />

          <Main />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
