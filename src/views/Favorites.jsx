import { MyProvider } from "../context/MyProvider";

const Favorites = () => {
  if (MyProvider === null) {
    return null;
  }

  return (
    <div>
      <h1>Favorites</h1>
    </div>
  )
}

export default Favorites