n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(442837),
    u = n(481060),
    c = n(420660),
    d = n(100527),
    _ = n(906732),
    E = n(233440),
    f = n(158776),
    h = n(74538),
    p = n(998502),
    m = n(785717),
    I = n(369566),
    T = n(518950),
    g = n(652853),
    S = n(228168),
    A = n(981631),
    v = n(474936),
    N = n(8621);
let O = p.ZP.getEnableHardwareAcceleration() ? u.AnimatedAvatar : u.Avatar;
function R(e) {
    let { user: t, displayProfile: n, guildId: r, channelId: o, profileType: p, animateOnHover: R, onOpenProfile: C, className: y } = e,
        { theme: L } = (0, g.z)(),
        { analyticsLocations: b } = (0, _.ZP)(d.Z.AVATAR),
        { trackUserProfileAction: D } = (0, m.KZ)(),
        M = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, v.p9.TIER_2),
        P = a.useMemo(() => t.isNonUserBot() || (0, E.W)(t, o), [t, o]),
        { live: U } = (0, I.Z)(t.id),
        [w] = U,
        { status: x, isMobileOnline: G } = (0, l.cj)([f.Z], () => ({
            status: (0, c.Z)(w) ? A.Skl.STREAMING : f.Z.getStatus(t.id),
            isMobileOnline: f.Z.isMobileOnline(t.id)
        })),
        k = p === S.y0.FULL_SIZE ? u.AvatarSizes.SIZE_120 : u.AvatarSizes.SIZE_80,
        B = s()(
            N.avatar,
            {
                [N.biteSize]: p === S.y0.BITE_SIZE,
                [N.fullSize]: p === S.y0.FULL_SIZE,
                [N.panel]: p === S.y0.PANEL
            },
            y
        ),
        {
            avatarDecorationSrc: F,
            avatarSrc: Z,
            eventHandlers: V
        } = (0, T.Z)({
            user: t,
            guildId: null != n ? n.guildId : r,
            size: k,
            animateOnHover: R
        }),
        H = (0, i.jsx)(O, {
            src: Z,
            avatarDecoration: F,
            size: k,
            'aria-label': t.username,
            imageClassName: null != C ? N.overlay : void 0,
            status: P ? A.Skl.UNKNOWN : x,
            statusBackdropColor: M && !P ? (0, u.getStatusBackdropColor)(L) : void 0,
            isMobile: G,
            statusTooltip: !0,
            statusTooltipDelay: S.vB
        });
    return null == C
        ? (0, i.jsx)('div', {
              ...V,
              className: B,
              children: H
          })
        : (0, i.jsx)(u.Clickable, {
              ...V,
              className: s()(B, N.clickable),
              focusProps: { ringClassName: N.focusRing },
              onClick: () => {
                  D({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: b
                  }),
                      null == C || C();
              },
              children: H
          });
}
