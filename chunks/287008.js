r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(607070),
    l = r(654904),
    u = r(271383),
    c = r(451478),
    d = r(369111);
function f(e) {
    let { user: n, guildId: r, size: i, showPending: f = !1, animateOnHover: _ = !1, avatarOverride: h } = e,
        [p, m] = a.useState(!1),
        g = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        E = (0, s.e7)([c.Z], () => c.Z.isFocused()) && (p || (!g && !_)),
        { pendingAvatar: v } = (0, d.Z)({}),
        I = f ? v : void 0,
        T = void 0 !== h ? h : I,
        b = (0, s.e7)([u.ZP], () => (null != r && null != n ? u.ZP.getMember(r, n.id) : null)),
        y = a.useMemo(
            () =>
                null != n
                    ? (0, l.SG)(T, b, n, {
                          canAnimate: E,
                          size: i
                      })
                    : void 0,
            [T, b, n, E, i]
        ),
        S = a.useCallback(() => m(!0), []);
    return {
        avatarSrc: y,
        isAvatarAnimating: E,
        eventHandlers: {
            onMouseEnter: S,
            onMouseLeave: a.useCallback(() => m(!1), [])
        }
    };
}
