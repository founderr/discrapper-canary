n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(749210), a = n(336197), s = n(592125), l = n(430824), r = n(900849), o = n(981631);
async function c(e) {
    if (null == e.messageReference)
        return;
    let t = e.messageReference.guild_id, n = e.messageReference.channel_id, c = s.Z.getChannel(n), d = !1;
    if (null == c && null != t && null == l.Z.getGuild(t))
        try {
            await (0, r.Ub)(t, { object: o.qAy.FORWARD_BREADCRUMB }, { shouldNavigate: !1 }), d = !0, await (0, i.V)(t), c = s.Z.getChannel(n);
        } catch {
        }
    let u = d ? n : void 0;
    (0, a.Z)(o.Z5c.CHANNEL(t, n, e.messageReference.message_id), { welcomeModalChannelId: u });
}
