import { Route } from '@vaadin/router';
import './views/demo/demo-view';

export type ViewRoute = Route & {
  title?: string;
  icon?: string;
  children?: ViewRoute[];
};

export const views: ViewRoute[] = [
  // place routes below (more info https://vaadin.com/docs/latest/fusion/routing/overview)
  {
    path: '',
    component: 'demo-view',
    icon: 'la la-columns',
    title: 'Demo',
  },
];
export const routes: ViewRoute[] = [...views];
