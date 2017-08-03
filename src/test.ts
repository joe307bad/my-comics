import '../src/polyfills.ts';

import '../node_modules/zone.js/dist/long-stack-trace-zone.js';
import '../node_modules/zone.js/dist/proxy.js';
import '../node_modules/zone.js/dist/sync-test.js';
import '../node_modules/zone.js/dist/jasmine-patch.js';
import '../node_modules/zone.js/dist/async-test.js';
import '../node_modules/zone.js/dist/fake-async-test.js';


import { getTestBed, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare let __karma__: any;
declare let require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function (): void {
  // noop
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

// Then we find all the tests.
let context: any = require.context('./', true, /\.spec\.ts/);

// And load the modules.
context.keys().map(context);

// Finally, start Karma to run the tests.
__karma__.start();
