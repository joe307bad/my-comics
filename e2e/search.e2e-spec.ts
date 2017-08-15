import {browser, element, by, ElementFinder} from 'protractor';

describe('search results and crud e2e test', () => {

  beforeEach(() => {
    browser.get('/#/nav/n4/search');
  });

  it('execute a search, add a comic, open menu, and remove comic', () => {

    'superman'.split('').forEach((c) => element(by.css('#searchQuery .text-input')).sendKeys(c));
    element(by.css('#getSearchResults')).click();
    browser.driver.sleep(5000);

    browser.driver.findElements(by.css('#search-results ion-item')).then(function (elems) {

      expect(elems.length).toBeGreaterThan(0);


      let addButtons = element(by.css('#search-results ion-item button'));
      let removeButtons = element(by.css('#my-comics ion-item button'));

      addButtons.isDisplayed().then(function (isDisplayed) {
        if (isDisplayed) {
          addButtons.click().then(function () {
            browser.driver.sleep(5000);
            element(by.css('.open-menu')).click();
            browser.driver.sleep(5000);

            removeButtons.isDisplayed().then(function (isDisplayed1) {
              if (isDisplayed1) {
                removeButtons.click();
                browser.driver.sleep(5000);
              } else {
                throw new Error('Error occurred!');
              }
            });
          });
        } else {
          throw new Error('Error occurred!');
        }
      });
    });

  });
});
