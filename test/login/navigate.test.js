const automator = require('miniprogram-automator')

test('页面跳转测试用例1', async () => {

  const miniProgram = await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })
  const pageStack = await miniProgram.pageStack()
  expect(pageStack.length) // 当前页面栈数量
  expect(pageStack.length).toBe(2)
  miniProgram.navigateBack();

})