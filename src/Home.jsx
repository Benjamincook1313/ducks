import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const Home = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const storeState = useSelector(state => state)

  console.log(storeState);

  const handleChangeColor = () => {
    dispatch({
      type: "CLEAR_COLOR"
    });
    navigate('/');
  }

  const steak = () => {
    dispatch({
      type: "SET_FOOD",
      payload: "Steak"
    });
  }

  return (
    <main>
      <h2>Your favorite color is below:</h2>
      <p>{storeState.favColor}</p>
      <button onClick={handleChangeColor}>Change Color</button>
      <h2>Your favorite food is below:</h2>
      <p>{storeState.favFood}</p>
      <button onClick={steak}>Change Food</button>
    </main>
  )
}

export default Home