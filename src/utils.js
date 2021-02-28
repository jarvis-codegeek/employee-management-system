const isUndefinedOrNull = (value) => {
    return value === "" || value === undefined || value === null
}

const isDate = (value) => {
    return Object.prototype.toString.call(value) === "[object Date]"

} 

export {isUndefinedOrNull, isDate}