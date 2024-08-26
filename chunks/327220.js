r.d(t, {
    Z: function () {
        return l;
    }
}),
    r(47120);
var a = r(470079),
    n = r(442837),
    i = r(592125),
    o = r(9156);
function l(e) {
    let t = (0, n.e7)([i.Z], () => i.Z.getPrivateChannelsVersion()),
        r = (0, n.e7)([i.Z], () => i.Z.getMutableDMsByUserIds(), [t]),
        l = (0, n.e7)([o.ZP], () => o.ZP.getMutedChannels(null)),
        c = a.useMemo(() => {
            let e = new Set();
            for (let t in r) {
                let a = r[t];
                null != a && l.has(a) && e.add(t);
            }
            return e;
        }, [r, l]);
    return a.useMemo(
        () =>
            null == e
                ? void 0
                : e.filter((e) => {
                      for (let t of e.participants) if (c.has(t)) return !1;
                      return !0;
                  }),
        [e, c]
    );
}
