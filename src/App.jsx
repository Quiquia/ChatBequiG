import "./assets/css/styleGlobales.css";
import "./App.css";
import { Provider } from "react-redux";
import Chat from "./components/chat/chat";
import ChatList from "./components/chatList/chatList";
import store from "./store";
import { useEffect, useState } from "react";

// console.log(data);
const widthIsMobile = (width = window.innerWidth) => width < 700;
function useMobile() {
  const [isMobile, setIsMobile] = useState(widthIsMobile());

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(widthIsMobile(window.innerWidth));
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { isMobile };
  //return [isMobile]
}

function App() {
  const { isMobile } = useMobile();
  console.log(isMobile);
  // const  [ isMobile ]  = useMobile();

  return (
    <Provider store={store}>
      <div
        className={
          isMobile ? "container-chat container-chat__mobile" : "container-chat"
        }
      >
        <ChatList isMobile={isMobile} />
        {isMobile ? null : <Chat isMobile={isMobile} />}
      </div>
    </Provider>
  );
}

export default App;
