const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:5000' : 'https://project-49-project.herokuapp.com'
