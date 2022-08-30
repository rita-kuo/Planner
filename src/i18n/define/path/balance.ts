import { IBalance, IBalanceAction } from "../balance";

const balancePrefix = 'balance';
const actionPrefic = `${balancePrefix}.action`;

const action: IBalanceAction = {
    createRecord: `${actionPrefic}.createRecord`
}

export const balance: IBalance = {
    action
}