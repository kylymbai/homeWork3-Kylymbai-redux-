import { useSelector, useDispatch } from "react-redux";

function MainPage() {
    const {num} = useSelector(state => state)

    const dispatch = useDispatch()

    const decrementNum = () => {
        dispatch({
            type: 'MINUS',
        })
    }
    const incrementNum = () => {
        dispatch({
            type: 'PLUS',
            payload: num
        })
    }


  return (
    <div>
        <h1>{num}</h1>
        <button onClick={decrementNum}>decrement</button>
        <button onClick={incrementNum}>increment</button>
    </div>
  )
}

export default MainPage;
