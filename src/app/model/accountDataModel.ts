export interface AccountDataModel {
    name: string,
    account: {
        number: string,
        agency: string,
        balance: number,
        limit: number
    },
    card: {
        limit: number,
        number: string,
    }
}

export const accountDefault: AccountDataModel = {
    name: "Fulanin",
    account: {
        number: "0000",
        agency: "0000000000",
        balance: 600.6,
        limit: 1000
    },
    card: {
        limit: 2000,
        number: "xxxx xxxx xxxx 3333"
    }
}