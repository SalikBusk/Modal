import "./App.css";
import MenuItem from "./components/MenuItem";
import TheModal from "./components/modals/TheModal";
import useModal from "./hooks/useModal";

function App() {
  const Modal = useModal();
  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center">
      <button className="rounded-[10px] bg-rose-500 hover:bg-rose-300 px-[20px] py-[10px] ">
        <MenuItem label="Modal" onClick={Modal.onOpen} />
      </button>
      <TheModal/>
    </div>
  );
}

export default App;
