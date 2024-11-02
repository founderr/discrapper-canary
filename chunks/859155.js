n(411104);
var l = n(991637),
    i = n.n(l),
    a = n(388123),
    r = n(904245),
    s = n(957730),
    o = n(592125),
    c = n(496675),
    u = n(784384);
let d = {
    async sendForward(e, t, n) {
        let l = o.Z.getChannel(t),
            i = o.Z.getChannel(e.channel_id);
        if (null == i) throw Error('Unable to find original channel for message');
        if (null == l) throw Error('Unable to find destination channel for message');
        let d = s.ZP.parse(l, ''),
            h = {
                guild_id: i.guild_id,
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
        await r.Z.sendMessage(l.id, d, !1, {
            messageReference: h,
            eagerDispatch: !1
        }),
            (null == n ? void 0 : n.withMessage) != null && !(0, u.pU)(l, c.Z) && (await r.Z.sendMessage(l.id, s.ZP.parse(l, n.withMessage), !1));
    },
    sendForwards: (e, t, n) => i()(t.map((t) => d.sendForward(e, t, n)))
};
t.Z = d;
