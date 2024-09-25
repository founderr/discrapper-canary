n.d(t, {
    Z: function () {
        return u;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(481060),
    o = n(194359),
    s = n(689938),
    l = n(56599);
function u(e) {
    let { userId: t } = e,
        n = i.useCallback(
            (e) => {
                e.stopPropagation(), o.Z.cancelFriendRequest(t);
            },
            [t]
        ),
        u = i.useCallback(
            (e) => {
                e.stopPropagation(), o.Z.addRelationship({ userId: t });
            },
            [t]
        );
    return (0, r.jsxs)('div', {
        className: l.friendRequestContainer,
        children: [
            (0, r.jsx)(a.Button, {
                className: l.acceptButton,
                look: a.Button.Looks.FILLED,
                color: a.Button.Colors.GREEN,
                size: a.Button.Sizes.NONE,
                onClick: u,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: s.Z.Messages.FRIEND_REQUEST_ACCEPT
                })
            }),
            (0, r.jsx)(a.Button, {
                className: l.ignoreButton,
                look: a.Button.Looks.FILLED,
                color: a.Button.Colors.PRIMARY,
                size: a.Button.Sizes.NONE,
                onClick: n,
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-sm/medium',
                    color: 'always-white',
                    children: s.Z.Messages.FRIEND_REQUEST_IGNORE
                })
            })
        ]
    });
}
