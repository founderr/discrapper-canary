var r,
    i = n(442837),
    a = n(570140),
    o = n(131704),
    s = n(592125);
function l(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let u = {},
    c = {};
function d(e) {
    let { templates: t, guildId: n } = e;
    u[n] = t;
}
function _(e) {
    let { selectedTemplate: t, guildId: n } = e,
        r = Object.values(s.Z.getMutableGuildChannelsForGuild(n));
    t.listings.forEach((e) => {
        e.channels.forEach((e) => {
            let t = r.find((t) => t.name === e.name);
            if (void 0 !== t) e.id = t.id;
            else if (!(e.id in c)) {
                let t = (0, o.kt)(e);
                c[e.id] = t;
            }
        });
    });
}
class E extends (r = i.ZP.Store) {
    getTemplates(e) {
        return u[e];
    }
    getTemplateWithCategory(e, t) {
        var n;
        return null === (n = u[e]) || void 0 === n ? void 0 : n.find((e) => e.category === t);
    }
    getChannel(e) {
        return c[e];
    }
}
l(E, 'displayName', 'GuildRoleSubscriptionTierTemplatesStore'),
    (t.Z = new E(a.Z, {
        GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS: _,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES: d
    }));
