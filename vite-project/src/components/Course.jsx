const Header = ({course}) => <h1>{course.name}</h1>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>

const Content = ({course}) => {
  return (
    <div>
      {course.parts.map((part) => 
          <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Total = ({course}) => {
  const sum = course.parts.reduce(
    ((sum, parts) => sum += parts.exercises), 0
  )
  return (<p style={{fontWeight: "bold"}}>total of {sum} exercises</p>)
}

const Course = ({course}) => {
  return (
    <>
      <Header course={course}/>
      <Content course={course} />
      <Total course={course} />
    </>
  )
}

export default Course