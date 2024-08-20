t.d(n, {
    Z: function () {
        return Z;
    },
    c: function () {
        return N;
    }
});
var l = t(735250);
t(470079);
var s = t(120356),
    a = t.n(s),
    r = t(848246),
    i = t(442837),
    o = t(481060),
    c = t(607070),
    u = t(436774),
    d = t(933843),
    m = t(1163),
    E = t(846401),
    _ = t(197115),
    S = t(981631),
    h = t(474936),
    g = t(689938),
    C = t(304095);
function I(e) {
    let { location: n, ...t } = e;
    return (0, l.jsx)(_.Z, {
        className: a()(C.enhancedCTA, C.ctaGradientBackground),
        iconClassName: C.premiumIcon,
        subscriptionTier: h.Si.TIER_2,
        buttonText: g.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
        size: o.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: n,
        ...t
    });
}
function x() {
    let e = (0, E.Z)();
    return (0, l.jsxs)('div', {
        className: C.extendedDemoContainer,
        children: [
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        className: C.extendedDemoContainer,
                        children: [
                            (0, l.jsx)(o.Text, {
                                variant: 'text-xs/bold',
                                color: 'status-warning',
                                className: C.extendedDemoDurationText,
                                children: e.toUpperCase()
                            }),
                            (0, l.jsx)(o.Text, {
                                variant: 'text-xs/bold',
                                children: g.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_TITLE.toUpperCase()
                            })
                        ]
                    }),
                    (0, l.jsx)(o.Text, {
                        variant: 'text-sm/medium',
                        children: g.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_V2_DURATION_UPSELL_BODY
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: C.extendedDemoButton,
                children: (0, l.jsx)(I, { size: o.Button.Sizes.SMALL })
            })
        ]
    });
}
function N() {
    let e = (0, i.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, l.jsxs)('div', {
        className: a()(C.reverseTrialEducationBannerContainer, { [C.reducedMotion]: e }),
        children: [
            (0, l.jsx)(o.LottieAnimation, {
                className: a()(C.unlockAnimation, { [C.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => t.e('21812').then(t.t.bind(t, 741855, 19))
            }),
            (0, l.jsx)(o.Text, {
                variant: 'text-xs/medium',
                color: 'always-white',
                className: C.reverseTrialEducationText,
                children: g.Z.Messages.PREMIUM_REVERSE_TRIAL_SCREEN_SHARE_QUALITY_EDUCATION.format()
            })
        ]
    });
}
function Z(e) {
    let { message: n, onClose: t, openStreamUpsellModal: s, glow: i = !1 } = e,
        c = {
            section: S.jXE.STREAM_SETTINGS,
            object: S.qAy.PREMIUM_UPSELL_BANNER,
            objectType: S.Qqv.BUY
        },
        E = (0, d.So)(r.q.STREAM_HIGH_QUALITY),
        _ = m.Z.useExperiment({ location: 'StreamSettingsUpsellBanner' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, l.jsx)('div', {
        className: a()(C.upsellBanner, C.enhancedBanner, { [C.gradientGlow]: i }),
        children:
            E && _
                ? (0, l.jsx)(x, {})
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: C.iconTextContainer,
                              children: [
                                  (0, l.jsx)(o.NitroWheelIcon, {
                                      size: 'md',
                                      color: u.JX.PREMIUM_TIER_2
                                  }),
                                  (0, l.jsx)(o.Text, {
                                      variant: 'text-sm/medium',
                                      className: a()(C.upsellText, C.enhancedUpsellText),
                                      children:
                                          null != n
                                              ? n
                                              : E
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          g.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_OPT_IN_UPSELL_BODY,
                                                          ' ',
                                                          g.Z.Messages.LEARN_MORE_CLICK.format({
                                                              onClick: () =>
                                                                  s({
                                                                      analyticsLocation: c,
                                                                      onClose: t
                                                                  })
                                                          })
                                                      ]
                                                  })
                                                : g.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
                                                      onClick: () =>
                                                          s({
                                                              analyticsLocation: c,
                                                              onClose: t
                                                          })
                                                  })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: C.enhancedCTAs,
                              children: (0, l.jsx)(I, {})
                          })
                      ]
                  })
    });
}
