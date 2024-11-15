n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(481060),
    o = n(194359),
    l = n(906732),
    u = n(5192),
    c = n(785717),
    d = n(388032),
    f = n(534927);
function _(e) {
    let { user: t, guildId: n, channelId: i, friendToken: _, className: p } = e,
        h = u.ZP.getName(n, i, t),
        { trackUserProfileAction: m } = (0, c.KZ)(),
        { newestAnalyticsLocation: g } = (0, l.ZP)();
    return (0, r.jsxs)('div', {
        className: a()(f.container, p),
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/normal',
                children: d.intl.format(d.t.uIomX1, { username: h })
            }),
            (0, r.jsxs)('div', {
                className: f.buttonContainer,
                children: [
                    (0, r.jsx)(s.Button, {
                        look: s.Button.Looks.FILLED,
                        color: a()(s.Button.Colors.BRAND, f.color),
                        size: s.Button.Sizes.SMALL,
                        className: f.button,
                        onClick: () => {
                            m({ action: 'ACCEPT_FRIEND_REQUEST' }),
                                o.Z.addRelationship({
                                    userId: t.id,
                                    friendToken: _,
                                    context: { location: g }
                                });
                        },
                        children: d.intl.string(d.t.ZcibdX)
                    }),
                    (0, r.jsx)(s.Button, {
                        look: s.Button.Looks.FILLED,
                        color: s.Button.Colors.PRIMARY,
                        size: s.Button.Sizes.SMALL,
                        className: f.button,
                        onClick: () => {
                            m({ action: 'IGNORE_FRIEND_REQUEST' }), o.Z.cancelFriendRequest(t.id, { location: g });
                        },
                        children: d.intl.string(d.t.xuio0N)
                    })
                ]
            })
        ]
    });
}
