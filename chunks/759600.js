var i = r(625898),
    a = r(771701);
function s(e, n) {
    var r = -1,
        s = a(e) ? Array(e.length) : [];
    return (
        i(e, function (e, i, a) {
            s[++r] = n(e, i, a);
        }),
        s
    );
}
e.exports = s;
