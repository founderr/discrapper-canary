var r = n(56135),
    i = n(888968),
    a = n(649786),
    s = n(718332),
    o = n(320114),
    l = n(82075),
    u = r ? r.prototype : void 0,
    c = u ? u.valueOf : void 0;
e.exports = function (e, t, n, r, u, d, f) {
    switch (n) {
        case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case '[object ArrayBuffer]':
            if (e.byteLength != t.byteLength || !d(new i(e), new i(t))) break;
            return !0;
        case '[object Boolean]':
        case '[object Date]':
        case '[object Number]':
            return a(+e, +t);
        case '[object Error]':
            return e.name == t.name && e.message == t.message;
        case '[object RegExp]':
        case '[object String]':
            return e == t + '';
        case '[object Map]':
            var _ = o;
        case '[object Set]':
            var p = 1 & r;
            if ((_ || (_ = l), e.size != t.size && !p)) break;
            var h = f.get(e);
            if (h) return h == t;
            (r |= 2), f.set(e, t);
            var m = s(_(e), _(t), r, u, d, f);
            return f.delete(e), m;
        case '[object Symbol]':
            if (c) return c.call(e) == c.call(t);
    }
    return !1;
};
