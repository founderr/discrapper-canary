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
    a = n(314897),
    s = n(19780),
    l = n(959457),
    r = n(98369),
    o = n(441894);
function c(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function u(e) {
    let { userId: t, channelId: n, location: l } = e,
        c = (0, o.J)({
            channelId: n,
            location: l
        });
    return (0, i.e7)([r.Z, a.default, s.Z], () => null != t && c && s.Z.isUserConnected(t) && a.default.getId() !== t && r.Z.isUserVerified(t), [c, t]);
}
function d(e) {
    let { streamKey: t, channelId: n, location: s } = e,
        u = (0, o.J)({
            channelId: n,
            location: s
        });
    return (0, i.e7)(
        [r.Z, l.Z, a.default],
        () => {
            if (!u || null == t) return !1;
            let e = l.Z.getUserIds(t),
                n = a.default.getId();
            return !(null == e || c(e, n)) && r.Z.isStreamVerified(t);
        },
        [u, t]
    );
}
function h(e) {
    let { channelId: t, location: n } = e,
        l = (0, o.J)({
            channelId: t,
            location: n
        });
    return (0, i.e7)(
        [r.Z, s.Z, a.default],
        () => {
            if (!l) return !1;
            let e = s.Z.getUserIds(),
                t = a.default.getId();
            return !(null == e || c(e, t)) && r.Z.isCallVerified();
        },
        [l]
    );
}
