# e2e-testing-actions
E2E testing for Google Assistant Actions

# Setup
```sh
npm install

# Generate secret
./node_modules/actions-on-google-testing/generate-credentials.js ./your_client_secret.json
mv ./test-credentials.json ./secret/test-credentials.json
```

# Run test
```sh
% npm run test

> e2e-test-actions@1.0.0 test /your_app_path/e2e-test-actions
> ava -c 1 -s ./otter_food_lottery_test.js


⠼ ** Starting test Lottery Snack **
⠴ > カワウソ食べ物占いにつないで
⠏ {
  micOpen: false,
  textToSpeech: [
    'わかりました。カワウソ食べ物占いのテストバージョンです。\nカワウソたべもの占いへようこそ！ 占ってほしいのはランチ？ディナー？それともおやつ？'
  ],
  displayText: [],
  ssml: [],
  suggestions: []
}
⠋ > おやつ
⠙ {
  micOpen: false,
  textToSpeech: [ 'ふむふむ。おやつか〜。\nそんな君におすすめのおやつはアップルパイ！楽しみだね〜！\nもう一回やる？' ],
  displayText: [],
  ssml: [],
  suggestions: []
}
⠹ > やらない
⠏ {
  micOpen: false,
  textToSpeech: [ 'じゃあまたね！' ],
  displayText: [],
  ssml: [],
  suggestions: []
}
⠋ test passes
⠙ > cancel
⠼ {
  micOpen: false,
  textToSpeech: [],
  displayText: [],
  ssml: [],
  suggestions: []
}
test ends


** Starting test Again **
:
:
:
  1 passedtest ends

  2 tests passed
```
