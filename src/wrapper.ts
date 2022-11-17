const logger = process.env.DEBUG_KINDFUL ? console.log : () => {};

export class Api {
  private readonly api: string;
  private readonly headers: { [key: string]: string };
  private static _instance?: Api;

  private constructor(api: string, token: string) {
    this.api = api;
    this.headers = { Authorization: `Token token="${token}"`, 'Content-Type': 'application/json' };
  }

  async get<T>(path: string): Promise<T> {
    if (!Api._instance) throw new Error('Api not initialized');
    const response = await fetch(`${this.api}${path}`, { headers: this.headers });
    logger('GET', `${this.api}${path}`, response);
    return await response.json();
  }

  async post<T, U>(path: string, body: T): Promise<U> {
    if (!Api._instance) throw new Error('Api not initialized');
    const response = await fetch(`${this.api}${path}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    });
    logger('POST', `${this.api}${path}`, JSON.stringify(body, null, 2), response);
    return await response.json();
  }

  public static getInstance() {
    return this._instance;
  }

  public static initialize(api: string, token: string) {
    this._instance = new Api(api, token);
  }
}
