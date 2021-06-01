const apiKey = 'de22144e-af1e-4087-8e58-82e24de2abc0'
const stationStopArea = 'stop_area:SNCF:87686006'
const hiddenUris = ['network:SNCF:TNRER', 'network:SNCF:TN']
const servicesCount = 12

const board = new Board(document.querySelector('#board'), {
  count: servicesCount,
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

async function getStationData() {
  const url = `https://api.sncf.com/v1/coverage/sncf/stop_areas/${stationStopArea}/`
  const { stop_areas: stopAreas } = await makeApiCall(url)

  return stopAreas[0].name
}

async function updateTrains() {
  const forbiddenUrisQueryString = hiddenUris.map((x) => `&forbidden_uris[]=${x}`).join('')
  const queryString = `count=${servicesCount}${forbiddenUrisQueryString}`
  const url = `https://api.sncf.com/v1/coverage/sncf/stop_areas/${stationStopArea}/departures?${queryString}`
  const { departures } = await makeApiCall(url)

  const messages = departures.map(getMessageFromDeparture)
  board.updateMessages(messages)
}

async function makeApiCall(url) {
  const response = await fetch(url, {
    method: 'get',
    headers: {
      Authorization: `${apiKey}`,
    },
  })
  const data = await response.json()
  return data
}

updateTrains()

const stationNameElement = document.querySelectorAll('[data-station-name]')
getStationData().then((name) => {
  stationNameElement.forEach((x) => {
    x.innerText = name
    x.setAttribute('data-station-name', name)
  })
})

setInterval(updateTrains, 50000)
