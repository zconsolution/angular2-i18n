import { Angular2I18nNgTranslatePage } from './app.po';

describe('angular2-i18n-ng-translate App', () => {
  let page: Angular2I18nNgTranslatePage;

  beforeEach(() => {
    page = new Angular2I18nNgTranslatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
