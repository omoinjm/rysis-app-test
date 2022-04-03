class User {
    // Initialize values
    constructor(fullName) {
        this.fullName = fullName
    }

    // Generate Username
    username() {
        const { fullName } = this
        // find the first empty space
        let spaceLocation = fullName.indexOf(' ')
        // find the last empty space
        let lastSpaceLocation = fullName.lastIndexOf(' ')
        let firstName = fullName.substring(0, spaceLocation)
        let lastName = fullName.substring(lastSpaceLocation + 1)
        let username = ""

        // must consists of 5 lower case characters
        if ((firstName.length + lastName.length) < 5) {
            // if the total number of characters in the first name and surname is < 5, then append a sufficient number of 0s
            let nameLen = firstName.length + lastName.length
            username = firstName.substring(0, 4) + lastName +  this.addZero(nameLen)
        } else if (firstName.length < 4) {
            let nameLen = firstName.length
            username = firstName.substring(0, 4) + this.addFromSurname(nameLen, lastName)
        }
        else {
            //combine the first 4 characters of the first name with the first character of the surname
            username = firstName.substring(0, 4) + lastName.charAt(0)
        }

        return username.toLowerCase().trim()
    }

    // helper function to determine number of 0 to append
    addZero(length) {
        let text = ""
        for(let i = 0; i < 5 - length; i++) {
            text += "0"
        }
        return text
    }

    // helper function to determine number of letters from Surname to append
    addFromSurname(length, surname) {
        let text = ""
        for(let i = 0; i < 5 - length; i++) {
            text += surname[i]
        }
        return text
    }

    // Generate Password
    password() {
        // combining 5 random characters from the users full name. characters can be resued
        const { fullName } = this
        let password = ""
        // loop through string
        for(let i = 0; i < fullName.length; i++) {
            // randomly rearrange the string
            password += fullName.charAt(Math.floor(Math.random() * fullName.length)).trim()
        }

        // replace to remove the white space and substring to get the first 5 characters
        return password.substring(0, 5).toLowerCase()
    }
}

// use module.exports for Node.js
// use export default for JavaScript frontend

module.exports = User
// export default User