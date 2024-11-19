n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(200651);
n(192379);
var l = n(13245),
    r = n(937889),
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
    v = n(620954),
    g = n(987650),
    E = n(981631),
    _ = n(388032);
function C(e, t, n, C) {
    var S;
    let { icon: Z, title: I, body: x } = (0, s.Xi)(e, t, n),
        { trackView: N, trackClick: O } = (0, v.R)(g.n0.TextChat, {
            notif_type: g.n0.TextChat,
            notif_user_id: null === (S = t.author) || void 0 === S ? void 0 : S.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: Z,
        title: I,
        body:
            t.content.length > 0
                ? (0, r.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : x,
        hint: (e) => (e ? null : (0, m.Q)((0, v.P)(), _.t.ykjOAA)),
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
            C && (0, c.GN)(a.Ay, a.yk), N();
        },
        onNotificationClick: () => {
            let n = (0, h.QF)();
            f.Z.isInputLocked(n) ? (O('unlock'), l.Z.setInputLocked(!1, n)) : (O('jump'), (0, o.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && d.ZP.focus());
        },
        onDismissClick: () => {
            O('dismiss');
        }
    };
}
