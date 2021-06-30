const automator = require('miniprogram-automator')

test('页面方法测试用例4', async () => {

  const miniProgram = await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })

  await miniProgram.navigateTo('/pages/homepage/homepage')
  const page = await miniProgram.currentPage()
  await page.callMethod('goToMine')
  miniProgram.navigateBack();
  expect(page.path).toBe("pages/homepage/homepage");

})