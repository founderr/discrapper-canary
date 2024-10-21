n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651);
n(192379);
var s = n(13245),
    r = n(593481),
    a = n(703656),
    o = n(974180),
    l = n(237997),
    c = n(150097),
    d = n(557177),
    u = n(312839),
    h = n(981631),
    p = n(987650),
    f = n(689938);
function _(e, t, n, _) {
    var E;
    let { icon: g, title: m, body: I } = (0, c.Xi)(e, t, n),
        { trackView: Z, trackClick: v } = (0, u.R)(p.n0.TextChat, {
            notif_type: p.n0.TextChat,
            notif_user_id: null === (E = t.author) || void 0 === E ? void 0 : E.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        colorScheme: r.IC.PRIMARY,
        icon: g,
        title: m,
        body: I,
        renderFooter: (e) =>
            e
                ? (0, i.jsx)('div', {
                      style: { textAlign: 'center' },
                      children: f.Z.Messages.OVERLAY_CLICK_TO_JUMP_TO_CHANNEL
                  })
                : null,
        maxBodyLines: 2,
        onNotificationShow: () => {
            _ && (0, d.GN)(o.Ay, o.yk), Z();
        },
        onNotificationClick: () => {
            (0, a.uL)(h.Z5c.CHANNEL(e.guild_id, e.id)), v('jump'), l.Z.isInstanceUILocked() && s.Z.setInstanceLocked(!1);
        },
        onDismissClick: () => {
            v('dismiss');
        }
    };
}
