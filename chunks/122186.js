t.d(n, {
    Z: function () {
        return N;
    },
    c: function () {
        return C;
    }
});
var l = t(735250);
t(470079);
var s = t(120356),
    a = t.n(s),
    r = t(848246),
    i = t(442837),
    o = t(481060),
    u = t(607070),
    c = t(436774),
    d = t(933843),
    m = t(1163),
    E = t(846401),
    S = t(197115),
    _ = t(981631),
    g = t(474936),
    h = t(689938),
    x = t(304095);
function Z(e) {
    let { location: n, ...t } = e;
    return (0, l.jsx)(S.Z, {
        className: a()(x.enhancedCTA, x.ctaGradientBackground),
        iconClassName: x.premiumIcon,
        subscriptionTier: g.Si.TIER_2,
        buttonText: h.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
        size: o.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: n,
        ...t
    });
}
function f() {
    let e = (0, E.Z)();
    return (0, l.jsxs)('div', {
        className: x.extendedDemoContainer,
        children: [
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        className: x.extendedDemoContainer,
                        children: [
                            (0, l.jsx)(o.Text, {
                                variant: 'text-xs/bold',
                                color: 'status-warning',
                                className: x.extendedDemoDurationText,
                                children: e.toUpperCase()
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-xs/bold',
                                children: h.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_TITLE.toUpperCase()
                            })
                        ]
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        children: h.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_BODY
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: x.extendedDemoButton,
                children: (0, l.jsx)(Z, { size: o.Button.Sizes.SMALL })
            })
        ]
    });
}
function C() {
    let e = (0, i.e7)([u.Z], () => u.Z.useReducedMotion);
    return (0, l.jsxs)('div', {
        className: a()(x.reverseTrialEducationBannerContainer, { [x.reducedMotion]: e }),
        children: [
            (0, l.jsx)(o.LottieAnimation, {
                className: a()(x.unlockAnimation, { [x.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => t.e('21812').then(t.t.bind(t, 741855, 19))
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/medium',
                className: x.reverseTrialEducationText,
                children: h.Z.Messages.PREMIUM_REVERSE_TRIAL_SCREEN_SHARE_QUALITY_EDUCATION.format()
            })
        ]
    });
}
function N(e) {
    let { message: n, onClose: t, openStreamUpsellModal: s, glow: i = !1 } = e,
        u = {
            section: _.jXE.STREAM_SETTINGS,
            object: _.qAy.PREMIUM_UPSELL_BANNER,
            objectType: _.Qqv.BUY
        },
        E = (0, d.So)(r.q.STREAM_HIGH_QUALITY),
        S = m.Z.useExperiment({ location: 'StreamSettingsUpsellBanner' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, l.jsx)('div', {
        className: a()(x.upsellBanner, x.enhancedBanner, { [x.gradientGlow]: i }),
        children:
            E && S
                ? (0, l.jsx)(f, {})
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: x.iconTextContainer,
                              children: [
                                  (0, l.jsx)(o.NitroWheelIcon, {
                                      size: 'md',
                                      color: c.JX.PREMIUM_TIER_2
                                  }),
                                  (0, l.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      className: a()(x.upsellText, x.enhancedUpsellText),
                                      children:
                                          null != n
                                              ? n
                                              : E
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          h.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
                                                          ' ',
                                                          h.Z.Messages.LEARN_MORE_CLICK.format({
                                                              onClick: () =>
                                                                  s({
                                                                      analyticsLocation: u,
                                                                      onClose: t
                                                                  })
                                                          })
                                                      ]
                                                  })
                                                : h.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
                                                      onClick: () =>
                                                          s({
                                                              analyticsLocation: u,
                                                              onClose: t
                                                          })
                                                  })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: x.enhancedCTAs,
                              children: (0, l.jsx)(Z, {})
                          })
                      ]
                  })
    });
}
