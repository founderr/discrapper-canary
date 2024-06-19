var i, s, l, a, r = n(442837),
  o = n(433517),
  c = n(570140);
let u = "hasSeenGuildTemplatePromotionTooltip",
  d = {},
  E = !0 === o.K.get(u);

function h(e) {
  let {
    guildId: t
  } = e;
  d = {
    ...d,
    [t]: !1
  }
}
class _ extends(a = r.ZP.Store) {
  shouldShowGuildTemplateDirtyTooltip(e) {
    var t;
    return null !== (t = d[e]) && void 0 !== t && t
  }
  shouldShowGuildTemplatePromotionTooltip() {
    return !E
  }
}
l = "GuildTemplateTooltipStore", (s = "displayName") in(i = _) ? Object.defineProperty(i, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[s] = l, t.Z = new _(c.Z, {
  GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function(e) {
    let {
      guildTemplate: t
    } = e;
    d = {
      ...d,
      [t.source_guild_id]: t.is_dirty || !1
    }
  },
  GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function() {
    o.K.set(u, !0), E = !0
  },
  GUILD_TEMPLATE_SYNC_SUCCESS: function(e) {
    d = {
      ...d,
      [e.guildTemplate.source_guild_id]: !1
    }
  },
  GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: h,
  GUILD_TEMPLATE_DELETE_SUCCESS: h
})