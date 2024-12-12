var i = r(147018),
    a = r(545576),
    s = r(936940),
    o = r(202934),
    l = r(714050),
    u = r(259230),
    c = a('URL');
i(
    {
        target: 'URL',
        stat: !0,
        forced: !(
            u &&
            s(function () {
                c.canParse();
            })
        )
    },
    {
        canParse: function (e) {
            var n = o(arguments.length, 1),
                r = l(e),
                i = n < 2 || void 0 === arguments[1] ? void 0 : l(arguments[1]);
            try {
                return new c(r, i), !0;
            } catch (e) {
                return !1;
            }
        }
    }
);
