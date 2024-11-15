n(47120);
var r = n(192379),
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
    let { user: n, guildId: f, size: _, onlyAnimateOnHover: p = !1, showPending: h = !1, showTryItOut: m = !1, avatarDecorationOverride: g } = e,
        [E, v] = r.useState(!1),
        { canAnimate: b } = (0, a.j)(E, p),
        I = (0, i.e7)([o.ZP], () => (null != f && null != n ? o.ZP.getMember(f, n.id) : null)),
        [S, T] = (0, i.Wu)([l.default], () => {
            var e;
            return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)];
        }),
        y = null == I ? (null == T ? void 0 : T.avatarDecoration) : null === I.avatarDecoration ? null : null !== (t = I.avatarDecoration) && void 0 !== t ? t : null == T ? void 0 : T.avatarDecoration,
        { pendingAvatarDecoration: A } = (0, s.Z)({
            isTryItOut: m,
            guildId: f
        }),
        N = h && void 0 !== A && void 0 !== S && S === (null == n ? void 0 : n.id),
        C = null != f && null === A,
        R = (0, c.Z)(N ? (C ? (null == T ? void 0 : T.avatarDecoration) : null != A ? A : y) : null != y ? y : null == T ? void 0 : T.avatarDecoration),
        O = r.useMemo(
            () =>
                (0, u.NZ)({
                    avatarDecoration: void 0 !== g ? g : R,
                    canAnimate: b,
                    size: _
                }),
            [R, b, _, g]
        ),
        D = r.useCallback(() => v(!0), []);
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: O,
        isAvatarDecorationAnimating: b,
        eventHandlers: {
            onMouseEnter: D,
            onMouseLeave: r.useCallback(() => v(!1), [])
        }
    };
};
