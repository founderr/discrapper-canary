n(411104);
var l = n(991637),
    s = n.n(l),
    a = n(388123),
    r = n(904245),
    i = n(957730),
    o = n(592125);
let u = {
    async sendForward(e, t, n) {
        let l = o.Z.getChannel(t),
            s = o.Z.getChannel(e.channel_id);
        if (null == s) throw Error('Unable to find original channel for message');
        if (null == l) throw Error('Unable to find destination channel for message');
        let u = i.ZP.parse(l, ''),
            c = {
                guild_id: s.guild_id,
                channel_id: e.channel_id,
                message_id: e.id,
                type: a.U.FORWARD,
                forward_only:
                    (null == n ? void 0 : n.onlyAttachmentIds) != null || (null == n ? void 0 : n.onlyEmbedIndices) != null
                        ? {
                              attachment_ids: n.onlyAttachmentIds,
                              embed_indices: n.onlyEmbedIndices
                          }
                        : void 0
            };
        await r.Z.sendMessage(l.id, u, !1, {
            messageReference: c,
            eagerDispatch: !1
        }),
            (null == n ? void 0 : n.withMessage) != null && (await r.Z.sendMessage(l.id, i.ZP.parse(l, n.withMessage), !1));
    },
    sendForwards: (e, t, n) => s()(t.map((t) => u.sendForward(e, t, n)))
};
t.Z = u;
