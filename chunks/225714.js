i.d(n, {
    Z: function () {
        return Z;
    }
});
var l = i(735250);
i(470079);
var s = i(120356), o = i.n(s), t = i(481060), a = i(194359), r = i(906732), d = i(785717), c = i(993409), u = i(261253), I = i(30556), f = i(765365), _ = i(981631), E = i(689938), m = i(682731);
function Z(e) {
    let {
            isCurrentUser: n,
            user: i,
            guildId: s,
            relationshipType: Z,
            friendToken: v,
            improvedFriendingEnabled: S = !1,
            persistentCallCtaEnabled: x = !1,
            activeInviteToCallCtaEnabled: h = !1,
            onClose: g
        } = e, {newestAnalyticsLocation: N} = (0, r.ZP)(), {trackUserProfileAction: p} = (0, d.KZ)(), T = (0, f.Z)({
            user: i,
            onClose: g
        });
    if (n || Z === _.OGo.BLOCKED)
        return null;
    let C = x ? (0, l.jsx)(u.Z, {
        user: i,
        onClose: g,
        className: o()(t.Button.Colors.PRIMARY, m.color, m.iconButton)
    }) : null;
    if (S) {
        if (Z === _.OGo.FRIEND && h && null != T)
            return (0, l.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, l.jsx)(I.Z, {
                        user: i,
                        guildId: s,
                        variant: 'icon',
                        className: m.iconButton,
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        onClose: g
                    }),
                    T
                ]
            });
        if (Z === _.OGo.FRIEND || i.bot)
            return (0, l.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    C,
                    (0, l.jsx)(I.Z, {
                        user: i,
                        guildId: s,
                        variant: 'text',
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        onClose: g
                    })
                ]
            });
        if (Z === _.OGo.PENDING_OUTGOING)
            return h && null != T ? (0, l.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, l.jsx)(c.Z, {
                        variant: 'icon',
                        text: E.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: t.UserClockIcon,
                        className: m.iconButton,
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    (0, l.jsx)(I.Z, {
                        user: i,
                        guildId: s,
                        variant: 'icon',
                        className: m.iconButton,
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        onClose: g
                    }),
                    T
                ]
            }) : (0, l.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, l.jsx)(c.Z, {
                        variant: 'icon',
                        text: E.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: t.UserClockIcon,
                        className: m.iconButton,
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    C,
                    (0, l.jsx)(I.Z, {
                        user: i,
                        guildId: s,
                        variant: 'text',
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        onClose: g
                    })
                ]
            });
        if (Z === _.OGo.PENDING_INCOMING)
            return h && null != T ? (0, l.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, l.jsx)(c.Z, {
                        variant: 'icon',
                        text: E.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: t.UserClockIcon,
                        className: m.iconButton,
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    (0, l.jsx)(I.Z, {
                        user: i,
                        guildId: s,
                        variant: 'icon',
                        className: m.iconButton,
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        onClose: g
                    }),
                    T
                ]
            }) : (0, l.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, l.jsx)(c.Z, {
                        variant: 'icon',
                        text: E.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: t.UserClockIcon,
                        className: m.iconButton,
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    C,
                    (0, l.jsx)(I.Z, {
                        user: i,
                        guildId: s,
                        variant: 'text',
                        className: m.iconButton,
                        color: o()(t.Button.Colors.PRIMARY, m.color),
                        onClose: g
                    })
                ]
            });
        return h && null != T ? (0, l.jsxs)('div', {
            className: m.multipleButtons,
            children: [
                (0, l.jsx)(c.Z, {
                    variant: 'icon',
                    text: E.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    className: m.iconButton,
                    icon: t.UserPlusIcon,
                    color: o()(t.Button.Colors.PRIMARY, m.color),
                    onClick: () => {
                        p({ action: 'SEND_FRIEND_REQUEST' }), a.Z.addRelationship({
                            userId: i.id,
                            context: { location: N },
                            friendToken: v
                        });
                    }
                }),
                (0, l.jsx)(I.Z, {
                    user: i,
                    guildId: s,
                    variant: 'icon',
                    className: m.iconButton,
                    color: o()(t.Button.Colors.PRIMARY, m.color),
                    onClose: g
                }),
                T
            ]
        }) : (0, l.jsxs)('div', {
            className: m.multipleButtons,
            children: [
                C,
                (0, l.jsx)(I.Z, {
                    user: i,
                    guildId: s,
                    variant: 'icon',
                    className: m.iconButton,
                    color: o()(t.Button.Colors.PRIMARY, m.color),
                    onClose: g
                }),
                (0, l.jsx)(c.Z, {
                    variant: 'text',
                    text: E.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    icon: t.UserPlusIcon,
                    color: o()(t.Button.Colors.BRAND, m.color),
                    onClick: () => {
                        p({ action: 'SEND_FRIEND_REQUEST' }), a.Z.addRelationship({
                            userId: i.id,
                            context: { location: N },
                            friendToken: v
                        });
                    }
                })
            ]
        });
    }
    return Z === _.OGo.FRIEND || i.bot ? (0, l.jsx)(I.Z, {
        user: i,
        guildId: s,
        variant: 'text',
        color: o()(t.Button.Colors.PRIMARY, m.color),
        onClose: g
    }) : Z === _.OGo.PENDING_OUTGOING ? (0, l.jsx)(c.Z, {
        variant: 'text',
        text: E.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
        color: t.Button.Colors.GREEN,
        disabled: !0
    }) : Z === _.OGo.PENDING_INCOMING ? (0, l.jsx)(I.Z, {
        user: i,
        guildId: s,
        variant: 'text',
        color: o()(t.Button.Colors.PRIMARY, m.color),
        onClose: g
    }) : (0, l.jsx)(c.Z, {
        variant: 'text',
        text: E.Z.Messages.ADD_FRIEND_BUTTON,
        color: t.Button.Colors.GREEN,
        onClick: () => {
            p({ action: 'SEND_FRIEND_REQUEST' }), a.Z.addRelationship({
                userId: i.id,
                context: { location: N },
                friendToken: v
            });
        }
    });
}
