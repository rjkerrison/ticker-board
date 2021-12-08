import { useState, useEffect } from 'react'
import { getStationAutocomplete } from '../api/sncf'
import './StationPicker.css'

const StationPicker = ({ setStation }) => {
  const [errors, setErrors] = useState({ station: null })
  const [stations, setStations] = useState([])
  const [q, setQ] = useState('')

  useEffect(() => {
    if (q.length < 3) {
      return
    }
    let isCurrent = true
    // Timeout means we only search after the user has stopped typing
    const timeout = setTimeout(() => {
      getStationAutocomplete(q).then((stationData) => {
        if (!isCurrent) {
          return
        }
        if (!stationData || stationData.length === 0) {
          setErrors({
            ...errors,
            station: `No station found matching ${q}. Try shortening your search for more results.`,
          })
          setStations([])
        } else {
          setErrors({
            ...errors,
            station: null,
          })
          setStations(stationData)
        }
      })
    }, 200)
    return () => {
      isCurrent = false
      clearTimeout(timeout)
    }
  }, [q])

  return (
    <form className="dropdown">
      <input
        type="text"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="e.g. Gare du Nord"
      />
      {errors.station ? (
        <p>{errors.station}</p>
      ) : (
        <div className="dropdown-options">
          {stations.map((station) => {
            return (
              <input
                key={station.id}
                type="button"
                onClick={() => setStation(station)}
                value={station.name}
              />
            )
          })}
        </div>
      )}
    </form>
  )
}

export default StationPicker
