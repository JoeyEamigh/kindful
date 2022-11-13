export class Api {
  private readonly api: string;
  private readonly headers: { [key: string]: string };
  private static _instance?: Api;

  private constructor(api: string, token: string) {
    this.api = api;
    this.headers = { Authorization: `Token token="${token}"`, 'Content-Type': 'application/json' };
  }

  async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this.api}${path}`, { headers: this.headers });
    return await response.json();
  }

  async post<T, U>(path: string, body: T): Promise<U> {
    const response = await fetch(`${this.api}${path}`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(body),
    });
    return await response.json();
  }

  public static getInstance() {
    if (!this._instance) throw new Error('Api not initialized');
    return this._instance;
  }

  public static initialize(api: string, token: string) {
    this._instance = new Api(api, token);
  }
}

export const api = Api.getInstance();
