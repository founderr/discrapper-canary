n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    l = n(607070),
    u = n(70097),
    c = n(104494),
    d = n(639119),
    f = n(165583),
    _ = n(197115),
    h = n(981631),
    p = n(474936),
    m = n(388032),
    g = n(187704);
function E(e) {
    var t, n;
    let { onDismiss: i } = e,
        E = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        v = m.intl.string(m.t['eikz4+']),
        I = (0, d.N)(),
        S = (0, c.Ng)(),
        T = (null == I ? void 0 : I.subscription_trial) != null || null != S,
        b = {
            object: h.qAy.BUTTON_CTA,
            section: h.jXE.SUPER_REACTION_PICKER
        };
    return (0, r.jsxs)('div', {
        className: g.wrapper,
        children: [
            (0, r.jsx)(o.Clickable, {
                onClick: i,
                className: g.closeButton,
                'aria-label': m.intl.string(m.t.WAI6xs),
                children: (0, r.jsx)(o.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: g.content,
                children: [
                    (0, r.jsx)('div', {
                        className: g.contentFill,
                        children: (0, r.jsx)(u.Z, {
                            className: a()(g.banner, { [g.hasTrialOffer]: T }),
                            src: 'https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4',
                            loop: !0,
                            autoPlay: !E,
                            muted: !0,
                            controls: !0
                        })
                    }),
                    T
                        ? (0, r.jsx)(f.ZP, {
                              type: p.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: null !== (n = null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : p.Si.TIER_2,
                              headingText: m.intl.string(m.t.Wfl5zs),
                              analyticsLocationObject: b,
                              discountOffer: S,
                              trialOffer: I,
                              children: v
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: g.header,
                                      children: [
                                          (0, r.jsx)(o.NitroWheelIcon, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              className: g.nitroWheel,
                                              width: 32,
                                              height: 32
                                          }),
                                          (0, r.jsx)(o.Heading, {
                                              className: g.headerText,
                                              variant: 'heading-xl/bold',
                                              children: m.intl.string(m.t.Wfl5zs)
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      className: g.subheaderText,
                                      variant: 'text-md/normal',
                                      children: v
                                  }),
                                  (0, r.jsx)('div', {
                                      className: g.ctaActionWrapper,
                                      children: (0, r.jsx)(_.Z, {
                                          subscriptionTier: p.Si.TIER_2,
                                          buttonText: m.intl.string(m.t.sEAnVF)
                                      })
                                  })
                              ]
                          })
                ]
            })
        ]
    });
}
