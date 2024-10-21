n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(192379),
    a = n(442837),
    s = n(592125),
    r = n(594174),
    l = n(355298),
    o = n(900255);
function c() {
    let e = (0, a.e7)([s.Z], () => s.Z.getPrivateChannelsVersion()),
        t = (0, a.Wu)(
            [s.Z, l.Z],
            () => {
                let e = s.Z.getMutablePrivateChannels(),
                    t = Array.from(l.Z.getMessageRequestChannelIds())
                        .map((t) => e[t])
                        .filter((e) => null != e);
                return (0, o.x)(t);
            },
            [e]
        ),
        n = (0, a.cj)(
            [r.default],
            () => {
                let e = {};
                return (
                    t.forEach((t) => {
                        let n = r.default.getUser(t.recipients[0]);
                        null != n && (e[t.id] = n);
                    }),
                    e
                );
            },
            [t]
        );
    return i.useMemo(
        () =>
            t.map((e) => ({
                channel: e,
                user: n[e.id]
            })),
        [t, n]
    );
}
