var user = {
    id: 1,
    email: 'asasdasd',
};
var manager = {
    id: 1,
    phone: '123123',
};
function printData(data) {
    if (isUser(data)) {
        console.log(data.email);
    }
    console.log(data.id);
}
printData(user);
function isUser(person) {
    return person.email !== undefined;
}
