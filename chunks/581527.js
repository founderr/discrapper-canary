var i = r(690244),
    a = i('%String%'),
    s = i('%TypeError%');
e.exports = function (e) {
    if ('symbol' == typeof e) throw new s('Cannot convert a Symbol value to a string');
    return a(e);
};
