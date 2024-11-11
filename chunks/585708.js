n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var r = n(13245),
    l = n(937889),
    o = n(703656),
    a = n(974180),
    s = n(150097),
    u = n(358085),
    c = n(557177),
    d = n(998502),
    h = n(145597),
    f = n(610394),
    p = n(516542),
    m = n(380736),
    E = n(620954),
    g = n(987650),
    v = n(981631),
    _ = n(388032);
function C(e, t, n, C) {
    var S;
    let { icon: I, title: Z, body: N } = (0, s.Xi)(e, t, n),
        { trackView: x, trackClick: O } = (0, E.R)(g.n0.TextChat, {
            notif_type: g.n0.TextChat,
            notif_user_id: null === (S = t.author) || void 0 === S ? void 0 : S.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: I,
        title: Z,
        body:
            t.content.length > 0
                ? (0, l.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : N,
        hint: (e) => (e ? null : (0, m.Q)((0, E.P)(), _.t.ykjOAA)),
        maxBodyLines: 2,
        renderFooter: (t, n) =>
            t
                ? (0, i.jsx)(p.Z, {
                      id: n,
                      channel: e,
                      onSend: () => O('send')
                  })
                : null,
        onNotificationShow: () => {
            C && (0, c.GN)(a.Ay, a.yk), x();
        },
        onNotificationClick: () => {
            let n = (0, h.QF)();
            f.Z.isInputLocked(n) ? (O('unlock'), r.Z.setInputLocked(!1, n)) : (O('jump'), (0, o.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && d.ZP.focus());
        },
        onDismissClick: () => {
            O('dismiss');
        }
    };
}
