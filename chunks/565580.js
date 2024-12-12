var n = Math.floor,
    r = Math.random;
function i(e, i) {
    return e + n(r() * (i - e + 1));
}
e.exports = i;
