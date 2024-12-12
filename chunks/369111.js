r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(192379),
    a = r(399606),
    s = r(311395),
    o = r(778825),
    l = r(150039),
    u = r(271383),
    c = r(25990),
    d = r(594174),
    f = r(350327);
function _(e) {
    let { isTryItOut: n, analyticsLocations: r, guildId: _ } = e,
        h = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        p = (0, a.e7)([u.ZP], () => (null != _ && null != h ? u.ZP.getMember(_, h.id) : null)),
        m = null != p ? p.avatarDecoration : null == h ? void 0 : h.avatarDecoration,
        g = (0, s.Z)(r),
        {
            pendingAvatar: E,
            pendingAvatarDecoration: v,
            pendingErrors: I
        } = (0, a.cj)([c.Z, o.Z], () => ({
            pendingAvatar: n ? c.Z.getTryItOutAvatar() : null != _ ? o.Z.getPendingAvatar() : c.Z.getPendingAvatar(),
            pendingAvatarDecoration: n ? c.Z.getTryItOutAvatarDecoration() : null != _ ? o.Z.getPendingAvatarDecoration() : c.Z.getPendingAvatarDecoration(),
            pendingErrors: null != _ ? o.Z.getErrors().avatarDecoration : c.Z.getErrors().avatarDecoration
        })),
        T = (0, i.useCallback)((e) => (0, l.Jw)(e, null == h ? void 0 : h.avatar), [null == h ? void 0 : h.avatar]),
        b = (0, i.useCallback)(
            (e) => {
                (0, l.PO)(_, e), null != e && g(e);
            },
            [g, _]
        );
    return {
        pendingAvatar: E,
        pendingAvatarDecoration: v,
        setPendingAvatar: n ? f.c_ : T,
        setPendingAvatarDecoration: n ? f.Xz : b,
        savedAvatarDecoration: m,
        pendingErrors: I
    };
}
