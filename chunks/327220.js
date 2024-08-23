t.d(n, {
    Z: function () {
        return s;
    }
}),
    t(47120);
var a = t(470079),
    l = t(442837),
    i = t(592125),
    r = t(9156);
function s(e) {
    let n = (0, l.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
        t = (0, l.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [n]),
        s = (0, l.e7)([r.ZP], () => r.ZP.getMutedChannels(null)),
        o = a.useMemo(() => {
            let e = new Set();
            for (let n in t) {
                let a = t[n];
                null != a && s.has(a) && e.add(n);
            }
            return e;
        }, [t, s]);
    return a.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let n of e.participants) if (o.has(n)) return !1;
                      return !0;
                  }),
        [e, o]
    );
}
