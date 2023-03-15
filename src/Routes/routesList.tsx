import { useRoutes } from "react-router-dom";
import { FirstStepArea } from "../pages/FirstStep";
import { SecondStepArea } from "../pages/SecondStep";
import { ThirdStepArea } from "../pages/ThirdStep";

export const MainRoutes = () => {
    return useRoutes ([
        {path: '/', element:<FirstStepArea/>},
        {path: '/step2', element:<SecondStepArea/>},
        {path: '/step3', element:<ThirdStepArea/>}
    ])
};

