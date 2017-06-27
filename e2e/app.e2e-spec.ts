import { Angular2LeafletBasePage } from './app.po';

describe('angular2-leaflet-base App', () => {
  let page: Angular2LeafletBasePage;

  beforeEach(() => {
    page = new Angular2LeafletBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
