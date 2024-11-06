var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(442837),
    o = n(481060),
    c = n(232567),
    d = n(100527),
    u = n(906732),
    g = n(518950),
    m = n(598077),
    f = n(594174),
    p = n(626135),
    _ = n(63063),
    h = n(281494),
    E = n(276444),
    x = n(520540),
    b = n(197115),
    C = n(119269),
    v = n(938736),
    T = n(981631),
    N = n(388032),
    I = n(837661),
    S = n(691766);
let R = (e) => {
        let { userRecord: t, placement: n, trialStatus: r } = e,
            { avatarSrc: a, eventHandlers: l } = (0, g.Z)({
                user: t,
                size: o.AvatarSizes.SIZE_32,
                animateOnHover: !0
            }),
            c = (0, v.TW)('UserAvatarProgressBarUnit'),
            d = null != t,
            u = d
                ? (0, i.jsx)(o.Avatar, {
                      src: a,
                      'aria-label': t.username,
                      size: o.AvatarSizes.SIZE_32,
                      ...l
                  })
                : (0, i.jsx)(o.Heading, {
                      variant: 'heading-md/semibold',
                      className: I.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, i.jsx)(o.Tooltip, {
            text: N.intl.string(N.t.UnKHdn),
            shouldShow: !d,
            tooltipContentClassName: I.unsentTooltipContent,
            children: (e) =>
                (0, i.jsx)('div', {
                    className: s()({
                        [I.redeemedCircle]: c && (r === h.Fe.REDEEMED || r === h.Fe.CONVERTED),
                        [I.convertedCircleGlow]: c && r === h.Fe.CONVERTED,
                        [I.standardCircle]: c && (r === h.Fe.PENDING || null == r)
                    }),
                    children: (0, i.jsx)('div', {
                        className: c ? I.content : void 0,
                        children: (0, i.jsx)('div', {
                            className: I.userAvatarProgressBarUnit,
                            ...e,
                            children: u
                        })
                    })
                })
        });
    },
    A = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, i.jsxs)('div', {
            className: I.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, i.jsx)('div', { className: I.avatarProgressBarUnitConnectorBase }),
                (0, i.jsx)('div', {
                    className: s()({
                        [I.fullHighlight]: t > n,
                        [I.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    j = (e) => {
        let { userRecords: t, recipientStatus: n } = e,
            r = t.length,
            a = r < 1 ? null : t[0],
            s = r < 2 ? null : t[1],
            l = r < 3 ? null : t[2];
        return (0, i.jsxs)('div', {
            className: I.userAvatarProgressBarContainer,
            children: [
                (0, i.jsx)(R, {
                    userRecord: a,
                    placement: 1,
                    trialStatus: (null == a ? void 0 : a.id) != null ? n.get(null == a ? void 0 : a.id) : void 0
                }),
                (0, i.jsx)(A, {
                    numSentReferrals: r,
                    placement: 1
                }),
                (0, i.jsx)(R, {
                    userRecord: s,
                    placement: 2,
                    trialStatus: (null == s ? void 0 : s.id) != null ? n.get(null == s ? void 0 : s.id) : void 0
                }),
                (0, i.jsx)(A, {
                    numSentReferrals: r,
                    placement: 2
                }),
                (0, i.jsx)(R, {
                    userRecord: l,
                    placement: 3,
                    trialStatus: (null == l ? void 0 : l.id) != null ? n.get(null == l ? void 0 : l.id) : void 0
                })
            ]
        });
    };
t.Z = (e) => {
    let t,
        a,
        { isInSettings: g = !1 } = e,
        R = (0, l.Wu)([E.Z], () => E.Z.getSentUserIds()),
        A = (0, l.e7)([E.Z], () => E.Z.getRecipientStatus()),
        P = (0, v.uv)('ReferralProgramProgressBar'),
        O = (0, v.TW)('ReferralProgramProgressBar'),
        Z = (0, l.Wu)([f.default], () => R.map((e) => f.default.getUser(e)).filter((e) => null != e)),
        M = r.useMemo(() => Z.map((e) => new m.Z(e)), [Z]),
        w = (0, l.e7)([E.Z], () => E.Z.getRefreshAt()),
        { subscriberHomeVariant: B } = x.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
        y = P === T.g2L.UNAPPLIED || P === T.g2L.QUALIFIED,
        L = B === x.p.VARIANT_2;
    r.useEffect(() => {
        R.forEach((e) => {
            (0, c.PR)(e);
        });
    }, [R]);
    let k = {
        redeemed: 0,
        converted: 0,
        sent: A.size
    };
    A.forEach((e) => {
        e === h.Fe.REDEEMED && k.redeemed++, e === h.Fe.CONVERTED && (k.redeemed++, k.converted++);
    });
    let U = k.sent === v.Q_,
        D = _.Z.getArticleURL(T.BhN.REFERRAL_PROGRAM),
        { analyticsLocations: G } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        H = r.useRef(null),
        V = (k.sent / v.Q_) * 100,
        F = !1;
    O && null != w && ((F = 0 < (t = Math.ceil((new Date(w).getTime() - new Date().getTime()) / 86400000)) && t < v.AV), (a = (100 * (v.AV - t)) / v.AV));
    let W = F && null != t,
        z = (0, i.jsxs)('div', {
            className: I.referralInfoContent,
            children: [
                (0, i.jsx)(C.Z, {
                    percentage: W ? 0 : V,
                    progressCircleVariation: C.Q.NITRO_LOGO,
                    iconClassName: s()({
                        [I.referralProgressBarIcon]: !g,
                        [I.referralProgressBarIconSettings]: g
                    })
                }),
                (0, i.jsxs)('div', {
                    className: I.expandedProgressBarContent,
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: g ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                            className: I.expandedProgressBarHeader,
                            children: (0, v.$s)({
                                referralIncentiveLifecycleState: P,
                                hasSentAll: U,
                                referralsStatuses: k
                            })
                        }),
                        W
                            ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                      (0, i.jsx)('div', {
                                          className: I.progressBar,
                                          children: (0, i.jsx)('div', {
                                              style: { width: ''.concat(a, '%') },
                                              className: I.fill
                                          })
                                      }),
                                      (0, i.jsx)(o.Heading, {
                                          variant: 'heading-sm/semibold',
                                          className: I.referralCountdownDays,
                                          children: N.intl.format(N.t.eq39am, { days: t })
                                      })
                                  ]
                              })
                            : (0, i.jsx)(j, {
                                  userRecords: M,
                                  recipientStatus: A
                              }),
                        (0, i.jsx)(o.Text, {
                            variant: g ? 'text-sm/normal' : 'text-lg/medium',
                            children: (0, v.Hg)({
                                helpdeskArticle: D,
                                referralIncentiveLifecycleState: P,
                                referralsStatuses: k,
                                isWithinCountdownRange: F
                            })
                        }),
                        (0, i.jsxs)('div', {
                            className: s()(I.expandedProgressBarButtonContainer, { [I.expandedProgressBarButtonContainerLayout]: !g }),
                            children: [
                                !g &&
                                    !L &&
                                    (0, i.jsx)(b.Z, {
                                        color: o.ButtonColors.CUSTOM,
                                        buttonText: N.intl.string(N.t.Ve9Ge3),
                                        className: s()(I.expandedProgressBarGiftingCTA, { [I.expandedProgressBarGiftingCTALayout]: !g }),
                                        look: o.ButtonLooks.OUTLINED,
                                        isGift: !0
                                    }),
                                !W &&
                                    (0, i.jsx)(o.ShinyButton, {
                                        className: I.expandedProgressBarSelectFriendsCTA,
                                        color: o.ButtonColors.CUSTOM,
                                        onClick: () => {
                                            p.default.track(T.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: G }),
                                                (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                    return (t) =>
                                                        (0, i.jsx)(e, {
                                                            ...t,
                                                            sourceAnalyticsLocations: G
                                                        });
                                                });
                                        },
                                        onlyShineOnHover: !0,
                                        children: (0, i.jsxs)('div', {
                                            className: I.expandedProgressBarSelectFriendsCTAInner,
                                            children: [
                                                (0, i.jsx)('img', {
                                                    src: S,
                                                    alt: '',
                                                    className: I.expandedProgressBarSelectFriendsIcon
                                                }),
                                                U ? N.intl.string(N.t.SY9tyM) : N.intl.string(N.t.Lm2nFR)
                                            ]
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        }),
        Y = R.length === v.Q_,
        Q = k.redeemed === v.Q_;
    return (0, i.jsx)(u.Gt, {
        value: G,
        children: (0, i.jsx)('div', {
            className: s()({
                [I.containerWithGlowWithoutBanner]: !W && Q && !y,
                [I.containerWithGlowWithBanner]: !W && Q && y,
                [I.containerWithoutGlow]: W || !Q,
                [I.containerWithMargins]: !g,
                [I.marginWithBanner]: y,
                [I.containerWithGlowOnSettingsPage]: !W && Q && g
            }),
            children: (0, i.jsxs)('div', {
                ref: H,
                className: s()({
                    [I.expandedProgressBarContainer]: !g,
                    [I.expandedProgressBarContainerSettingsPage]: g,
                    [I.expandedProgressBarContainerVariant1]: !L && !g,
                    [I.expandedProgressBarContainerVariant2]: L && !g,
                    [I.allReferralsSentBorder]: !W && Q,
                    [I.containerWithBanner]: !W && y
                }),
                children: [
                    y &&
                        !W &&
                        (0, i.jsx)('div', {
                            className: s()(I.banner, {
                                [I.bannerWithContainerOutline]: Y,
                                [I.settingsBanner]: g && !Y,
                                [I.settingsBannerAllRedeemed]: g && Y
                            }),
                            children: (0, i.jsx)(o.Heading, {
                                color: 'always-white',
                                variant: 'heading-md/extrabold',
                                children: N.intl.format(N.t['7GMtc3'], {
                                    discountRate: v.Nq,
                                    subscriptionInterval: N.intl.string(N.t.FPybU1)
                                })
                            })
                        }),
                    z
                ]
            })
        })
    });
};
