const automator = require('miniprogram-automator')

test('页面跳转测试用例1', async () => {

  await automator.connect({
    wsEndpoint: 'ws://localhost:9420'
  })
  automator.launch().then(async miniProgram => {
    await miniProgram.navigateTo("/pages/login/login");
    // 获取当前页面对象
    const page = miniProgram.currentPage();
    const path = page.path;

    // 获取当前页面的输入框和按钮组件
    const inputPhone = await page.$('.inputText1')
    const inputPassword = await page.$('.inputText2')
    const loginBtn = await page.$('.login-btn')
    
    // 模拟输入
    inputPhone.input("12345678913");
    inputPassword.input(123456);
    const phone = await miniProgram.callWxMethod('getPhoneNumber')
    const password = await miniProgram.callWxMethod('getPassword')
    
    // 跳转至广场页面
    loginBtn.tap();
    const page2 = miniProgram.currentPage();


  })


})