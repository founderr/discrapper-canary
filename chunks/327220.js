n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    a = n(592125),
    r = n(9156);
function o(e) {
    let t = (0, l.e7)([a.Z], () => a.Z.getPrivateChannelsVersion()),
        n = (0, l.e7)([a.Z], () => a.Z.getMutableDMsByUserIds(), [t]),
        o = (0, l.e7)([r.ZP], () => r.ZP.getMutedChannels(null)),
        s = i.useMemo(() => {
            let e = new Set();
            for (let t in n) {
                let i = n[t];
                null != i && o.has(i) && e.add(t);
            }
            return e;
        }, [n, o]);
    return i.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let t of e.participants) if (s.has(t)) return !1;
                      return !0;
                  }),
        [e, s]
    );
}
