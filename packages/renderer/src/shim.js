import process from 'process'

if (typeof global === 'undefined' || typeof global.process === 'undefined') {
  //* global window
  // eslint-disable-next-line no-undef
  window.global = window
  // eslint-disable-next-line no-undef
  window.process = process
}
