export const currencyFormater = (number, currency = 'USD') => {
    const formater = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency
    })
    return formater.format(number)
}