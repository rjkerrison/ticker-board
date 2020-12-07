const apiKey = 'de22144e-af1e-4087-8e58-82e24de2abc0'

const board = new Board(document.querySelector('#board'), {
  count: 12,
  size: 25,
  delay: 50,
})

const removeDiacritics = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const getMessageFromDeparture = ({ display_informations, stop_date_time }) => {
  const timeOfDeparture = stop_date_time.departure_date_time
    .slice(9, 13)
    .replace(/(\d{2})/, '$1:')

  const destination = removeDiacritics(display_informations.direction).replace(
    /\s+\(.*/,
    ''
  )

  const info = `${timeOfDeparture}\xa0${destination}`
  return info
}

async function updateTrains() {
  const url = `https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87271007/departures`
  const response = await fetch(url, {
    method: 'get',
    headers: {
      Authorization: `${apiKey}`,
    },
  })
  const data = await response.json()
  const messages = data.departures.map(getMessageFromDeparture)
  board.updateMessages(messages)
}

updateTrains()

setInterval(updateTrains, 50000)
