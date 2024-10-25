n.d(t, {
    U: function () {
        return a;
    },
    Z: function () {
        return j;
    }
});
var i,
    a,
    s = n(200651),
    r = n(192379),
    l = n(120356),
    o = n.n(l),
    c = n(990547),
    u = n(442837),
    d = n(692547),
    _ = n(481060),
    E = n(493683),
    I = n(758059),
    m = n(700582),
    f = n(906732),
    T = n(213609),
    h = n(541716),
    N = n(28546),
    p = n(963249),
    C = n(703656),
    g = n(594174),
    S = n(626135),
    A = n(51144),
    x = n(479446),
    R = n(795448),
    v = n(441623),
    O = n(317271),
    M = n(474936),
    L = n(981631),
    Z = n(182294),
    b = n(957825),
    P = n(689938),
    D = n(17500);
function j(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: i, onMouseEnter: a, onMouseLeave: l, popoutPosition: j, analyticsPage: U, analyticsSection: y, glow: B, giftIntentSecondaryAction: k } = e,
        G = (0, u.e7)([g.default], () => g.default.getCurrentUser()),
        { analyticsLocations: F } = (0, f.ZP)(),
        w = (0, u.e7)([v.Z], () => v.Z.getFriendAnniversaryYears(i.id));
    r.useEffect(() => {
        (0, T.h)({
            name: c.ImpressionNames.GIFT_INTENT_CARD,
            type: c.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: v.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let V = () => {
            if (t === M.hX.FRIEND_ANNIVERSARY) return P.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: w });
            return (0, x.Ou)(t);
        },
        H = 'coachmark' === n,
        Y = H ? D.innerContentCoachmark : D.innerContent,
        W = H ? D.recipientUserAvatarCoachmark : D.recipientUserAvatar,
        K = H ? D.currentUserAvatarCoachmark : D.currentUserAvatar,
        z = H ? D.subHeaderTextCoachmark : D.subHeaderText,
        X = H ? _.Button.Colors.BRAND : _.Button.Colors.WHITE,
        Q = H ? d.Z.colors.WHITE : d.Z.colors.BG_BRAND,
        q = H ? D.buttonTextPrimaryCoachmark : D.buttonTextPrimary;
    return (0, s.jsx)('div', {
        className: o()(D.content, {
            [D.outerGlow]: B,
            [D.contentCoachmark]: H
        }),
        onMouseEnter: a,
        onMouseLeave: l,
        children: (0, s.jsxs)('div', {
            className: o()(Y, { [D.innerGlow]: B }),
            children: [
                (0, s.jsxs)('div', {
                    className: D.subContent,
                    children: [
                        (0, s.jsxs)('div', {
                            className: D.avatars,
                            children: [
                                (0, s.jsx)(m.Z, {
                                    className: W,
                                    user: i,
                                    'aria-label': i.username,
                                    size: Z.EF.SIZE_56
                                }),
                                null != G &&
                                    (0, s.jsx)(m.Z, {
                                        className: K,
                                        user: G,
                                        'aria-label': i.username,
                                        size: Z.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: D.textContainer,
                            children: [
                                (0, s.jsx)(_.Text, {
                                    variant: 'text-md/medium',
                                    color: H ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: (() => {
                                        if (t === M.hX.FRIEND_ANNIVERSARY) return P.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_HEADER.format({ friendUserName: A.ZP.getName(i) });
                                        return (0, x.Ou)(t);
                                    })()
                                }),
                                (0, s.jsx)(_.Text, {
                                    className: z,
                                    variant: 'text-sm/normal',
                                    children: (() => {
                                        if (t === M.hX.FRIEND_ANNIVERSARY) return P.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_SUB_HEADER_V2.format({ numberOfYears: w });
                                        return (0, x.Ou)(t);
                                    })()
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: D.buttonContainer,
                    children: [
                        null != k &&
                            (0, s.jsx)(_.Button, {
                                className: o()(D.button, D.buttonSecondary),
                                onClick: (e) => {
                                    e.stopPropagation(),
                                        S.default.track(L.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, {
                                            gift_intent_type: t,
                                            cta_type: k
                                        }),
                                        k === M.X2.VIEW_ALL
                                            ? ((0, C.uL)(L.Z5c.FRIENDS), I.Z.setSection(L.pJs.ALL))
                                            : k === M.X2.SEND_MESSAGE &&
                                              ((0, R.PV)(i.id),
                                              E.Z.openPrivateChannel(i.id).then(() => {
                                                  setTimeout(() => {
                                                      (0, N.PG)(b.X1.GIF, h.I.NORMAL),
                                                          setTimeout(() => {
                                                              (0, N.ql)(P.Z.Messages.PREMIUM_GIFTING_INTENT_GIF_SEARCH_SUGGESTION, !0);
                                                          }, 50);
                                                  }, 100);
                                              }));
                                },
                                size: _.Button.Sizes.MEDIUM,
                                color: _.Button.Colors.CUSTOM,
                                look: _.Button.Looks.OUTLINED,
                                children: (0, s.jsx)('div', {
                                    className: D.buttonContentContainer,
                                    children: (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(D.buttonText, D.buttonTextSecondary),
                                        children: (() => {
                                            switch (k) {
                                                case M.X2.VIEW_ALL:
                                                    return P.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_VIEW_ALL_SECONDARY_CTA;
                                                case M.X2.SEND_MESSAGE:
                                                    return P.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_GIF_SECONDARY_CTA;
                                                default:
                                                    return;
                                            }
                                        })()
                                    })
                                })
                            }),
                        (0, s.jsx)(_.Button, {
                            className: D.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let a = (0, O.F)(t);
                                (0, p.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: i,
                                    analyticsLocation: 'system_message' === n ? a.chat : a.actionButtonCoachmark,
                                    analyticsLocations: F,
                                    analyticsObject: {
                                        page: U,
                                        section: y,
                                        object: L.qAy.BUTTON_CTA,
                                        objectType: L.Qqv.GIFT
                                    },
                                    giftMessage: V()
                                });
                            },
                            size: _.Button.Sizes.MEDIUM,
                            color: X,
                            children: (0, s.jsxs)('div', {
                                className: D.buttonContentContainer,
                                children: [
                                    (0, s.jsx)(_.GiftIcon, {
                                        color: Q,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(D.buttonText, q),
                                        children: P.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_PRIMARY_CTA
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != j &&
                    (0, s.jsx)('div', {
                        className: o()(D.connector, {
                            [D.leftPopoutConnector]: 'left' === j,
                            [D.rightPopoutConnector]: 'right' === j
                        })
                    })
            ]
        })
    });
}
((i = a || (a = {})).SYSTEM_MESSAGE = 'system_message'), (i.COACHMARK = 'coachmark');
