'use strict';

const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const { Card } = require('dialogflow-fulfillment');
const axios = require('axios');

process.env.DEBUG = 'dialogflow:debug';

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(
  (request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log(
      'Dialogflow Request headers: ' + JSON.stringify(request.headers)
    );
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    function welcome(agent) {
      agent.add(`Welcome to my agent!`);
    }

    function fallback(agent) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    function bookingHandler(agent) {
      agent.add(
        new Card({
          title: `King room`,
          imageUrl:
            'https://developers.google.com/actions/images/badges/XPM_BADGING_GoogleAssistant_VER.png',
          text: `Would you like to book this room 💁`,
          buttonText: 'Book',
          buttonUrl: 'https://assistant.google.com/'
        })
      );
    }

    function catHandler(agent) {
      const randomCatUrl = 'http://aws.random.cat/meow';
      axios
        .get(randomCatUrl)
        .then(res => {
          agent.add(
            new Card({
              title: `Cat`,
              imageUrl: res.data.file
            })
          );
        })
        .catch(err => console.log(err));
    }
    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('booking', bookingHandler);
    intentMap.set('like-a-cat', catHandler);

    agent.handleRequest(intentMap);
  }
);
