function reverseString(string) {
    if (typeof string === "string") {
        const char = string.split("")
        const reversedChar = char.reverse()
        const reversedString = reversedChar.join("")
        return reversedString
    } else {
        return
    }

}

export default reverseString;