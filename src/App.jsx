const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  return (
    <p>
      Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </p>
  )
}

const Footer = (props) => {
  return (
    <footer>
      {props.name} - {props.courseCode} - {props.section}
    </footer>
  )
}

const App = () => {
  
  const course = {
    name: 'CSIT340',
    parts: [
      {
        name: 'Introduction to ReactJS',
        exercises: 10
      },
      {
        name: 'Fundamentals of ReactJS',
        exercises: 7
      },
      {
        name: 'ReactJS Anatomy',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Footer
        name="Jasmine Blyss Sarsaba"
        courseCode="CSIT340"
        section="G6"
      />
    </div>
  )
}

export default App