import { PageMeta } from './PageMeta';

export interface Page extends PageMeta {
  content: string;
  path: string;
}
