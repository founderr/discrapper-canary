i.d(n, {
    Z: function () {
        return m;
    }
});
var o = i(735250);
i(470079);
var s = i(120356), t = i.n(s), l = i(481060), a = i(493683), r = i(194359), c = i(906732), d = i(785717), u = i(993409), I = i(261253), E = i(765365), _ = i(981631), f = i(689938), Z = i(682731);
function m(e) {
    let {
            isCurrentUser: n,
            user: i,
            relationshipType: s,
            friendToken: m,
            originalFriendingEnabled: v = !1,
            improvedFriendingEnabled: S = !1,
            persistentCallCtaEnabled: x = !1,
            activeInviteToCallCtaEnabled: N = !1,
            onClose: h
        } = e, {newestAnalyticsLocation: g} = (0, c.ZP)(), {trackUserProfileAction: p} = (0, d.KZ)(), C = (0, E.Z)({
            user: i,
            onClose: h
        });
    if (n || s === _.OGo.BLOCKED)
        return null;
    let T = () => {
            p({ action: 'SEND_MESSAGE' }), a.Z.openPrivateChannel(i.id, !1, !1, g), h();
        }, R = x ? (0, o.jsx)(I.Z, {
            user: i,
            onClose: h,
            className: t()(l.Button.Colors.PRIMARY, Z.color, Z.iconButton)
        }) : null;
    if (S) {
        if (s === _.OGo.FRIEND && N && null != C)
            return (0, o.jsxs)('div', {
                className: Z.multipleButtons,
                children: [
                    (0, o.jsx)(u.Z, {
                        variant: 'icon',
                        text: f.Z.Messages.SEND_DM,
                        icon: l.ChatIcon,
                        className: Z.iconButton,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        onClick: T
                    }),
                    C
                ]
            });
        if (s === _.OGo.FRIEND || i.bot)
            return (0, o.jsxs)('div', {
                className: Z.multipleButtons,
                children: [
                    R,
                    (0, o.jsx)(u.Z, {
                        variant: 'text',
                        text: f.Z.Messages.SEND_DM,
                        icon: l.ChatIcon,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        onClick: T
                    })
                ]
            });
        if (s === _.OGo.PENDING_OUTGOING)
            return N && null != C ? (0, o.jsxs)('div', {
                className: Z.multipleButtons,
                children: [
                    (0, o.jsx)(u.Z, {
                        variant: 'icon',
                        text: f.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: l.UserClockIcon,
                        className: Z.iconButton,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        disabled: !0
                    }),
                    (0, o.jsx)(u.Z, {
                        variant: 'icon',
                        text: f.Z.Messages.SEND_DM,
                        icon: l.ChatIcon,
                        className: Z.iconButton,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        onClick: T
                    }),
                    C
                ]
            }) : (0, o.jsxs)('div', {
                className: Z.multipleButtons,
                children: [
                    (0, o.jsx)(u.Z, {
                        variant: 'icon',
                        text: f.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: l.UserClockIcon,
                        className: Z.iconButton,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        disabled: !0
                    }),
                    R,
                    (0, o.jsx)(u.Z, {
                        variant: 'text',
                        text: f.Z.Messages.SEND_DM,
                        icon: l.ChatIcon,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        onClick: T
                    })
                ]
            });
        if (s === _.OGo.PENDING_INCOMING)
            return N && null != C ? (0, o.jsxs)('div', {
                className: Z.multipleButtons,
                children: [
                    (0, o.jsx)(u.Z, {
                        variant: 'icon',
                        text: f.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: l.UserClockIcon,
                        className: Z.iconButton,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        disabled: !0
                    }),
                    (0, o.jsx)(u.Z, {
                        variant: 'icon',
                        text: f.Z.Messages.SEND_DM,
                        icon: l.ChatIcon,
                        className: Z.iconButton,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        onClick: T
                    }),
                    C
                ]
            }) : (0, o.jsxs)('div', {
                className: Z.multipleButtons,
                children: [
                    (0, o.jsx)(u.Z, {
                        variant: 'icon',
                        text: f.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: l.UserClockIcon,
                        className: Z.iconButton,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        disabled: !0
                    }),
                    R,
                    (0, o.jsx)(u.Z, {
                        variant: 'text',
                        text: f.Z.Messages.SEND_DM,
                        icon: l.ChatIcon,
                        className: Z.iconButton,
                        color: t()(l.Button.Colors.PRIMARY, Z.color),
                        onClick: T
                    })
                ]
            });
        return N && null != C ? (0, o.jsxs)('div', {
            className: Z.multipleButtons,
            children: [
                (0, o.jsx)(u.Z, {
                    variant: 'icon',
                    text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    className: Z.iconButton,
                    icon: l.UserPlusIcon,
                    color: t()(l.Button.Colors.PRIMARY, Z.color),
                    onClick: () => {
                        p({ action: 'SEND_FRIEND_REQUEST' }), r.Z.addRelationship({
                            userId: i.id,
                            context: { location: g },
                            friendToken: m
                        });
                    }
                }),
                (0, o.jsx)(u.Z, {
                    variant: 'icon',
                    text: f.Z.Messages.SEND_DM,
                    icon: l.ChatIcon,
                    className: Z.iconButton,
                    color: t()(l.Button.Colors.PRIMARY, Z.color),
                    onClick: T
                }),
                C
            ]
        }) : (0, o.jsxs)('div', {
            className: Z.multipleButtons,
            children: [
                R,
                (0, o.jsx)(u.Z, {
                    variant: 'icon',
                    text: f.Z.Messages.SEND_DM,
                    icon: l.ChatIcon,
                    className: Z.iconButton,
                    color: t()(l.Button.Colors.PRIMARY, Z.color),
                    onClick: T
                }),
                (0, o.jsx)(u.Z, {
                    variant: 'text',
                    text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    icon: l.UserPlusIcon,
                    color: t()(l.Button.Colors.BRAND, Z.color),
                    onClick: () => {
                        p({ action: 'SEND_FRIEND_REQUEST' }), r.Z.addRelationship({
                            userId: i.id,
                            context: { location: g },
                            friendToken: m
                        });
                    }
                })
            ]
        });
    }
    if (s === _.OGo.FRIEND || i.bot)
        return v ? (0, o.jsx)(u.Z, {
            variant: 'text',
            text: f.Z.Messages.SEND_DM,
            color: t()(l.Button.Colors.PRIMARY, Z.color),
            onClick: T
        }) : (0, o.jsx)(u.Z, {
            variant: 'text',
            text: f.Z.Messages.SEND_MESSAGE,
            color: l.Button.Colors.GREEN,
            onClick: T
        });
    if (s === _.OGo.PENDING_OUTGOING)
        return (0, o.jsx)(u.Z, {
            variant: 'text',
            text: f.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
            color: l.Button.Colors.GREEN,
            disabled: !0
        });
    if (s === _.OGo.PENDING_INCOMING)
        return v ? (0, o.jsx)(u.Z, {
            variant: 'text',
            text: f.Z.Messages.SEND_DM,
            color: t()(l.Button.Colors.PRIMARY, Z.color),
            onClick: T
        }) : (0, o.jsxs)('div', {
            className: Z.pendingIncoming,
            children: [
                (0, o.jsx)(u.Z, {
                    variant: 'text',
                    text: f.Z.Messages.FRIEND_REQUEST_ACCEPT,
                    color: l.Button.Colors.GREEN,
                    onClick: () => {
                        p({ action: 'ACCEPT_FRIEND_REQUEST' }), r.Z.addRelationship({
                            userId: i.id,
                            context: { location: g },
                            friendToken: m
                        });
                    }
                }),
                (0, o.jsx)(u.Z, {
                    variant: 'text',
                    text: f.Z.Messages.FRIEND_REQUEST_IGNORE,
                    color: l.Button.Colors.PRIMARY,
                    onClick: () => {
                        p({ action: 'IGNORE_FRIEND_REQUEST' }), r.Z.cancelFriendRequest(i.id, { location: g });
                    },
                    className: Z.actionRightButton
                })
            ]
        });
    return (0, o.jsx)(u.Z, {
        variant: 'text',
        text: f.Z.Messages.ADD_FRIEND_BUTTON,
        color: l.Button.Colors.GREEN,
        onClick: () => {
            p({ action: 'SEND_FRIEND_REQUEST' }), r.Z.addRelationship({
                userId: i.id,
                context: { location: g },
                friendToken: m
            });
        }
    });
}
