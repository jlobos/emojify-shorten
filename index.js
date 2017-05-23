const fetch = require('node-fetch')

const emojify = id => {
  // list of supported domains
  const domains = [
    'emojify.tk',
    '⛷.cf',
    '🍷.ga',
    '🍸.ga',
    '🍹.cf',
    '🍾.cf',
    '🎖.tk',
    '🎤.tk',
    '🎬.tk',
    '🎱.tk',
    '🎷.cf',
    '🎸.gq',
    '🎹.gq',
    '🎺.cf',
    '🎻.tk',
    '🎾.tk',
    '🏂.tk',
    '🏄.tk',
    '🏆.gq',
    '🏇.tk',
    '🏉.tk',
    '🏐.ga',
    '🏹.tk',
    '🐘.ga',
    '🕺.tk',
    '🚴.tk',
    '🛑.tk',
    '🛵.tk',
    '🛶.tk',
    '🤚.tk',
    '🤛.tk',
    '🤞.tk',
    '🤢.tk',
    '🤤.tk',
    '🤥.tk',
    '🤧.tk',
    '🤰.tk',
    '🤴.tk',
    '🤵.tk',
    '🤶.tk',
    '🤸.tk',
    '🤹.tk',
    '🤺.tk',
    '🤼.tk',
    '🤽.tk',
    '🤾.tk',
    '🥀.tk',
    '🥁.tk',
    '🥂.ga',
    '🥄.tk',
    '🥅.tk',
    '🥇.tk',
    '🥈.tk',
    '🥉.tk',
    '🥊.tk',
    '🥐.tk',
    '🥑.tk',
    '🥒.tk',
    '🥔.tk',
    '🥕.tk',
    '🥖.tk',
    '🥗.tk',
    '🥘.tk',
    '🥙.tk',
    '🥚.tk',
    '🥛.tk',
    '🥜.tk',
    '🥞.tk',
    '🦈.tk',
    '🦋.tk',
    '🦍.tk',
    '🦎.tk',
    '🦏.tk',
    '🦐.tk'
  ]

  return domains.map(e => `http://${e}/${id}`)
}

module.exports = url => {
  return fetch(
    'https://obscure-brook-59193.herokuapp.com/api/shorten',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({url})
    }
  )
  .then(res => res.json())
  .then(({ shortId }) => emojify(shortId))
}
