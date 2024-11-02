n.d(t, {
    V: function () {
        return c;
    },
    m: function () {
        return d;
    }
});
var r = n(399606),
    i = n(592125),
    a = n(699516),
    s = n(594174),
    o = n(651530),
    l = n(163268),
    u = n(294602);
let c = (e, t) => {
        let n = (0, o.yh)(),
            { explicitContentGuilds: c, explicitContentFriendDm: d, explicitContentNonFriendDm: f } = (0, u.B)(),
            _ = (0, r.e7)([a.Z], () => a.Z.getFriendIDs().includes(t)),
            h = (0, r.e7)([s.default], () => s.default.getCurrentUser()),
            p = (0, r.e7)([i.Z], () => {
                let t = i.Z.getChannel(e);
                return null != t && t.isPrivate();
            });
        return !!n && null != h && h.id !== t && (p && _ ? (0, l.vx)(d) : p ? (0, l.vx)(f) : (0, l.vx)(c));
    },
    d = () => {
        let e = (0, o.yh)(),
            { explicitContentGuilds: t } = (0, u.B)(),
            n = (0, r.e7)([s.default], () => s.default.getCurrentUser());
        return !!e && null != n && (0, l.vx)(t);
    };
