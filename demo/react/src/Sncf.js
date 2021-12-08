import { useEffect, useState } from 'react'
import { TickerBoard } from 'react-ticker-board'
import { getLatestTrains } from './api/sncf'
import StationPicker from './components/StationPicker'

const Sncf = () => {
  const [trains, setTrains] = useState([])
  const [station, setStation] = useState()

  const [countdownSeconds, setCountdownSeconds] = useState(30)

  const updateTrains = () => {
    if (!station) {
      return
    }
    return getLatestTrains(station.id)
      .then(setTrains)
      .then(() => setCountdownSeconds(30))
  }

  const countdown = () => {
    if (countdownSeconds === 0) {
      updateTrains()
    } else {
      setCountdownSeconds(countdownSeconds - 1)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(countdown, 1000)

    return () => {
      clearTimeout(timeout)
    }
  }, [countdownSeconds])

  useEffect(updateTrains, [station])

  return (
    <>
      <p>
        {station
          ? `Showing trains for ${station.name}. Updates in ${countdownSeconds} seconds.`
          : `Select a station with the search below.`}
      </p>
      <StationPicker setStation={setStation} />
      <TickerBoard messages={[...trains]} count={trains.length} size={40} />
    </>
  )
}

export default Sncf
