import 'reflect-metadata'
import 'zone.js'
import {bootstrap} from 'angular2/platform/browser'
import {enableProdMode} from 'angular2/core'
import {App} from './app'

// Config
enableProdMode();

// Bootstrap angular app
bootstrap(App)
  .catch(console.log.bind(console));
