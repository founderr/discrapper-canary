n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(749210),
    a = n(336197),
    s = n(592125),
    l = n(430824),
    r = n(626135),
    o = n(900849),
    c = n(981631);
async function d(e) {
    var t;
    if (null == e.messageReference) return;
    let n = e.messageReference.guild_id,
        d = e.messageReference.channel_id,
        u = e.messageReference.message_id,
        _ = s.Z.getChannel(d),
        E = !1;
    if (null == _ && null != n && null == l.Z.getGuild(n))
        try {
            await (0, o.Ub)(n, { object: c.qAy.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }), (E = !0), await (0, i.V)(n), (_ = s.Z.getChannel(d));
        } catch {}
    r.default.track(c.rMx.FORWARD_BREADCRUMB_CLICKED, {
        guild_id: null === (t = s.Z.getBasicChannel(e.channel_id)) || void 0 === t ? void 0 : t.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        breadcrumb_guild_id: n,
        breadcrumb_channel_id: d,
        breadcrumb_message_id: u,
        did_lurk: E
    });
    let I = E ? d : void 0;
    (0, a.Z)(c.Z5c.CHANNEL(n, d, u), { welcomeModalChannelId: I });
}
