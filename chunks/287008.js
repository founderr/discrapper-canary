n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(607070),
    s = n(654904),
    l = n(271383),
    u = n(451478),
    c = n(369111);
function d(e) {
    let { user: t, guildId: n, size: r, showPending: d = !1, animateOnHover: _ = !1, avatarOverride: E } = e,
        [f, h] = i.useState(!1),
        p = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        m = (0, a.e7)([u.Z], () => u.Z.isFocused()) && (f || (!p && !_)),
        { pendingAvatar: I } = (0, c.Z)({}),
        T = d ? I : void 0,
        g = void 0 !== E ? E : T,
        S = (0, a.e7)([l.ZP], () => (null != n && null != t ? l.ZP.getMember(n, t.id) : null)),
        A = i.useMemo(
            () =>
                null != t
                    ? (0, s.SG)(g, S, t, {
                          canAnimate: m,
                          size: r
                      })
                    : void 0,
            [g, S, t, m, r]
        ),
        v = i.useCallback(() => h(!0), []);
    return {
        avatarSrc: A,
        isAvatarAnimating: m,
        eventHandlers: {
            onMouseEnter: v,
            onMouseLeave: i.useCallback(() => h(!1), [])
        }
    };
}
