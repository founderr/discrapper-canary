var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(823379),
    l = n(592125),
    u = n(486472),
    c = n(984933),
    d = n(981631);
function _(e, t, n) {
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
let E = {},
    f = 0;
function h() {
    f += 1;
}
function p(e) {
    if (null == E[e]) return !1;
    delete E[e];
}
function m(e) {
    let { id: t } = e;
    if (E[t]) return !1;
    E[t] = !0;
}
function I(e) {
    let { id: t } = e;
    return p(t);
}
function T(e) {
    for (let t of (!e.userGuildSettings.partial && (E = {}), e.userGuildSettings.entries)) if (null != t.channel_overrides) for (let e of t.channel_overrides) e.collapsed ? (E[e.channel_id] = !0) : delete E[e.channel_id];
}
function g(e) {
    let { userGuildSettings: t } = e,
        n = new Set(t.map((e) => e.guild_id).filter(s.lm));
    for (let e in E) {
        let t = l.Z.getChannel(e);
        null != t && null != t.guild_id && n.has(t.guild_id) && delete E[t.id];
    }
    for (let e of t) for (let t of e.channel_overrides) t.collapsed && (E[t.channel_id] = !0);
}
function S(e) {
    let {
        channel: { id: t }
    } = e;
    return p(t);
}
function A(e) {
    let { guildId: t } = e;
    c.ZP.getChannels(t)[d.d4z.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        'null' !== t.id && (E[t.id] = !0);
    });
}
function v(e) {
    let { guildId: t } = e;
    c.ZP.getChannels(t)[d.d4z.GUILD_CATEGORY].forEach((e) => {
        let { channel: t } = e;
        delete E[t.id];
    });
}
class N extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        this.waitFor(l.Z, u.Z), this.removeChangeListener(h), this.addChangeListener(h), (E = null != e ? e : {});
    }
    getState() {
        return E;
    }
    isCollapsed(e) {
        return null != e && 'null' !== e && !!E[e] && E[e];
    }
    getCollapsedCategories() {
        return E;
    }
    get version() {
        return f;
    }
}
_(N, 'displayName', 'CategoryCollapseStore'),
    _(N, 'persistKey', 'collapsedCategories'),
    (t.Z = new N(o.Z, {
        CONNECTION_OPEN: T,
        USER_GUILD_SETTINGS_FULL_UPDATE: g,
        CATEGORY_COLLAPSE: m,
        CATEGORY_EXPAND: I,
        CATEGORY_COLLAPSE_ALL: A,
        CATEGORY_EXPAND_ALL: v,
        CHANNEL_DELETE: S
    }));
