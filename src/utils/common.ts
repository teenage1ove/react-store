export const shuffle = (arr: Array<any>) => [...arr].sort(() => 0.5 - Math.random() )

export const sumBy = (arr: Array<any>) => arr.reduce((acc, cur) => acc + cur, 0)