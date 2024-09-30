
import './App.css';
import RecipeTitle from "./RecipeTitle";
import RatingsTitle from "./RatingsTitle";
import RecipeSteps from "./RecipeSteps";
function App() {
  return (
    <article>
        <h1>Recipe Maker</h1>
        <RecipeTitle></RecipeTitle>

        <main>
            <RatingsTitle></RatingsTitle>
        </main>
        <footer>
            <RecipeSteps></RecipeSteps>
        </footer>
    </article>

  );
}

export default App;
