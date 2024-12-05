t.d(n, {
    Z: function () {
        return E;
    },
    c: function () {
        return T;
    }
});
var l = t(200651),
    i = t(192379),
    s = t(120356),
    r = t.n(s),
    a = t(848246),
    o = t(442837),
    u = t(481060),
    c = t(607070),
    d = t(436774),
    m = t(933843),
    g = t(1163),
    h = t(846401),
    x = t(48125),
    S = t(639119),
    v = t(197115),
    Z = t(74538),
    C = t(981631),
    f = t(474936),
    j = t(388032),
    p = t(468888);
function N(e) {
    let { location: n, ...t } = e,
        s = (0, S.N)(),
        a = null != s,
        o = x.Z.useExperiment(
            { location: 'StreamSettingsUpsellBanner.NitroButton' },
            {
                autoTrackExposure: a,
                disable: !a
            }
        ).enabled,
        c = i.useCallback(() => {
            if (o) {
                var e;
                return null !== (e = (0, Z.fr)(s)) && void 0 !== e ? e : j.intl.string(j.t.Y2WKTk);
            }
            return j.intl.string(j.t.Y2WKTk);
        }, [o, s]);
    return (0, l.jsx)(v.Z, {
        className: r()(p.enhancedCTA, p.ctaGradientBackground),
        iconClassName: p.premiumIcon,
        subscriptionTier: f.Si.TIER_2,
        buttonText: c(),
        size: u.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: n,
        ...t
    });
}
function I() {
    let e = (0, h.Z)();
    return (0, l.jsxs)('div', {
        className: p.extendedDemoContainer,
        children: [
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        className: p.extendedDemoContainer,
                        children: [
                            (0, l.jsx)(u.Text, {
                                variant: 'text-xs/bold',
                                color: 'status-warning',
                                className: p.extendedDemoDurationText,
                                children: e.toUpperCase()
                            }),
                            (0, l.jsx)(u.Text, {
                                variant: 'text-xs/bold',
                                children: j.intl.string(j.t.bbRRNT).toUpperCase()
                            })
                        ]
                    }),
                    (0, l.jsx)(u.Text, {
                        variant: 'text-sm/medium',
                        children: j.intl.string(j.t['1swibW'])
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: p.extendedDemoButton,
                children: (0, l.jsx)(N, { size: u.Button.Sizes.SMALL })
            })
        ]
    });
}
function T() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
    return (0, l.jsxs)('div', {
        className: r()(p.reverseTrialEducationBannerContainer, { [p.reducedMotion]: e }),
        children: [
            (0, l.jsx)(u.LottieAnimation, {
                className: r()(p.unlockAnimation, { [p.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => t.e('21812').then(t.t.bind(t, 741855, 19))
            }),
            (0, l.jsx)(u.Text, {
                variant: 'text-xs/medium',
                className: p.reverseTrialEducationText,
                children: j.intl.format(j.t.GimLpa, {})
            })
        ]
    });
}
function E(e) {
    let { message: n, onClose: t, openStreamUpsellModal: i, glow: s = !1 } = e,
        o = {
            section: C.jXE.STREAM_SETTINGS,
            object: C.qAy.PREMIUM_UPSELL_BANNER,
            objectType: C.Qqv.BUY
        },
        c = (0, m.So)(a.q.STREAM_HIGH_QUALITY),
        h = g.Z.useExperiment({ location: 'StreamSettingsUpsellBanner' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, l.jsx)('div', {
        className: r()(p.upsellBanner, p.enhancedBanner, { [p.gradientGlow]: s }),
        children:
            c && h
                ? (0, l.jsx)(I, {})
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: p.iconTextContainer,
                              children: [
                                  (0, l.jsx)(u.NitroWheelIcon, {
                                      size: 'md',
                                      color: d.JX.PREMIUM_TIER_2
                                  }),
                                  (0, l.jsx)(u.Text, {
                                      variant: 'text-sm/medium',
                                      className: r()(p.upsellText, p.enhancedUpsellText),
                                      children:
                                          null != n
                                              ? n
                                              : c
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          j.intl.string(j.t.zuZ2ws),
                                                          ' ',
                                                          j.intl.format(j.t.fjSvsL, {
                                                              onClick: () =>
                                                                  i({
                                                                      analyticsLocation: o,
                                                                      onClose: t
                                                                  })
                                                          })
                                                      ]
                                                  })
                                                : j.intl.format(j.t['L/zCtr'], {
                                                      onClick: () =>
                                                          i({
                                                              analyticsLocation: o,
                                                              onClose: t
                                                          })
                                                  })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: p.enhancedCTAs,
                              children: (0, l.jsx)(N, { location: o })
                          })
                      ]
                  })
    });
}
