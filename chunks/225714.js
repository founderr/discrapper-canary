i.d(n, {
    Z: function () {
        return v;
    }
});
var o = i(735250);
i(470079);
var s = i(120356), t = i.n(s), l = i(442837), a = i(481060), r = i(493683), c = i(194359), d = i(906732), u = i(740492), I = i(785717), E = i(993409), f = i(765365), _ = i(981631), Z = i(689938), m = i(682731);
function v(e) {
    let {
            isCurrentUser: n,
            user: s,
            relationshipType: v,
            friendToken: S,
            originalFriendingEnabled: x = !1,
            improvedFriendingEnabled: h = !1,
            persistentCallCtaEnabled: N = !1,
            activeInviteToCallCtaEnabled: g = !1,
            onClose: p
        } = e, {newestAnalyticsLocation: C} = (0, d.ZP)(), {trackUserProfileAction: T} = (0, I.KZ)(), R = (0, l.e7)([u.ZP], () => !u.ZP.disableCallUserConfirmationPrompt), M = (0, f.Z)({
            user: s,
            onClose: p
        });
    if (n || v === _.OGo.BLOCKED)
        return null;
    let j = () => {
            T({ action: 'SEND_MESSAGE' }), r.Z.openPrivateChannel(s.id, !1, !1, C), p();
        }, A = () => {
            T({ action: 'VOICE_CALL' }), r.Z.openPrivateChannel(s.id, !0), p();
        }, P = N ? (0, o.jsx)(E.Z, {
            variant: 'icon',
            text: Z.Z.Messages.CALL,
            icon: a.PhoneCallIcon,
            color: t()(a.Button.Colors.PRIMARY, m.color),
            onClick: R ? () => {
                (0, a.openModalLazy)(async () => {
                    let {default: e} = await i.e('27157').then(i.bind(i, 736454));
                    return n => (0, o.jsx)(e, {
                        onSubmit: A,
                        ...n
                    });
                });
            } : A,
            className: m.iconButton
        }) : null;
    if (h) {
        if (v === _.OGo.FRIEND && g && null != M)
            return (0, o.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, o.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        className: m.iconButton,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    }),
                    M
                ]
            });
        if (v === _.OGo.FRIEND || s.bot)
            return (0, o.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    P,
                    (0, o.jsx)(E.Z, {
                        variant: 'text',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    })
                ]
            });
        if (v === _.OGo.PENDING_OUTGOING)
            return g && null != M ? (0, o.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, o.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: a.UserClockIcon,
                        className: m.iconButton,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    (0, o.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        className: m.iconButton,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    }),
                    M
                ]
            }) : (0, o.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, o.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: a.UserClockIcon,
                        className: m.iconButton,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    P,
                    (0, o.jsx)(E.Z, {
                        variant: 'text',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    })
                ]
            });
        if (v === _.OGo.PENDING_INCOMING)
            return g && null != M ? (0, o.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, o.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: a.UserClockIcon,
                        className: m.iconButton,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    (0, o.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        className: m.iconButton,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    }),
                    M
                ]
            }) : (0, o.jsxs)('div', {
                className: m.multipleButtons,
                children: [
                    (0, o.jsx)(E.Z, {
                        variant: 'icon',
                        text: Z.Z.Messages.FRIENDS_SECTION_PENDING,
                        icon: a.UserClockIcon,
                        className: m.iconButton,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        disabled: !0
                    }),
                    P,
                    (0, o.jsx)(E.Z, {
                        variant: 'text',
                        text: Z.Z.Messages.SEND_DM,
                        icon: a.ChatIcon,
                        className: m.iconButton,
                        color: t()(a.Button.Colors.PRIMARY, m.color),
                        onClick: j
                    })
                ]
            });
        return g && null != M ? (0, o.jsxs)('div', {
            className: m.multipleButtons,
            children: [
                (0, o.jsx)(E.Z, {
                    variant: 'icon',
                    text: Z.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    className: m.iconButton,
                    icon: a.UserPlusIcon,
                    color: t()(a.Button.Colors.PRIMARY, m.color),
                    onClick: () => {
                        T({ action: 'SEND_FRIEND_REQUEST' }), c.Z.addRelationship({
                            userId: s.id,
                            context: { location: C },
                            friendToken: S
                        });
                    }
                }),
                (0, o.jsx)(E.Z, {
                    variant: 'icon',
                    text: Z.Z.Messages.SEND_DM,
                    icon: a.ChatIcon,
                    className: m.iconButton,
                    color: t()(a.Button.Colors.PRIMARY, m.color),
                    onClick: j
                }),
                M
            ]
        }) : (0, o.jsxs)('div', {
            className: m.multipleButtons,
            children: [
                P,
                (0, o.jsx)(E.Z, {
                    variant: 'icon',
                    text: Z.Z.Messages.SEND_DM,
                    icon: a.ChatIcon,
                    className: m.iconButton,
                    color: t()(a.Button.Colors.PRIMARY, m.color),
                    onClick: j
                }),
                (0, o.jsx)(E.Z, {
                    variant: 'text',
                    text: Z.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    icon: a.UserPlusIcon,
                    color: t()(a.Button.Colors.BRAND, m.color),
                    onClick: () => {
                        T({ action: 'SEND_FRIEND_REQUEST' }), c.Z.addRelationship({
                            userId: s.id,
                            context: { location: C },
                            friendToken: S
                        });
                    }
                })
            ]
        });
    }
    if (v === _.OGo.FRIEND || s.bot)
        return x ? (0, o.jsx)(E.Z, {
            variant: 'text',
            text: Z.Z.Messages.SEND_DM,
            color: t()(a.Button.Colors.PRIMARY, m.color),
            onClick: j
        }) : (0, o.jsx)(E.Z, {
            variant: 'text',
            text: Z.Z.Messages.SEND_MESSAGE,
            color: a.Button.Colors.GREEN,
            onClick: j
        });
    if (v === _.OGo.PENDING_OUTGOING)
        return (0, o.jsx)(E.Z, {
            variant: 'text',
            text: Z.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
            color: a.Button.Colors.GREEN,
            disabled: !0
        });
    if (v === _.OGo.PENDING_INCOMING)
        return x ? (0, o.jsx)(E.Z, {
            variant: 'text',
            text: Z.Z.Messages.SEND_DM,
            color: t()(a.Button.Colors.PRIMARY, m.color),
            onClick: j
        }) : (0, o.jsxs)('div', {
            className: m.pendingIncoming,
            children: [
                (0, o.jsx)(E.Z, {
                    variant: 'text',
                    text: Z.Z.Messages.FRIEND_REQUEST_ACCEPT,
                    color: a.Button.Colors.GREEN,
                    onClick: () => {
                        T({ action: 'ACCEPT_FRIEND_REQUEST' }), c.Z.addRelationship({
                            userId: s.id,
                            context: { location: C },
                            friendToken: S
                        });
                    }
                }),
                (0, o.jsx)(E.Z, {
                    variant: 'text',
                    text: Z.Z.Messages.FRIEND_REQUEST_IGNORE,
                    color: a.Button.Colors.PRIMARY,
                    onClick: () => {
                        T({ action: 'IGNORE_FRIEND_REQUEST' }), c.Z.cancelFriendRequest(s.id, { location: C });
                    },
                    className: m.actionRightButton
                })
            ]
        });
    return (0, o.jsx)(E.Z, {
        variant: 'text',
        text: Z.Z.Messages.ADD_FRIEND_BUTTON,
        color: a.Button.Colors.GREEN,
        onClick: () => {
            T({ action: 'SEND_FRIEND_REQUEST' }), c.Z.addRelationship({
                userId: s.id,
                context: { location: C },
                friendToken: S
            });
        }
    });
}
