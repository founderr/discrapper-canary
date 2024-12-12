n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(83474),
    o = n(245315),
    s = n(556041),
    c = n(347475),
    u = n(592125),
    d = n(368859);
function m(e, t) {
    if ((0, o.cp)(t)) return (0, i.jsx)(s.Z, {});
    if ((0, d.Z)(t)) {
        let { guild_id: n, channel_id: r, message_id: l } = t.messageReference;
        if (null != n)
            return (0, i.jsx)(a.ZP, {
                setPopoutRef: e.setPopoutRef,
                guildId: n,
                channelId: r,
                messageId: l
            });
    }
    if (null != t.interaction && 'SENDING' === t.state) return (0, i.jsx)(i.Fragment, {});
    let n = u.Z.getChannel(t.channel_id);
    return (
        l()(null != n, 'renderUserGuildPopout: channel should never be null'),
        (0, i.jsx)(c.Z, {
            ...e,
            channelId: t.channel_id,
            messageId: t.id,
            guildId: n.guild_id,
            userId: t.author.id,
            user: null != t.webhookId ? t.author : void 0
        })
    );
}
