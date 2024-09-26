t(411104);
var l = t(991637),
    s = t.n(l),
    a = t(388123),
    r = t(904245),
    i = t(957730),
    o = t(592125),
    u = t(496675),
    c = t(784384);
let d = {
    async sendForward(e, n, t) {
        let l = o.Z.getChannel(n),
            s = o.Z.getChannel(e.channel_id);
        if (null == s) throw Error('Unable to find original channel for message');
        if (null == l) throw Error('Unable to find destination channel for message');
        let d = i.ZP.parse(l, ''),
            h = {
                guild_id: s.guild_id,
                channel_id: e.channel_id,
                message_id: e.id,
                type: a.U.FORWARD,
                forward_only:
                    (null == t ? void 0 : t.onlyAttachmentIds) != null || (null == t ? void 0 : t.onlyEmbedIndices) != null
                        ? {
                              attachment_ids: t.onlyAttachmentIds,
                              embed_indices: t.onlyEmbedIndices
                          }
                        : void 0
            };
        await r.Z.sendMessage(l.id, d, !1, {
            messageReference: h,
            eagerDispatch: !1
        }),
            (null == t ? void 0 : t.withMessage) != null && !(0, c.pU)(l, u.Z) && (await r.Z.sendMessage(l.id, i.ZP.parse(l, t.withMessage), !1));
    },
    sendForwards: (e, n, t) => s()(n.map((n) => d.sendForward(e, n, t)))
};
n.Z = d;
