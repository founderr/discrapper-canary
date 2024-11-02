n(47120);
var r,
    i = n(442837),
    a = n(570140),
    s = n(823379),
    o = n(592125),
    l = n(486472),
    u = n(984933),
    c = n(981631);
function d(e, t, n) {
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
let f = {},
    _ = 0;
function h() {
    _ += 1;
}
function p(e) {
    if (null == f[e]) return !1;
    delete f[e];
}
class m extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(o.Z, l.Z), this.removeChangeListener(h), this.addChangeListener(h), (f = null != e ? e : {});
    }
    getState() {
        return f;
    }
    isCollapsed(e) {
        return null != e && 'null' !== e && !!f[e] && f[e];
    }
    getCollapsedCategories() {
        return f;
    }
    get version() {
        return _;
    }
}
d(m, 'displayName', 'CategoryCollapseStore'),
    d(m, 'persistKey', 'collapsedCategories'),
    (t.Z = new m(a.Z, {
        CONNECTION_OPEN: function (e) {
            for (let t of (!e.userGuildSettings.partial && (f = {}), e.userGuildSettings.entries)) if (null != t.channel_overrides) for (let e of t.channel_overrides) e.collapsed ? (f[e.channel_id] = !0) : delete f[e.channel_id];
        },
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: t } = e,
                n = new Set(t.map((e) => e.guild_id).filter(s.lm));
            for (let e in f) {
                let t = o.Z.getChannel(e);
                null != t && null != t.guild_id && n.has(t.guild_id) && delete f[t.id];
            }
            for (let e of t) for (let t of e.channel_overrides) t.collapsed && (f[t.channel_id] = !0);
        },
        CATEGORY_COLLAPSE: function (e) {
            let { id: t } = e;
            if (f[t]) return !1;
            f[t] = !0;
        },
        CATEGORY_EXPAND: function (e) {
            let { id: t } = e;
            return p(t);
        },
        CATEGORY_COLLAPSE_ALL: function (e) {
            let { guildId: t } = e;
            u.ZP.getChannels(t)[c.d4z.GUILD_CATEGORY].forEach((e) => {
                let { channel: t } = e;
                'null' !== t.id && (f[t.id] = !0);
            });
        },
        CATEGORY_EXPAND_ALL: function (e) {
            let { guildId: t } = e;
            u.ZP.getChannels(t)[c.d4z.GUILD_CATEGORY].forEach((e) => {
                let { channel: t } = e;
                delete f[t.id];
            });
        },
        CHANNEL_DELETE: function (e) {
            let {
                channel: { id: t }
            } = e;
            return p(t);
        }
    }));
