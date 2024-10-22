n.d(t, {
    Z: function () {
        return s;
    }
}),
    n(47120);
var l = n(192379),
    a = n(442837),
    i = n(592125),
    r = n(9156);
function s(e) {
    let t = (0, a.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
        n = (0, a.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [t]),
        s = (0, a.e7)([r.ZP], () => r.ZP.getMutedChannels(null)),
        o = l.useMemo(() => {
            let e = new Set();
            for (let t in n) {
                let l = n[t];
                null != l && s.has(l) && e.add(t);
            }
            return e;
        }, [n, s]);
    return l.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let t of e.participants) if (o.has(t)) return !1;
                      return !0;
                  }),
        [e, o]
    );
}
