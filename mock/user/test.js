const Mock = require('mockjs')
Mock.mock('/test', 'get',
  {
    'userList|1-10': [
      {
        'id|1-10': 2
      }
    ]
  }
)
