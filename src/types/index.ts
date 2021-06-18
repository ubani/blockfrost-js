import { AxiosError } from 'axios';

type OptionCombination1 = { projectId: string; customBackend?: string };
type OptionCombination2 = { projectId?: string; customBackend: string };
type AdditionalOptions = {
  isTestnet?: boolean;
  version?: number;
  retry429?: boolean;
  userAgent?: string;
};

export type Options = (OptionCombination1 | OptionCombination2) &
  AdditionalOptions;

export interface ValidatedOptions {
  customBackend?: string;
  projectId?: string;
  isTestnet?: boolean;
  version: number;
  retry429: boolean;
}

export interface Headers {
  project_id: string;
}

export type HashOrNumber = string | number;

export type ErrorType =
  | {
      status_code: number;
      message: string;
      error: string;
    }
  | {
      errno: number;
      message: string;
      code: string;
    };

export interface ExtendedAxiosError extends AxiosError {
  errno: number;
}
