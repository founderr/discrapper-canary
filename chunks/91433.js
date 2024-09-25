n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(194359),
    l = n(906732),
    u = n(5192),
    c = n(785717),
    d = n(689938),
    _ = n(235677);
function E(e) {
    let { user: t, guildId: n, channelId: i, friendToken: E, className: f } = e,
        h = u.ZP.getName(n, i, t),
        { trackUserProfileAction: p } = (0, c.KZ)(),
        { newestAnalyticsLocation: m } = (0, l.ZP)();
    return (0, r.jsxs)('div', {
        className: a()(_.container, f),
        children: [
            (0, r.jsx)(o.Text, {
                variant: 'text-sm/normal',
                children: d.Z.Messages.NOTIFICATION_CENTER_INCOMING_FRIEND_REQUEST.format({ username: h })
            }),
            (0, r.jsxs)('div', {
                className: _.buttonContainer,
                children: [
                    (0, r.jsx)(o.Button, {
                        look: o.Button.Looks.FILLED,
                        color: a()(o.Button.Colors.BRAND, _.color),
                        size: o.Button.Sizes.SMALL,
                        className: _.button,
                        onClick: () => {
                            p({ action: 'ACCEPT_FRIEND_REQUEST' }),
                                s.Z.addRelationship({
                                    userId: t.id,
                                    friendToken: E,
                                    context: { location: m }
                                });
                        },
                        children: d.Z.Messages.FRIEND_REQUEST_ACCEPT
                    }),
                    (0, r.jsx)(o.Button, {
                        look: o.Button.Looks.FILLED,
                        color: o.Button.Colors.PRIMARY,
                        size: o.Button.Sizes.SMALL,
                        className: _.button,
                        onClick: () => {
                            p({ action: 'IGNORE_FRIEND_REQUEST' }), s.Z.cancelFriendRequest(t.id, { location: m });
                        },
                        children: d.Z.Messages.FRIEND_REQUEST_IGNORE
                    })
                ]
            })
        ]
    });
}
