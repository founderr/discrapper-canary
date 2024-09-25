n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(735250);
n(470079);
var i = n(512722),
    a = n.n(i),
    o = n(83474),
    s = n(245315),
    l = n(556041),
    u = n(347475),
    c = n(592125),
    d = n(368859);
function _(e, t) {
    if ((0, s.cp)(t)) return (0, r.jsx)(l.Z, {});
    if ((0, d.Z)(t)) {
        let { guild_id: e, channel_id: n, message_id: i } = t.messageReference;
        if (null != e)
            return (0, r.jsx)(o.ZP, {
                guildId: e,
                channelId: n,
                messageId: i
            });
    }
    if (null != t.interaction && 'SENDING' === t.state) return (0, r.jsx)(r.Fragment, {});
    let n = c.Z.getChannel(t.channel_id);
    return (
        a()(null != n, 'renderUserGuildPopout: channel should never be null'),
        (0, r.jsx)(u.Z, {
            ...e,
            channelId: t.channel_id,
            messageId: t.id,
            guildId: n.guild_id,
            userId: t.author.id,
            user: null != t.webhookId ? t.author : void 0
        })
    );
}
