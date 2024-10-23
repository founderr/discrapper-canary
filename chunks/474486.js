n.d(t, {
    A7: function () {
        return R;
    },
    CI: function () {
        return O;
    },
    dX: function () {
        return P;
    },
    j$: function () {
        return a;
    },
    lH: function () {
        return x;
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
    h = n(924540),
    m = n(119269),
    I = n(938736),
    p = n(227140),
    g = n(981631),
    T = n(921944),
    S = n(689938),
    f = n(938923),
    C = n(203302);
let N = 'url(#dark-purple-gradient)';
function A(e) {
    return e.toLocaleString(E.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
((i = a || (a = {})).REFERRAL_PROGRAM = 'referral_program'), (i.TRIAL_FOR_ALL = 'trial_for_all');
let v = () =>
        (0, s.jsxs)('div', {
            className: f.coachtipContent,
            children: [
                (0, s.jsx)(o.Heading, {
                    variant: 'heading-sm/bold',
                    children: S.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children: S.Z.Messages.REFERRAL_PROGRAM_HOME_BADGE_SUBHEADER.format({ numReferrals: 3 })
                })
            ]
        }),
    Z = () =>
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
    L = () => (0, d.EW)(l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR, { dismissAction: T.L.TAKE_ACTION }),
    R = (e) => {
        let { children: t } = e;
        return (0, s.jsx)(o.Popout, {
            shouldShow: !0,
            renderPopout: () =>
                (0, s.jsx)(u.Z, {
                    artClassName: f.coachmarkArt,
                    dismissIconClassName: f.exitIcon,
                    onDismissIconClick: L,
                    dismissIcon: (0, s.jsx)(Z, {}),
                    headerClassName: f.incentiveCoachtipContent,
                    contentClassName: f.incentiveCoachtipContainer,
                    pointerClassName: f.incentiveTooltipPointer,
                    onTryFeature: () => {
                        (0, _.uL)(g.Z5c.NITRO_HOME), L();
                    },
                    art: (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsx)(m.Z, {
                            staticPercentage: 100,
                            iconClassName: f.incentiveIcon,
                            showAnimations: !1,
                            progressCircleVariation: m.Q.NITRO_LOGO,
                            ellipseOpacity: 1,
                            circleColor: N,
                            circleStroke: N,
                            progressCircleStrokeSize: 4
                        })
                    }),
                    position: 'right',
                    align: 'top',
                    tryItText: S.Z.Messages.CHECK_IT_OUT,
                    header: S.Z.Messages.REFERRAL_INCENTIVE_SHARE_NITRO_GET_DISCOUNT.format({ discountRate: I.Nq }),
                    hideDismissButton: !0,
                    body: S.Z.Messages.REFERRAL_INCENTIVE_GET_DISCOUNT_OFF_YOUR_NEXT_MONTH.format({ discountRate: I.Nq }),
                    dismissibleContent: l.z.REFERRAL_INCENTIVE_TOOLTIP_AND_TAB_COLOR,
                    maxWidth: 320
                }),
            children: t
        });
    },
    O = (e) => {
        let t,
            { children: n, variant: i, trialOffer: a } = e,
            r = 'referral_program' === i;
        return (
            (t = r
                ? (0, s.jsxs)('div', {
                      className: f.coachTipContainer,
                      children: [
                          (0, s.jsx)('div', {
                              className: f.iconContainer,
                              children: (0, s.jsx)(m.Z, {
                                  staticPercentage: 100,
                                  iconClassName: f.icon,
                                  showAnimations: !0,
                                  progressCircleVariation: m.Q.NITRO_LOGO,
                                  ellipseOpacity: 1,
                                  customAnimationClassName: f.customCircleAnimation,
                                  circleColor: 'url(#purple-gradient)'
                              })
                          }),
                          (0, s.jsx)(v, {})
                      ]
                  })
                : (0, s.jsxs)('div', {
                      className: f.t4ACoachTipContainer,
                      children: [
                          (0, s.jsx)('div', {
                              className: f.t4ACoachtipArtOuterContainer,
                              children: (0, s.jsx)(b, {})
                          }),
                          (null == a ? void 0 : a.expires_at) != null && (0, s.jsx)(M, { trialExpiration: Date.parse(a.expires_at) })
                      ]
                  })),
            (0, s.jsx)(o.Tooltip, {
                text: t,
                position: 'right',
                'aria-label': r ? S.Z.Messages.REFERRAL_PROGRAM_SHARE_NITRO_WITH_FRIENDS : S.Z.Messages.TRIAL_FOR_ALL_NITRO_MARKETING_HEADER,
                tooltipClassName: r ? f.marketingBadgeTooltip : f.t4AMarketingBadgeTooltip,
                allowOverflow: !0,
                tooltipContentClassName: f.tooltipContent,
                children: (e) =>
                    (0, s.jsx)('div', {
                        ...e,
                        children: n
                    })
            })
        );
    },
    x = (e) => {
        let { isSelected: t, onSelect: n } = e;
        return (
            r.useEffect(() => {
                t && n();
            }, [t, n]),
            (0, s.jsx)(p.Z, { copy: S.Z.Messages.NEW })
        );
    },
    b = () =>
        (0, s.jsx)('div', {
            className: f.t4ACoachtipArtInnerContainer,
            children: (0, s.jsx)('img', {
                src: C,
                alt: ''
            })
        }),
    M = (e) => {
        let { trialExpiration: t } = e,
            n = (0, c.Z)(t, 1000);
        return (0, s.jsxs)('div', {
            children: [
                (0, s.jsx)(o.Heading, {
                    variant: 'heading-sm/bold',
                    children: S.Z.Messages.TRIAL_FOR_ALL_NITRO_MARKETING_HEADER
                }),
                (0, s.jsx)(o.Text, {
                    variant: 'text-xs/normal',
                    children:
                        n.days > 0
                            ? S.Z.Messages.TRIAL_FOR_ALL_OFFER_TOOLTIP_DAYS.format({ days: n.days })
                            : S.Z.Messages.TRIAL_FOR_ALL_OFFER_TOOLTIP.format({
                                  hours: A(n.hours),
                                  minutes: A(n.minutes),
                                  seconds: A(n.seconds)
                              })
                })
            ]
        });
    },
    P = (e) => {
        let { isSelected: t, trialOffer: n } = e,
            i = (0, d.wE)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE);
        return (
            r.useEffect(() => {
                t && !i && (0, d.EW)(l.z.TRIAL_FOR_ALL_MARKETING_PAGE_BADGE, { dismissAction: T.L.TAKE_ACTION });
            }, [t, i]),
            (0, s.jsx)(h._y, {
                className: f.trialBadgeBackground,
                isTabSelected: t,
                badgeCopy: S.Z.Messages.NITRO_BADGE_TEXT,
                offerExpiresAt: i ? n.expires_at : void 0
            })
        );
    };
