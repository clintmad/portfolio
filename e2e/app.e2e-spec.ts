import { MadariagaPage } from './app.po';

describe('madariaga App', function() {
  let page: MadariagaPage;

  beforeEach(() => {
    page = new MadariagaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
