"use strict";
n.r(t), n.d(t, {
  StickerSendability: function() {
    return r
  },
  getStickerSendability: function() {
    return o
  },
  isSendableSticker: function() {
    return c
  }
});
var i, r, u = n("991170"),
  a = n("719923"),
  s = n("24373"),
  l = n("49111");
(i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
let o = (e, t, n) => {
    if (null == t) return 2;
    let i = a.default.canUseCustomStickersEverywhere(t);
    if ((0, s.isStandardSticker)(e)) return 0;
    if ((0, s.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || u.default.can({
      permission: l.Permissions.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? i ? 0 : 1 : 2 : 3;
    return 2
  },
  c = (e, t, n) => 0 === o(e, t, n)