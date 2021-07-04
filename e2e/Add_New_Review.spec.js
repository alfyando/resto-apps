Feature('Add New Review');

Before(({ I }) => {
    I.amOnPage('/');
});

Scenario('add new review to first restaurant', ({ I }) => {
    I.seeElement('.card_item_title a');
    I.click(locate('.card_item_title a').first());
    I.seeElement('.detail_review_item');
    I.fillField('name', 'Alfyando');
    I.fillField('content', 'Testing e2e');
    I.click('.submit');
    I.see('Alfyando', '.review_name');
    I.see('Testing e2e', '.review_body');
});