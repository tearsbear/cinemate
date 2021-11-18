import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Home,
    Detail,
} from "../pages";

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/detail/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
}
