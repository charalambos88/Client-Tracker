import { ClienttrackerPage } from './app.po';

describe('clienttracker App', () => {
  let page: ClienttrackerPage;

  beforeEach(() => {
    page = new ClienttrackerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
