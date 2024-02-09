"use strict";
n.r(t), n.d(t, {
  StickerSendability: function() {
    return i
  },
  getStickerSendability: function() {
    return o
  },
  isSendableSticker: function() {
    return s
  }
});
var u, i, a = n("991170"),
  l = n("719923"),
  r = n("24373"),
  d = n("49111");
(u = i || (i = {}))[u.SENDABLE = 0] = "SENDABLE", u[u.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", u[u.NONSENDABLE = 2] = "NONSENDABLE", u[u.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
let o = (e, t, n) => {
    if (null == t) return 2;
    let u = l.default.canUseCustomStickersEverywhere(t);
    if ((0, r.isStandardSticker)(e)) return 0;
    if ((0, r.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || a.default.can({
      permission: d.Permissions.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? u ? 0 : 1 : 2 : 3;
    return 2
  },
  s = (e, t, n) => 0 === o(e, t, n)