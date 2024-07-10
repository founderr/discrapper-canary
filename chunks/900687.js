n.d(i, {
    Z: function () {
        return u;
    }
});
var l = n(735250);
n(470079);
var s = n(481060), t = n(239091), o = n(785717), a = n(705556), r = n(225714), d = n(228168), c = n(984904);
function u(e) {
    let {
            user: i,
            isCurrentUser: u,
            guildId: I,
            friendToken: f,
            relationshipType: _,
            originalFriendingEnabled: E = !1,
            improvedFriendingEnabled: m = !1,
            persistentCallCtaEnabled: Z = !1,
            activeInviteToCallCtaEnabled: v = !1,
            viewProfileItem: S,
            onClose: x
        } = e, {trackUserProfileAction: h} = (0, o.KZ)();
    return (0, l.jsxs)('div', {
        className: c.buttons,
        children: [
            (0, l.jsx)(r.Z, {
                user: i,
                isCurrentUser: u,
                relationshipType: _,
                improvedFriendingEnabled: m,
                persistentCallCtaEnabled: Z,
                activeInviteToCallCtaEnabled: v,
                friendToken: f,
                onClose: x
            }),
            (0, l.jsx)(a.Z, {
                user: i,
                guildId: I,
                profileType: d.y0.FULL_SIZE,
                onClose: x
            }),
            !i.isNonUserBot() && E ? (0, l.jsx)(s.Clickable, {
                focusProps: { offset: { left: 8 } },
                onClick: function (e) {
                    h({ action: 'PRESS_OPTIONS' }), (0, t.jW)(e, async () => {
                        let {default: e} = await n.e('29136').then(n.bind(n, 193646));
                        return n => (0, l.jsx)(e, {
                            ...n,
                            originalFriendingEnabled: E,
                            relationshipType: _,
                            viewProfileItem: S,
                            user: i,
                            isCurrentUser: u,
                            guildId: I,
                            trackUserProfileAction: h,
                            onClose: x
                        });
                    });
                },
                children: (0, l.jsx)(s.MoreVerticalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: c.additionalActionsIcon
                })
            }) : null
        ]
    });
}
