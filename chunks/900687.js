i.d(n, {
    Z: function () {
        return I;
    }
});
var o = i(735250);
i(470079);
var s = i(481060), t = i(239091), l = i(785717), a = i(705556), r = i(30556), c = i(225714), d = i(228168), u = i(984904);
function I(e) {
    let {
            user: n,
            isCurrentUser: I,
            guildId: E,
            friendToken: f,
            canDM: _,
            relationshipType: Z,
            originalFriendingEnabled: m = !1,
            improvedFriendingEnabled: v = !1,
            persistentCallCtaEnabled: S = !1,
            activeInviteToCallCtaEnabled: x = !1,
            viewProfileItem: h,
            onClose: N
        } = e, {trackUserProfileAction: g} = (0, l.KZ)();
    function p(e) {
        g({ action: 'PRESS_OPTIONS' }), (0, t.jW)(e, async () => {
            let {default: e} = await i.e('29136').then(i.bind(i, 193646));
            return i => (0, o.jsx)(e, {
                ...i,
                originalFriendingEnabled: m,
                relationshipType: Z,
                viewProfileItem: h,
                user: n,
                isCurrentUser: I,
                guildId: E,
                trackUserProfileAction: g,
                onClose: N
            });
        });
    }
    return (0, o.jsxs)('div', {
        className: u.buttons,
        children: [
            (m || v) && (0, o.jsxs)(o.Fragment, {
                children: [
                    (0, o.jsx)(c.Z, {
                        user: n,
                        isCurrentUser: I,
                        relationshipType: Z,
                        originalFriendingEnabled: m,
                        improvedFriendingEnabled: v,
                        persistentCallCtaEnabled: S,
                        activeInviteToCallCtaEnabled: x,
                        friendToken: f,
                        onClose: N
                    }),
                    I && (0, o.jsx)(a.Z, {
                        user: n,
                        guildId: E,
                        profileType: d.y0.FULL_SIZE,
                        onClose: N
                    }),
                    !n.isNonUserBot() && m ? (0, o.jsx)(s.Clickable, {
                        focusProps: { offset: { left: 8 } },
                        onClick: p,
                        children: (0, o.jsx)(s.MoreVerticalIcon, {
                            size: 'md',
                            color: 'currentColor',
                            className: u.additionalActionsIcon
                        })
                    }) : null
                ]
            }),
            !m && !v && (_ ? (0, o.jsx)(r.Z, {
                user: n,
                onClose: N
            }) : (0, o.jsx)(a.Z, {
                user: n,
                guildId: E,
                profileType: d.y0.FULL_SIZE,
                onClose: N
            }))
        ]
    });
}
