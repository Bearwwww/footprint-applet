const automator = require('miniprogram-automator')

test('页面方法测试用例2', async () => {

  const miniProgram = await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })

  await miniProgram.redirectTo('/pages/register/register')
  const page = await miniProgram.currentPage()
  console.log(page)
  await page.callMethod('goToLogin')
  // miniProgram.navigateBack();
  expect(page.path).toBe("pages/register/register");

})