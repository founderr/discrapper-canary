var n = r(135839), _ = r(117973), a = r(780712), i = r(400353), o = r(653180), E = r(657398), s = r(19235), c = '[object Map]', I = '[object Promise]', R = '[object Set]', T = '[object WeakMap]', u = '[object DataView]', l = s(n), A = s(_), N = s(a), d = s(i), O = s(o), p = E;
(n && p(new n(new ArrayBuffer(1))) != u || _ && p(new _()) != c || a && p(a.resolve()) != I || i && p(new i()) != R || o && p(new o()) != T) && (p = function (t) {
    var e = E(t), r = '[object Object]' == e ? t.constructor : void 0, n = r ? s(r) : '';
    if (n)
        switch (n) {
        case l:
            return u;
        case A:
            return c;
        case N:
            return I;
        case d:
            return R;
        case O:
            return T;
        }
    return e;
}), t.exports = p;
