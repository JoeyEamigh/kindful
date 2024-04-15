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
    logger('GET', `${this.api}${path}`, response.statusText);
    if (response.status >= 400) throw new Error(response.statusText);
    return (await response.json()) as T;
  }

  async post<T, U>(path: string, body: T): Promise<U> {
    if (!Api._instance) throw new Error('Api not initialized');
    const response = await fetch(`${this.api}${path}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    });
    logger('POST', `${this.api}${path}`, JSON.stringify(body, null, 2), response.statusText);
    if (response.status >= 400) throw new Error(response.statusText);
    return (await response.json()) as U;
  }

  public static getInstance() {
    if (!this._instance) throw new Error('Api not initialized');
    return this._instance;
  }

  public static initialize(api: string, token: string) {
    this._instance = new Api(api, token);
  }
}
