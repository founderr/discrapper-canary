var s = n(735250),
    a = n(470079),
    r = n(120356),
    i = n.n(r),
    l = n(442837),
    o = n(481060),
    c = n(232567),
    d = n(100527),
    _ = n(906732),
    u = n(518950),
    E = n(598077),
    T = n(594174),
    I = n(626135),
    R = n(63063),
    m = n(281494),
    g = n(276444),
    N = n(520540),
    C = n(197115),
    p = n(119269),
    A = n(938736),
    f = n(981631),
    h = n(689938),
    S = n(837661),
    M = n(691766);
let x = (e) => {
        let { userRecord: t, placement: n, trialStatus: a } = e,
            { avatarSrc: r, eventHandlers: l } = (0, u.Z)({
                user: t,
                size: o.AvatarSizes.SIZE_32,
                animateOnHover: !0
            }),
            c = (0, A.TW)('UserAvatarProgressBarUnit'),
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
                      className: S.userAvatarProgressBarUnitNum,
                      children: n
                  });
        return (0, s.jsx)(o.Tooltip, {
            text: h.Z.Messages.REFERRAL_PROGRAM_PROGRESS_BAR_UNSENT_TOOLTIP,
            shouldShow: !d,
            tooltipContentClassName: S.unsentTooltipContent,
            children: (e) =>
                (0, s.jsx)('div', {
                    className: i()({
                        [S.redeemedCircle]: c && (a === m.Fe.REDEEMED || a === m.Fe.CONVERTED),
                        [S.convertedCircleGlow]: c && a === m.Fe.CONVERTED,
                        [S.standardCircle]: c && (a === m.Fe.PENDING || null == a)
                    }),
                    children: (0, s.jsx)('div', {
                        className: c ? S.content : void 0,
                        children: (0, s.jsx)('div', {
                            className: S.userAvatarProgressBarUnit,
                            ...e,
                            children: _
                        })
                    })
                })
        });
    },
    b = (e) => {
        let { numSentReferrals: t, placement: n } = e;
        return (0, s.jsxs)('div', {
            className: S.avatarProgressBarUnitConnectorContainer,
            children: [
                (0, s.jsx)('div', { className: S.avatarProgressBarUnitConnectorBase }),
                (0, s.jsx)('div', {
                    className: i()({
                        [S.fullHighlight]: t > n,
                        [S.halfHighlight]: t === n
                    })
                })
            ]
        });
    },
    O = (e) => {
        let { userRecords: t, recipientStatus: n } = e,
            a = t.length,
            r = a < 1 ? null : t[0],
            i = a < 2 ? null : t[1],
            l = a < 3 ? null : t[2];
        return (0, s.jsxs)('div', {
            className: S.userAvatarProgressBarContainer,
            children: [
                (0, s.jsx)(x, {
                    userRecord: r,
                    placement: 1,
                    trialStatus: (null == r ? void 0 : r.id) != null ? n.get(null == r ? void 0 : r.id) : void 0
                }),
                (0, s.jsx)(b, {
                    numSentReferrals: a,
                    placement: 1
                }),
                (0, s.jsx)(x, {
                    userRecord: i,
                    placement: 2,
                    trialStatus: (null == i ? void 0 : i.id) != null ? n.get(null == i ? void 0 : i.id) : void 0
                }),
                (0, s.jsx)(b, {
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
        { isInSettings: u = !1 } = e,
        x = (0, l.Wu)([g.Z], () => g.Z.getSentUserIds()),
        b = (0, l.e7)([g.Z], () => g.Z.getRecipientStatus()),
        v = (0, A.uv)('ReferralProgramProgressBar'),
        P = (0, A.TW)('ReferralProgramProgressBar'),
        L = (0, l.Wu)([T.default], () => x.map((e) => T.default.getUser(e)).filter((e) => null != e)),
        Z = a.useMemo(() => L.map((e) => new E.Z(e)), [L]),
        D = (0, l.e7)([g.Z], () => g.Z.getRefreshAt()),
        { subscriberHomeVariant: U } = N.g.useExperiment({ location: 'ReferralProgramProgressBar' }, { autoTrackExposure: !1 }),
        B = v === f.g2L.UNAPPLIED || v === f.g2L.QUALIFIED,
        j = U === N.p.VARIANT_2;
    a.useEffect(() => {
        x.forEach((e) => {
            (0, c.PR)(e);
        });
    }, [x]);
    let G = {
        redeemed: 0,
        converted: 0,
        sent: b.size
    };
    b.forEach((e) => {
        e === m.Fe.REDEEMED && G.redeemed++, e === m.Fe.CONVERTED && (G.redeemed++, G.converted++);
    });
    let w = G.sent === A.Q_,
        y = R.Z.getArticleURL(f.BhN.REFERRAL_PROGRAM),
        { analyticsLocations: H } = (0, _.ZP)(d.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_PROGRESS_BAR),
        k = a.useRef(null),
        F = (G.sent / A.Q_) * 100,
        V = !1;
    P && null != D && ((V = 0 < (t = Math.ceil((new Date(D).getTime() - new Date().getTime()) / 86400000)) && t < A.AV), (r = (100 * (A.AV - t)) / A.AV));
    let W = V && null != t,
        K = (0, s.jsxs)('div', {
            className: S.referralInfoContent,
            children: [
                (0, s.jsx)(p.Z, {
                    percentage: W ? 0 : F,
                    progressCircleVariation: p.Q.NITRO_LOGO,
                    iconClassName: i()({
                        [S.referralProgressBarIcon]: !u,
                        [S.referralProgressBarIconSettings]: u
                    })
                }),
                (0, s.jsxs)('div', {
                    className: S.expandedProgressBarContent,
                    children: [
                        (0, s.jsx)(o.Heading, {
                            variant: u ? 'heading-xl/extrabold' : 'heading-xxl/extrabold',
                            className: S.expandedProgressBarHeader,
                            children: (0, A.$s)({
                                referralIncentiveLifecycleState: v,
                                hasSentAll: w,
                                referralsStatuses: G
                            })
                        }),
                        W
                            ? (0, s.jsxs)(s.Fragment, {
                                  children: [
                                      (0, s.jsx)('div', {
                                          className: S.progressBar,
                                          children: (0, s.jsx)('div', {
                                              style: { width: ''.concat(r, '%') },
                                              className: S.fill
                                          })
                                      }),
                                      (0, s.jsx)(o.Heading, {
                                          variant: 'heading-sm/semibold',
                                          className: S.referralCountdownDays,
                                          children: h.Z.Messages.REFERRAL_INCENTIVE_COUNTDOWN_DAYS.format({ days: t })
                                      })
                                  ]
                              })
                            : (0, s.jsx)(O, {
                                  userRecords: Z,
                                  recipientStatus: b
                              }),
                        (0, s.jsx)(o.Text, {
                            variant: u ? 'text-sm/normal' : 'text-lg/medium',
                            children: (0, A.Hg)({
                                helpdeskArticle: y,
                                referralIncentiveLifecycleState: v,
                                referralsStatuses: G,
                                isWithinCountdownRange: V
                            })
                        }),
                        (0, s.jsxs)('div', {
                            className: i()(S.expandedProgressBarButtonContainer, { [S.expandedProgressBarButtonContainerLayout]: !u }),
                            children: [
                                !u &&
                                    !j &&
                                    (0, s.jsx)(C.Z, {
                                        color: o.ButtonColors.CUSTOM,
                                        buttonText: h.Z.Messages.GIFT_NITRO,
                                        className: i()(S.expandedProgressBarGiftingCTA, { [S.expandedProgressBarGiftingCTALayout]: !u }),
                                        look: o.ButtonLooks.OUTLINED,
                                        isGift: !0
                                    }),
                                !W &&
                                    (0, s.jsx)(o.ShinyButton, {
                                        className: S.expandedProgressBarSelectFriendsCTA,
                                        color: o.ButtonColors.CUSTOM,
                                        onClick: () => {
                                            I.default.track(f.rMx.REFERRAL_PROGRAM_SHARE_MODAL_CTA_CLICKED, { location_stack: H }),
                                                (0, o.openModalLazy)(async () => {
                                                    let { default: e } = await n.e('47435').then(n.bind(n, 204387));
                                                    return (t) =>
                                                        (0, s.jsx)(e, {
                                                            ...t,
                                                            sourceAnalyticsLocations: H
                                                        });
                                                });
                                        },
                                        onlyShineOnHover: !0,
                                        children: (0, s.jsxs)('div', {
                                            className: S.expandedProgressBarSelectFriendsCTAInner,
                                            children: [
                                                (0, s.jsx)('img', {
                                                    src: M,
                                                    alt: '',
                                                    className: S.expandedProgressBarSelectFriendsIcon
                                                }),
                                                w ? h.Z.Messages.REFERRAL_PROGRAM_REMIND_FRIENDS : h.Z.Messages.REFERRAL_PROGRAM_SELECT_FRIENDS
                                            ]
                                        })
                                    })
                            ]
                        })
                    ]
                })
            ]
        }),
        Y = x.length === A.Q_,
        z = G.redeemed === A.Q_;
    return (0, s.jsx)(_.Gt, {
        value: H,
        children: (0, s.jsx)('div', {
            className: i()({
                [S.containerWithGlowWithoutBanner]: !W && z && !B,
                [S.containerWithGlowWithBanner]: !W && z && B,
                [S.containerWithoutGlow]: W || !z,
                [S.containerWithMargins]: !u,
                [S.marginWithBanner]: B,
                [S.containerWithGlowOnSettingsPage]: !W && z && u
            }),
            children: (0, s.jsxs)('div', {
                ref: k,
                className: i()({
                    [S.expandedProgressBarContainer]: !u,
                    [S.expandedProgressBarContainerSettingsPage]: u,
                    [S.expandedProgressBarContainerVariant1]: !j && !u,
                    [S.expandedProgressBarContainerVariant2]: j && !u,
                    [S.allReferralsSentBorder]: !W && z,
                    [S.containerWithBanner]: !W && B
                }),
                children: [
                    B &&
                        !W &&
                        (0, s.jsx)('div', {
                            className: i()(S.banner, {
                                [S.bannerWithContainerOutline]: Y,
                                [S.settingsBanner]: u && !Y,
                                [S.settingsBannerAllRedeemed]: u && Y
                            }),
                            children: (0, s.jsx)(o.Heading, {
                                color: 'always-white',
                                variant: 'heading-md/extrabold',
                                children: h.Z.Messages.REFERRAL_INCENTIVE_YOU_EARNED_DISCOUNT.format({
                                    discountRate: A.Nq,
                                    subscriptionInterval: h.Z.Messages.PREMIUM_SUBSCRIPTION_INTERVAL_MONTH
                                })
                            })
                        }),
                    K
                ]
            })
        })
    });
};
