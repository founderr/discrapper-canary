n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(481060),
    l = n(607070),
    u = n(70097),
    c = n(104494),
    d = n(639119),
    _ = n(165583),
    E = n(197115),
    f = n(981631),
    h = n(474936),
    p = n(689938),
    m = n(507420);
let I = 'https://cdn.discordapp.com/assets/22_211_SuperReactions_GTM_Hero_v09.mp4',
    T = 32;
function g(e) {
    var t, n;
    let { onDismiss: i } = e,
        g = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        S = p.Z.Messages.SUPER_REACTIONS_LAUNCH_COACHMARK_DESCRIPTION_UNLIMITED_V2,
        A = (0, d.N)(),
        v = (0, c.Ng)(),
        N = (null == A ? void 0 : A.subscription_trial) != null || null != v,
        O = {
            object: f.qAy.BUTTON_CTA,
            section: f.jXE.SUPER_REACTION_PICKER
        };
    return (0, r.jsxs)('div', {
        className: m.wrapper,
        children: [
            (0, r.jsx)(s.Clickable, {
                onClick: i,
                className: m.closeButton,
                'aria-label': p.Z.Messages.DISMISS,
                children: (0, r.jsx)(s.XSmallIcon, {
                    size: 'md',
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                className: m.content,
                children: [
                    (0, r.jsx)('div', {
                        className: m.contentFill,
                        children: (0, r.jsx)(u.Z, {
                            className: a()(m.banner, { [m.hasTrialOffer]: N }),
                            src: I,
                            loop: !0,
                            autoPlay: !g,
                            muted: !0,
                            controls: !0
                        })
                    }),
                    N
                        ? (0, r.jsx)(_.ZP, {
                              type: h.cd.BURST_REACTION_QUICK_ACTION_UPSELL,
                              subscriptionTier: null !== (n = null == A ? void 0 : null === (t = A.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : h.Si.TIER_2,
                              headingText: p.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE,
                              analyticsLocationObject: O,
                              discountOffer: v,
                              trialOffer: A,
                              children: S
                          })
                        : (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: m.header,
                                      children: [
                                          (0, r.jsx)(s.NitroWheelIcon, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              className: m.nitroWheel,
                                              width: T,
                                              height: T
                                          }),
                                          (0, r.jsx)(s.Heading, {
                                              className: m.headerText,
                                              variant: 'heading-xl/bold',
                                              children: p.Z.Messages.SUPER_REACTIONS_UPSELL_TITLE_MOBILE
                                          })
                                      ]
                                  }),
                                  (0, r.jsx)(s.Text, {
                                      className: m.subheaderText,
                                      variant: 'text-md/normal',
                                      children: S
                                  }),
                                  (0, r.jsx)('div', {
                                      className: m.ctaActionWrapper,
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
