"use strict";
n.r(e), n.d(e, {
  StickerSendability: function() {
    return r
  },
  getStickerSendability: function() {
    return u
  },
  isSendableSticker: function() {
    return c
  }
});
var i, r, l = n("991170"),
  s = n("719923"),
  a = n("24373"),
  o = n("49111");
(i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
let u = (t, e, n) => {
    if (null == e) return 2;
    let i = s.default.canUseCustomStickersEverywhere(e);
    if ((0, a.isStandardSticker)(t)) return 0;
    if ((0, a.isGuildSticker)(t) && null != n) return t.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === t.guild_id ? 0 : null == n.guild_id || l.default.can({
      permission: o.Permissions.USE_EXTERNAL_STICKERS,
      user: e,
      context: n
    }) ? i ? 0 : 1 : 2 : 3;
    return 2
  },
  c = (t, e, n) => 0 === u(t, e, n)