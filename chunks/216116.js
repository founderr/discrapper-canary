var i = r(859209),
    a = r(581031),
    s = r(714050),
    o = r(202934),
    l = URLSearchParams,
    u = l.prototype,
    c = a(u.append),
    d = a(u.delete),
    f = a(u.forEach),
    _ = a([].push),
    h = new l('a=1&a=2&b=3');
h.delete('a', 1),
    h.delete('b', void 0),
    h + '' != 'a=2' &&
        i(
            u,
            'delete',
            function (e) {
                var n,
                    r = arguments.length,
                    i = r < 2 ? void 0 : arguments[1];
                if (r && void 0 === i) return d(this, e);
                var a = [];
                f(this, function (e, n) {
                    _(a, {
                        key: n,
                        value: e
                    });
                }),
                    o(r, 1);
                for (var l = s(e), u = s(i), h = 0, p = 0, m = !1, g = a.length; h < g; ) (n = a[h++]), m || n.key === l ? ((m = !0), d(this, n.key)) : p++;
                for (; p < g; ) !((n = a[p++]).key === l && n.value === u) && c(this, n.key, n.value);
            },
            {
                enumerable: !0,
                unsafe: !0
            }
        );
