import {browser, element, by, ElementFinder} from 'protractor';

describe('search results and crud e2e test', () => {

  beforeEach(() => {
    browser.get('/#/nav/n4/search');
  });

  it('reach the search page', () => {
    expect(browser.getTitle()).toEqual('Search Results');
  });

  it('search button is present', () => {
    expect(element(by.css('#getSearchResults')).isPresent()).toBeTruthy();
  });

  it('execute a search', () => {

    'superman'.split('').forEach((c) => element(by.css('#searchQuery .text-input')).sendKeys(c));
    element(by.css('#getSearchResults')).click();
    browser.driver.sleep(5000);

    browser.driver.findElements(by.css('#search-results ion-item')).then(function (elems) {
      expect(elems.length).toBeGreaterThan(0);
    });

  });

  it('add a comic to the list of comics', () => {
    element.all(by.css('#search-results ion-item button')).click();
  });

  it('check if comic has been added to my comics', () => {

  });
});
