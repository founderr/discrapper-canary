n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var l = n(13245),
    o = n(937889),
    r = n(703656),
    s = n(974180),
    a = n(150097),
    u = n(358085),
    d = n(557177),
    c = n(998502),
    h = n(145597),
    f = n(610394),
    p = n(516542),
    m = n(380736),
    v = n(620954),
    g = n(987650),
    E = n(981631),
    Z = n(388032);
function C(e, t, n, C) {
    var x;
    let { icon: S, title: I, body: _ } = (0, a.Xi)(e, t, n),
        { trackView: O, trackClick: N } = (0, v.R)(g.n0.TextChat, {
            notif_type: g.n0.TextChat,
            notif_user_id: null === (x = t.author) || void 0 === x ? void 0 : x.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: S,
        title: I,
        body:
            t.content.length > 0
                ? (0, o.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : _,
        hint: (e) => (e ? null : (0, m.Q)((0, v.P)(), Z.t.ykjOAA, Z.intl.string(Z.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (t, n) =>
            t
                ? (0, i.jsx)(p.Z, {
                      id: n,
                      channel: e,
                      onSend: () => N('send')
                  })
                : null,
        onNotificationShow: () => {
            C && (0, d.GN)(s.Ay, s.yk), O();
        },
        onNotificationClick: () => {
            let n = (0, h.QF)();
            f.Z.isInputLocked(n) ? (N('unlock'), l.Z.setInputLocked(!1, n)) : (N('jump'), (0, r.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && c.ZP.focus());
        },
        onDismissClick: () => {
            N('dismiss');
        }
    };
}
