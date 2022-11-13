# kindful-js (work in progress - not published)

TypeScript wrapper for Kindful API. More info on the Kindful API here: <https://developer.kindful.com/>

## Disclaimer

I have no affiliation with Kindful, I just needed an API wrapper so I decided to publish it.

## Requirements

A fetch polyfill is required to use this library if your nodejs version is < 18.x.x.

## Installation

```sh
npm install kindful-js

# or with yarn
yarn add kindful-js
```

## Usage

```ts
import Kindful from 'kindful-js';

const url = 'https://app-sandbox.kindful.com/api/v1' || 'https://app.kindful.com/api/v1';
const token = 'your token here';

const kindful = new Kindful(url, token);

// query calls
const exists = kindful.query.emailExists('email address');

// contact calls

// escape to the API wrapper
const get = kindful.api.get<ResponseType>('/get-endpoint');
const post = kindful.api.post<BodyType, ResponseType>('/post-endpoint', { body: 'here' });
```
