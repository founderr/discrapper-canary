"use strict";
n.r(t), n.d(t, {
  StickerSendability: function() {
    return i
  },
  getStickerSendability: function() {
    return r
  },
  isSendableSticker: function() {
    return s
  }
});
var l, i, a = n("991170"),
  u = n("719923"),
  o = n("24373"),
  d = n("49111");
(l = i || (i = {}))[l.SENDABLE = 0] = "SENDABLE", l[l.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", l[l.NONSENDABLE = 2] = "NONSENDABLE", l[l.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
let r = (e, t, n) => {
    if (null == t) return 2;
    let l = u.default.canUseCustomStickersEverywhere(t);
    if ((0, o.isStandardSticker)(e)) return 0;
    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || a.default.can({
      permission: d.Permissions.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? l ? 0 : 1 : 2 : 3;
    return 2
  },
  s = (e, t, n) => 0 === r(e, t, n)