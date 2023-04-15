// Simple
const axios = require("axios");

/**
 * Get a random activity from the Bored API and convert it into a high-adrenaline activity
 * @returns {Object} The result of the Bored API and the result of the OpenAI API
 */
exports.handler = async () => {

  const boredResult = await getBoredResult();

  const adventureResult = await getAdventureResult(boredResult);

  return {
    boredResult,
    adventureResult
  };
}

/**
 * Get a random activity from the Bored API
 * @returns {Promise<string>}
 */
const getBoredResult = async () => {
  const url = "http://www.boredapi.com/api/activity/";

  const response = await axios.get(url);

  return response.data.activity;
}

/**
 * Convert the activity into a high-adrenaline activity
 * using OpenAI
 * @param {String} activity The activity to use as a prompt
 * @returns {Promise<string>}
 */
const getAdventureResult = async (activity) => {
  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/chat/completions',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': process.env.OPENAI_API_KEY,
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com'
    },
    data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${process.env.OPENAI_PROMPT}  \'${activity}\'"}]}`
  };

  const response = await axios(options);

  return response.data.choices[0].message.content;
}
