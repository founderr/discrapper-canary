t.d(n, {
    h: function () {
        return d;
    }
}),
    t(47120),
    t(653041);
var i = t(192379),
    a = t(442837),
    l = t(581364),
    o = t(675478),
    r = t(709054),
    s = t(822245),
    c = t(526761);
function d(e, n) {
    i.useEffect(() => {
        o.DZ.loadIfUncached(c.yP.FRECENCY_AND_FAVORITES_SETTINGS);
    }, []);
    let t = (0, a.e7)([s.Z], () => s.Z.getApplicationFrecencyWithoutLoadingLatest()),
        d = i.useMemo(
            () =>
                null == n || 0 === n.length
                    ? e
                    : e.map((e) => {
                          var t;
                          return {
                              ...e,
                              isUserApp: null !== (t = null == n ? void 0 : n.some((n) => n.application.id === e.id)) && void 0 !== t && t
                          };
                      }),
            [e, n]
        ),
        u = i.useMemo(() => (null == n ? void 0 : n.filter((n) => !e.some((e) => e.id === n.application.id))), [e, n]),
        m = i.useMemo(() => {
            var e;
            null == u ||
                u.forEach((e) => {
                    let n = r.default.extractTimestamp(e.id);
                    null == t.getEntry(e.application.id) && t.track(e.application.id, n);
                }),
                t.compute();
            let n = null !== (e = null == u ? void 0 : u.map((e) => (0, l.X0)(e.application, !0))) && void 0 !== e ? e : [],
                i = [...d];
            return (
                i.push(...n),
                i.sort((e, n) => {
                    var i, a;
                    let l = (null !== (i = t.getScore(n.id)) && void 0 !== i ? i : 0) - (null !== (a = t.getScore(e.id)) && void 0 !== a ? a : 0);
                    return 0 !== l ? l : e.name.localeCompare(n.name);
                }),
                i
            );
        }, [d, t, u]);
    return i.useMemo(() => {
        var e, i;
        let a, l;
        null == n ||
            n.forEach((e) => {
                let n = r.default.extractTimestamp(e.id);
                (null == l || n > l) && ((a = e), (l = n));
            }),
            d.forEach((e) => {
                var n, i;
                let o = Math.max(...(null !== (i = null === (n = t.getEntry(e.id)) || void 0 === n ? void 0 : n.recentUses) && void 0 !== i ? i : []));
                (null == l || o > l) && ((a = e), (l = o));
            });
        let o = null !== (i = null == a ? void 0 : null === (e = a.application) || void 0 === e ? void 0 : e.id) && void 0 !== i ? i : '',
            s = m.filter((e) => e.id === o);
        return [...s, ...m.filter((e) => e.id !== o)];
    }, [m, d, t, n]);
}
