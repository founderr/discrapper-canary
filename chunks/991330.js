var r = n(67867),
    i = n(447631),
    a = n(688313),
    o = n(729605),
    s = n(65007),
    l = n(256110);
r(
    {
        target: 'Object',
        stat: !0,
        sham: !i
    },
    {
        getOwnPropertyDescriptors: function (e) {
            for (var t, n, r = o(e), i = s.f, u = a(r), c = {}, d = 0; u.length > d; ) void 0 !== (n = i(r, (t = u[d++]))) && l(c, t, n);
            return c;
        }
    }
);
