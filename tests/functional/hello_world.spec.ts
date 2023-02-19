import {test} from '@japa/runner'

test('display welcome page', async ({client}) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({hello: 'world'})
})
test('get all data posting', async ({client}) => {
  const response = await client.get('/Movies')

  response.assertStatus(200)
})
test('get data posting', async ({client}) => {
  const response = await client.get('/Movies/1')

  response.assertStatus(200)
})
test('post data posting', async ({client}) => {
  const response = await client.post('/Movies').form({
    title:'test',
    description:'test',
    rating: 1,
    image:''
  })

  response.assertStatus(200)
})

test('patch data posting', async ({client}) => {
  const response = await client.patch('/Movies/1').form({
    title:'test',
    description:'test',
    rating: 1,
    image:''
  })

  response.assertStatus(200)
})

test('delete data posting', async ({client}) => {
  const response = await client.delete('/Movies/1')

  response.assertStatus(200)
})
