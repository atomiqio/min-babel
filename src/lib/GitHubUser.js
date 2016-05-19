import fetch from 'node-fetch';

export default class GitHubUser {

  static async fetchDetails(login) {
    let res = await fetch(`https://api.github.com/users/${login}`);
    return res.json();
  }

}
