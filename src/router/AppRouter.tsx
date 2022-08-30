import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "../common/layout/Layout";
import { BalanceRoutes } from "./route/BalanceRoutes";
import { RouterPath } from "./RouterPath";

const defaultLayoutPath = RouterPath.balance.absolutePath;
const LayoutRoutes = [
    BalanceRoutes
];

export const AppRouter: React.FC = () => {
    return <HashRouter>
        <Routes>
            <Route path="*" element={<Layout/>}>
                {LayoutRoutes}
                <Route path="*" element={<Navigate to={defaultLayoutPath}/>}/>
            </Route>
        </Routes>
    </HashRouter>;
}
