export const ratingColor = (rate: number) => {
    if (rate > 4.5) {
        return {color: 'green'}
    } else if (rate > 4) {
        return {color: 'orange'}
    } else {
        return {color: 'red'}
    }
}