// 3.2 get Full Name from text file
const User = require("./userClass.js")
const fs = require("fs")

// store user.txt data
const getData = fs.readFileSync("user.txt", "utf8")
// arrange data into an array
const arrayData = getData.split("\n")

const setData = () => {
    let data = ""
    for (let i = 0; i < arrayData.length - 1; i++) {
        // trim all white space and declare new Object on each iteration
        const user = new User(arrayData[i].trim())
        // customize order of data
        data += user.username() + "#" + user.password() + "\n"
    }
    return data
}

// write data into results.txt
fs.writeFile("results.txt", setData(), (err) => {
    if(err) throw err
    console.log("Write complete")
})
