n.d(t, {
    Z: function () {
        return N;
    },
    c: function () {
        return T;
    }
});
var l = n(200651),
    i = n(192379),
    r = n(120356),
    s = n.n(r),
    a = n(848246),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(436774),
    f = n(933843),
    h = n(1163),
    m = n(846401),
    x = n(48125),
    g = n(639119),
    p = n(197115),
    v = n(74538),
    j = n(981631),
    C = n(474936),
    S = n(388032),
    _ = n(742769);
function Z(e) {
    let { location: t, ...n } = e,
        r = (0, g.N)(),
        a = null != r,
        o = x.Z.useExperiment(
            { location: 'StreamSettingsUpsellBanner.NitroButton' },
            {
                autoTrackExposure: a,
                disable: !a
            }
        ).enabled,
        d = i.useCallback(() => {
            if (o) {
                var e;
                return null !== (e = (0, v.fr)(r)) && void 0 !== e ? e : S.intl.string(S.t.Y2WKTk);
            }
            return S.intl.string(S.t.Y2WKTk);
        }, [o, r]);
    return (0, l.jsx)(p.Z, {
        className: s()(_.enhancedCTA, _.ctaGradientBackground),
        iconClassName: _.premiumIcon,
        subscriptionTier: C.Si.TIER_2,
        buttonText: d(),
        size: c.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: t,
        ...n
    });
}
function I() {
    let e = (0, m.Z)();
    return (0, l.jsxs)('div', {
        className: _.extendedDemoContainer,
        children: [
            (0, l.jsxs)('div', {
                children: [
                    (0, l.jsxs)('div', {
                        className: _.extendedDemoContainer,
                        children: [
                            (0, l.jsx)(c.Text, {
                                variant: 'text-xs/bold',
                                color: 'status-warning',
                                className: _.extendedDemoDurationText,
                                children: e.toUpperCase()
                            }),
                            (0, l.jsx)(c.Text, {
                                variant: 'text-xs/bold',
                                children: S.intl.string(S.t.bbRRNT).toUpperCase()
                            })
                        ]
                    }),
                    (0, l.jsx)(c.Text, {
                        variant: 'text-sm/medium',
                        children: S.intl.string(S.t['1swibW'])
                    })
                ]
            }),
            (0, l.jsx)('div', {
                className: _.extendedDemoButton,
                children: (0, l.jsx)(Z, { size: c.Button.Sizes.SMALL })
            })
        ]
    });
}
function T() {
    let e = (0, o.e7)([d.Z], () => d.Z.useReducedMotion);
    return (0, l.jsxs)('div', {
        className: s()(_.reverseTrialEducationBannerContainer, { [_.reducedMotion]: e }),
        children: [
            (0, l.jsx)(c.LottieAnimation, {
                className: s()(_.unlockAnimation, { [_.reducedMotion]: e }),
                loop: !1,
                shouldAnimate: !e,
                pauseAtFrame: e ? 149 : void 0,
                importData: () => n.e('21812').then(n.t.bind(n, 741855, 19))
            }),
            (0, l.jsx)(c.Text, {
                variant: 'text-xs/medium',
                className: _.reverseTrialEducationText,
                children: S.intl.format(S.t.GimLpa, {})
            })
        ]
    });
}
function N(e) {
    let { message: t, onClose: n, openStreamUpsellModal: i, glow: r = !1 } = e,
        o = {
            section: j.jXE.STREAM_SETTINGS,
            object: j.qAy.PREMIUM_UPSELL_BANNER,
            objectType: j.Qqv.BUY
        },
        d = (0, f.So)(a.q.STREAM_HIGH_QUALITY),
        m = h.Z.useExperiment({ location: 'StreamSettingsUpsellBanner' }, { autoTrackExposure: !1 }).extendedDemoDuration;
    return (0, l.jsx)('div', {
        className: s()(_.upsellBanner, _.enhancedBanner, { [_.gradientGlow]: r }),
        children:
            d && m
                ? (0, l.jsx)(I, {})
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsxs)('div', {
                              className: _.iconTextContainer,
                              children: [
                                  (0, l.jsx)(c.NitroWheelIcon, {
                                      size: 'md',
                                      color: u.JX.PREMIUM_TIER_2
                                  }),
                                  (0, l.jsx)(c.Text, {
                                      variant: 'text-sm/medium',
                                      className: s()(_.upsellText, _.enhancedUpsellText),
                                      children:
                                          null != t
                                              ? t
                                              : d
                                                ? (0, l.jsxs)(l.Fragment, {
                                                      children: [
                                                          S.intl.string(S.t.zuZ2ws),
                                                          ' ',
                                                          S.intl.format(S.t.fjSvsL, {
                                                              onClick: () =>
                                                                  i({
                                                                      analyticsLocation: o,
                                                                      onClose: n
                                                                  })
                                                          })
                                                      ]
                                                  })
                                                : S.intl.format(S.t['L/zCtr'], {
                                                      onClick: () =>
                                                          i({
                                                              analyticsLocation: o,
                                                              onClose: n
                                                          })
                                                  })
                                  })
                              ]
                          }),
                          (0, l.jsx)('div', {
                              className: _.enhancedCTAs,
                              children: (0, l.jsx)(Z, { location: o })
                          })
                      ]
                  })
    });
}
