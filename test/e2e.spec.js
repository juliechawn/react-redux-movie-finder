/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(8888);

const url = 'http://localhost:8888';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('should contain a <h1> element for the page title', () =>
  nightmare
    .goto(url)
    .evaluate(() => document.querySelector('h1').innerText)
    .end()
    .then((text) => {
      expect(text).to.equal('Movie Finder');
    })
);

it('should contain a <input> element for the page title', () =>
nightmare
  .goto(url)
  .evaluate(() => document.querySelector('input').innerText)
  .end()
);

it('should contain a <button> element for the page title', () =>
nightmare
  .goto(url)
  .evaluate(() => document.querySelector('button').innerText)
  .end()
  .then((text) => {
    expect(text).to.equal('Go!');
  })
);


  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});


