var i = r(369529),
    a = r(886985),
    s = r(901806),
    o = r(484155),
    l = r(246209),
    u = Math.max;
function c(e) {
    if (!(e && e.length)) return [];
    var n = 0;
    return (
        (e = i(e, function (e) {
            if (l(e)) return (n = u(e.length, n)), !0;
        })),
        o(n, function (n) {
            return a(e, s(n));
        })
    );
}
e.exports = c;
