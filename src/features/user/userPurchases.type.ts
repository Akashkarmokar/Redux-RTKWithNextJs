export interface IUserPurchase {
    id: number;
    name: string;
    totalCount: number;
}

export interface IChangeAllUserPurchasePayload {
    id: number;
    value: number;
}
