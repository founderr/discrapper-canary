n.d(t, {
    U: function () {
        return r;
    },
    Z: function () {
        return L;
    }
});
var r,
    i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(990547),
    u = n(442837),
    c = n(692547),
    d = n(481060),
    _ = n(758059),
    E = n(700582),
    f = n(906732),
    h = n(213609),
    p = n(963249),
    m = n(703656),
    I = n(594174),
    T = n(51144),
    g = n(479446),
    S = n(522558),
    A = n(441623),
    v = n(317271),
    N = n(474936),
    O = n(981631),
    R = n(182294),
    C = n(689938),
    y = n(186363);
function L(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: r, onMouseEnter: o, onMouseLeave: L, popoutPosition: b, analyticsPage: D, analyticsSection: M, glow: P, showSecondaryCta: U } = e,
        w = (0, u.e7)([I.default], () => I.default.getCurrentUser()),
        { analyticsLocations: x } = (0, f.ZP)(),
        { enableEmojiCTA: G } = S.w.useExperiment({ location: 'GiftIntentCard' }, { autoTrackExposure: !1 }),
        k = (0, u.e7)([A.Z], () => A.Z.getFriendAnniversaryYears(r.id)),
        B = null != b && !G;
    a.useEffect(() => {
        (0, h.h)({
            name: l.ImpressionNames.GIFT_INTENT_CARD,
            type: l.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: A.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let F = () => {
            if (t === N.hX.FRIEND_ANNIVERSARY) return C.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_HEADER.format({ friendUserName: T.ZP.getName(r) });
            return (0, g.Ou)(t);
        },
        Z = () => {
            if (t === N.hX.FRIEND_ANNIVERSARY) return C.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_SUB_HEADER.format({ numberOfYears: k });
            return (0, g.Ou)(t);
        },
        V = () => {
            if (t === N.hX.FRIEND_ANNIVERSARY) return C.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_VIEW_ALL_SECONDARY_CTA;
        },
        H = () => {
            if (t === N.hX.FRIEND_ANNIVERSARY) return C.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: k });
            return (0, g.Ou)(t);
        },
        Y = (e) => {
            e.stopPropagation();
            let i = (0, v.F)(t);
            (0, p.Z)({
                isGift: !0,
                initialPlanId: null,
                giftRecipient: r,
                analyticsLocation: 'system_message' === n ? i.chat : i.actionButtonCoachmark,
                analyticsLocations: x,
                analyticsObject: {
                    page: D,
                    section: M,
                    object: O.qAy.BUTTON_CTA,
                    objectType: O.Qqv.GIFT
                },
                giftMessage: H()
            });
        },
        j = (e) => {
            e.stopPropagation(), (0, m.uL)(O.Z5c.FRIENDS), _.Z.setSection(O.pJs.ALL);
        };
    return (0, i.jsx)('div', {
        className: s()(y.content, {
            [y.contentTextCTAPopout]: B,
            [y.contentGlow]: P
        }),
        onMouseEnter: o,
        onMouseLeave: L,
        children: (0, i.jsxs)('div', {
            className: y.innerContent,
            children: [
                (0, i.jsxs)('div', {
                    className: y.subContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: y.avatars,
                            children: [
                                (0, i.jsx)(E.Z, {
                                    className: y.recipientUserAvatar,
                                    user: r,
                                    'aria-label': r.username,
                                    size: R.EF.SIZE_56
                                }),
                                null != w &&
                                    (0, i.jsx)(E.Z, {
                                        className: y.currentUserAvatar,
                                        user: w,
                                        'aria-label': r.username,
                                        size: R.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: y.textContainer,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    lineClamp: 3,
                                    children: F()
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: y.subHeaderText,
                                    variant: 'text-sm/normal',
                                    children: Z()
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: y.buttonContainer,
                    children: [
                        U &&
                            (0, i.jsx)(d.Button, {
                                className: s()(y.button, y.buttonSecondary),
                                onClick: j,
                                size: d.Button.Sizes.MEDIUM,
                                color: d.Button.Colors.CUSTOM,
                                look: d.Button.Looks.OUTLINED,
                                children: (0, i.jsx)('div', {
                                    className: y.buttonContentContainer,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        className: s()(y.buttonText, y.buttonTextSecondary),
                                        children: V()
                                    })
                                })
                            }),
                        (0, i.jsx)(d.Button, {
                            className: y.button,
                            onClick: Y,
                            size: d.Button.Sizes.MEDIUM,
                            color: d.Button.Colors.WHITE,
                            children: (0, i.jsxs)('div', {
                                className: y.buttonContentContainer,
                                children: [
                                    (0, i.jsx)(d.GiftIcon, {
                                        color: c.Z.colors.BG_BRAND,
                                        size: 'custom',
                                        width: '14',
                                        height: '14'
                                    }),
                                    (0, i.jsx)(d.Text, {
                                        variant: 'text-sm/medium',
                                        className: s()(y.buttonText, y.buttonTextPrimary),
                                        children: C.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_PRIMARY_CTA
                                    })
                                ]
                            })
                        })
                    ]
                }),
                null != b &&
                    (0, i.jsx)('div', {
                        className: s()(y.connector, {
                            [y.leftPopoutConnector]: 'left' === b,
                            [y.rightPopoutConnector]: 'right' === b
                        })
                    })
            ]
        })
    });
}
!(function (e) {
    (e.SYSTEM_MESSAGE = 'system_message'), (e.COACHMARK = 'coachmark');
})(r || (r = {}));
