import {useState} from 'react'
import Solution from '../MusicItems'
import './index.css'

const HomeElement = props => {
  const [search, setSearch] = useState('')
  const {initialTracksList} = props
  const [sol, setSol] = useState(initialTracksList)

  // const {initialTracksList} = props

  const onChangeSol = event => {
    setSearch(event.target.value)
  }

  const Answer = sol.filter(eachItem =>
    eachItem.name.toLowerCase().includes(search.toLowerCase()),
  )

  const onDeleteBtn = id => {
    const removeEl = sol.filter(eachEl => eachEl.id !== id)
    setSol(removeEl)
  }

  return (
    <div>
      <div className="BgImgEl">
        <h1 className="headingEl1">Ed Sheeran</h1>
        <p className="paragraphEl1">Singer</p>
      </div>
      <div className="colorEl">
        <div className="rowArrangeEl">
          <h1 className="paragraphEl23">Songs Playlist</h1>

          <input
            value={search}
            onChange={onChangeSol}
            placeholder="Search"
            type="search"
          />
        </div>
        <ul>
          {Answer.map(eachItem => (
            <Solution
              onDeleteBtn={onDeleteBtn}
              key={eachItem.id}
              items={eachItem}
            />
          ))}
        </ul>
        {Answer.length === 0 ? <p>No Songs Found</p> : null}
      </div>
    </div>
  )
}

export default HomeElement
