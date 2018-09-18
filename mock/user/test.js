const Mock = require('mockjs')
Mock.mock('http://localhost:8080/test', 'get',
  {
    'userList|1-10': [
      {
        'id|1-10': 2
      }
    ]
  }
)

// export default test
