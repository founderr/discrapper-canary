"use strict";
a.r(t);
var n, s, l, i, r = a("442837"),
  o = a("433517"),
  u = a("570140");
let d = "hasSeenGuildTemplatePromotionTooltip",
  c = {},
  f = !0 === o.Storage.get(d);

function E(e) {
  let {
    guildId: t
  } = e;
  c = {
    ...c,
    [t]: !1
  }
}
class h extends(i = r.default.Store) {
  shouldShowGuildTemplateDirtyTooltip(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t && t
  }
  shouldShowGuildTemplatePromotionTooltip() {
    return !f
  }
}
l = "GuildTemplateTooltipStore", (s = "displayName") in(n = h) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = new h(u.default, {
  GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function(e) {
    let {
      guildTemplate: t
    } = e;
    c = {
      ...c,
      [t.source_guild_id]: t.is_dirty || !1
    }
  },
  GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function() {
    o.Storage.set(d, !0), f = !0
  },
  GUILD_TEMPLATE_SYNC_SUCCESS: function(e) {
    c = {
      ...c,
      [e.guildTemplate.source_guild_id]: !1
    }
  },
  GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: E,
  GUILD_TEMPLATE_DELETE_SUCCESS: E
})