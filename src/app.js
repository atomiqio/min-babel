require('source-map-support').install()

const log = console.log // eslint-disable-line no-console

function echo(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //resolve(str)
      reject(new Error('boom'))
    }, 2000)
  })
}

async function job() {
  try {
    let result = await echo('ping')
    log(result)
  } catch (err) {
    log(err)
    process.exit(1)
  }
}

log('calling echo...')
job()
