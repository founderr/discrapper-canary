n.d(t, {
    H: function () {
        return g;
    },
    y: function () {
        return _;
    }
}),
    n(47120),
    n(390547);
var l = n(442837),
    s = n(933557),
    a = n(926491),
    r = n(378233),
    i = n(131704),
    o = n(592125),
    u = n(496675),
    c = n(699516),
    d = n(594174),
    h = n(823379),
    m = n(981631),
    f = n(689938);
function g(e, t, n) {
    let l = n instanceof i.Sf;
    if (t.isNSFW() && !(l && n.isNSFW())) return { label: f.Z.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED };
    if (l && (0, i.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !u.Z.can(m.Plq.ATTACH_FILES, n)) return { label: f.Z.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !u.Z.can(m.Plq.EMBED_LINKS, n)) return { label: f.Z.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED };
        let t = [
            ...(0, r.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, r.cv)(t);
            })
        ];
        if (
            t.length > 0 &&
            !u.Z.can(m.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = a.Z.getStickerById(e.id);
                    return !!(null != n && (0, r.J8)(n)) && (n.guild_id !== t.guild_id || void 0);
                })(e, n)
            )
        )
            return { label: f.Z.Messages.MESSAGE_CHANNEL_EXTERNAL_STICKERS_DISABLED };
        if ((e.hasFlag(m.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(m.iLy.IS_VOICE_MESSAGE))) && !u.Z.can(m.Plq.SEND_VOICE_MESSAGES, n)) return { label: f.Z.Messages.MESSAGE_CHANNEL_VOICE_MESSAGES_DISABLED };
    }
}
function _(e) {
    let t = (0, l.Wu)(
        [o.Z, u.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return 'channel' === t ? o.Z.getChannel(n) : null;
                })
                .filter(h.lm)
                .filter((e) => null != e.rateLimitPerUser && !!(e.rateLimitPerUser > 0) && !(u.Z.can(m.Plq.MANAGE_CHANNELS, e) || u.Z.can(m.Plq.MANAGE_MESSAGES, e))),
        [e]
    );
    return (0, l.Wu)([d.default, c.Z], () => t.map((e) => (0, s.F6)(e, d.default, c.Z, !0)), [t]);
}
