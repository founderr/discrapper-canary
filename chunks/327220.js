n.d(e, {
    Z: function () {
        return a;
    }
}),
    n(47120);
var i = n(192379),
    l = n(442837),
    r = n(592125),
    o = n(9156);
function a(t) {
    let e = (0, l.e7)([r.Z], () => r.Z.getPrivateChannelsVersion()),
        n = (0, l.e7)([r.Z], () => r.Z.getMutableDMsByUserIds(), [e]),
        a = (0, l.e7)([o.ZP], () => o.ZP.getMutedChannels(null)),
        s = i.useMemo(() => {
            let t = new Set();
            for (let e in n) {
                let i = n[e];
                null != i && a.has(i) && t.add(e);
            }
            return t;
        }, [n, a]);
    return i.useMemo(
        () =>
            null == t
                ? void 0
                : t.filter((t) => {
                      for (let e of t.participants) if (s.has(e)) return !1;
                      return !0;
                  }),
        [t, s]
    );
}
