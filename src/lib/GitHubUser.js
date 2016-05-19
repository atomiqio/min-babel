import fetch from 'node-fetch';

export default class GitHubUser {

  static async fetchDetails(login) {
    throw new Error('boom')
    let res = await fetch(`https://api.github.com/users/${login}`);
    return res.json();
  }

}
