import CompoundComponent from "./CompoundComponent/CompoundComponent.jsx";
function App() {
  return (
    <div className="flex flex-col p-20  bg-gray-200 h-screen">
      <CompoundComponent>
        <CompoundComponent.header>Test header</CompoundComponent.header>
        <CompoundComponent.description>
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            sequi voluptate at inventore est dignissimos iure ad, sint soluta
            commodi nobis, ex sapiente? Possimus magnam autem, nulla harum
            dolore commodi!
          </h1>
        </CompoundComponent.description>
      </CompoundComponent>
      {/* <h1 className="text-5xl font-mono">Hello Duniya !!</h1> */}
    </div>
  );
}

export default App;
