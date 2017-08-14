import {browser, element, by, ElementFinder} from 'protractor';

describe('my-comics e2e test', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('the home page is displayed by default', () => {
    expect(browser.getTitle()).toEqual('Home');
  });

  it('go to the search page', () => {

    // Click the goToSearch button
    element(by.css('#goToSearch')).click().then(() => {
      // Wait for the page transition
      browser.driver.sleep(1000);
      expect(element(by.css('#getSearchResults')).isPresent()).toBeTruthy();
    });
  });

  // it('click Search button to get default results', () => {
  //
  //   expect(element(by.css('#getSearchResults')).isPresent()).toBeTruthy();
  // });

});
