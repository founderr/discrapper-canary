var r = n(200651),
    i = n(192379),
    a = n(996146),
    s = n(481060),
    o = n(100527),
    l = n(906732),
    u = n(540059),
    c = n(963249),
    d = n(109213),
    f = n(51144),
    _ = n(443603),
    p = n(981631),
    h = n(388032),
    m = n(553796);
t.Z = i.memo(function (e) {
    let { disabled: t, channel: i } = e,
        { analyticsLocations: g } = (0, l.ZP)(o.Z.GIFT_BUTTON),
        E = (0, f.Ft)(i),
        { Component: v, events: I, play: T } = (0, a.$)(),
        { enabled: b } = d.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        S = (0, u.Q3)('ChannelPremiumGiftButton'),
        y = i.type === p.d4z.DM;
    if (t) return null;
    let A = () => {
        b && y && null != E
            ? (0, s.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e('77298'), n.e('23357'), n.e('12013'), n.e('52249'), n.e('68956'), n.e('73503'), n.e('26182'), n.e('95900'), n.e('32776'), n.e('87624'), n.e('74421'), n.e('57674'), n.e('77650')]).then(n.bind(n, 435626));
                  return (t) =>
                      (0, r.jsx)(e, {
                          analyticsObject: {
                              page: p.ZY5.DM_CHANNEL,
                              section: p.jXE.CHANNEL_TEXT_AREA,
                              object: p.qAy.BUTTON_ICON,
                              objectType: p.Qqv.GIFT
                          },
                          analyticsLocations: g,
                          giftRecipient: E,
                          ...t
                      });
              })
            : (0, c.Z)({
                  isGift: !0,
                  giftRecipient: null === E ? void 0 : E,
                  initialPlanId: null,
                  analyticsLocations: g,
                  analyticsObject: {
                      page: i.isPrivate() ? p.ZY5.DM_CHANNEL : p.ZY5.GUILD_CHANNEL,
                      section: p.jXE.CHANNEL_TEXT_AREA,
                      object: p.qAy.BUTTON_ICON,
                      objectType: p.Qqv.GIFT
                  }
              });
    };
    return (0, r.jsx)(s.Tooltip, {
        text: h.intl.string(h.t.sWtWDQ),
        children: (e) =>
            (0, r.jsx)(_.Z, {
                ...e,
                innerClassName: m.button,
                isActive: !1,
                'aria-label': h.intl.string(h.t.Z1RnTk),
                'aria-haspopup': 'dialog',
                onClick: () => {
                    A(), T();
                },
                ...I,
                children: (0, r.jsx)(v, {
                    size: S ? 'refresh_sm' : void 0,
                    color: 'currentColor'
                })
            })
    });
});
