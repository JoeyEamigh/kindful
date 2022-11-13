// types
export * from './types/contact';
export * from './types/querying';
export * from './types/imports';
export * from './types/campaign';
export * from './types/fund';
export * from './types/meta';
export * from './types/transaction';

// api
import { Api } from './src/wrapper';

// modules
import * as contact from './src/contact';
import * as transaction from './src/transaction';
import * as meta from './src/meta';

type KindfulApiUrl = 'https://app-sandbox.kindful.com' | 'https://app.kindful.com';

export default class Kindful {
  public readonly api: Api;
  public readonly contact = contact;
  public readonly transaction = transaction;
  public readonly meta = meta;

  constructor(apiUrl: KindfulApiUrl, token: string) {
    Api.initialize(apiUrl, token);
    this.api = Api.getInstance();
  }
}
