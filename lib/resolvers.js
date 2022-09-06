'use strict'

const courses = [
  {
    _id: '1',
    title: 'Titulo 1',
    teacher: 'Profesor 1',
    description: 'Description 1',
    topic: 'programacion'
  },
  {
    _id: '2',
    title: 'Titulo 2',
    teacher: 'Profesor 2',
    description: 'Description 2',
    topic: 'programacion'
  },
  {
    _id: '3',
    title: 'Titulo 3',
    teacher: 'Profesor 3',
    description: 'Description 3',
    topic: 'programacion'
  }
]

const resolvers = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.find(course => course._id === args.id)
      return course
    }
  }
}

export default resolvers
