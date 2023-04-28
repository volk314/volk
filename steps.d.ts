/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, cartPage: cartPage, 
    checkoutPage: checkoutPage, landingPage: landingPage, loginPage: loginPage,
    productPage: productPage, registerPage: registerPage}
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
