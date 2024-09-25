n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(749210),
    i = n(336197),
    a = n(592125),
    o = n(430824),
    s = n(626135),
    l = n(900849),
    u = n(981631);
async function c(e) {
    var t;
    if (null == e.messageReference) return;
    let n = e.messageReference.guild_id,
        c = e.messageReference.channel_id,
        d = e.messageReference.message_id,
        _ = a.Z.getChannel(c),
        E = !1;
    if (null == _ && null != n && null == o.Z.getGuild(n))
        try {
            await (0, l.Ub)(n, { object: u.qAy.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }), (E = !0), await (0, r.V)(n), (_ = a.Z.getChannel(c));
        } catch {}
    s.default.track(u.rMx.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: null === (t = a.Z.getBasicChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: n,
        breadcrumb_channel_id: c,
        breadcrumb_message_id: d,
        did_lurk: E
    });
    let f = E ? c : void 0;
    (0, i.Z)(u.Z5c.CHANNEL(n, c, d), { welcomeModalChannelId: f });
}
