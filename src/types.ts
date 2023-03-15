export interface Timeframe {
    current: number,
    previous: number
}


export type TimeframeString = "daily" | "weekly" | "monthly";



export interface Topic {
    title: string
    timeframes: {
        daily: Timeframe
        weekly: Timeframe
        monthly: Timeframe
    }
}


export interface GenericObject {
    [index: string]: string
}



export {}