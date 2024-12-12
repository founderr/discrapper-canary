var i = r(605905),
    a = r(779882),
    s = r(580495),
    o = RegExp("['\u2019]", 'g');
function l(e) {
    return function (n) {
        return i(s(a(n).replace(o, '')), e, '');
    };
}
e.exports = l;
