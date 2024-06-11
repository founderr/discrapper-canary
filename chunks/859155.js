"use strict";
l.r(t), l("411104");
var s = l("991637"),
  a = l.n(s),
  n = l("388123"),
  i = l("904245"),
  u = l("957730"),
  r = l("592125");
let o = {
  async sendForward(e, t, l) {
    let s = r.default.getChannel(t),
      a = r.default.getChannel(e.channel_id);
    if (null == a) throw Error("Unable to find original channel for message");
    if (null == s) throw Error("Unable to find destination channel for message");
    let o = u.default.parse(s, ""),
      d = {
        guild_id: a.guild_id,
        channel_id: e.channel_id,
        message_id: e.id,
        type: n.MessageReferenceTypes.FORWARD,
        forward_only: (null == l ? void 0 : l.onlyAttachmentIds) != null || (null == l ? void 0 : l.onlyEmbedIndices) != null ? {
          attachment_ids: l.onlyAttachmentIds,
          embed_indices: l.onlyEmbedIndices
        } : void 0
      };
    return await i.default.sendMessage(s.id, o, !1, {
      messageReference: d,
      eagerDispatch: !1
    })
  },
  sendForwards: (e, t, l) => a()(t.map(t => o.sendForward(e, t, l)))
};
t.default = o