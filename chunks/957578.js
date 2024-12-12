var i = r(413135),
    a = i.Buffer;
function s(e, n) {
    for (var r in e) n[r] = e[r];
}
function o(e, n, r) {
    return a(e, n, r);
}
a.from && a.alloc && a.allocUnsafe && a.allocUnsafeSlow ? (e.exports = i) : (s(i, n), (n.Buffer = o)),
    (o.prototype = Object.create(a.prototype)),
    s(a, o),
    (o.from = function (e, n, r) {
        if ('number' == typeof e) throw TypeError('Argument must not be a number');
        return a(e, n, r);
    }),
    (o.alloc = function (e, n, r) {
        if ('number' != typeof e) throw TypeError('Argument must be a number');
        var i = a(e);
        return void 0 !== n ? ('string' == typeof r ? i.fill(n, r) : i.fill(n)) : i.fill(0), i;
    }),
    (o.allocUnsafe = function (e) {
        if ('number' != typeof e) throw TypeError('Argument must be a number');
        return a(e);
    }),
    (o.allocUnsafeSlow = function (e) {
        if ('number' != typeof e) throw TypeError('Argument must be a number');
        return i.SlowBuffer(e);
    });
