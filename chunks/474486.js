n.d(t, {
    A7: function () {
        return O;
    },
    CI: function () {
        return x;
    },
    dX: function () {
        return D;
    },
    j$: function () {
        return a;
    },
    lH: function () {
        return b;
    }
});
var i,
    a,
    s = n(200651),
    r = n(192379),
    l = n(704215),
    o = n(481060),
    c = n(774078),
    d = n(605236),
    u = n(765585),
    _ = n(703656),
    E = n(706454),
    h = n(74538),
    m = n(924540),
    I = n(119269),
    p = n(938736),
    g = n(227140),
    T = n(981631),
    C = n(921944),
    f = n(689938),
    S = n(938923),
    N = n(203302);
let A = 'url(#dark-purple-gradient)';
function v(e) {
    return e.toLocaleString(E.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
((i = a || (a = {})).REFERRAL_PROGRAM = 'referral_program'), (i.TRIAL_FOR_ALL = 'trial_for_all');
let Z = () =>
        (0, s.jsxs)('div', {
            className: S.coachtipContent,
            children: [
                (0, s.jsx)(o.Heading, {
                    variant: 'heading-sm/bold',
                    children: f.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children: f.Z.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({ numReferrals: 3 })
                })
            ]
        }),
    L = () =>
        (0, s.jsx)('svg', {
            width: '15',
            height: '15',
            viewBox: '0 0 15 15',
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, s.jsx)('path', {
                d: 'M10.8079 11.6918C11.052 11.9359 11.4477 11.9359 11.6918 11.6918C11.9359 11.4477 11.9359 11.052 11.6918 10.8079L8.38384 7.49996L11.6918 4.19201C11.9359 3.94793 11.9359 3.5522 11.6918 3.30813C11.4477 3.06405 11.052 3.06405 10.8079 3.30813L7.49996 6.61607L4.19194 3.30806C3.94786 3.06398 3.55214 3.06398 3.30806 3.30806C3.06398 3.55214 3.06398 3.94786 3.30806 4.19194L6.61608 7.49996L3.30806 10.808C3.06398 11.0521 3.06398 11.4478 3.30806 11.6919C3.55214 11.9359 3.94786 11.9359 4.19194 11.6919L7.49996 8.38384L10.8079 11.6918Z',
                fill: 'white'
            })
        }),
    R = () => (0, d.EW)(l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: C.L.TAKE_ACTION }),
    O = (e) => {
        let { children: t } = e;
        return (0, s.jsx)(o.Popout, {
            shouldShow: !0,
            renderPopout: () =>
                (0, s.jsx)(u.Z, {
                    artClassName: S.coachmarkArt,
                    dismissIconClassName: S.exitIcon,
                    onDismissIconClick: R,
                    dismissIcon: (0, s.jsx)(L, {}),
                    headerClassName: S.incentiveCoachtipContent,
                    contentClassName: S.incentiveCoachtipContainer,
                    pointerClassName: S.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, _.uL)(T.Z5c.NITRO_HOME), R();
                    },
                    art: (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(I.Z, {
                            staticPercentage: 100,
                            iconClassName: S.incentiveIcon,
                            showAnimations: !1,
                            progressCircleVariation: I.Q.NITRO_LOGO,
                            ellipseOpacity: 1,
                            circleColor: A,
                            circleStroke: A,
                            progressCircleStrokeSize: 4
                        })
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: f.Z.Messages.CHECK_IT_OUT,
                    header: f.Z.Messages.REFERRAL_INCENTIVE_SHARE_NITRO_GET_DISCOUNT.format({ discountRate: p.Nq }),
                    hideDismissButton: !0,
                    body: f.Z.Messages.REFERRAL_INCENTIVE_GET_DISCOUNT_OFF_YOUR_NEXT_MONTH.format({ discountRate: p.Nq }),
                    dismissibleContent: l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    x = (e) => {
        let t,
            { children: n, variant: i, trialOffer: a } = e,
            r = 'referral_program' === i;
        return (
            (t = r
                ? (0, s.jsxs)('div', {
                      className: S.coachTipContainer,
                      children: [
                          (0, s.jsx)('div', {
                              className: S.iconContainer,
                              children: (0, s.jsx)(I.Z, {
                                  staticPercentage: 100,
                                  iconClassName: S.icon,
                                  showAnimations: !0,
                                  progressCircleVariation: I.Q.NITRO_LOGO,
                                  ellipseOpacity: 1,
                                  customAnimationClassName: S.customCircleAnimation,
                                  circleColor: 'url(#purple-gradient)'
                              })
                          }),
                          (0, s.jsx)(Z, {})
                      ]
                  })
                : (0, s.jsxs)('div', {
                      className: S.t4ACoachTipContainer,
                      children: [
                          (0, s.jsx)('div', {
                              className: S.t4ACoachtipArtOuterContainer,
                              children: (0, s.jsx)(M, {})
                          }),
                          (null == a ? void 0 : a.expires_at) != null && (0, s.jsx)(P, { trialExpiration: Date.parse(a.expires_at) })
                      ]
                  })),
            (0, s.jsx)(o.Tooltip, {
                text: t,
                position: 'right',
                'aria-label': r ? f.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS : f.Z.Messages.TRIAL_FOR_ALL_NITRO_MARKETING_HEADER,
                tooltipClassName: r ? S.marketingBadgeTooltip : S.t4AMarketingBadgeTooltip,
                allowOverflow: !0,
                tooltipContentClassName: S.tooltipContent,
                children: (e) =>
                    (0, s.jsx)('div', {
                        ...e,
                        children: n
                    })
            })
        );
    },
    b = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            r.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, s.jsx)(g.Z, { copy: f.Z.Messages.NEW })
        );
    },
    M = () =>
        (0, s.jsx)('div', {
            className: S.t4ACoachtipArtInnerContainer,
            children: (0, s.jsx)('img', {
                src: N,
                alt: ''
            })
        }),
    P = (e) => {
        let { trialExpiration: t } = e,
            n = (0, c.Z)(t, 1000);
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(o.Heading, {
                    variant: 'heading-sm/bold',
                    children: f.Z.Messages.TRIAL_FOR_ALL_NITRO_MARKETING_HEADER
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children:
                        n.days > 0
                            ? f.Z.Messages.TRIAL_FOR_ALL_OFFER_TOOLTIP_DAYS.format({ days: n.days })
                            : f.Z.Messages.TRIAL_FOR_ALL_OFFER_TOOLTIP.format({
                                  hours: v(n.hours),
                                  minutes: v(n.minutes),
                                  seconds: v(n.seconds)
                              })
                })
            ]
        });
    },
    D = (e) => {
        var t, n;
        let { isSelected: i, trialOffer: a, q4MarketingEnabled: o } = e,
            c = (0, d.wE)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE),
            u = (0, h.a5)({
                intervalType: null === (t = a.subscription_trial) || void 0 === t ? void 0 : t.interval,
                intervalCount: null === (n = a.subscription_trial) || void 0 === n ? void 0 : n.interval_count
            });
        return (
            r.useEffect(() => {
                i && !c && (0, d.EW)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE, { dismissAction: C.L.TAKE_ACTION });
            }, [i, c]),
            (0, s.jsx)(m._y, {
                className: S.trialBadgeBackground,
                isTabSelected: i,
                badgeCopy: o ? f.Z.Messages.NITRO_BADGE_TEXT : u,
                offerExpiresAt: c ? a.expires_at : void 0
            })
        );
    };
