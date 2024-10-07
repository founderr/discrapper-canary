n.d(t, {
    U: function () {
        return a;
    },
    Z: function () {
        return v;
    }
});
var i,
    a,
    s = n(735250),
    l = n(470079),
    r = n(120356),
    o = n.n(r),
    c = n(990547),
    d = n(442837),
    u = n(692547),
    _ = n(481060),
    E = n(758059),
    I = n(700582),
    m = n(906732),
    T = n(213609),
    N = n(963249),
    h = n(703656),
    C = n(594174),
    p = n(51144),
    f = n(479446),
    g = n(441623),
    A = n(317271),
    S = n(474936),
    M = n(981631),
    O = n(182294),
    x = n(689938),
    R = n(186363);
function v(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: i, onMouseEnter: a, onMouseLeave: r, popoutPosition: v, analyticsPage: L, analyticsSection: Z, glow: P, showSecondaryCta: D } = e,
        b = (0, d.e7)([C.default], () => C.default.getCurrentUser()),
        { analyticsLocations: j } = (0, m.ZP)(),
        U = (0, d.e7)([g.Z], () => g.Z.getFriendAnniversaryYears(i.id));
    l.useEffect(() => {
        (0, T.h)({
            name: c.ImpressionNames.GIFT_INTENT_CARD,
            type: c.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: g.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let y = () => {
            if (t === S.hX.FRIEND_ANNIVERSARY) return x.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: U });
            return (0, f.Ou)(t);
        },
        B = 'coachmark' === n,
        k = B ? R.innerContentCoachmark : R.innerContent,
        G = B ? R.recipientUserAvatarCoachmark : R.recipientUserAvatar,
        F = B ? R.currentUserAvatarCoachmark : R.currentUserAvatar,
        w = B ? R.subHeaderTextCoachmark : R.subHeaderText,
        V = B ? _.Button.Colors.BRAND : _.Button.Colors.WHITE,
        H = B ? u.Z.colors.WHITE : u.Z.colors.BG_BRAND,
        Y = B ? R.buttonTextPrimaryCoachmark : R.buttonTextPrimary;
    return (0, s.jsx)('div', {
        className: o()(R.content, {
            [R.outerGlow]: P,
            [R.contentCoachmark]: B
        }),
        onMouseEnter: a,
        onMouseLeave: r,
        children: (0, s.jsxs)('div', {
            className: o()(k, { [R.innerGlow]: P }),
            children: [
                (0, s.jsxs)('div', {
                    className: R.subContent,
                    children: [
                        (0, s.jsxs)('div', {
                            className: R.avatars,
                            children: [
                                (0, s.jsx)(I.Z, {
                                    className: G,
                                    user: i,
                                    'aria-label': i.username,
                                    size: O.EF.SIZE_56
                                }),
                                null != b &&
                                    (0, s.jsx)(I.Z, {
                                        className: F,
                                        user: b,
                                        'aria-label': i.username,
                                        size: O.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: R.textContainer,
                            children: [
                                (0, s.jsx)(_.Text, {
                                    variant: 'text-md/medium',
                                    color: B ? 'header-primary' : 'always-white',
                                    lineClamp: 3,
                                    children: (() => {
                                        if (t === S.hX.FRIEND_ANNIVERSARY) return x.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_HEADER.format({ friendUserName: p.ZP.getName(i) });
                                        return (0, f.Ou)(t);
                                    })()
                                }),
                                (0, s.jsx)(_.Text, {
                                    className: w,
                                    variant: 'text-sm/normal',
                                    children: (() => {
                                        if (t === S.hX.FRIEND_ANNIVERSARY) return x.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_SUB_HEADER.format({ numberOfYears: U });
                                        return (0, f.Ou)(t);
                                    })()
                                })
                            ]
                        })
                    ]
                }),
                (0, s.jsxs)('div', {
                    className: R.buttonContainer,
                    children: [
                        D &&
                            (0, s.jsx)(_.Button, {
                                className: o()(R.button, R.buttonSecondary),
                                onClick: (e) => {
                                    e.stopPropagation(), (0, h.uL)(M.Z5c.FRIENDS), E.Z.setSection(M.pJs.ALL);
                                },
                                size: _.Button.Sizes.MEDIUM,
                                color: _.Button.Colors.CUSTOM,
                                look: _.Button.Looks.OUTLINED,
                                children: (0, s.jsx)('div', {
                                    className: R.buttonContentContainer,
                                    children: (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(R.buttonText, R.buttonTextSecondary),
                                        children: (() => {
                                            if (t === S.hX.FRIEND_ANNIVERSARY) return x.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_VIEW_ALL_SECONDARY_CTA;
                                        })()
                                    })
                                })
                            }),
                        (0, s.jsx)(_.Button, {
                            className: R.button,
                            onClick: (e) => {
                                e.stopPropagation();
                                let a = (0, A.F)(t);
                                (0, N.Z)({
                                    isGift: !0,
                                    initialPlanId: null,
                                    giftRecipient: i,
                                    analyticsLocation: 'system_message' === n ? a.chat : a.actionButtonCoachmark,
                                    analyticsLocations: j,
                                    analyticsObject: {
                                        page: L,
                                        section: Z,
                                        object: M.qAy.BUTTON_CTA,
                                        objectType: M.Qqv.GIFT
                                    },
                                    giftMessage: y()
                                });
                            },
                            size: _.Button.Sizes.MEDIUM,
                            color: V,
                            children: (0, s.jsxs)('div', {
                                className: R.buttonContentContainer,
                                children: [
                                    (0, s.jsx)(_.GiftIcon, {
                                        color: H,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, s.jsx)(_.Text, {
                                        variant: 'text-sm/medium',
                                        className: o()(R.buttonText, Y),
                                        children: x.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_PRIMARY_CTA
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != v &&
                    (0, s.jsx)('div', {
                        className: o()(R.connector, {
                            [R.leftPopoutConnector]: 'left' === v,
                            [R.rightPopoutConnector]: 'right' === v
                        })
                    })
            ]
        })
    });
}
((i = a || (a = {})).SYSTEM_MESSAGE = 'system_message'), (i.COACHMARK = 'coachmark');
