const automator = require('miniprogram-automator')

test('页面方法测试用例5', async () => {

  const miniProgram = await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })

  // await miniProgram.navigateTo('/pages/homepage/homepage')
  const page = await miniProgram.navigateTo('/pages/detailpage/detailpage')
  //  = await miniProgram.currentPage()
  await page.callMethod('goToHomepage')
  expect(page.path).toBe("pages/detailpage/detail")
})