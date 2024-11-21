var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(2052),
    c = n(367907),
    d = n(906732),
    f = n(28546),
    _ = n(26323),
    p = n(434404),
    h = n(357156),
    m = n(430824),
    g = n(267642),
    E = n(981631),
    v = n(30513),
    b = n(388032),
    I = n(40847);
t.Z = (e) => {
    let { className: t, guildId: n, channel: a, shouldTrackUpsellViewed: T, setTrackedUpsellViewed: S } = e,
        { location: y } = (0, u.O)(),
        { analyticsLocations: A } = (0, d.ZP)(),
        N = (0, o.e7)([m.Z], () => m.Z.getGuild(n)),
        { canManageAllExpressions: C } = (0, h.XJ)(N),
        R = null != N && 0 === (0, g.A3)(N.premiumTier) && !N.hasFeature(E.oNc.MORE_STICKERS);
    return (i.useEffect(() => {
        C &&
            R &&
            T &&
            ((0, c.yw)(E.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: y,
                guild_id: null == N ? void 0 : N.id,
                channel_id: null == a ? void 0 : a.id,
                type: 'Expression Picker Inline Sticker Upsell',
                location_stack: A
            }),
            S(!0));
    }, [R, N, a, y, T, S, A, C]),
    null != N && C)
        ? R
            ? (0, r.jsxs)('div', {
                  className: s()(I.upsell, t),
                  children: [
                      (0, r.jsx)(l.BoostTier2SimpleIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: I.icon
                      }),
                      (0, r.jsx)(l.Text, {
                          color: 'interactive-normal',
                          className: I.body,
                          variant: 'text-sm/normal',
                          children: b.intl.format(b.t.AXWla2, { count: (0, g.A3)(E.Eu4.TIER_1) })
                      }),
                      (0, r.jsx)(l.Button, {
                          look: l.Button.Looks.LINK,
                          color: l.Button.Colors.LINK,
                          onClick: () => {
                              (0, _.Z)({
                                  analyticsLocations: A,
                                  analyticsSourceLocation: y,
                                  guild: N,
                                  perks: (0, v.hC)()
                              });
                          },
                          children: b.intl.string(b.t['Gb+BJC'])
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  className: s()(I.upsell, t),
                  children: [
                      (0, r.jsx)(l.StickerIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          className: I.icon,
                          width: 20,
                          height: 20
                      }),
                      (0, r.jsx)(l.Text, {
                          color: 'interactive-normal',
                          className: I.body,
                          variant: 'text-sm/normal',
                          children: b.intl.string(b.t.S83wgo)
                      }),
                      (0, r.jsx)(l.Button, {
                          look: l.Button.Looks.LINK,
                          color: l.Button.Colors.LINK,
                          onClick: () => {
                              (0, f._Q)(), p.Z.open(n, E.pNK.STICKERS, y);
                          },
                          children: b.intl.string(b.t.bwNjur)
                      })
                  ]
              })
        : null;
};
