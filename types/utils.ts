export type Required<T> = {
  [P in keyof T]-?: T[P];
};

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
