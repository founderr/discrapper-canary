n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    r = n(442837),
    l = n(692547),
    o = n(481060),
    c = n(700582),
    d = n(594174),
    u = n(51144),
    _ = n(479446),
    E = n(522558),
    h = n(441623),
    m = n(474936),
    I = n(182294),
    g = n(689938),
    p = n(186363);
function T(e) {
    let { giftIntentType: t, recipientUser: n, onMouseEnter: a, onMouseLeave: T, onClick: f, popoutPosition: S } = e,
        C = (0, r.e7)([d.default], () => d.default.getCurrentUser()),
        { enableEmojiCTA: N } = E.w.useExperiment({ location: 'GiftIntentCard' }, { autoTrackExposure: !1 });
    return (0, i.jsxs)('div', {
        className: s()(p.content, { [p.contentTextCTAPopout]: null != S && !N }),
        onMouseEnter: a,
        onMouseLeave: T,
        children: [
            (0, i.jsxs)('div', {
                className: p.subContent,
                children: [
                    (0, i.jsxs)('div', {
                        className: p.avatars,
                        children: [
                            (0, i.jsx)(c.Z, {
                                className: p.recipientUserAvatar,
                                user: n,
                                'aria-label': n.username,
                                size: I.EF.SIZE_56
                            }),
                            null != C &&
                                (0, i.jsx)(c.Z, {
                                    className: p.currentUserAvatar,
                                    user: C,
                                    'aria-label': n.username,
                                    size: I.EF.SIZE_24
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: p.textContainer,
                        children: [
                            (0, i.jsx)(o.Text, {
                                variant: 'text-md/medium',
                                color: 'always-white',
                                lineClamp: 3,
                                children: (() => {
                                    if (t === m.hX.FRIEND_ANNIVERSARY) return g.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_HEADER.format({ friendUserName: u.ZP.getName(n) });
                                })()
                            }),
                            (0, i.jsx)(o.Text, {
                                className: p.subHeaderText,
                                variant: 'text-sm/normal',
                                children: (() => {
                                    if (t === m.hX.FRIEND_ANNIVERSARY) return g.Z.Messages.PREMIUM_GIFTING_INTENT_FRIEND_ANNIVERSARY_CARD_SUB_HEADER.format({ numberOfYears: h.Z.getFriendAnniversaryYears(n.id) });
                                    return (0, _.Ou)(t);
                                })()
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(o.Button, {
                className: p.button,
                onClick: f,
                size: o.Button.Sizes.MEDIUM,
                color: o.Button.Colors.WHITE,
                children: (0, i.jsxs)('div', {
                    className: p.buttonContentContainer,
                    children: [
                        (0, i.jsx)(o.GiftIcon, {
                            color: l.Z.colors.BG_BRAND,
                            size: 'custom',
                            width: '14',
                            height: '14'
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            className: p.buttonText,
                            children: g.Z.Messages.PREMIUM_GIFTING_INTENT_CARD_PRIMARY_CTA
                        })
                    ]
                })
            }),
            null != S &&
                (0, i.jsx)('div', {
                    className: s()(p.connector, {
                        [p.leftPopoutConnector]: 'left' === S,
                        [p.rightPopoutConnector]: 'right' === S
                    })
                })
        ]
    });
}
