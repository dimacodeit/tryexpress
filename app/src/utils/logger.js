const logger = (e, place) => {
    const message = `Error occurred at ${place}. The error is ${e}`
    console.error(message)
    return message;
}

module.exports = logger