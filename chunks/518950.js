r.d(n, {
    Z: function () {
        return u;
    }
});
var i = r(192379),
    a = r(481060),
    s = r(1585),
    o = r(125988),
    l = r(287008);
function u(e) {
    let { user: n, guildId: r, size: u, showPending: c = !1, showTryItOut: d = !1, animateOnHover: f = !1, avatarDecorationOverride: _, avatarOverride: h } = e,
        {
            avatarSrc: p,
            isAvatarAnimating: m,
            eventHandlers: g
        } = (0, l.Z)({
            user: n,
            guildId: r,
            size: (0, a.getAvatarSize)(u),
            showPending: c,
            animateOnHover: f,
            avatarOverride: h
        }),
        {
            avatarPlaceholderSrc: E,
            avatarDecorationSrc: v,
            eventHandlers: I
        } = (0, o.Z)({
            user: n,
            guildId: null != r ? r : void 0,
            size: (0, s.y9)(u),
            showPending: c,
            onlyAnimateOnHover: f,
            avatarDecorationOverride: _,
            showTryItOut: d
        }),
        T = i.useCallback(() => {
            g.onMouseEnter(), I.onMouseEnter();
        }, [g, I]);
    return {
        avatarPlaceholderSrc: E,
        avatarDecorationSrc: v,
        avatarSrc: p,
        isAnimating: m,
        eventHandlers: {
            onMouseEnter: T,
            onMouseLeave: i.useCallback(() => {
                g.onMouseLeave(), I.onMouseLeave();
            }, [g, I])
        }
    };
}
