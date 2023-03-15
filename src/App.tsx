import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./Routes/routesList";
import { FormProvider } from "./contexts/formContext";
const App = () => {
    return (
      <div>
        <FormProvider>
          <BrowserRouter>
            <MainRoutes/>
          </BrowserRouter>
        </FormProvider> 
      </div>
    )
}

export default App;