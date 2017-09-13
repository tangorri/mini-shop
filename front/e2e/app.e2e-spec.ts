import { MiniShopFrontPage } from './app.po';

describe('mini-shop-front App', () => {
  let page: MiniShopFrontPage;

  beforeEach(() => {
    page = new MiniShopFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
