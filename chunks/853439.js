"use strict";
n.r(t);
var i, r, l, s, u = n("442837"),
  o = n("570140"),
  a = n("131704"),
  d = n("592125");
let c = {},
  f = {};
class S extends(s = u.default.Store) {
  getTemplates(e) {
    return c[e]
  }
  getTemplateWithCategory(e, t) {
    var n;
    return null === (n = c[e]) || void 0 === n ? void 0 : n.find(e => e.category === t)
  }
  getChannel(e) {
    return f[e]
  }
}
l = "GuildRoleSubscriptionTierTemplatesStore", (r = "displayName") in(i = S) ? Object.defineProperty(i, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = l, t.default = new S(o.default, {
  GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function(e) {
    let {
      selectedTemplate: t,
      guildId: n
    } = e, i = Object.values(d.default.getMutableGuildChannelsForGuild(n));
    t.listings.forEach(e => {
      e.channels.forEach(e => {
        let t = i.find(t => t.name === e.name);
        if (void 0 !== t) e.id = t.id;
        else if (!(e.id in f)) {
          let t = (0, a.createChannelRecord)(e);
          f[e.id] = t
        }
      })
    })
  },
  GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function(e) {
    let {
      templates: t,
      guildId: n
    } = e;
    c[n] = t
  }
})