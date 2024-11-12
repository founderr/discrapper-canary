var r = n(859209),
    i = n(581031),
    a = n(714050),
    s = n(202934),
    o = URLSearchParams,
    l = o.prototype,
    u = i(l.append),
    c = i(l.delete),
    d = i(l.forEach),
    f = i([].push),
    _ = new o('a=1&a=2&b=3');
_.delete('a', 1),
    _.delete('b', void 0),
    _ + '' != 'a=2' &&
        r(
            l,
            'delete',
            function (e) {
                var t,
                    n = arguments.length,
                    r = n < 2 ? void 0 : arguments[1];
                if (n && void 0 === r) return c(this, e);
                var i = [];
                d(this, function (e, t) {
                    f(i, {
                        key: t,
                        value: e
                    });
                }),
                    s(n, 1);
                for (var o = a(e), l = a(r), _ = 0, p = 0, h = !1, m = i.length; _ < m; ) (t = i[_++]), h || t.key === o ? ((h = !0), c(this, t.key)) : p++;
                for (; p < m; ) !((t = i[p++]).key === o && t.value === l) && u(this, t.key, t.value);
            },
            {
                enumerable: !0,
                unsafe: !0
            }
        );
