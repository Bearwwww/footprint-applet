const automator = require('miniprogram-automator')

test('页面方法测试用例3', async () => {

  const miniProgram = await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })

  const page=await miniProgram.redirectTo('/pages/mine/mine')
  const page = await miniProgram.currentPage()
  await page.callMethod('goToPulish')
  // miniProgram.navigateBack();
  expect(page.path).toBe("pages/mine/mine");

})