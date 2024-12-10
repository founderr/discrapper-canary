n(411104);
var l = n(991637),
    i = n.n(l),
    a = n(388123),
    r = n(904245),
    s = n(761080),
    o = n(957730),
    c = n(592125),
    u = n(496675),
    d = n(784384);
let h = {
    async sendForward(e, t, n) {
        let l = c.Z.getChannel(t);
        if (null == c.Z.getChannel(e.channel_id) && (null == n ? void 0 : n.isICYMIGameContentForwarding) !== !0) throw Error('Unable to find original channel for message');
        if (null == l) throw Error('Unable to find destination channel for message');
        let i = o.ZP.parse(l, ''),
            h = {
                guild_id: (null == n ? void 0 : n.isICYMIGameContentForwarding) ? s.KF : l.guild_id,
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
        await r.Z.sendMessage(l.id, i, !1, {
            messageReference: h,
            eagerDispatch: !1
        }),
            (null == n ? void 0 : n.withMessage) != null && !(0, d.pU)(l, u.Z) && (await r.Z.sendMessage(l.id, o.ZP.parse(l, n.withMessage), !1));
    },
    sendForwards: (e, t, n) => i()(t.map((t) => h.sendForward(e, t, n)))
};
t.Z = h;
