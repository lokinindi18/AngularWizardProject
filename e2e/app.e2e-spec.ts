import { AngularWizardProjectPage } from './app.po';

describe('angular-wizard-project App', function() {
  let page: AngularWizardProjectPage;

  beforeEach(() => {
    page = new AngularWizardProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
