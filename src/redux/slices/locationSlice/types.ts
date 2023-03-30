
export interface ILocation {
    ip: string
    x: string
    y: string
}

export interface ILocationState {
    locations: ILocation[]
    isLoading: boolean
}
