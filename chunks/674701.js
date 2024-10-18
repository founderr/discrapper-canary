n.d(t, {
    U: function () {
        return a;
    },
    Z: function () {
        return L;
    }
});
var i,
    a,
    s = n(735250),
    r = n(470079),
    l = n(120356),
    o = n.n(l),
    c = n(990547),
    u = n(442837),
    d = n(692547),
    _ = n(481060),
    E = n(758059),
    I = n(700582),
    m = n(906732),
    T = n(213609),
    f = n(963249),
    h = n(703656),
    N = n(594174),
    p = n(626135),
    C = n(51144),
    g = n(479446),
    S = n(441623),
    A = n(317271),
    x = n(474936),
    R = n(981631),
    v = n(182294),
    O = n(689938),
    M = n(17500);
function L(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: i, onMouseEnter: a, onMouseLeave: l, popoutPosition: L, analyticsPage: Z, analyticsSection: b, glow: P, showSecondaryCta: D } = e,
        j = (0, u.e7)([N.default], () => N.default.getCurrentUser()),
        { analyticsLocations: U } = (0, m.ZP)(),
        y = (0, u.e7)([S.Z], () => S.Z.getFriendAnniversaryYears(i.id));
    r.useEffect(() => {
        (0, T.h)({
            name: c.ImpressionNames.GIFT_INTENT_CARD,
            type: c.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: S.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let B = () => {
            if (t === x.hX.FRIEND_ANNIVERSARY) return O.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: y });
            return (0, g.Ou)(t);
        },
        k = 'coachmark' === n,
        G = k ? M.innerContentCoachmark : M.innerContent,
        F = k ? M.recipientUserAvatarCoachmark : M.recipientUserAvatar,
        w = k ? M.currentUserAvatarCoachmark : M.currentUserAvatar,
        V = k ? M.subHeaderTextCoachmark : M.subHeaderText,
        H = k ? _.Button.Colors.BRAND : _.Button.Colors.WHITE,
        Y = k ? d.Z.colors.WHITE : d.Z.colors.BG_BRAND,
        W = k ? M.buttonTextPrimaryCoachmark : M.buttonTextPrimary;
    return (0, s.jsx)('div', {
        className: o()(M.content, {
            [M.outerGlow]: P,
            [M.contentCoachmark]: k
        }),
        onMouseEnter: a,
        onMouseLeave: l,
        children: (0, s.jsxs)('div', {
            className: o()(G, { [M.innerGlow]: P }),
            children: [
                (0, s.jsxs)('div', {
                    className: M.subContent,
                    children: [
                        (0, s.jsxs)('div', {
                            className: M.avatars,
                            children: [
                                (0, s.jsx)(I.Z, {
                                    className: F,
                                    user: i,
                                    'aria-label': i.username,
                                    size: v.EF.SIZE_56
                                }),
                                null != j &&
                                    (0, s.jsx)(I.Z, {
                                        className: w,
                                        user: j,
                                        'aria-label': i.username,
                                        size: v.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: M.textContainer,
                            children: [
                                (0, s.jsx)(_.Text, {
                                    variant: 'text-md/medium',
                                    color: k ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: (() => {
                                        if (t === x.hX.FRIEND_ANNIVERSARY) return O.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_HEADER.format({ friendUserName: C.ZP.getName(i) });
                                        return (0, g.Ou)(t);
                                    })()
                                }),
                                (0, s.jsx)(_.Text, {
                                    className: V,
                                    variant: 'text-sm/normal',
                                    children: (() => {
                                        if (t === x.hX.FRIEND_ANNIVERSARY) return O.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_SUB_HEADER_V2.format({ numberOfYears: y });
                                        return (0, g.Ou)(t);
                                    })()
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: M.buttonContainer,
                    children: [
                        D &&
                            (0, s.jsx)(_.Button, {
                                className: o()(M.button, M.buttonSecondary),
                                onClick: (e) => {
                                    e.stopPropagation(), p.default.track(R.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, { gift_intent_type: t }), (0, h.uL)(R.Z5c.FRIENDS), E.Z.setSection(R.pJs.ALL);
                                },
                                size: _.Button.Sizes.MEDIUM,
                                color: _.Button.Colors.CUSTOM,
                                look: _.Button.Looks.OUTLINED,
                                children: (0, s.jsx)('div', {
                                    className: M.buttonContentContainer,
                                    children: (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(M.buttonText, M.buttonTextSecondary),
                                        children: (() => {
                                            if (t === x.hX.FRIEND_ANNIVERSARY) return O.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_VIEW_ALL_SECONDARY_CTA;
                                        })()
                                    })
                                })
                            }),
                        (0, s.jsx)(_.Button, {
                            className: M.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let a = (0, A.F)(t);
                                (0, f.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: i,
                                    analyticsLocation: 'system_message' === n ? a.chat : a.actionButtonCoachmark,
                                    analyticsLocations: U,
                                    analyticsObject: {
                                        page: Z,
                                        section: b,
                                        object: R.qAy.BUTTON_CTA,
                                        objectType: R.Qqv.GIFT
                                    },
                                    giftMessage: B()
                                });
                            },
                            size: _.Button.Sizes.MEDIUM,
                            color: H,
                            children: (0, s.jsxs)('div', {
                                className: M.buttonContentContainer,
                                children: [
                                    (0, s.jsx)(_.GiftIcon, {
                                        color: Y,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(M.buttonText, W),
                                        children: O.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_PRIMARY_CTA
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != L &&
                    (0, s.jsx)('div', {
                        className: o()(M.connector, {
                            [M.leftPopoutConnector]: 'left' === L,
                            [M.rightPopoutConnector]: 'right' === L
                        })
                    })
            ]
        })
    });
}
((i = a || (a = {})).SYSTEM_MESSAGE = 'system_message'), (i.COACHMARK = 'coachmark');
