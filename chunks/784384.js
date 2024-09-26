t.d(n, {
    HY: function () {
        return g;
    },
    pU: function () {
        return _;
    },
    y: function () {
        return E;
    }
}),
    t(47120),
    t(390547);
var l = t(442837),
    s = t(933557),
    a = t(926491),
    r = t(378233),
    i = t(131704),
    o = t(592125),
    u = t(496675),
    c = t(699516),
    d = t(594174),
    h = t(823379),
    f = t(981631),
    m = t(689938);
function g(e, n, t) {
    let l = t instanceof i.Sf;
    if (n.isNSFW() && !(l && t.isNSFW())) return { label: m.Z.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED };
    if (l && (0, i.Km)(t.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !u.Z.can(f.Plq.ATTACH_FILES, t)) return { label: m.Z.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !u.Z.can(f.Plq.EMBED_LINKS, t)) return { label: m.Z.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED };
        let n = [
            ...(0, r.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: n } = e;
                return (0, r.cv)(n);
            })
        ];
        if (
            n.length > 0 &&
            !u.Z.can(f.Plq.USE_EXTERNAL_STICKERS, t) &&
            n.some((e) =>
                (function (e, n) {
                    let t = a.Z.getStickerById(e.id);
                    return !!(null != t && (0, r.J8)(t)) && (t.guild_id !== n.guild_id || void 0);
                })(e, t)
            )
        )
            return { label: m.Z.Messages.MESSAGE_CHANNEL_EXTERNAL_STICKERS_DISABLED };
        if ((e.hasFlag(f.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(f.iLy.IS_VOICE_MESSAGE))) && !u.Z.can(f.Plq.SEND_VOICE_MESSAGES, t)) return { label: m.Z.Messages.MESSAGE_CHANNEL_VOICE_MESSAGES_DISABLED };
    }
}
function _(e, n) {
    return null != e.rateLimitPerUser && !!(e.rateLimitPerUser > 0) && !(n.can(f.Plq.MANAGE_CHANNELS, e) || n.can(f.Plq.MANAGE_MESSAGES, e));
}
function E(e) {
    let n = (0, l.Wu)(
        [o.Z, u.Z],
        () =>
            e
                .map((e) => {
                    let { type: n, id: t } = e;
                    return 'channel' === n ? o.Z.getChannel(t) : null;
                })
                .filter(h.lm)
                .filter((e) => _(e, u.Z)),
        [e]
    );
    return (0, l.Wu)([d.default, c.Z], () => n.map((e) => (0, s.F6)(e, d.default, c.Z, !0)), [n]);
}
