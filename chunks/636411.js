n.d(t, {
    Z: function () {
        return m;
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
    _ = n(165583),
    E = n(197115),
    f = n(981631),
    h = n(474936),
    p = n(689938),
    I = n(507420);
function m(e) {
    var t, n;
    let { onDismiss: i } = e,
        m = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
        T = p.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2,
        S = (0, d.N)(),
        g = (0, c.Ng)(),
        A = (null == S ? void 0 : S.subscription_trial) != null || null != g,
        N = {
            object: f.qAy.BUTTON_CTA,
            section: f.jXE.SUPER_REACTION_PICKER
        };
    return (0, r.jsxs)('div', {
        className: I.wrapper,
        children: [
            (0, r.jsx)(o.Clickable, {
                onClick: i,
                className: I.closeButton,
                'aria-label': p.Z.Messages.DISMISS,
                children: (0, r.jsx)(o.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: I.content,
                children: [
                    (0, r.jsx)('div', {
                        className: I.contentFill,
                        children: (0, r.jsx)(u.Z, {
                            className: a()(I.banner, { [I.hasTrialOffer]: A }),
                            src: 'https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4',
                            loop: !0,
                            autoPlay: !m,
                            muted: !0,
                            controls: !0
                        })
                    }),
                    A
                        ? (0, r.jsx)(_.ZP, {
                              type: h.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: null !== (n = null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : h.Si.TIER_2,
                              headingText: p.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
                              analyticsLocationObject: N,
                              discountOffer: g,
                              trialOffer: S,
                              children: T
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: I.header,
                                      children: [
                                          (0, r.jsx)(o.NitroWheelIcon, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              className: I.nitroWheel,
                                              width: 32,
                                              height: 32
                                          }),
                                          (0, r.jsx)(o.Heading, {
                                              className: I.headerText,
                                              variant: 'heading-xl/bold',
                                              children: p.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(o.Text, {
                                      className: I.subheaderText,
                                      variant: 'text-md/normal',
                                      children: T
                                  }),
                                  (0, r.jsx)('div', {
                                      className: I.ctaActionWrapper,
                                      children: (0, r.jsx)(E.Z, {
                                          subscriptionTier: h.Si.TIER_2,
                                          buttonText: p.Z.Messages.UNLOCK_WITH_NITRO
                                      })
                                  })
                              ]
                          })
                ]
            })
        ]
    });
}
