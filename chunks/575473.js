var n = r(466293),
    a = r(139069),
    _ = r(703284),
    o = r(501979),
    i = r(98368),
    E = r(433005),
    c = n ? n.prototype : void 0,
    s = c ? c.valueOf : void 0;
e.exports = function (e, t, r, n, c, l, u) {
    switch (r) {
        case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case '[object ArrayBuffer]':
            if (e.byteLength != t.byteLength || !l(new a(e), new a(t))) break;
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
            var I = i;
        case '[object Set]':
            var R = 1 & n;
            if ((I || (I = E), e.size != t.size && !R)) break;
            var A = u.get(e);
            if (A) return A == t;
            (n |= 2), u.set(e, t);
            var N = o(I(e), I(t), n, c, l, u);
            return u.delete(e), N;
        case '[object Symbol]':
            if (s) return s.call(e) == s.call(t);
    }
    return !1;
};
