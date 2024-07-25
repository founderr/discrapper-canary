n(411104);
var l = n(991637),
  a = n.n(l),
  i = n(388123),
  s = n(904245),
  r = n(957730),
  c = n(592125);
let u = {
  async sendForward(e, t, n) {
let l = c.Z.getChannel(t),
  a = c.Z.getChannel(e.channel_id);
if (null == a)
  throw Error('Unable to find original channel for message');
if (null == l)
  throw Error('Unable to find destination channel for message');
let u = r.ZP.parse(l, ''),
  o = {
    guild_id: a.guild_id,
    channel_id: e.channel_id,
    message_id: e.id,
    type: i.U.FORWARD,
    forward_only: (null == n ? void 0 : n.onlyAttachmentIds) != null || (null == n ? void 0 : n.onlyEmbedIndices) != null ? {
      attachment_ids: n.onlyAttachmentIds,
      embed_indices: n.onlyEmbedIndices
    } : void 0
  };
return await s.Z.sendMessage(l.id, u, !1, {
  messageReference: o,
  eagerDispatch: !1
});
  },
  sendForwards: (e, t, n) => a()(t.map(t => u.sendForward(e, t, n)))
};
t.Z = u;