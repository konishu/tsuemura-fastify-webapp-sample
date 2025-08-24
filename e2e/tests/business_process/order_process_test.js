SuiteOf('注文プロセスのテスト');

Scenario('ログインし、お弁当を注文し、お弁当を受けとる', ({ I }) => {
    I.amOnPage('/');
    I.click('ログインする');
    I.fillField("ユーザー名", "user1")
    I.fillField("パスワード", "super-strong-passphrase")
    I.click("ログイン")
    I.see("user1 さん")

    // カートに商品を入れる
    I.fillField("カートに入れる数量", "1")
    I.click("カートに入れる")

    // 受け取り情報を入力し、注文を確定する
    I.fillField('お名前（受取時に必要です）', 'ユーザー1')
    I.fillField('電話番号（連絡時に必要です）', '09000000000')
    I.fillField('受け取り日', '2025/08/01')
    I.fillField('受け取り目安時間', '12:00AM')
    // I.fillField('受け取り日', utils.now.format('YYYY/MM/DD'))
    // I.fillField('受け取り目安時間', utils.now.add(1, 'hour').format('hh:mmA'))
    I.click('注文を確定する')

});
