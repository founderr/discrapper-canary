var a = r(466293),
    n = r(139069),
    _ = r(703284),
    o = r(501979),
    E = r(98368),
    i = r(433005),
    c = a ? a.prototype : void 0,
    s = c ? c.valueOf : void 0;
e.exports = function (e, t, r, a, c, l, I) {
    switch (r) {
        case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case '[object ArrayBuffer]':
            if (e.byteLength != t.byteLength || !l(new n(e), new n(t))) break;
            return !0;
        case '[object Boolean]':
        case '[object Date]':
        case '[object Number]':
            return _(+e, +t);
        case '[object Error]':
            return e.name == t.name && e.message == t.message;
        case '[object RegExp]':
        case '[object String]':
            return e == t + '';
        case '[object Map]':
            var u = E;
        case '[object Set]':
            var R = 1 & a;
            if ((u || (u = i), e.size != t.size && !R)) break;
            var A = I.get(e);
            if (A) return A == t;
            (a |= 2), I.set(e, t);
            var T = o(u(e), u(t), a, c, l, I);
            return I.delete(e), T;
        case '[object Symbol]':
            if (s) return s.call(e) == s.call(t);
    }
    return !1;
};
