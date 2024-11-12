var r = n(200651),
    i = n(192379),
    a = n(996146),
    s = n(481060),
    o = n(100527),
    l = n(906732),
    u = n(963249),
    c = n(109213),
    d = n(51144),
    f = n(443603),
    _ = n(981631),
    p = n(388032),
    h = n(703130);
t.Z = i.memo(function (e) {
    let { disabled: t, channel: i } = e,
        { analyticsLocations: m } = (0, l.ZP)(o.Z.GIFT_BUTTON),
        g = (0, d.Ft)(i),
        { Component: E, events: v, play: I } = (0, a.$)(),
        { enabled: b } = c.G.useExperiment({ location: 'gift-button' }, { autoTrackExposure: !1 }),
        S = i.type === _.d4z.DM;
    if (t) return null;
    let T = () => {
        b && S && null != g
            ? (0, s.openModalLazy)(async () => {
                  let { default: e } = await Promise.all([n.e('63288'), n.e('77298'), n.e('23357'), n.e('29549'), n.e('12013'), n.e('52249'), n.e('99783'), n.e('31605'), n.e('26182'), n.e('95900'), n.e('32776'), n.e('87624'), n.e('60691'), n.e('57674'), n.e('82296')]).then(n.bind(n, 435626));
                  return (t) =>
                      (0, r.jsx)(e, {
                          analyticsObject: {
                              page: _.ZY5.DM_CHANNEL,
                              section: _.jXE.CHANNEL_TEXT_AREA,
                              object: _.qAy.BUTTON_ICON,
                              objectType: _.Qqv.GIFT
                          },
                          analyticsLocations: m,
                          giftRecipient: g,
                          ...t
                      });
              })
            : (0, u.Z)({
                  isGift: !0,
                  giftRecipient: null === g ? void 0 : g,
                  initialPlanId: null,
                  analyticsLocations: m,
                  analyticsObject: {
                      page: i.isPrivate() ? _.ZY5.DM_CHANNEL : _.ZY5.GUILD_CHANNEL,
                      section: _.jXE.CHANNEL_TEXT_AREA,
                      object: _.qAy.BUTTON_ICON,
                      objectType: _.Qqv.GIFT
                  }
              });
    };
    return (0, r.jsx)(s.Tooltip, {
        text: p.intl.string(p.t.sWtWDQ),
        children: (e) =>
            (0, r.jsx)(f.Z, {
                ...e,
                innerClassName: h.button,
                isActive: !1,
                'aria-label': p.intl.string(p.t.Z1RnTk),
                'aria-haspopup': 'dialog',
                onClick: () => {
                    T(), I();
                },
                ...v,
                children: (0, r.jsx)(E, { color: 'currentColor' })
            })
    });
});
