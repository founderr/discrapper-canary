i.d(n, {
    Z: function () {
        return u;
    }
});
var l = i(735250);
i(470079);
var s = i(481060), o = i(239091), t = i(785717), a = i(705556), r = i(225714), d = i(228168), c = i(984904);
function u(e) {
    let {
            user: n,
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
        } = e, {trackUserProfileAction: h} = (0, t.KZ)();
    return (0, l.jsxs)('div', {
        className: c.buttons,
        children: [
            (0, l.jsx)(r.Z, {
                user: n,
                isCurrentUser: u,
                relationshipType: _,
                improvedFriendingEnabled: m,
                persistentCallCtaEnabled: Z,
                activeInviteToCallCtaEnabled: v,
                friendToken: f,
                onClose: x
            }),
            (0, l.jsx)(a.Z, {
                user: n,
                guildId: I,
                profileType: d.y0.FULL_SIZE,
                onClose: x
            }),
            !n.isNonUserBot() && E ? (0, l.jsx)(s.Clickable, {
                focusProps: { offset: { left: 8 } },
                onClick: function (e) {
                    h({ action: 'PRESS_OPTIONS' }), (0, o.jW)(e, async () => {
                        let {default: e} = await i.e('29136').then(i.bind(i, 193646));
                        return i => (0, l.jsx)(e, {
                            ...i,
                            originalFriendingEnabled: E,
                            relationshipType: _,
                            viewProfileItem: S,
                            user: n,
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
