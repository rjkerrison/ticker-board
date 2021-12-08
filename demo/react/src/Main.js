import Code from './Code'
import Section from './components/Section'
import HelloWorld from './HelloWorld'
import Sncf from './Sncf'

const Main = () => (
  <main>
    <Section name="Example" component={HelloWorld} />
    <Section name="Code" component={Code} />
    <Section name="Sncf" component={Sncf} />
  </main>
)

export default Main
