/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file');
type landingPage = typeof import('./pages/landing');
type loginPage = typeof import('./pages/login');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, landingPage: landingPage, loginPage: loginPage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
