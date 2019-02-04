# Dialogflow Workshop: Build Your Next Chatbot Using Dialogflow and Node.js

## Overview

In this hands-on workshop we will build a **Hotel Booking Agent** from scratch while following the best practices in conversation design. We will use **Dialogflow** platform to write our Agent. We use most of Dialogflow's key components and features to build an agent that users can use to search, make and manage hotel reservations. Users can include specific amenities to refine the results and book the right room.

The lessons in the workshop include:

- Using Dialogflow to build a working agent from scratch.
- Understanding and applying the best practices in conversation design.

## Setup

In case you have an existing Google Cloud Platform (GCP) Account, you are good to go. If not, you should sign up now. GCP gives you a 12-month and \$300 credit to get started and that is more than sufficient for the workshop. Sign up [here](https://cloud.google.com/free/).

## Sample Conversation

Before we begin with Dialogflow, we can take a look at a sample conversation. It is important to model this, so that we have a reference conversation that we can start to mode.

```
User: Find a hotel in San Francisco starting on February 6 for 3 nights. Make sure it's a Hyatt.
User: I need a place to stay in Rome this weekend.
User: Is there a cheap well-rated hotel in Melbourne with free Wi-Fi?
User: Find the cheapest hotel in Brighton.
User: Reserve a hotel room for 2 adults and 2 children.
User: Can I book a room in Dallas for a week?
```

## Building our Agent with Dialogflow

Follow the steps given below to build out the Hotel Booking Agent.

### Step 1

#### Create the Agent

Sign in with your Dialogflow account. If this is your first time using Dialogflow, you will have no Agents configured. In the top-right, from the main menu, click on Create Agent as shown below:

![create the agent](/images/img1.png)

In Dialogflow, a newly created agent comes with two default intents, the Default Welcome Intent and the Default Fallback Intent. The first steps of building an agent, in addition to creating new intents, involve customizing these intents to match the purpose and persona of your agent.

![default intent](/images/img2.png)

#### Customize the Default Welcome Intent

[Google conversation design best practices](https://designguidelines.withgoogle.com/conversation/conversation-design/welcome.html) suggests that we accomplish three main goals with welcome intent:

- Welcome the user
- Set expectations
- Let the user take control

Let's start with customizing the response of the Default Welcome Intent according to the best practice.

Based on this best practice, we can compose our agent's greeting:

`Welcome. I can help you with booking or answer questions related to the hotel. Which would you like?`

To update the Default Welcome Intent response, follow these steps:

1. Click on the Default Welcome Intent.
2. Navigate to the Responses section.
3. In the Text response table, delete all the default responses.
4. In the Text response table, copy and paste the following response:

![greeting intent](/images/img3.png)

5. Click SAVE.

6. Test the update using the simulator in the Dialogflow console.

![test](/images/img4.png)

#### Exercise 1: Create response variants

### Step 2

#### Create the Entities

In this step, we are going to model our entities. If you look at the sample conversation that we defined, we had to capture the rating (on a scale of 1 to 5) and the location of the resort.

Now, for our example, we will consider that the hotel has resorts at the following locations:

- Oakland
- San Francisco
- Concord
- Santa Clara
- San Jose

So, what we are going to do now is to define our location entity with valid values. And we shall do some interesting things i.e. define synonyms, such that if someone says Bangalore or Bengaluru, it means the same and so on for other cities too.

Let us create the resort-location entity as instructed below.

Go to Entities from the main menu. Click on CREATE ENTITY button. Give a name to the entity resort-location and create the entries as shown below, ensuring that the Define synonyms checkbox is selected.

![locations](/images/img7.png)

Click on the SAVE button.

Create another entity called rating as shown below:

![rating](/images/img8.png)

Remember to click the SAVE button.

You should now have the following list of entities:

![entities](/images/img9.png)

### Step 3

#### Create the Intents

Click on the Intents option in the main menu. You should see the following Intents by default:

![intents](/images/img5.png)

The next thing that we are going to do now is to create our main intent i.e. **booking**.

Go ahead and click on CREATE INTENT.

This will bring up the New Intent screen.

Start by giving a name to the Intent i.e. **booking**.

![main intents](/images/img6.png)

We are now going to add a few sample utterances in the Training phrases field. Type the following sentences, one after the other. After entering each statement, press Enter (Return).

- book best hotel nearby
- I would like to book a room in a hotel
- 5-start hotel in San Francisco
- book 3 star hotel room
- book hotel in San Francisco for next weekend
- book a hotel with free Wi-Fi

You will notice that the application was able to extract out the **rating** and **location** entities that we created a while earlier and was able to map it to the entity names that we created (@rating and @location) as shown below:

![booking](/images/img10.png)

Go to the Action and parameters section as shown below:

![action](/images/img11.png)

Click on MANAGE PARAMETERS AND ACTION and give a name to our action i.e. feedback.action

Reorder the Parameter list as shown below and do the following:

- Make both the parameters are required by selecting the REQUIRED option.
- Add a prompt to each of the parameters as given:

`Prompt Text: Which city you want to book room?`

The intent page should look like the following at the moment:

![prompt](/images/img12.png)

### Step 4

#### Test our Agent

It is time now to start testing our Agent. In the Agent test Console on the right, where you see Try It Now field, you can test out the Agent by typing in sample utterances.

Test Case : Welcome Intent

Go ahead and type “Hello” in the Test Console, that you see on the right.

![hello](/images/img13.png)

You can see that it mapped it correctly to the Default Welcome Intent. The Response field shows that it picked up the Response that we had configured for the Agent.

Test Case : Hotel booking

Go ahead and type “I want to book a room for two night in San Francisco”. The Test Console for the Agent will correctly map it to the Feedback Intent as shown below. Note that it is able to also bring forward the next question to be asked i.e. what rating would the user like to give?.

### Step 5

#### Publish your Agent (Web Demo)

We can now publish our Agent, so that we can give it out to people to test. This is not the same as publishing the Agent for everyone to access.

To enable the Web Demo, go to the Integrations page. One of the options visible is Web Demo as shown below.

![web demo](/images/img14.png)

Slide the button to ON. This will show the URL and a place where you can change the icon and description for your Agent.

![web publish](/images/img15.png)

Click on that URL to visit the Agent in Action (a sample run is shown below).

![web ui](/images/img16.png)

# Reference

- https://dialogflow.com/
- https://cloud.google.com/
- https://rominirani.com/hands-on-with-api-ai-google-assistant-writing-your-first-conversation-agent-a6a7dcdaba27
- https://uxdesign.cc/the-conversational-designers-guide-to-ai-assistants-by-ruben-babu-6aa45de578f0
- https://developers.google.com/actions/design/
- https://dialogflow.com/docs/samples
