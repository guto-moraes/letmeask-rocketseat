import { BrowserRouter, Route } from "react-router-dom";
import { AutoContextProvider } from './contexts/AuthContext';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

function App() {

    return (
        <BrowserRouter>
            <AutoContextProvider>
                <Route path="/" exact component={Home} />
                <Route path="/rooms/new" component={NewRoom} />
            </AutoContextProvider>
        </BrowserRouter>
    );
}

export default App;