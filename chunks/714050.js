var n = r(974971),
    a = String;
e.exports = function (e) {
    if ('Symbol' === n(e)) throw TypeError('Cannot convert a Symbol value to a string');
    return a(e);
};
