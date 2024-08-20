n.d(t, {
    m$: function () {
        return p;
    },
    wV: function () {
        return d;
    },
    zU: function () {
        return h;
    }
});
var i = n(442837),
    a = n(569545),
    s = n(314897),
    l = n(19780),
    r = n(959457),
    o = n(98369),
    c = n(441894);
function u(e, t) {
    return 0 === e.size || (1 === e.size && e.has(t));
}
function d(e) {
    let { userId: t, channelId: n, location: a } = e,
        r = (0, c.J)({
            channelId: n,
            location: a
        });
    return (0, i.e7)([o.Z, s.default, l.Z], () => null != t && r && l.Z.isUserConnected(t) && s.default.getId() !== t && o.Z.isUserVerified(t), [r, t]);
}
function h(e) {
    let { streamKey: t, channelId: n, location: l } = e,
        d = (0, c.J)({
            channelId: n,
            location: l
        });
    return (0, i.e7)(
        [o.Z, r.Z, s.default],
        () => {
            if (!d || null == t) return !1;
            let e = r.Z.getUserIds(t),
                n = s.default.getId();
            if (null == e || u(e, n)) return !1;
            let { ownerId: i } = (0, a.my)(t);
            return i !== n && o.Z.isStreamVerified(t);
        },
        [d, t]
    );
}
function p(e) {
    let { channelId: t, location: n } = e,
        a = (0, c.J)({
            channelId: t,
            location: n
        });
    return (0, i.e7)(
        [o.Z, l.Z, s.default],
        () => {
            if (!a) return !1;
            let e = l.Z.getUserIds(),
                t = s.default.getId();
            return !(null == e || u(e, t)) && o.Z.isCallVerified();
        },
        [a]
    );
}
