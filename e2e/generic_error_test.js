SuiteOf('一般的なエラーのテスト')

Scenario('ユーザが存在しないURLにアクセスすると、エラーメッセージと商品一覧へのリンクが表示される',({I})=>{
    I.amOnpage('/undefined')
    I.see('お探しのページは見つかりませんでした')
    I.click('商品一覧へ戻る')
    I.seeInTitle('商品一覧')
})