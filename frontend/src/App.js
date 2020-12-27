import logo from "./logo.svg";
import "./App.css";
//const url = "http://localhost:8080/hls/test3.m3u8";
import ReactHlsPlayer from "react-hls-player";

function App() {
  return (
    <div className="App">
      <h1>Prueba de video stream sistemas247</h1>
      <ReactHlsPlayer
        url="http://3.15.96.19:8080/hls/test3.m3u8"
        autoplay={true}
        controls={true}
        width="55%"
        height={675}
      />
    </div>
  );
}

export default App;
