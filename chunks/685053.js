var i = n,
    a = r(814033),
    s = r(21841),
    o = r(847651);
function l(e, n, r) {
    var i = Array(Math.max(e.bitLength(), r) + 1);
    i.fill(0);
    for (var a = 1 << (n + 1), s = e.clone(), o = 0; o < i.length; o++) {
        var l,
            u = s.andln(a - 1);
        s.isOdd() ? ((l = u > (a >> 1) - 1 ? (a >> 1) - u : u), s.isubn(l)) : (l = 0), (i[o] = l), s.iushrn(1);
    }
    return i;
}
function u(e, n) {
    var r = [[], []];
    (e = e.clone()), (n = n.clone());
    for (var i = 0, a = 0; e.cmpn(-i) > 0 || n.cmpn(-a) > 0; ) {
        var s,
            o,
            l,
            u = (e.andln(3) + i) & 3,
            c = (n.andln(3) + a) & 3;
        3 === u && (u = -1), 3 === c && (c = -1), (o = (1 & u) == 0 ? 0 : (3 == (s = (e.andln(7) + i) & 7) || 5 === s) && 2 === c ? -u : u), r[0].push(o), (l = (1 & c) == 0 ? 0 : (3 == (s = (n.andln(7) + a) & 7) || 5 === s) && 2 === u ? -c : c), r[1].push(l), 2 * i === o + 1 && (i = 1 - i), 2 * a === l + 1 && (a = 1 - a), e.iushrn(1), n.iushrn(1);
    }
    return r;
}
function c(e, n, r) {
    var i = '_' + n;
    e.prototype[n] = function () {
        return void 0 !== this[i] ? this[i] : (this[i] = r.call(this));
    };
}
function d(e) {
    return 'string' == typeof e ? i.toArray(e, 'hex') : e;
}
function f(e) {
    return new a(e, 'hex', 'le');
}
(i.assert = s), (i.toArray = o.toArray), (i.zero2 = o.zero2), (i.toHex = o.toHex), (i.encode = o.encode), (i.getNAF = l), (i.getJSF = u), (i.cachedProperty = c), (i.parseBytes = d), (i.intFromLE = f);
