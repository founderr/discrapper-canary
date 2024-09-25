var r = n(605905),
    i = n(779882),
    a = n(580495),
    o = RegExp("['\u2019]", 'g');
function s(e) {
    return function (t) {
        return r(a(i(t).replace(o, '')), e, '');
    };
}
e.exports = s;
