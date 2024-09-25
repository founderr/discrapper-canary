n.d(t, {
    Z: function () {
        return A;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(442837),
    s = n(692547),
    l = n(481060),
    u = n(700582),
    c = n(906732),
    d = n(963249),
    _ = n(594174),
    E = n(51144),
    f = n(479446),
    h = n(522558),
    p = n(441623),
    m = n(474936),
    I = n(981631),
    T = n(182294),
    g = n(689938),
    S = n(186363);
function A(e) {
    let { giftIntentType: t, recipientUser: n, onMouseEnter: i, onMouseLeave: A, popoutPosition: v, analyticsPage: N, analyticsSection: O, glow: R } = e,
        C = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        { analyticsLocations: y } = (0, c.ZP)(),
        { enableEmojiCTA: b } = h.w.useExperiment({ location: 'GiftIntentCard' }, { autoTrackExposure: !1 }),
        L = (0, o.e7)([p.Z], () => p.Z.getFriendAnniversaryYears(n.id)),
        D = null != v && !b,
        M = () => {
            if (t === m.hX.FRIEND_ANNIVERSARY) return g.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_HEADER.format({ friendUserName: E.ZP.getName(n) });
            return (0, f.Ou)(t);
        },
        P = () => {
            if (t === m.hX.FRIEND_ANNIVERSARY) return g.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_SUB_HEADER.format({ numberOfYears: L });
            return (0, f.Ou)(t);
        },
        U = () => {
            if (t === m.hX.FRIEND_ANNIVERSARY) return g.Z.Messages.PREMIUM_GIFTING_INTENT_CUSTOM_GIFT_MESSAGE.format({ numberOfYears: L });
            return (0, f.Ou)(t);
        },
        w = (e) => {
            e.stopPropagation(),
                (0, d.Z)({
                    isGift: !0,
                    initialPlanId: null,
                    giftRecipient: n,
                    analyticsLocations: y,
                    analyticsObject: {
                        page: N,
                        section: O,
                        object: I.qAy.BUTTON_CTA,
                        objectType: I.Qqv.GIFT
                    },
                    giftMessage: U()
                });
        };
    return (0, r.jsx)('div', {
        className: a()(S.content, {
            [S.contentTextCTAPopout]: D,
            [S.contentGlow]: R
        }),
        onMouseEnter: i,
        onMouseLeave: A,
        children: (0, r.jsxs)('div', {
            className: S.innerContent,
            children: [
                (0, r.jsxs)('div', {
                    className: S.subContent,
                    children: [
                        (0, r.jsxs)('div', {
                            className: S.avatars,
                            children: [
                                (0, r.jsx)(u.Z, {
                                    className: S.recipientUserAvatar,
                                    user: n,
                                    'aria-label': n.username,
                                    size: T.EF.SIZE_56
                                }),
                                null != C &&
                                    (0, r.jsx)(u.Z, {
                                        className: S.currentUserAvatar,
                                        user: C,
                                        'aria-label': n.username,
                                        size: T.EF.SIZE_24
                                    })
                            ]
                        }),
                        (0, r.jsxs)('div', {
                            className: S.textContainer,
                            children: [
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-md/medium',
                                    color: 'always-white',
                                    lineClamp: 3,
                                    children: M()
                                }),
                                (0, r.jsx)(l.Text, {
                                    className: S.subHeaderText,
                                    variant: 'text-sm/normal',
                                    children: P()
                                })
                            ]
                        })
                    ]
                }),
                (0, r.jsx)(l.Button, {
                    className: S.button,
                    onClick: w,
                    size: l.Button.Sizes.MEDIUM,
                    color: l.Button.Colors.WHITE,
                    children: (0, r.jsxs)('div', {
                        className: S.buttonContentContainer,
                        children: [
                            (0, r.jsx)(l.GiftIcon, {
                                color: s.Z.colors.BG_BRAND,
                                size: 'custom',
                                width: '14',
                                height: '14'
                            }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-sm/medium',
                                className: S.buttonText,
                                children: g.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_PRIMARY_CTA
                            })
                        ]
                    })
                }),
                null != v &&
                    (0, r.jsx)('div', {
                        className: a()(S.connector, {
                            [S.leftPopoutConnector]: 'left' === v,
                            [S.rightPopoutConnector]: 'right' === v
                        })
                    })
            ]
        })
    });
}
