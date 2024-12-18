var i,
    r,
    o,
    l,
    u = n(442837),
    a = n(570140),
    s = n(131704),
    c = n(592125);
let d = {},
    f = {};
class _ extends (l = u.ZP.Store) {
    getTemplates(e) {
        return d[e];
    }
    getTemplateWithCategory(e, t) {
        var n;
        return null === (n = d[e]) || void 0 === n ? void 0 : n.find((e) => e.category === t);
    }
    getChannel(e) {
        return f[e];
    }
}
(o = 'GuildRoleSubscriptionTierTemplatesStore'),
    (r = 'displayName') in (i = _)
        ? Object.defineProperty(i, r, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = o),
    (t.Z = new _(a.Z, {
        GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: function (e) {
            let { selectedTemplate: t, guildId: n } = e,
                i = Object.values(c.Z.getMutableGuildChannelsForGuild(n));
            t.listings.forEach((e) => {
                e.channels.forEach((e) => {
                    let t = i.find((t) => t.name === e.name);
                    if (void 0 !== t) e.id = t.id;
                    else if (!(e.id in f)) {
                        let t = (0, s.kt)(e);
                        f[e.id] = t;
                    }
                });
            });
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: function (e) {
            let { templates: t, guildId: n } = e;
            d[n] = t;
        }
    }));
