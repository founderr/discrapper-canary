n(411104);
var l = n(991637),
  a = n.n(l),
  s = n(388123),
  i = n(904245),
  r = n(957730),
  u = n(592125);
let o = {
  async sendForward(e, t, n) {
    let l = u.Z.getChannel(t),
      a = u.Z.getChannel(e.channel_id);
    if (null == a) throw Error("Unable to find original channel for message");
    if (null == l) throw Error("Unable to find destination channel for message");
    let o = r.ZP.parse(l, ""),
      c = {
        guild_id: a.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        type: s.U.FORWARD,
        forward_only: (null == n ? void 0 : n.onlyAttachmentIds) != null || (null == n ? void 0 : n.onlyEmbedIndices) != null ? {
          attachment_ids: n.onlyAttachmentIds,
          embed_indices: n.onlyEmbedIndices
        } : void 0
      };
    return await i.Z.sendMessage(l.id, o, !1, {
      messageReference: c,
      eagerDispatch: !1
    })
  },
  sendForwards: (e, t, n) => a()(t.map(t => o.sendForward(e, t, n)))
};
t.Z = o