s.d(t, {
    A7: function () {
        return S;
    },
    CI: function () {
        return N;
    },
    dX: function () {
        return G;
    },
    j$: function () {
        return r;
    },
    lH: function () {
        return w;
    }
});
var n,
    r,
    i = s(200651),
    o = s(192379),
    a = s(990547),
    l = s(704215),
    c = s(481060),
    d = s(774078),
    u = s(213609),
    p = s(605236),
    f = s(765585),
    x = s(703656),
    C = s(706454),
    g = s(74538),
    _ = s(924540),
    h = s(119269),
    m = s(938736),
    L = s(227140),
    v = s(981631),
    j = s(921944),
    E = s(388032),
    A = s(783072);
let O = 'url(#dark-purple-gradient)';
function T(e) {
    return e.toLocaleString(C.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
((n = r || (r = {})).REFERRAL_PROGRAM = 'referral_program'), (n.TRIAL_FOR_ALL = 'trial_for_all');
let b = () =>
        (0, i.jsxs)('div', {
            className: A.coachtipContent,
            children: [
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-sm/bold',
                    children: E.intl.string(E.t.USo4s7)
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    children: E.intl.format(E.t.AGKQq6, { numReferrals: 3 })
                })
            ]
        }),
    I = () =>
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
    y = () => (0, p.EW)(l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: j.L.TAKE_ACTION }),
    S = (e) => {
        let { children: t } = e;
        return (0, i.jsx)(c.Popout, {
            shouldShow: !0,
            renderPopout: () =>
                (0, i.jsx)(f.Z, {
                    artClassName: A.coachmarkArt,
                    dismissIconClassName: A.exitIcon,
                    onDismissIconClick: y,
                    dismissIcon: (0, i.jsx)(I, {}),
                    headerClassName: A.incentiveCoachtipContent,
                    contentClassName: A.incentiveCoachtipContainer,
                    pointerClassName: A.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, x.uL)(v.Z5c.NITRO_HOME), y();
                    },
                    art: (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(h.Z, {
                            staticPercentage: 100,
                            iconClassName: A.incentiveIcon,
                            showAnimations: !1,
                            progressCircleVariation: h.Q.NITRO_LOGO,
                            ellipseOpacity: 1,
                            circleColor: O,
                            circleStroke: O,
                            progressCircleStrokeSize: 4
                        })
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: E.intl.string(E.t.RzWDqa),
                    header: E.intl.formatToPlainString(E.t.md2GU1, { discountRate: m.Nq }),
                    hideDismissButton: !0,
                    body: E.intl.formatToPlainString(E.t.mxPPxc, { discountRate: m.Nq }),
                    dismissibleContent: l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    N = (e) => {
        let t,
            { children: s, variant: n, trialOffer: r, isHovered: o } = e,
            l = 'referral_program' === n;
        return (
            (0, u.Z)(
                {
                    type: a.ImpressionTypes.VIEW,
                    name: a.ImpressionNames.TRIAL_FOR_ALL_COACHTIP
                },
                { disableTrack: !o || l },
                [o, l]
            ),
            (t = l
                ? (0, i.jsxs)('div', {
                      className: A.coachTipContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: A.iconContainer,
                              children: (0, i.jsx)(h.Z, {
                                  staticPercentage: 100,
                                  iconClassName: A.icon,
                                  showAnimations: !0,
                                  progressCircleVariation: h.Q.NITRO_LOGO,
                                  ellipseOpacity: 1,
                                  customAnimationClassName: A.customCircleAnimation,
                                  circleColor: 'url(#purple-gradient)'
                              })
                          }),
                          (0, i.jsx)(b, {})
                      ]
                  })
                : (0, i.jsxs)('div', {
                      className: A.t4ACoachTipContainer,
                      children: [
                          (0, i.jsx)('div', {
                              className: A.t4ACoachtipArtOuterContainer,
                              children: (0, i.jsx)(B, {})
                          }),
                          (0, i.jsx)(R, { trialExpiration: (null == r ? void 0 : r.expires_at) != null ? Date.parse(r.expires_at) : void 0 })
                      ]
                  })),
            (0, i.jsx)(c.Tooltip, {
                text: t,
                position: 'right',
                'aria-label': l ? E.intl.string(E.t.USo4s7) : E.intl.string(E.t.Kkcmj4),
                tooltipClassName: l ? A.marketingBadgeTooltip : A.t4AMarketingBadgeTooltip,
                allowOverflow: !0,
                tooltipContentClassName: A.tooltipContent,
                children: (e) =>
                    (0, i.jsx)('div', {
                        ...e,
                        children: s
                    })
            })
        );
    },
    w = (e) => {
        let { isSelected: t, onSelect: s } = e;
        return (
            o.useEffect(() => {
                t && s();
            }, [t, s]),
            (0, i.jsx)(L.Z, { copy: E.intl.string(E.t.y2b7CA) })
        );
    },
    B = () =>
        (0, i.jsx)('div', {
            className: A.t4ACoachtipArtInnerContainer,
            children: (0, i.jsx)('img', {
                src: 'https://cdn.discordapp.com/assets/content/31203751b575be7b77118bed309f633290def5b09b8466a5886fd98514fbabb2.png',
                alt: '',
                className: A.t4ACoachtipArt
            })
        }),
    R = (e) => {
        let { trialExpiration: t } = e,
            s = (0, d.Z)(null != t ? t : Date.parse('2024-11-22T08:00:00Z'), 1000);
        return (0, i.jsxs)('div', {
            className: A.t4aCoachtipContent,
            children: [
                (0, i.jsx)(c.Heading, {
                    variant: 'heading-sm/bold',
                    children: E.intl.string(E.t.Kkcmj4)
                }),
                (0, i.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    children:
                        s.days > 0
                            ? E.intl.formatToPlainString(E.t.G1Ldn5, { days: s.days })
                            : E.intl.formatToPlainString(E.t.h982oq, {
                                  hours: T(s.hours),
                                  minutes: T(s.minutes),
                                  seconds: T(s.seconds)
                              })
                })
            ]
        });
    },
    G = (e) => {
        var t, s;
        let { isSelected: n, trialOffer: r, q4MarketingEnabled: a } = e,
            c = (0, p.wE)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE),
            d = (0, g.a5)({
                intervalType: null === (t = r.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null === (s = r.subscription_trial) || void 0 === s ? void 0 : s.interval_count
            });
        return (
            o.useEffect(() => {
                n && !c && (0, p.EW)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE, { dismissAction: j.L.TAKE_ACTION });
            }, [n, c]),
            (0, i.jsx)(_._y, {
                ackedClassName: A.trialAckedBadge,
                className: A.trialBadgeBackground,
                isTabSelected: n,
                badgeCopy: a ? E.intl.string(E.t.OS9KPj) : d,
                offerExpiresAt: c ? r.expires_at : void 0
            })
        );
    };
