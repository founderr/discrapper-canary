"use strict";
n.r(t), n.d(t, {
  StickerSendability: function() {
    return r
  },
  getStickerSendability: function() {
    return o
  },
  isSendableSticker: function() {
    return d
  }
});
var i, r, l = n("991170"),
  u = n("719923"),
  a = n("24373"),
  s = n("49111");
(i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
let o = (e, t, n) => {
    if (null == t) return 2;
    let i = u.default.canUseCustomStickersEverywhere(t);
    if ((0, a.isStandardSticker)(e)) return 0;
    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || l.default.can({
      permission: s.Permissions.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? i ? 0 : 1 : 2 : 3;
    return 2
  },
  d = (e, t, n) => 0 === o(e, t, n)