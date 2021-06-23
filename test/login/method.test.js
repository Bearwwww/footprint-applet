const automator = require('miniprogram-automator')

test('页面方法测试用例1', async () => {

  const miniProgram = await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })

  await miniProgram.navigateTo('/pages/login/login')
  const page = await miniProgram.currentPage()
  await page.callMethod('goToRegister')
  // expect(page)
  console.log(page);
  expect(page.path).toBe("pages/login/login");

})