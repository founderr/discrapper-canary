"use strict";
n.r(t), n.d(t, {
  StickerSendability: function() {
    return s
  },
  getStickerSendability: function() {
    return u
  },
  isSendableSticker: function() {
    return d
  }
});
var l, s, i = n("991170"),
  r = n("719923"),
  o = n("24373"),
  a = n("49111");
(l = s || (s = {}))[l.SENDABLE = 0] = "SENDABLE", l[l.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", l[l.NONSENDABLE = 2] = "NONSENDABLE", l[l.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
let u = (e, t, n) => {
    if (null == t) return 2;
    let l = r.default.canUseCustomStickersEverywhere(t);
    if ((0, o.isStandardSticker)(e)) return 0;
    if ((0, o.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || i.default.can({
      permission: a.Permissions.USE_EXTERNAL_STICKERS,
      user: t,
      context: n
    }) ? l ? 0 : 1 : 2 : 3;
    return 2
  },
  d = (e, t, n) => 0 === u(e, t, n)