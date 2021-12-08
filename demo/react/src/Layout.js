import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Code from './Code'
import Footer from './Footer'
import Header from './Header'
import HelloWorld from './HelloWorld'
import Sncf from './Sncf'

const Main = () => (
  <main>
    <section>
      <h2>Example</h2>
      <HelloWorld />
    </section>

    <section>
      <h2>Code</h2>
      <Code />
    </section>
  </main>
)

const Layout = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/sncf" element={<Sncf />} />
          <Route element={<Main />} />
        </Routes>
      </Router>

      <Footer />
    </>
  )
}

export default Layout
