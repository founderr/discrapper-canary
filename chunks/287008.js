n.d(t, {
    Z: function () {
        return c;
    }
}),
    n(47120);
var r = n(192379),
    i = n(442837),
    a = n(607070),
    s = n(654904),
    o = n(271383),
    l = n(451478),
    u = n(369111);
function c(e) {
    let { user: t, guildId: n, size: c, showPending: d = !1, animateOnHover: f = !1, avatarOverride: _ } = e,
        [h, p] = r.useState(!1),
        m = (0, i.e7)([a.Z], () => a.Z.useReducedMotion),
        g = (0, i.e7)([l.Z], () => l.Z.isFocused()) && (h || (!m && !f)),
        { pendingAvatar: E } = (0, u.Z)({}),
        v = void 0 !== _ ? _ : d ? E : void 0,
        I = (0, i.e7)([o.ZP], () => (null != n && null != t ? o.ZP.getMember(n, t.id) : null)),
        S = r.useMemo(
            () =>
                null != t
                    ? (0, s.SG)(v, I, t, {
                          canAnimate: g,
                          size: c
                      })
                    : void 0,
            [v, I, t, g, c]
        ),
        b = r.useCallback(() => p(!0), []);
    return {
        avatarSrc: S,
        isAvatarAnimating: g,
        eventHandlers: {
            onMouseEnter: b,
            onMouseLeave: r.useCallback(() => p(!1), [])
        }
    };
}
