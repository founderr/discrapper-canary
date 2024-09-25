var r = t,
    i = n(814033),
    a = n(21841),
    o = n(847651);
function s(e, t, n) {
    var r = Array(Math.max(e.bitLength(), n) + 1);
    r.fill(0);
    for (var i = 1 << (t + 1), a = e.clone(), o = 0; o < r.length; o++) {
        var s,
            l = a.andln(i - 1);
        a.isOdd() ? ((s = l > (i >> 1) - 1 ? (i >> 1) - l : l), a.isubn(s)) : (s = 0), (r[o] = s), a.iushrn(1);
    }
    return r;
}
function l(e, t) {
    var n = [[], []];
    (e = e.clone()), (t = t.clone());
    for (var r = 0, i = 0; e.cmpn(-r) > 0 || t.cmpn(-i) > 0; ) {
        var a,
            o,
            s,
            l = (e.andln(3) + r) & 3,
            u = (t.andln(3) + i) & 3;
        3 === l && (l = -1), 3 === u && (u = -1), (o = (1 & l) == 0 ? 0 : (3 == (a = (e.andln(7) + r) & 7) || 5 === a) && 2 === u ? -l : l), n[0].push(o), (s = (1 & u) == 0 ? 0 : (3 == (a = (t.andln(7) + i) & 7) || 5 === a) && 2 === l ? -u : u), n[1].push(s), 2 * r === o + 1 && (r = 1 - r), 2 * i === s + 1 && (i = 1 - i), e.iushrn(1), t.iushrn(1);
    }
    return n;
}
function u(e, t, n) {
    var r = '_' + t;
    e.prototype[t] = function () {
        return void 0 !== this[r] ? this[r] : (this[r] = n.call(this));
    };
}
function c(e) {
    return 'string' == typeof e ? r.toArray(e, 'hex') : e;
}
function d(e) {
    return new i(e, 'hex', 'le');
}
(r.assert = a), (r.toArray = o.toArray), (r.zero2 = o.zero2), (r.toHex = o.toHex), (r.encode = o.encode), (r.getNAF = s), (r.getJSF = l), (r.cachedProperty = u), (r.parseBytes = c), (r.intFromLE = d);
