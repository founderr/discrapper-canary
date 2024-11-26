n.d(t, {
    Z: function () {
        return A;
    }
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(420660),
    c = n(100527),
    d = n(906732),
    f = n(140701),
    _ = n(158776),
    p = n(74538),
    h = n(998502),
    m = n(785717),
    g = n(369566),
    E = n(518950),
    v = n(652853),
    I = n(228168),
    T = n(981631),
    b = n(474936),
    S = n(882636);
let y = h.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function A(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: h, profileType: A, animateOnHover: N, onOpenProfile: C, className: R } = e,
        { theme: O } = (0, v.z)(),
        { analyticsLocations: D } = (0, d.ZP)(c.Z.AVATAR),
        { trackUserProfileAction: L } = (0, m.KZ)(),
        x = p.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, b.p9.TIER_2),
        w = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, h), [t, h]),
        { live: P } = (0, g.Z)(t.id),
        [M] = P,
        { status: k, isMobileOnline: U } = (0, o.cj)([_.Z], () => ({
            status: (0, u.Z)(M) ? T.Skl.STREAMING : _.Z.getStatus(t.id),
            isMobileOnline: _.Z.isMobileOnline(t.id)
        })),
        B = A === I.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80,
        G = s()(
            S.avatar,
            {
                [S.biteSize]: A === I.y0.BITE_SIZE,
                [S.fullSize]: A === I.y0.FULL_SIZE,
                [S.panel]: A === I.y0.PANEL
            },
            R
        ),
        {
            avatarDecorationSrc: Z,
            avatarSrc: F,
            eventHandlers: V
        } = (0, E.Z)({
            user: t,
            guildId: null != n ? n.guildId : a,
            size: B,
            animateOnHover: N
        }),
        j = (0, r.jsx)(y, {
            src: F,
            avatarDecoration: Z,
            size: B,
            'aria-label': t.username,
            imageClassName: null != C ? S.overlay : void 0,
            status: w ? T.Skl.UNKNOWN : k,
            statusBackdropColor: x && !w ? (0, l.getStatusBackdropColor)(O) : void 0,
            isMobile: U,
            statusTooltip: !0,
            statusTooltipDelay: I.vB
        });
    return null == C
        ? (0, r.jsx)('div', {
              ...V,
              className: G,
              children: j
          })
        : (0, r.jsx)(l.Clickable, {
              ...V,
              className: s()(G, S.clickable),
              focusProps: { ringClassName: S.focusRing },
              onClick: () => {
                  L({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: D
                  }),
                      null == C || C();
              },
              children: j
          });
}
