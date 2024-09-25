var r = n(67867),
    i = n(294377),
    a = n(821819),
    o = n(274745),
    s = n(342545),
    l = n(502754),
    u = i('URL');
r(
    {
        target: 'URL',
        stat: !0,
        forced: !(
            l &&
            a(function () {
                u.canParse();
            })
        )
    },
    {
        canParse: function (e) {
            var t = o(arguments.length, 1),
                n = s(e),
                r = t < 2 || void 0 === arguments[1] ? void 0 : s(arguments[1]);
            try {
                return new u(n, r), !0;
            } catch (e) {
                return !1;
            }
        }
    }
);
