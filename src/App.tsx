import "./App.css";
import { ThreeDCardDemo } from "./components/3d-Comp";
import { SparklesPreview } from "./components/product";
import { LampDemo } from "./components/ui/lamp";

function App() {
  return (
    <section>
      <ThreeDCardDemo />
      <div>
        <h1 className="text-3xl">It's my new components</h1>
        <SparklesPreview />
        <LampDemo />
      </div>
    </section>
  );
}

export default App;
