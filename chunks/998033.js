n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(593481),
    o = n(703656),
    a = n(974180),
    l = n(237997),
    c = n(150097),
    d = n(557177),
    u = n(312839),
    h = n(981631),
    p = n(987650),
    f = n(388032);
function g(e, t, n, g) {
    var m;
    let { icon: v, title: _, body: E } = (0, c.Xi)(e, t, n),
        { trackView: Z, trackClick: x } = (0, u.R)(p.n0.TextChat, {
            notif_type: p.n0.TextChat,
            notif_user_id: null === (m = t.author) || void 0 === m ? void 0 : m.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        colorScheme: s.IC.PRIMARY,
        icon: v,
        title: _,
        body: E,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)('div', {
                      style: { textAlign: 'center' },
                      children: f.intl.string(f.t['+MJm39'])
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            g && (0, d.GN)(a.Ay, a.yk), Z();
        },
        onNotificationClick: () => {
            (0, o.uL)(h.Z5c.CHANNEL(e.guild_id, e.id)), x('jump'), l.Z.isInstanceUILocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            x('dismiss');
        }
    };
}
