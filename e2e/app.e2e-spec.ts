import { ToggleManagerUiPage } from './app.po';

describe('toggle-manager-ui App', () => {
  let page: ToggleManagerUiPage;

  beforeEach(() => {
    page = new ToggleManagerUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
