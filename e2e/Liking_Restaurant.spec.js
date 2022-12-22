/* eslint-disable no-undef */ 
const assert = require('assert');

Feature('Liking Movies');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
  });
  
  Scenario('showing empty liked menu restaurant', ({ I }) => {
    I.dontSeeElement('.list_item');
  });
  
  Scenario('liking one restaurant', async ({ I }) => {
    I.dontSeeElement('.list_item');
    I.amOnPage('/');
    I.waitForElement('.list_item');
    I.seeElement('.list_item_title');
  
    const firstRestaurant = locate('.list_item_title a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    I.scrollTo('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');
    pause();
    I.amOnPage('/#/favorite');
    I.waitForElement('.list_item')
    I.seeElement('.list_item');
    const likedRestaurantTitle = await I.grabTextFrom('.list_item_title a');
  
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  });
