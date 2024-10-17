n.d(t, {
    HY: function () {
        return I;
    },
    nm: function () {
        return A;
    },
    pU: function () {
        return p;
    },
    y: function () {
        return C;
    }
}),
    n(47120),
    n(390547);
var l = n(470079),
    a = n(106351),
    s = n(442837),
    i = n(933557),
    r = n(987509),
    o = n(926491),
    c = n(378233),
    u = n(131704),
    d = n(592125),
    h = n(496675),
    _ = n(699516),
    f = n(594174),
    E = n(408433),
    g = n(823379),
    m = n(981631),
    S = n(689938);
function A(e) {
    let t = e.map(r.hl).find(g.lm),
        n = (0, s.e7)([d.Z], () => d.Z.getChannel(t), [t]);
    return l.useMemo(
        () =>
            null != n
                ? n
                : (0, u.kt)({
                      id: '1',
                      type: a.d.DM
                  }),
        [n]
    );
}
function I(e, t, n) {
    let l = n instanceof u.Sf;
    if (t.isNSFW() && !(l && n.isNSFW())) return { label: S.Z.Messages.MESSAGE_FORWARDING_NSFW_NOT_ALLOWED };
    if (l && (0, u.Km)(n.type)) {
        if ((e.attachments.length > 0 || e.messageSnapshots.some((e) => e.message.attachments.length > 0)) && !h.Z.can(m.Plq.ATTACH_FILES, n)) return { label: S.Z.Messages.MESSAGE_CHANNEL_ATTACHMENTS_DISABLED };
        if ((e.embeds.length > 0 || e.messageSnapshots.some((e) => e.message.embeds.length > 0)) && !(0, E.eC)(n, h.Z) && !(0, E.En)(e)) return { label: S.Z.Messages.MESSAGE_CHANNEL_EMBEDS_DISABLED };
        let t = [
            ...(0, c.cv)(e),
            ...e.messageSnapshots.flatMap((e) => {
                let { message: t } = e;
                return (0, c.cv)(t);
            })
        ];
        if (
            t.length > 0 &&
            !h.Z.can(m.Plq.USE_EXTERNAL_STICKERS, n) &&
            t.some((e) =>
                (function (e, t) {
                    let n = o.Z.getStickerById(e.id);
                    return !!(null != n && (0, c.J8)(n)) && (n.guild_id !== t.guild_id || void 0);
                })(e, n)
            )
        )
            return { label: S.Z.Messages.MESSAGE_CHANNEL_EXTERNAL_STICKERS_DISABLED };
        if ((e.hasFlag(m.iLy.IS_VOICE_MESSAGE) || e.messageSnapshots.some((e) => e.message.hasFlag(m.iLy.IS_VOICE_MESSAGE))) && !h.Z.can(m.Plq.SEND_VOICE_MESSAGES, n)) return { label: S.Z.Messages.MESSAGE_CHANNEL_VOICE_MESSAGES_DISABLED };
    }
}
function p(e, t) {
    return null != e.rateLimitPerUser && !!(e.rateLimitPerUser > 0) && !(t.can(m.Plq.MANAGE_CHANNELS, e) || t.can(m.Plq.MANAGE_MESSAGES, e));
}
function C(e) {
    let t = (0, s.Wu)(
        [d.Z, h.Z],
        () =>
            e
                .map((e) => {
                    let { type: t, id: n } = e;
                    return 'channel' === t ? d.Z.getChannel(n) : null;
                })
                .filter(g.lm)
                .filter((e) => p(e, h.Z)),
        [e]
    );
    return (0, s.Wu)([f.default, _.Z], () => t.map((e) => (0, i.F6)(e, f.default, _.Z, !0)), [t]);
}
