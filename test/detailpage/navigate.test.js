const automator = require('miniprogram-automator')

test('页面跳转测试用例5', async () => {

  const miniProgram = await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })
  const pageStack = await miniProgram.pageStack()
  expect(pageStack.length).toBe(pageStack.length)
  miniProgram.navigateBack();

})