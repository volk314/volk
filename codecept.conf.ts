import {
  setHeadlessWhen,
  setCommonPlugins
} from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://opencart.qatestlab.net',
      waitForNavigation: 'networkidle',
      waitForTimeout: 5000,
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file',
    cartPage: "./pages/cartPage.ts",
    checkoutPage: "./pages/checkoutPage.ts",
    landingPage: "./pages/landingPage.ts",
    loginPage: "./pages/loginPage.ts",
    productPage: "./pages/productPage.ts",
    registerPage: "./pages/registerPage.ts"
  },
  name: 'volk'
}