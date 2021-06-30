const automator = require('miniprogram-automator')

test('页面详情测试用例3', async () => {

  const miniProgram = await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })
  
  await miniProgram.navigateTo('/pages/mine/mine')
  const page = await miniProgram.currentPage()
  const { width, height } = await page.size()
  expect(width).toBe(width)
  expect(height).toBe(height)

})