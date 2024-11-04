n.d(t, {
    m$: function () {
        return h;
    },
    wV: function () {
        return u;
    },
    zU: function () {
        return d;
    }
});
var i = n(442837),
    l = n(569545),
    r = n(314897),
    s = n(19780),
    a = n(98369),
    o = n(277642),
    c = n(441894);
function u(e) {
    let { userId: t, channelId: n, location: l } = e,
        o = (0, c.J)({
            channelId: n,
            location: l
        });
    return (0, i.e7)([a.Z, r.default, s.Z], () => null != t && o && s.Z.isUserConnected(t) && r.default.getId() !== t && a.Z.isUserVerified(t), [o, t]);
}
function d(e) {
    let { streamKey: t, channelId: n, location: s } = e,
        u = (0, c.J)({
            channelId: n,
            location: s
        }),
        d = (0, o.t)(t);
    return (0, i.e7)(
        [a.Z, r.default],
        () => {
            if (!u || d || null == t) return !1;
            let e = r.default.getId(),
                { ownerId: n } = (0, l.my)(t);
            return n !== e && a.Z.isStreamVerified(t);
        },
        [d, u, t]
    );
}
function h(e) {
    let { channelId: t, location: n } = e,
        l = (0, c.J)({
            channelId: t,
            location: n
        }),
        r = (0, o.r)();
    return (0, i.e7)([a.Z], () => !!l && !r && a.Z.isCallVerified(), [r, l]);
}
