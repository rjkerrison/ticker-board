import Code from './Code'
import Footer from './Footer'
import Header from './Header'
import HelloWorld from './HelloWorld'

const Layout = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  )
}

export default Layout
