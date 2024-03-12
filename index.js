const name = "Susan";
const height = 20;
const message = height<40 && height>0?`${name} is ${height} inches tall`:`Expected 74 to be less than 40`;

module.exports = {name, height, message};
