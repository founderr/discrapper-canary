var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(2052),
    c = n(367907),
    d = n(906732),
    _ = n(28546),
    E = n(26323),
    f = n(434404),
    h = n(357156),
    p = n(430824),
    I = n(267642),
    m = n(981631),
    T = n(30513),
    S = n(689938),
    g = n(562907);
t.Z = (e) => {
    let { className: t, guildId: n, channel: a, shouldTrackUpsellViewed: A, setTrackedUpsellViewed: N } = e,
        { location: O } = (0, u.O)(),
        { analyticsLocations: R } = (0, d.ZP)(),
        v = (0, o.e7)([p.Z], () => p.Z.getGuild(n)),
        { canManageAllExpressions: C } = (0, h.XJ)(v),
        L = null != v && 0 === (0, I.A3)(v.premiumTier) && !v.hasFeature(m.oNc.MORE_STICKERS);
    return (i.useEffect(() => {
        C &&
            L &&
            A &&
            ((0, c.yw)(m.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                location: O,
                guild_id: null == v ? void 0 : v.id,
                channel_id: null == a ? void 0 : a.id,
                type: 'Expression Picker Inline Sticker Upsell',
                location_stack: R
            }),
            N(!0));
    }, [L, v, a, O, A, N, R, C]),
    null != v && C)
        ? L
            ? (0, r.jsxs)('div', {
                  className: s()(g.upsell, t),
                  children: [
                      (0, r.jsx)(l.BoostTier2SimpleIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: g.icon
                      }),
                      (0, r.jsx)(l.Text, {
                          color: 'interactive-normal',
                          className: g.body,
                          variant: 'text-sm/normal',
                          children: S.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_DESCRIPTION.format({ count: (0, I.A3)(m.Eu4.TIER_1) })
                      }),
                      (0, r.jsx)(l.Button, {
                          look: l.Button.Looks.LINK,
                          color: l.Button.Colors.LINK,
                          onClick: () => {
                              (0, E.Z)({
                                  analyticsLocations: R,
                                  analyticsSourceLocation: O,
                                  guild: v,
                                  perks: (0, T.hC)()
                              });
                          },
                          children: S.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_PREMIUM_SUBSCRIPTIONS_CTA
                      })
                  ]
              })
            : (0, r.jsxs)('div', {
                  className: s()(g.upsell, t),
                  children: [
                      (0, r.jsx)(l.StickerIcon, {
                          size: 'custom',
                          color: 'currentColor',
                          className: g.icon,
                          width: 20,
                          height: 20
                      }),
                      (0, r.jsx)(l.Text, {
                          color: 'interactive-normal',
                          className: g.body,
                          variant: 'text-sm/normal',
                          children: S.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_DESCRIPTION
                      }),
                      (0, r.jsx)(l.Button, {
                          look: l.Button.Looks.LINK,
                          color: l.Button.Colors.LINK,
                          onClick: () => {
                              (0, _._Q)(), f.Z.open(n, m.pNK.STICKERS, O);
                          },
                          children: S.Z.Messages.STICKER_PICKER_EMPTY_GUILD_UPSELL_NO_STICKERS_CTA
                      })
                  ]
              })
        : null;
};
