import 'babel-polyfill';

import assert from 'assert';
import GitHubUser from '../lib/GitHubUser';

// WARNING: don't use arrow functions with mocha describe(), it(),
// and all the other standard mocha functions that take callbacks
// if you want to be able to use `this.timeout()`. Because of the way
// arrow functions work, the `this` context will be the module, not
// the mocha context in the callback. Even if you don't anticipate
// needing access to the mocha `this` context in the callbacks, it's
// best to use full `function()` syntax for the mocha functions.

describe('tests', function() {

  // This is an auto-generated sample test to demo testing async functions
  it('should fetch GitHub user details for "subfuzion"', async function () {
    let login = 'subfuzion';
    let user = await GitHubUser.fetchDetails(login);
    assert(user);
    assert.equal(user.login, login);
    assert.equal(user.name, 'Tony Pujals');
    assert.equal(user.blog, 'https://twitter.com/subfuzion');
  });

});
