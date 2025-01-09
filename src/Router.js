import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Main = React.lazy(() => import("./pages/Main"))
const List = React.lazy(() => import("./pages/List"))
const Report = React.lazy(() => import("./pages/Report"))

function Router() {
    return(
        <BrowserRouter basename="/choiJailbreakProject">
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/Report" element={<Report/>} />
                    <Route path="/List" element={<List/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}

export default Router