import 'regenerator-runtime/runtime'

const apiKey = 'de22144e-af1e-4087-8e58-82e24de2abc0'
const gareDuLyonId = 'stop_area:SNCF:87686006'
const hiddenUris = ['network:SNCF:TNRER', 'network:SNCF:TN']
const servicesCount = 12

const removeDiacritics = (str) => {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}
const format = (str, length) =>
  removeDiacritics(str)
    .replace(/\s+\(.*/, '')
    .padEnd(length, '\xa0')
    .slice(0, length)

const getMessageFromDeparture = ({ display_informations, stop_date_time }) => {
  const timeOfDeparture = stop_date_time.departure_date_time
    .slice(9, 13)
    .replace(/(\d{2})/, '$1:')

  const destination = format(display_informations.direction, 18)
  const headsign = format(display_informations.headsign, 5)
  const network = format(display_informations.network, 9)

  const info = [timeOfDeparture, destination, network, headsign].join('\xa0')
  return info
}

async function getStationAutocomplete(q) {
  const url = `https://api.sncf.com/v1/coverage/sncf/places?q=${q}&type[]=stop_area`
  const { places: stopAreas, ...others } = await makeApiCall(url)
  console.log(others)

  return stopAreas
}

async function getStationData(stopAreaId = gareDuLyonId) {
  const url = `https://api.sncf.com/v1/coverage/sncf/stop_areas/${stopAreaId}/`
  const { stop_areas: stopAreas } = await makeApiCall(url)

  return stopAreas[0]
}

async function getLatestTrains(stopAreaId = gareDuLyonId) {
  const forbiddenUrisQueryString = hiddenUris
    .map((x) => `&forbidden_uris[]=${x}`)
    .join('')
  const queryString = `count=${servicesCount}${forbiddenUrisQueryString}`
  const url = `https://api.sncf.com/v1/coverage/sncf/stop_areas/${stopAreaId}/departures?${queryString}`
  const { departures } = await makeApiCall(url)

  const messages = departures.map(getMessageFromDeparture)
  return messages
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

export { getStationAutocomplete, getStationData, getLatestTrains }
