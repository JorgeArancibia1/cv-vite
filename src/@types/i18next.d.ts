import { resources } from './resources';
import { defaultNS, fallbackNS } from '../../i18n';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    fallbackNS: typeof fallbackNS;
    resources: typeof resources;
  }
}