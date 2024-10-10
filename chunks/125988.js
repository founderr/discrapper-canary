n(47120);
var r = n(470079),
    i = n(442837),
    a = n(812457),
    s = n(369111),
    o = n(271383),
    l = n(594174),
    u = n(768581),
    c = n(676742),
    d = n(660097);
t.Z = (e) => {
    var t;
    let { user: n, guildId: _, size: E, onlyAnimateOnHover: f = !1, showPending: h = !1, showTryItOut: p = !1, avatarDecorationOverride: I } = e,
        [m, T] = r.useState(!1),
        { canAnimate: S } = (0, a.j)(m, f),
        g = (0, i.e7)([o.ZP], () => (null != _ && null != n ? o.ZP.getMember(_, n.id) : null)),
        [A, N] = (0, i.Wu)([l.default], () => {
            var e;
            return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)];
        }),
        R = null == g ? (null == N ? void 0 : N.avatarDecoration) : null === g.avatarDecoration ? null : null !== (t = g.avatarDecoration) && void 0 !== t ? t : null == N ? void 0 : N.avatarDecoration,
        { pendingAvatarDecoration: O } = (0, s.Z)({
            isTryItOut: p,
            guildId: _
        }),
        v = h && void 0 !== O && void 0 !== A && A === (null == n ? void 0 : n.id),
        C = null != _ && null === O,
        L = (0, c.Z)(v ? (C ? (null == N ? void 0 : N.avatarDecoration) : null != O ? O : R) : null != R ? R : null == N ? void 0 : N.avatarDecoration),
        y = r.useMemo(
            () =>
                (0, u.NZ)({
                    avatarDecoration: void 0 !== I ? I : L,
                    canAnimate: S,
                    size: E
                }),
            [L, S, E, I]
        ),
        D = r.useCallback(() => T(!0), []);
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: y,
        isAvatarDecorationAnimating: S,
        eventHandlers: {
            onMouseEnter: D,
            onMouseLeave: r.useCallback(() => T(!1), [])
        }
    };
};
