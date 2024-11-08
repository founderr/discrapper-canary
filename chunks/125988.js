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
    let { user: n, guildId: f, size: _, onlyAnimateOnHover: h = !1, showPending: p = !1, showTryItOut: m = !1, avatarDecorationOverride: g } = e,
        [E, v] = r.useState(!1),
        { canAnimate: I } = (0, a.j)(E, h),
        S = (0, i.e7)([o.ZP], () => (null != f && null != n ? o.ZP.getMember(f, n.id) : null)),
        [b, T] = (0, i.Wu)([l.default], () => {
            var e;
            return [null === (e = l.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, l.default.getUser(null == n ? void 0 : n.id)];
        }),
        y = null == S ? (null == T ? void 0 : T.avatarDecoration) : null === S.avatarDecoration ? null : null !== (t = S.avatarDecoration) && void 0 !== t ? t : null == T ? void 0 : T.avatarDecoration,
        { pendingAvatarDecoration: A } = (0, s.Z)({
            isTryItOut: m,
            guildId: f
        }),
        N = p && void 0 !== A && void 0 !== b && b === (null == n ? void 0 : n.id),
        C = null != f && null === A,
        R = (0, c.Z)(N ? (C ? (null == T ? void 0 : T.avatarDecoration) : null != A ? A : y) : null != y ? y : null == T ? void 0 : T.avatarDecoration),
        O = r.useMemo(
            () =>
                (0, u.NZ)({
                    avatarDecoration: void 0 !== g ? g : R,
                    canAnimate: I,
                    size: _
                }),
            [R, I, _, g]
        ),
        D = r.useCallback(() => v(!0), []);
    return {
        avatarPlaceholderSrc: d,
        avatarDecorationSrc: O,
        isAvatarDecorationAnimating: I,
        eventHandlers: {
            onMouseEnter: D,
            onMouseLeave: r.useCallback(() => v(!1), [])
        }
    };
};
