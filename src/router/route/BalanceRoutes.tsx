import { Route } from "react-router-dom";
import { Balance } from "../../page/balance/Balance";

const balancePath = 'balance';

export const balance = {
    path: balancePath,
    absolutePath: balancePath,
}

export const BalanceRoutes = <Route key={balance.path} path={balance.path}>
    <Route index element={<Balance/>}/>
</Route>

