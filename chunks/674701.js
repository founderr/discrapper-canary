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
    h = n(963249),
    N = n(703656),
    f = n(594174),
    C = n(626135),
    p = n(51144),
    g = n(479446),
    A = n(441623),
    S = n(317271),
    R = n(474936),
    x = n(981631),
    O = n(182294),
    M = n(689938),
    v = n(17500);
function L(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: i, onMouseEnter: a, onMouseLeave: l, popoutPosition: L, analyticsPage: Z, analyticsSection: P, glow: b, showSecondaryCta: D } = e,
        j = (0, u.e7)([f.default], () => f.default.getCurrentUser()),
        { analyticsLocations: U } = (0, m.ZP)(),
        y = (0, u.e7)([A.Z], () => A.Z.getFriendAnniversaryYears(i.id));
    r.useEffect(() => {
        (0, T.h)({
            name: c.ImpressionNames.GIFT_INTENT_CARD,
            type: c.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: A.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let B = () => {
            if (t === R.hX.FRIEND_ANNIVERSARY) return M.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: y });
            return (0, g.Ou)(t);
        },
        k = 'coachmark' === n,
        G = k ? v.innerContentCoachmark : v.innerContent,
        F = k ? v.recipientUserAvatarCoachmark : v.recipientUserAvatar,
        w = k ? v.currentUserAvatarCoachmark : v.currentUserAvatar,
        V = k ? v.subHeaderTextCoachmark : v.subHeaderText,
        H = k ? _.Button.Colors.BRAND : _.Button.Colors.WHITE,
        Y = k ? d.Z.colors.WHITE : d.Z.colors.BG_BRAND,
        W = k ? v.buttonTextPrimaryCoachmark : v.buttonTextPrimary;
    return (0, s.jsx)('div', {
        className: o()(v.content, {
            [v.outerGlow]: b,
            [v.contentCoachmark]: k
        }),
        onMouseEnter: a,
        onMouseLeave: l,
        children: (0, s.jsxs)('div', {
            className: o()(G, { [v.innerGlow]: b }),
            children: [
                (0, s.jsxs)('div', {
                    className: v.subContent,
                    children: [
                        (0, s.jsxs)('div', {
                            className: v.avatars,
                            children: [
                                (0, s.jsx)(I.Z, {
                                    className: F,
                                    user: i,
                                    'aria-label': i.username,
                                    size: O.EF.SIZE_56
                                }),
                                null != j &&
                                    (0, s.jsx)(I.Z, {
                                        className: w,
                                        user: j,
                                        'aria-label': i.username,
                                        size: O.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: v.textContainer,
                            children: [
                                (0, s.jsx)(_.Text, {
                                    variant: 'text-md/medium',
                                    color: k ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: (() => {
                                        if (t === R.hX.FRIEND_ANNIVERSARY) return M.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_HEADER.format({ friendUserName: p.ZP.getName(i) });
                                        return (0, g.Ou)(t);
                                    })()
                                }),
                                (0, s.jsx)(_.Text, {
                                    className: V,
                                    variant: 'text-sm/normal',
                                    children: (() => {
                                        if (t === R.hX.FRIEND_ANNIVERSARY) return M.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_SUB_HEADER_V2.format({ numberOfYears: y });
                                        return (0, g.Ou)(t);
                                    })()
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: v.buttonContainer,
                    children: [
                        D &&
                            (0, s.jsx)(_.Button, {
                                className: o()(v.button, v.buttonSecondary),
                                onClick: (e) => {
                                    e.stopPropagation(), C.default.track(x.rMx.GIFT_INTENT_CARD_SECONDARY_CTA_CLICKED, { gift_intent_type: t }), (0, N.uL)(x.Z5c.FRIENDS), E.Z.setSection(x.pJs.ALL);
                                },
                                size: _.Button.Sizes.MEDIUM,
                                color: _.Button.Colors.CUSTOM,
                                look: _.Button.Looks.OUTLINED,
                                children: (0, s.jsx)('div', {
                                    className: v.buttonContentContainer,
                                    children: (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(v.buttonText, v.buttonTextSecondary),
                                        children: (() => {
                                            if (t === R.hX.FRIEND_ANNIVERSARY) return M.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_VIEW_ALL_SECONDARY_CTA;
                                        })()
                                    })
                                })
                            }),
                        (0, s.jsx)(_.Button, {
                            className: v.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let a = (0, S.F)(t);
                                (0, h.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: i,
                                    analyticsLocation: 'system_message' === n ? a.chat : a.actionButtonCoachmark,
                                    analyticsLocations: U,
                                    analyticsObject: {
                                        page: Z,
                                        section: P,
                                        object: x.qAy.BUTTON_CTA,
                                        objectType: x.Qqv.GIFT
                                    },
                                    giftMessage: B()
                                });
                            },
                            size: _.Button.Sizes.MEDIUM,
                            color: H,
                            children: (0, s.jsxs)('div', {
                                className: v.buttonContentContainer,
                                children: [
                                    (0, s.jsx)(_.GiftIcon, {
                                        color: Y,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(v.buttonText, W),
                                        children: M.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_PRIMARY_CTA
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != L &&
                    (0, s.jsx)('div', {
                        className: o()(v.connector, {
                            [v.leftPopoutConnector]: 'left' === L,
                            [v.rightPopoutConnector]: 'right' === L
                        })
                    })
            ]
        })
    });
}
((i = a || (a = {})).SYSTEM_MESSAGE = 'system_message'), (i.COACHMARK = 'coachmark');
