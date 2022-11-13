// types
export * from './types/contact';
export * from './types/querying';

// api
import { Api } from './src/wrapper';

// modules
import * as query from './src/query';


type KindfulApiUrl = 'https://app-sandbox.kindful.com/api/v1' | 'https://app.kindful.com/api/v1';

export default class Kindful {
  public readonly api: Api;

  constructor(apiUrl: KindfulApiUrl, token: string) {
    Api.initialize(apiUrl, token);
    this.api = Api.getInstance();
  }

  public readonly query = query;
}
