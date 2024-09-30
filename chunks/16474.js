n.d(t, {
    U: function () {
        return r;
    },
    Z: function () {
        return C;
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
    _ = n(700582),
    E = n(906732),
    f = n(213609),
    h = n(963249),
    p = n(594174),
    m = n(51144),
    I = n(479446),
    T = n(522558),
    g = n(441623),
    S = n(317271),
    A = n(474936),
    v = n(981631),
    N = n(182294),
    O = n(689938),
    R = n(186363);
function C(e) {
    let { giftIntentType: t, premiumGiftIntentCardType: n, recipientUser: r, onMouseEnter: o, onMouseLeave: C, popoutPosition: y, analyticsPage: L, analyticsSection: b, glow: D } = e,
        M = (0, u.e7)([p.default], () => p.default.getCurrentUser()),
        { analyticsLocations: P } = (0, E.ZP)(),
        { enableEmojiCTA: U } = T.w.useExperiment({ location: 'GiftIntentCard' }, { autoTrackExposure: !1 }),
        w = (0, u.e7)([g.Z], () => g.Z.getFriendAnniversaryYears(r.id)),
        x = null != y && !U;
    a.useEffect(() => {
        (0, f.h)({
            name: l.ImpressionNames.GIFT_INTENT_CARD,
            type: l.ImpressionTypes.VIEW,
            properties: {
                gift_intent_type: t,
                type: n,
                num_friend_anniversaries: g.Z.getFriendAnniversaries().length
            }
        });
    }, [t, n]);
    let G = () => {
            if (t === A.hX.FRIEND_ANNIVERSARY) return O.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_HEADER.format({ friendUserName: m.ZP.getName(r) });
            return (0, I.Ou)(t);
        },
        k = () => {
            if (t === A.hX.FRIEND_ANNIVERSARY) return O.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_SUB_HEADER.format({ numberOfYears: w });
            return (0, I.Ou)(t);
        },
        B = () => {
            if (t === A.hX.FRIEND_ANNIVERSARY) return O.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: w });
            return (0, I.Ou)(t);
        },
        F = (e) => {
            e.stopPropagation();
            let i = (0, S.F)(t);
            (0, h.Z)({
                isGift: !0,
                initialPlanId: null,
                giftRecipient: r,
                analyticsLocation: 'system_message' === n ? i.chat : i.actionButtonCoachmark,
                analyticsLocations: P,
                analyticsObject: {
                    page: L,
                    section: b,
                    object: v.qAy.BUTTON_CTA,
                    objectType: v.Qqv.GIFT
                },
                giftMessage: B()
            });
        };
    return (0, i.jsx)('div', {
        className: s()(R.content, {
            [R.contentTextCTAPopout]: x,
            [R.contentGlow]: D
        }),
        onMouseEnter: o,
        onMouseLeave: C,
        children: (0, i.jsxs)('div', {
            className: R.innerContent,
            children: [
                (0, i.jsxs)('div', {
                    className: R.subContent,
                    children: [
                        (0, i.jsxs)('div', {
                            className: R.avatars,
                            children: [
                                (0, i.jsx)(_.Z, {
                                    className: R.recipientUserAvatar,
                                    user: r,
                                    'aria-label': r.username,
                                    size: N.EF.SIZE_56
                                }),
                                null != M &&
                                    (0, i.jsx)(_.Z, {
                                        className: R.currentUserAvatar,
                                        user: M,
                                        'aria-label': r.username,
                                        size: N.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: R.textContainer,
                            children: [
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    lineClamp: 3,
                                    children: G()
                                }),
                                (0, i.jsx)(d.Text, {
                                    className: R.subHeaderText,
                                    variant: 'text-sm/normal',
                                    children: k()
                                })
                            ]
                        })
                    ]
                }),
                (0, i.jsx)(d.Button, {
                    className: R.button,
                    onClick: F,
                    size: d.Button.Sizes.MEDIUM,
                    color: d.Button.Colors.WHITE,
                    children: (0, i.jsxs)('div', {
                        className: R.buttonContentContainer,
                        children: [
                            (0, i.jsx)(d.GiftIcon, {
                                color: c.Z.colors.BG_BRAND,
                                size: 'custom',
                                width: '14',
                                height: '14'
                            }),
                            (0, i.jsx)(d.Text, {
                                variant: 'text-sm/medium',
                                className: R.buttonText,
                                children: O.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_PRIMARY_CTA
                            })
                        ]
                    })
                }),
                null != y &&
                    (0, i.jsx)('div', {
                        className: s()(R.connector, {
                            [R.leftPopoutConnector]: 'left' === y,
                            [R.rightPopoutConnector]: 'right' === y
                        })
                    })
            ]
        })
    });
}
!(function (e) {
    (e.SYSTEM_MESSAGE = 'system_message'), (e.COACHMARK = 'coachmark');
})(r || (r = {}));
