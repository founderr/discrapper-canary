var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(232567),
    d = n(100527),
    _ = n(906732),
    E = n(204197),
    u = n(598077),
    T = n(594174),
    I = n(626135),
    R = n(63063),
    C = n(281494),
    g = n(276444),
    N = n(520540),
    p = n(197115),
    A = n(119269),
    m = n(938736),
    f = n(981631),
    S = n(689938),
    h = n(484757),
    M = n(691766);
let x = (e) => {
        let { userRecord: t, placement: n, trialStatus: a } = e,
            { avatarSrc: r, eventHandlers: l } = (0, E.Z)({
                user: t,
                size: o.AvatarSizes.SIZE_32,
                animateOnHover: !0
            }),
            c = (0, m.TW)('UserAvatarProgressBarUnit'),
            d = null != t,
            _ = d
                ? (0, s.jsx)(o.Avatar, {
                      src: r,
                      'aria-label': t.username,
                      size: o.AvatarSizes.SIZE_32,
                      ...l
                  })
                : (0, s.jsx)(o.Heading, {
                      variant: 'heading-md/semibold',
                      className: h.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, s.jsx)(o.Tooltip, {
            text: S.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
            shouldShow: !d,
            tooltipContentClassName: h.unsentTooltipContent,
            children: (e) =>
                (0, s.jsx)('div', {
                    className: i()({
                        [h.redeemedCircle]: c && (a === C.Fe.REDEEMED || a === C.Fe.CONVERTED),
                        [h.convertedCircleGlow]: c && a === C.Fe.CONVERTED,
                        [h.standardCircle]: c && (a === C.Fe.PENDING || null == a)
                    }),
                    children: (0, s.jsx)('div', {
                        className: c ? h.content : void 0,
                        children: (0, s.jsx)('div', {
                            className: h.userAvatarProgressBarUnit,
                            ...e,
                            children: _
                        })
                    })
                })
        });
    },
    O = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, s.jsxs)('div', {
            className: h.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, s.jsx)('div', { className: h.avatarProgressBarUnitConnectorBase }),
                (0, s.jsx)('div', {
                    className: i()({
                        [h.fullHighlight]: t > n,
                        [h.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    b = (e) => {
        let { userRecords: t, recipientStatus: n } = e,
            a = t.length,
            r = a < 1 ? null : t[0],
            i = a < 2 ? null : t[1],
            l = a < 3 ? null : t[2];
        return (0, s.jsxs)('div', {
            className: h.userAvatarProgressBarContainer,
            children: [
                (0, s.jsx)(x, {
                    userRecord: r,
                    placement: 1,
                    trialStatus: (null == r ? void 0 : r.id) != null ? n.get(null == r ? void 0 : r.id) : void 0
                }),
                (0, s.jsx)(O, {
                    numSentReferrals: a,
                    placement: 1
                }),
                (0, s.jsx)(x, {
                    userRecord: i,
                    placement: 2,
                    trialStatus: (null == i ? void 0 : i.id) != null ? n.get(null == i ? void 0 : i.id) : void 0
                }),
                (0, s.jsx)(O, {
                    numSentReferrals: a,
                    placement: 2
                }),
                (0, s.jsx)(x, {
                    userRecord: l,
                    placement: 3,
                    trialStatus: (null == l ? void 0 : l.id) != null ? n.get(null == l ? void 0 : l.id) : void 0
                })
            ]
        });
    };
t.Z = (e) => {
    let t,
        r,
        { isInSettings: E = !1 } = e,
        x = (0, l.Wu)([g.Z], () => g.Z.getSentUserIds()),
        O = (0, l.e7)([g.Z], () => g.Z.getRecipientStatus()),
        P = (0, m.uv)('ReferralProgramProgressBar'),
        L = (0, m.TW)('ReferralProgramProgressBar'),
        v = (0, l.Wu)([T.default], () => x.map((e) => T.default.getUser(e)).filter((e) => null != e)),
        Z = a.useMemo(() => v.map((e) => new u.Z(e)), [v]),
        D = (0, l.e7)([g.Z], () => g.Z.getRefreshAt()),
        { subscriberHomeVariant: B } = N.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
        j = P === f.g2L.UNAPPLIED || P === f.g2L.QUALIFIED,
        U = B === N.p.VARIANT_2;
    a.useEffect(() => {
        x.forEach((e) => {
            (0, c.PR)(e);
        });
    }, [x]);
    let G = {
        redeemed: 0,
        converted: 0,
        sent: O.size
    };
    O.forEach((e) => {
        e === C.Fe.REDEEMED && G.redeemed++, e === C.Fe.CONVERTED && (G.redeemed++, G.converted++);
    });
    let y = G.sent === m.Q_,
        H = R.Z.getArticleURL(f.BhN.REFERRAL_PROGRAM),
        { analyticsLocations: k } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        w = a.useRef(null),
        F = (G.sent / m.Q_) * 100,
        V = !1;
    L && null != D && ((V = 0 < (t = Math.ceil((new Date(D).getTime() - new Date().getTime()) / 86400000)) && t < m.AV), (r = (100 * (m.AV - t)) / m.AV));
    let W = V && null != t,
        K = (0, s.jsxs)('div', {
            className: h.referralInfoContent,
            children: [
                (0, s.jsx)(A.Z, {
                    percentage: W ? 0 : F,
                    progressCircleVariation: A.Q.NITRO_LOGO,
                    iconClassName: i()({
                        [h.referralProgressBarIcon]: !E,
                        [h.referralProgressBarIconSettings]: E
                    })
                }),
                (0, s.jsxs)('div', {
                    className: h.expandedProgressBarContent,
                    children: [
                        (0, s.jsx)(o.Heading, {
                            variant: E ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                            className: h.expandedProgressBarHeader,
                            children: (0, m.$s)({
                                referralIncentiveLifecycleState: P,
                                hasSentAll: y,
                                referralsStatuses: G
                            })
                        }),
                        W
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('div', {
                                          className: h.progressBar,
                                          children: (0, s.jsx)('div', {
                                              style: { width: ''.concat(r, '%') },
                                              className: h.fill
                                          })
                                      }),
                                      (0, s.jsx)(o.Heading, {
                                          variant: 'heading-sm/semibold',
                                          className: h.referralCountdownDays,
                                          children: S.Z.Messages.REFERRAL_INCENTIVE_COUNTDOWN_DAYS.format({ days: t })
                                      })
                                  ]
                              })
                            : (0, s.jsx)(b, {
                                  userRecords: Z,
                                  recipientStatus: O
                              }),
                        (0, s.jsx)(o.Text, {
                            variant: E ? 'text-sm/normal' : 'text-lg/medium',
                            children: (0, m.Hg)({
                                helpdeskArticle: H,
                                referralIncentiveLifecycleState: P,
                                referralsStatuses: G,
                                isWithinCountdownRange: V
                            })
                        }),
                        (0, s.jsxs)('div', {
                            className: i()(h.expandedProgressBarButtonContainer, { [h.expandedProgressBarButtonContainerLayout]: !E }),
                            children: [
                                !E &&
                                    !U &&
                                    (0, s.jsx)(p.Z, {
                                        color: o.ButtonColors.CUSTOM,
                                        buttonText: S.Z.Messages.GIFT_NITRO,
                                        className: i()(h.expandedProgressBarGiftingCTA, { [h.expandedProgressBarGiftingCTALayout]: !E }),
                                        look: o.ButtonLooks.OUTLINED,
                                        isGift: !0
                                    }),
                                !W &&
                                    (0, s.jsx)(o.ShinyButton, {
                                        className: h.expandedProgressBarSelectFriendsCTA,
                                        color: o.ButtonColors.CUSTOM,
                                        onClick: () => {
                                            I.default.track(f.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: k }),
                                                (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                    return (t) =>
                                                        (0, s.jsx)(e, {
                                                            ...t,
                                                            sourceAnalyticsLocations: k
                                                        });
                                                });
                                        },
                                        onlyShineOnHover: !0,
                                        children: (0, s.jsxs)('div', {
                                            className: h.expandedProgressBarSelectFriendsCTAInner,
                                            children: [
                                                (0, s.jsx)('img', {
                                                    src: M,
                                                    alt: '',
                                                    className: h.expandedProgressBarSelectFriendsIcon
                                                }),
                                                y ? S.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : S.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
                                            ]
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        }),
        Y = x.length === m.Q_,
        z = G.redeemed === m.Q_;
    return (0, s.jsx)(_.Gt, {
        value: k,
        children: (0, s.jsx)('div', {
            className: i()({
                [h.containerWithGlowWithoutBanner]: !W && z && !j,
                [h.containerWithGlowWithBanner]: !W && z && j,
                [h.containerWithoutGlow]: W || !z,
                [h.containerWithMargins]: !E,
                [h.marginWithBanner]: j,
                [h.containerWithGlowOnSettingsPage]: !W && z && E
            }),
            children: (0, s.jsxs)('div', {
                ref: w,
                className: i()({
                    [h.expandedProgressBarContainer]: !E,
                    [h.expandedProgressBarContainerSettingsPage]: E,
                    [h.expandedProgressBarContainerVariant1]: !U && !E,
                    [h.expandedProgressBarContainerVariant2]: U && !E,
                    [h.allReferralsSentBorder]: !W && z,
                    [h.containerWithBanner]: !W && j
                }),
                children: [
                    j &&
                        !W &&
                        (0, s.jsx)('div', {
                            className: i()(h.banner, {
                                [h.bannerWithContainerOutline]: Y,
                                [h.settingsBanner]: E && !Y,
                                [h.settingsBannerAllRedeemed]: E && Y
                            }),
                            children: (0, s.jsx)(o.Heading, {
                                color: 'always-white',
                                variant: 'heading-md/extrabold',
                                children: S.Z.Messages.REFERRAL_INCENTIVE_YOU_EARNED_DISCOUNT.format({
                                    discountRate: m.Nq,
                                    subscriptionInterval: S.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                                })
                            })
                        }),
                    K
                ]
            })
        })
    });
};
