'use strict';
const { ActionsOnGoogleAva } = require('actions-on-google-testing');
const { expect } = require('chai');
// Library will try to obtain credentials from environment variables in case
// credentials file is not specified
const action = new ActionsOnGoogleAva(require('./secret/test-credentials.json'));

// Set Local
action.setLocale("ja-JP");
// Start out with giving a name to this test
action.startTest('Lottery Snack', action => {
    // Return a promise that starts a conversation with your test app
    // return action.start()
    // Start conversation with specific app
    return action.startConversationWith("カワウソ食べ物占い")
        .then(({ textToSpeech }) => {
            // Get a response back from your fulfillment.
            // To continue the conversation, you can send
            // a new text query. This starts the next
            // turn of the conversation.
            // You can use Chai to verify responses.
            expect(textToSpeech[0]).to.have.string("カワウソたべもの占いへようこそ！ 占ってほしいのはランチ？ディナー？それともおやつ？")
            return action.send('おやつ');
        })
        .then(({ textToSpeech }) => {
            expect(textToSpeech[0]).to.have.string("ふむふむ。おやつか〜。")
            // 「もう一回やる？」
            return action.send('やらない');
        })
        .then(({ textToSpeech }) => {
            expect(textToSpeech[0]).to.have.string("じゃあまたね！")
        })
});

action.startTest('Again', action => {
    // Return a promise that starts a conversation with your test app
    // return action.start()
    // Start conversation with specific app
    return action.startConversationWith("カワウソ食べ物占い")
        .then(({ textToSpeech }) => {
            // Get a response back from your fulfillment.
            // To continue the conversation, you can send
            // a new text query. This starts the next
            // turn of the conversation.
            // You can use Chai to verify responses.
            expect(textToSpeech[0]).to.have.string("カワウソたべもの占いへようこそ！ 占ってほしいのはランチ？ディナー？それともおやつ？")
            return action.send('おやつ');
        })
        .then(({ textToSpeech }) => {
            expect(textToSpeech[0]).to.have.string("ふむふむ。おやつか〜。")
            // 「もう一回やる？」
            return action.send('やりたい');
        })
        .then(({ textToSpeech }) => {
            expect(textToSpeech[0]).to.have.string("占ってほしいのはランチ？ディナー？それともおやつ？")
        })
});
