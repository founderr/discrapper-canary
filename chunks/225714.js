n.d(i, {
    Z: function () {
        return m;
    }
});
var s = n(735250);
n(470079);
var l = n(120356), t = n.n(l), o = n(481060), r = n(194359), a = n(906732), d = n(475413), c = n(261253), u = n(7242), I = n(934861), _ = n(981631), f = n(689938), E = n(682731);
function m(e) {
    let {
            isCurrentUser: i,
            user: n,
            relationshipType: l,
            friendToken: m,
            improvedFriendingEnabled: S = !1,
            persistentCallCtaEnabled: v = !1,
            activeInviteToCallCtaEnabled: Z = !1,
            onClose: x
        } = e, {newestAnalyticsLocation: h} = (0, a.ZP)();
    if (i || l === _.OGo.BLOCKED)
        return null;
    let p = v ? (0, s.jsx)(c.Z, {
        user: n,
        onClose: x
    }) : null;
    if (S) {
        let e = (0, s.jsx)(u.Z, {
            user: n,
            onClose: x
        });
        if (l === _.OGo.FRIEND && Z && null != e)
            return (0, s.jsxs)('div', {
                className: E.multipleButtons,
                children: [
                    (0, s.jsx)(I.v, {
                        userId: n.id,
                        onClose: x
                    }),
                    e
                ]
            });
        if (l === _.OGo.FRIEND || n.bot)
            return (0, s.jsxs)('div', {
                className: E.multipleButtons,
                children: [
                    p,
                    (0, s.jsx)(I.c, {
                        userId: n.id,
                        onClose: x
                    })
                ]
            });
        if (l === _.OGo.PENDING_OUTGOING || l === _.OGo.PENDING_INCOMING)
            return Z && null != e ? (0, s.jsxs)('div', {
                className: E.multipleButtons,
                children: [
                    (0, s.jsx)(d.ef, {
                        icon: o.UserClockIcon,
                        tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
                        disabled: !0
                    }),
                    (0, s.jsx)(I.v, {
                        userId: n.id,
                        onClose: x
                    }),
                    e
                ]
            }) : (0, s.jsxs)('div', {
                className: E.multipleButtons,
                children: [
                    (0, s.jsx)(d.ef, {
                        icon: o.UserClockIcon,
                        tooltipText: f.Z.Messages.FRIENDS_SECTION_PENDING,
                        disabled: !0
                    }),
                    p,
                    (0, s.jsx)(I.c, {
                        userId: n.id,
                        onClose: x
                    })
                ]
            });
        return Z && null != e ? (0, s.jsxs)('div', {
            className: E.multipleButtons,
            children: [
                (0, s.jsx)(d.ef, {
                    action: 'SEND_FRIEND_REQUEST',
                    icon: o.UserPlusIcon,
                    tooltipText: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    onClick: () => {
                        r.Z.addRelationship({
                            userId: n.id,
                            context: { location: h },
                            friendToken: m
                        });
                    }
                }),
                (0, s.jsx)(I.v, {
                    userId: n.id,
                    onClose: x
                }),
                e
            ]
        }) : (0, s.jsxs)('div', {
            className: E.multipleButtons,
            children: [
                p,
                (0, s.jsx)(I.v, {
                    userId: n.id,
                    onClose: x
                }),
                (0, s.jsx)(d.tG, {
                    action: 'SEND_FRIEND_REQUEST',
                    icon: o.UserPlusIcon,
                    text: f.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    color: t()(o.Button.Colors.BRAND, E.color),
                    onClick: () => {
                        r.Z.addRelationship({
                            userId: n.id,
                            context: { location: h },
                            friendToken: m
                        });
                    }
                })
            ]
        });
    }
    return l === _.OGo.FRIEND || n.bot ? (0, s.jsx)(I.c, {
        userId: n.id,
        onClose: x
    }) : l === _.OGo.PENDING_OUTGOING ? (0, s.jsx)(d.tG, {
        text: f.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
        color: o.Button.Colors.GREEN,
        disabled: !0
    }) : l === _.OGo.PENDING_INCOMING ? (0, s.jsx)(I.c, {
        userId: n.id,
        onClose: x
    }) : (0, s.jsx)(d.tG, {
        action: 'SEND_FRIEND_REQUEST',
        text: f.Z.Messages.ADD_FRIEND_BUTTON,
        color: o.Button.Colors.GREEN,
        onClick: () => {
            r.Z.addRelationship({
                userId: n.id,
                context: { location: h },
                friendToken: m
            });
        }
    });
}
