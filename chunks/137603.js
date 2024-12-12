var i = r(147018),
    a = r(161581),
    s = r(112285).set,
    o = r(602932),
    l = a.setImmediate ? o(s, !1) : s;
i(
    {
        global: !0,
        bind: !0,
        enumerable: !0,
        forced: a.setImmediate !== l
    },
    { setImmediate: l }
);
