var r = n(47120);
var i = n(470079),
    a = n(442837),
    o = n(812457),
    s = n(369111),
    l = n(271383),
    u = n(594174),
    c = n(768581),
    d = n(676742),
    _ = n(660097);
let E = (e) => {
    var t;
    let { user: n, guildId: r, size: E, onlyAnimateOnHover: f = !1, showPending: h = !1, showTryItOut: p = !1, avatarDecorationOverride: m } = e,
        [I, T] = i.useState(!1),
        { canAnimate: g } = (0, o.j)(I, f),
        S = (0, a.e7)([l.ZP], () => (null != r && null != n ? l.ZP.getMember(r, n.id) : null)),
        [A, v] = (0, a.Wu)([u.default], () => {
            var e;
            return [null === (e = u.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, u.default.getUser(null == n ? void 0 : n.id)];
        }),
        N = null == S ? (null == v ? void 0 : v.avatarDecoration) : null === S.avatarDecoration ? null : null !== (t = S.avatarDecoration) && void 0 !== t ? t : null == v ? void 0 : v.avatarDecoration,
        { pendingAvatarDecoration: O } = (0, s.Z)({
            isTryItOut: p,
            guildId: r
        }),
        R = h && void 0 !== O && void 0 !== A && A === (null == n ? void 0 : n.id),
        C = null != r && null === O,
        y = (0, d.Z)(R ? (C ? (null == v ? void 0 : v.avatarDecoration) : null != O ? O : N) : null != N ? N : null == v ? void 0 : v.avatarDecoration),
        L = i.useMemo(
            () =>
                (0, c.NZ)({
                    avatarDecoration: void 0 !== m ? m : y,
                    canAnimate: g,
                    size: E
                }),
            [y, g, E, m]
        ),
        b = i.useCallback(() => T(!0), []);
    return {
        avatarPlaceholderSrc: _,
        avatarDecorationSrc: L,
        isAvatarDecorationAnimating: g,
        eventHandlers: {
            onMouseEnter: b,
            onMouseLeave: i.useCallback(() => T(!1), [])
        }
    };
};
t.Z = E;
