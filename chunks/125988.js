var i = r(47120);
var a = r(192379),
    s = r(442837),
    o = r(812457),
    l = r(369111),
    u = r(271383),
    c = r(594174),
    d = r(768581),
    f = r(676742),
    _ = r(660097);
let h = (e) => {
    var n;
    let { user: r, guildId: i, size: h, onlyAnimateOnHover: p = !1, showPending: m = !1, showTryItOut: g = !1, avatarDecorationOverride: E } = e,
        [v, I] = a.useState(!1),
        { canAnimate: T } = (0, o.j)(v, p),
        b = (0, s.e7)([u.ZP], () => (null != i && null != r ? u.ZP.getMember(i, r.id) : null)),
        [y, S] = (0, s.Wu)([c.default], () => {
            var e;
            return [null === (e = c.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, c.default.getUser(null == r ? void 0 : r.id)];
        }),
        A = null == b ? (null == S ? void 0 : S.avatarDecoration) : null === b.avatarDecoration ? null : null !== (n = b.avatarDecoration) && void 0 !== n ? n : null == S ? void 0 : S.avatarDecoration,
        { pendingAvatarDecoration: N } = (0, l.Z)({
            isTryItOut: g,
            guildId: i
        }),
        C = m && void 0 !== N && void 0 !== y && y === (null == r ? void 0 : r.id),
        R = null != i && null === N,
        O = (0, f.Z)(C ? (R ? (null == S ? void 0 : S.avatarDecoration) : null != N ? N : A) : null != A ? A : null == S ? void 0 : S.avatarDecoration),
        D = a.useMemo(
            () =>
                (0, d.NZ)({
                    avatarDecoration: void 0 !== E ? E : O,
                    canAnimate: T,
                    size: h
                }),
            [O, T, h, E]
        ),
        L = a.useCallback(() => I(!0), []);
    return {
        avatarPlaceholderSrc: _,
        avatarDecorationSrc: D,
        isAvatarDecorationAnimating: T,
        eventHandlers: {
            onMouseEnter: L,
            onMouseLeave: a.useCallback(() => I(!1), [])
        }
    };
};
n.Z = h;
