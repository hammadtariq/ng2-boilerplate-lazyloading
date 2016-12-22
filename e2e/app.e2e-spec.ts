import { LazyloadRouterPage } from './app.po';

describe('lazyload-router App', function() {
  let page: LazyloadRouterPage;

  beforeEach(() => {
    page = new LazyloadRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
