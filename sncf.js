const apiKey = 'de22144e-af1e-4087-8e58-82e24de2abc0'

const board = new Board(document.querySelector('#board'), {
  count: 12,
  size: 19,
  delay: 50,
})

async function updateTrains() {
  const url = `https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:OCE:SA:87686006/departures`
  const response = await fetch(url, {
    method: 'get',
    headers: {
      Authorization: `${apiKey}`,
    },
  })
  const data = await response.json()

  const messages = data.departures.map(
    ({ display_informations, stop_date_time }) => {
      console.log(display_informations.direction)
      console.log(stop_date_time.departure_date_time)
      console.log(stop_date_time.departure_date_time.slice(9, 13))

      return display_informations.direction.replace(/\s+\(.*/, '')
    }
  )
  board.updateMessages(messages)
}

updateTrains()

setInterval(updateTrains, 50000)
