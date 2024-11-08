s.d(t, {
    A7: function () {
        return I;
    },
    CI: function () {
        return S;
    },
    dX: function () {
        return B;
    },
    j$: function () {
        return r;
    },
    lH: function () {
        return y;
    }
});
var n,
    r,
    i = s(200651),
    o = s(192379),
    a = s(704215),
    l = s(481060),
    c = s(774078),
    d = s(605236),
    u = s(765585),
    p = s(703656),
    f = s(706454),
    x = s(74538),
    C = s(924540),
    g = s(119269),
    h = s(938736),
    _ = s(227140),
    m = s(981631),
    L = s(921944),
    v = s(388032),
    j = s(783072);
let E = 'url(#dark-purple-gradient)';
function A(e) {
    return e.toLocaleString(f.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
((n = r || (r = {})).REFERRAL_PROGRAM = 'referral_program'), (n.TRIAL_FOR_ALL = 'trial_for_all');
let O = () =>
        (0, i.jsxs)('div', {
            className: j.coachtipContent,
            children: [
                (0, i.jsx)(l.Heading, {
                    variant: 'heading-sm/bold',
                    children: v.intl.string(v.t.USo4s7)
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    children: v.intl.format(v.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    T = () =>
        (0, i.jsx)('svg', {
            width: '15',
            height: '15',
            viewBox: '0 0 15 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, i.jsx)('path', {
                d: 'M10.8079 11.6918C11.052 11.9359 11.4477 11.9359 11.6918 11.6918C11.9359 11.4477 11.9359 11.052 11.6918 10.8079L8.38384 7.49996L11.6918 4.19201C11.9359 3.94793 11.9359 3.5522 11.6918 3.30813C11.4477 3.06405 11.052 3.06405 10.8079 3.30813L7.49996 6.61607L4.19194 3.30806C3.94786 3.06398 3.55214 3.06398 3.30806 3.30806C3.06398 3.55214 3.06398 3.94786 3.30806 4.19194L6.61608 7.49996L3.30806 10.808C3.06398 11.0521 3.06398 11.4478 3.30806 11.6919C3.55214 11.9359 3.94786 11.9359 4.19194 11.6919L7.49996 8.38384L10.8079 11.6918Z',
                fill: 'white'
            })
        }),
    b = () => (0, d.EW)(a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: L.L.TAKE_ACTION }),
    I = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(l.Popout, {
            shouldShow: !0,
            renderPopout: () =>
                (0, i.jsx)(u.Z, {
                    artClassName: j.coachmarkArt,
                    dismissIconClassName: j.exitIcon,
                    onDismissIconClick: b,
                    dismissIcon: (0, i.jsx)(T, {}),
                    headerClassName: j.incentiveCoachtipContent,
                    contentClassName: j.incentiveCoachtipContainer,
                    pointerClassName: j.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, p.uL)(m.Z5c.NITRO_HOME), b();
                    },
                    art: (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(g.Z, {
                            staticPercentage: 100,
                            iconClassName: j.incentiveIcon,
                            showAnimations: !1,
                            progressCircleVariation: g.Q.NITRO_LOGO,
                            ellipseOpacity: 1,
                            circleColor: E,
                            circleStroke: E,
                            progressCircleStrokeSize: 4
                        })
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: v.intl.string(v.t.RzWDqa),
                    header: v.intl.formatToPlainString(v.t.md2GU1, { discountRate: h.Nq }),
                    hideDismissButton: !0,
                    body: v.intl.formatToPlainString(v.t.mxPPxc, { discountRate: h.Nq }),
                    dismissibleContent: a.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    S = (e) => {
        let t,
            { children: s, variant: n, trialOffer: r } = e,
            o = 'referral_program' === n;
        return (
            (t = o
                ? (0, i.jsxs)('div', {
                      className: j.coachTipContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: j.iconContainer,
                              children: (0, i.jsx)(g.Z, {
                                  staticPercentage: 100,
                                  iconClassName: j.icon,
                                  showAnimations: !0,
                                  progressCircleVariation: g.Q.NITRO_LOGO,
                                  ellipseOpacity: 1,
                                  customAnimationClassName: j.customCircleAnimation,
                                  circleColor: 'url(#purple-gradient)'
                              })
                          }),
                          (0, i.jsx)(O, {})
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: j.t4ACoachTipContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: j.t4ACoachtipArtOuterContainer,
                              children: (0, i.jsx)(N, {})
                          }),
                          (0, i.jsx)(w, { trialExpiration: (null == r ? void 0 : r.expires_at) != null ? Date.parse(r.expires_at) : void 0 })
                      ]
                  })),
            (0, i.jsx)(l.Tooltip, {
                text: t,
                position: 'right',
                'aria-label': o ? v.intl.string(v.t.USo4s7) : v.intl.string(v.t.Kkcmj4),
                tooltipClassName: o ? j.marketingBadgeTooltip : j.t4AMarketingBadgeTooltip,
                allowOverflow: !0,
                tooltipContentClassName: j.tooltipContent,
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        children: s
                    })
            })
        );
    },
    y = (e) => {
        let { isSelected: t, onSelect: s } = e;
        return (
            o.useEffect(() => {
                t && s();
            }, [t, s]),
            (0, i.jsx)(_.Z, { copy: v.intl.string(v.t.y2b7CA) })
        );
    },
    N = () =>
        (0, i.jsx)('div', {
            className: j.t4ACoachtipArtInnerContainer,
            children: (0, i.jsx)('img', {
                src: 'https://cdn.discordapp.com/assets/content/31203751b575be7b77118bed309f633290def5b09b8466a5886fd98514fbabb2.png',
                alt: '',
                className: j.t4ACoachtipArt
            })
        }),
    w = (e) => {
        let { trialExpiration: t } = e,
            s = (0, c.Z)(null != t ? t : Date.parse('2024-11-22T08:00:00Z'), 1000);
        return (0, i.jsxs)('div', {
            className: j.t4aCoachtipContent,
            children: [
                (0, i.jsx)(l.Heading, {
                    variant: 'heading-sm/bold',
                    children: v.intl.string(v.t.Kkcmj4)
                }),
                (0, i.jsx)(l.Text, {
                    variant: 'text-xs/normal',
                    children:
                        s.days > 0
                            ? v.intl.formatToPlainString(v.t.G1Ldn5, { days: s.days })
                            : v.intl.formatToPlainString(v.t.h982oq, {
                                  hours: A(s.hours),
                                  minutes: A(s.minutes),
                                  seconds: A(s.seconds)
                              })
                })
            ]
        });
    },
    B = (e) => {
        var t, s;
        let { isSelected: n, trialOffer: r, q4MarketingEnabled: l } = e,
            c = (0, d.wE)(a.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE),
            u = (0, x.a5)({
                intervalType: null === (t = r.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null === (s = r.subscription_trial) || void 0 === s ? void 0 : s.interval_count
            });
        return (
            o.useEffect(() => {
                n && !c && (0, d.EW)(a.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE, { dismissAction: L.L.TAKE_ACTION });
            }, [n, c]),
            (0, i.jsx)(C._y, {
                ackedClassName: j.trialAckedBadge,
                className: j.trialBadgeBackground,
                isTabSelected: n,
                badgeCopy: l ? v.intl.string(v.t.OS9KPj) : u,
                offerExpiresAt: c ? r.expires_at : void 0
            })
        );
    };
