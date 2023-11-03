import "./Gallery.css";
import { MyProvider } from "../context/MyProvider";

export const Gallery = () => {
  return (
    <div className="gallery grid-columns-4 grid gap-4 p-3 m-3 grid-rows-4 grid-flow-col auto-rows-max auto-cols-max auto-flow ">
    <MyProvider>
    </MyProvider>
    </div>
  );
}
