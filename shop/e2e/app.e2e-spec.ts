import { AbbyyTestLocPage } from './app.po';

describe('abbyy-test-loc App', function() {
  let page: AbbyyTestLocPage;

  beforeEach(() => {
    page = new AbbyyTestLocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
