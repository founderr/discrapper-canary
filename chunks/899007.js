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
    h = n(74538),
    p = n(998502),
    m = n(785717),
    g = n(369566),
    E = n(518950),
    v = n(652853),
    I = n(228168),
    S = n(981631),
    T = n(474936),
    b = n(8621);
let y = p.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function A(e) {
    let { user: t, displayProfile: n, guildId: a, channelId: p, profileType: A, animateOnHover: N, onOpenProfile: C, className: R } = e,
        { theme: O } = (0, v.z)(),
        { analyticsLocations: D } = (0, d.ZP)(c.Z.AVATAR),
        { trackUserProfileAction: L } = (0, m.KZ)(),
        x = h.ZP.isPremiumAtLeast(null == n ? void 0 : n.premiumType, T.p9.TIER_2),
        w = i.useMemo(() => t.isNonUserBot() || (0, f.W)(t, p), [t, p]),
        { live: M } = (0, g.Z)(t.id),
        [P] = M,
        { status: k, isMobileOnline: U } = (0, o.cj)([_.Z], () => ({
            status: (0, u.Z)(P) ? S.Skl.STREAMING : _.Z.getStatus(t.id),
            isMobileOnline: _.Z.isMobileOnline(t.id)
        })),
        G = A === I.y0.FULL_SIZE ? l.AvatarSizes.SIZE_120 : l.AvatarSizes.SIZE_80,
        B = s()(
            b.avatar,
            {
                [b.biteSize]: A === I.y0.BITE_SIZE,
                [b.fullSize]: A === I.y0.FULL_SIZE,
                [b.panel]: A === I.y0.PANEL
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
            size: G,
            animateOnHover: N
        }),
        H = (0, r.jsx)(y, {
            src: F,
            avatarDecoration: Z,
            size: G,
            'aria-label': t.username,
            imageClassName: null != C ? b.overlay : void 0,
            status: w ? S.Skl.UNKNOWN : k,
            statusBackdropColor: x && !w ? (0, l.getStatusBackdropColor)(O) : void 0,
            isMobile: U,
            statusTooltip: !0,
            statusTooltipDelay: I.vB
        });
    return null == C
        ? (0, r.jsx)('div', {
              ...V,
              className: B,
              children: H
          })
        : (0, r.jsx)(l.Clickable, {
              ...V,
              className: s()(B, b.clickable),
              focusProps: { ringClassName: b.focusRing },
              onClick: () => {
                  L({
                      action: 'PRESS_VIEW_PROFILE',
                      analyticsLocations: D
                  }),
                      null == C || C();
              },
              children: H
          });
}
