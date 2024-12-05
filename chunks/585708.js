n.d(t, {
    Z: function () {
        return x;
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
    c = n(557177),
    d = n(998502),
    h = n(145597),
    f = n(610394),
    p = n(516542),
    m = n(380736),
    v = n(620954),
    g = n(987650),
    E = n(981631),
    C = n(388032);
function x(e, t, n, x) {
    var Z;
    let { icon: _, title: S, body: I } = (0, a.Xi)(e, t, n),
        { trackView: N, trackClick: b } = (0, v.R)(g.n0.TextChat, {
            notif_type: g.n0.TextChat,
            notif_user_id: null === (Z = t.author) || void 0 === Z ? void 0 : Z.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: _,
        title: S,
        body:
            t.content.length > 0
                ? (0, o.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : I,
        hint: (e) => (e ? null : (0, m.Q)((0, v.P)(), C.t.ykjOAA, C.intl.string(C.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (t, n) =>
            t
                ? (0, i.jsx)(p.Z, {
                      id: n,
                      channel: e,
                      onSend: () => b('send')
                  })
                : null,
        onNotificationShow: () => {
            x && (0, c.GN)(s.Ay, s.yk), N();
        },
        onNotificationClick: () => {
            let n = (0, h.QF)();
            f.Z.isInputLocked(n) ? (b('unlock'), l.Z.setInputLocked(!1, n)) : (b('jump'), (0, r.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && d.ZP.focus());
        },
        onDismissClick: () => {
            b('dismiss');
        }
    };
}
