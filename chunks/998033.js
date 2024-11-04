n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(13245),
    s = n(593481),
    l = n(703656),
    a = n(974180),
    o = n(237997),
    c = n(150097),
    d = n(557177),
    u = n(312839),
    h = n(981631),
    p = n(987650),
    f = n(388032);
function m(e, t, n, m) {
    var g;
    let { icon: v, title: _, body: E } = (0, c.Xi)(e, t, n),
        { trackView: x, trackClick: I } = (0, u.R)(p.n0.TextChat, {
            notif_type: p.n0.TextChat,
            notif_user_id: null === (g = t.author) || void 0 === g ? void 0 : g.id,
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
            m && (0, d.GN)(a.Ay, a.yk), x();
        },
        onNotificationClick: () => {
            (0, l.uL)(h.Z5c.CHANNEL(e.guild_id, e.id)), I('jump'), o.Z.isInstanceUILocked() && r.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            I('dismiss');
        }
    };
}
