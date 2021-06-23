const automator = require('miniprogram-automator')

test('页面详情测试用例1', async () => {

  const miniProgram = await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })
  
  const loginPage = await miniProgram.navigateTo('/pages/login/login')
  const page = await miniProgram.currentPage()
  const { width, height } = await page.size()
  // expect(width, height)
  expect(width)
  expect(height)
  expect(width).toBe(414)
  expect(height).toBe(672)

})