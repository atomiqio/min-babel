require('source-map-support').install()

import assert from 'assert'
import GitHubUser from '../lib/GitHubUser'

describe('tests', function() {

  it('should fetch GitHub user details for "subfuzion"', async function () {
    let login = 'subfuzion'
    let user = await GitHubUser.fetchDetails(login)
    assert(user)
    assert.equal(user.login, login)
    assert.equal(user.name, 'Tony Pujals')
    assert.equal(user.blog, 'https://twitter.com/subfuzion')
  })

})
