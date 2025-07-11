/* eslint-env node */

import { fakerES_MX as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_APP_SUPABASE_URL
const serviceRoleKey = process.env.SERVICE_ROLE_KEY

const supabase = createClient(supabaseUrl, serviceRoleKey)

const seedProjects = async (numEntries) => {
  const projects = Array.from({ length: numEntries }).map(() => ({
    name: faker.lorem.words({ min: 2, max: 5 }),
    description: faker.lorem.paragraph(),
    slug: faker.lorem.slug(3),
    status: faker.helpers.arrayElement(['in-progress', 'completed']),
    collaborators: faker.helpers.arrayElements([1, 2, 3]),
  }))

  // const { data, error } = await supabase.from('projects').insert(projects)
  await supabase.from('projects').insert(projects)

  // if (error) {
  //   console.error('Error inserting projects:', error)
  // } else {
  //   console.log(`Inserted ${data.length} projects`)
  // }
}

const seedTasks = async (numEntries) => {
  const tasks = Array.from({ length: numEntries }).map(() => ({
    name: faker.lorem.words({ min: 2, max: 5 }),
    status: faker.helpers.arrayElement(['in-progress', 'completed']),
    description: faker.lorem.paragraph(),
    due_date: faker.date.future(),
    project_id: faker.number.int({ min: 1, max: 100 }), // Assuming project IDs are from 1 to 100
  }))

  await supabase.from('tasks').insert(tasks)
}

const seed = async () => {
  await seedProjects(100)
  await seedTasks(100)
}

seed()
  .then(() => {
    console.log('Seeding completed successfully')
    process.exit(0)
  })
  .catch((error) => {
    console.error('Error during seeding:', error)
    process.exit(1)
  })
