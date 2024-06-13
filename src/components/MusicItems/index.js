import './index.css'

const Solution = props => {
  const {items, onDeleteBtn} = props
  const {imageUrl, id, name, genre, duration} = items

  const Escape = () => {
    onDeleteBtn(id)
  }

  return (
    <li className="listEl">
      <div className="rowArr1">
        <img className="imageEl1" alt="track" src={imageUrl} />
        <div className="colArr">
          <p>{name}</p>
          <p>{genre}</p>
        </div>
      </div>
      <p>{duration}</p>
      <div>
        <button data-testid="delete" onClick={Escape} type="button">
          Delete
        </button>
      </div>
    </li>
  )
}

export default Solution
