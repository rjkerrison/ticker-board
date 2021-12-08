const Section = ({ name, component: Component }) => {
  return (
    <section>
      <h2>{name}</h2>
      <Component />
    </section>
  )
}

export default Section
