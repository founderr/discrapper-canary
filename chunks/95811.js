var i = r(700312).charAt,
    a = r(714050),
    s = r(644659),
    o = r(828114),
    l = r(535586),
    u = 'String Iterator',
    c = s.set,
    d = s.getterFor(u);
o(
    String,
    'String',
    function (e) {
        c(this, {
            type: u,
            string: a(e),
            index: 0
        });
    },
    function () {
        var e,
            n = d(this),
            r = n.string,
            a = n.index;
        return a >= r.length ? l(void 0, !0) : ((e = i(r, a)), (n.index += e.length), l(e, !1));
    }
);
