var r = n(543744),
    i = n(436091);
function a(e, t) {
    var n = -1,
        a = i(e) ? Array(e.length) : [];
    return (
        r(e, function (e, r, i) {
            a[++n] = t(e, r, i);
        }),
        a
    );
}
e.exports = a;
