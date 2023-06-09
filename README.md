# Adventure Bot 

Adventure Bot is a CDK-based project that provides adventure suggestions by generating activity ideas using BoredAPI and then passing those responses to OpenAI to transform them into adventures. 

## Architecture 

The architecture consists of an AWS Lambda function that coordinates responses from BoredAPI and OpenAI API. The Lambda function is triggered by a PUBLIC function URL. 

When the client makes a request for an adventure suggestion, the Lambda function sends a request to BoredAPI to generate an activity idea. The response from BoredAPI is then passed to OpenAI API to transform the activity idea into an adventure. 

Finally, the responses from both APIs are returned to the client. 

## Setup 

### Requirements 

* AWS Account
* AWS CLI 
* Node.js 
* AWS CDK 

### Installation 

1. Clone the repository
2. Install dependencies using `npm install`. 
3. Deploy the infrastructure using `cdk deploy`. 

### Removal

Especially since this exposes a public function URL, it is recommended to destroy the application once you've finished using it. To do so, run `cdk destroy`.

## Usage 

To use Adventure Bot, make a HTTP GET request to the API Gateway endpoint with the path `/adventure`. The response will include an adventure suggestion generated using BoredAPI and OpenAI API. 

## Contributing 

If you'd like to contribute to Adventure Bot, please create a pull request with your changes. 

## License 

This project is licensed under the [MIT License](https://github.com/adventure-bot/LICENSE).

## Disclosures
This README was largely generated by ChatGPT and GitHub Copilot, and then edited manually for correctness and detail.