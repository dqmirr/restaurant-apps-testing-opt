/* eslint-disable no-restricted-globals */
/* eslint eol-last: ["error", "never"] */

import { precacheAndRoute } from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);
self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});