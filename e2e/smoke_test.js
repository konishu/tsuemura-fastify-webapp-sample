SuiteOf('smoke');

Scenario('Example.comにアクセスする',  ({ I }) => {
    I.amOnPage('https://example.com')
    I.see('Example Domain')
});
