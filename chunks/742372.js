var r = n(486095).charAt,
    i = n(342545),
    a = n(29461),
    o = n(790142),
    s = n(215645),
    l = 'String Iterator',
    u = a.set,
    c = a.getterFor(l);
o(
    String,
    'String',
    function (e) {
        u(this, {
            type: l,
            string: i(e),
            index: 0
        });
    },
    function () {
        var e,
            t = c(this),
            n = t.string,
            i = t.index;
        return i >= n.length ? s(void 0, !0) : ((e = r(n, i)), (t.index += e.length), s(e, !1));
    }
);
