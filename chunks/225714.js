n.d(i, {
    Z: function () {
        return m;
    }
});
var l = n(735250);
n(470079);
var s = n(120356), t = n.n(s), o = n(481060), a = n(194359), r = n(906732), d = n(475413), c = n(261253), u = n(7242), I = n(934861), f = n(981631), _ = n(689938), E = n(682731);
function m(e) {
    let {
            isCurrentUser: i,
            user: n,
            relationshipType: s,
            friendToken: m,
            improvedFriendingEnabled: Z = !1,
            persistentCallCtaEnabled: v = !1,
            activeInviteToCallCtaEnabled: S = !1,
            onClose: x
        } = e, {newestAnalyticsLocation: h} = (0, r.ZP)();
    if (i || s === f.OGo.BLOCKED)
        return null;
    let p = v ? (0, l.jsx)(c.Z, {
        user: n,
        onClose: x
    }) : null;
    if (Z) {
        let e = (0, l.jsx)(u.Z, {
            user: n,
            onClose: x
        });
        if (s === f.OGo.FRIEND && S && null != e)
            return (0, l.jsxs)('div', {
                className: E.multipleButtons,
                children: [
                    (0, l.jsx)(I.v, {
                        userId: n.id,
                        onClose: x
                    }),
                    e
                ]
            });
        if (s === f.OGo.FRIEND || n.bot)
            return (0, l.jsxs)('div', {
                className: E.multipleButtons,
                children: [
                    p,
                    (0, l.jsx)(I.c, {
                        userId: n.id,
                        onClose: x
                    })
                ]
            });
        if (s === f.OGo.PENDING_OUTGOING || s === f.OGo.PENDING_INCOMING)
            return S && null != e ? (0, l.jsxs)('div', {
                className: E.multipleButtons,
                children: [
                    (0, l.jsx)(d.ef, {
                        icon: o.UserClockIcon,
                        tooltipText: _.Z.Messages.FRIENDS_SECTION_PENDING,
                        disabled: !0
                    }),
                    (0, l.jsx)(I.v, {
                        userId: n.id,
                        onClose: x
                    }),
                    e
                ]
            }) : (0, l.jsxs)('div', {
                className: E.multipleButtons,
                children: [
                    (0, l.jsx)(d.ef, {
                        icon: o.UserClockIcon,
                        tooltipText: _.Z.Messages.FRIENDS_SECTION_PENDING,
                        disabled: !0
                    }),
                    p,
                    (0, l.jsx)(I.c, {
                        userId: n.id,
                        onClose: x
                    })
                ]
            });
        return S && null != e ? (0, l.jsxs)('div', {
            className: E.multipleButtons,
            children: [
                (0, l.jsx)(d.ef, {
                    action: 'SEND_FRIEND_REQUEST',
                    icon: o.UserPlusIcon,
                    tooltipText: _.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    onClick: () => {
                        a.Z.addRelationship({
                            userId: n.id,
                            context: { location: h },
                            friendToken: m
                        });
                    }
                }),
                (0, l.jsx)(I.v, {
                    userId: n.id,
                    onClose: x
                }),
                e
            ]
        }) : (0, l.jsxs)('div', {
            className: E.multipleButtons,
            children: [
                p,
                (0, l.jsx)(I.v, {
                    userId: n.id,
                    onClose: x
                }),
                (0, l.jsx)(d.tG, {
                    action: 'SEND_FRIEND_REQUEST',
                    icon: o.UserPlusIcon,
                    text: _.Z.Messages.USER_PROFILE_ADD_FRIEND,
                    color: t()(o.Button.Colors.BRAND, E.color),
                    onClick: () => {
                        a.Z.addRelationship({
                            userId: n.id,
                            context: { location: h },
                            friendToken: m
                        });
                    }
                })
            ]
        });
    }
    return s === f.OGo.FRIEND || n.bot ? (0, l.jsx)(I.c, {
        userId: n.id,
        onClose: x
    }) : s === f.OGo.PENDING_OUTGOING ? (0, l.jsx)(d.tG, {
        text: _.Z.Messages.ADD_FRIEND_BUTTON_AFTER,
        color: o.Button.Colors.GREEN,
        disabled: !0
    }) : s === f.OGo.PENDING_INCOMING ? (0, l.jsx)(I.c, {
        userId: n.id,
        onClose: x
    }) : (0, l.jsx)(d.tG, {
        action: 'SEND_FRIEND_REQUEST',
        text: _.Z.Messages.ADD_FRIEND_BUTTON,
        color: o.Button.Colors.GREEN,
        onClick: () => {
            a.Z.addRelationship({
                userId: n.id,
                context: { location: h },
                friendToken: m
            });
        }
    });
}
