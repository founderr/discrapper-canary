var r,
    i = n(47120);
var a = n(149765),
    o = n(442837),
    s = n(570140),
    l = n(223892),
    u = n(738774),
    c = n(644542),
    d = n(923726),
    _ = n(973542),
    E = n(790285),
    f = n(160404),
    h = n(131704),
    p = n(592125),
    m = n(271383),
    I = n(430824),
    T = n(594174),
    g = n(981631);
function S(e, t, n) {
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
let A = {},
    v = new Set();
function N(e, t) {
    if (null == e) return !1;
    let n = T.default.getCurrentUser();
    if (null == n) return !1;
    let r = m.ZP.getMember(t, n.id);
    return null != r && r.roles.includes(e.id);
}
function O(e) {
    let { guildId: t, role: n, isPreviewingRoles: r } = e;
    return !!(0, _.Z)(n) && (!!(r || (0, _.h)(null != n ? n : void 0) || N(n, t)) || !1);
}
function R(e, t) {
    if (!t.hasFeature(g.oNc.CREATOR_MONETIZABLE) && !t.hasFeature(g.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
    let n = f.Z.isViewingServerShop(t.id);
    for (let r of Object.keys(e.permissionOverwrites)) {
        let i = I.Z.getRole(t.id, r);
        if (
            !O({
                guildId: t.id,
                role: i,
                isPreviewingRoles: n
            })
        )
            continue;
        let a = e.permissionOverwrites[r];
        if ((0, E.TG)(e, a)) return !0;
    }
    let r = I.Z.getRole(t.id, t.getEveryoneRoleId()),
        i = null != r && !a.e$(r.permissions, g.Plq.VIEW_CHANNEL),
        o = (0, E.wB)(e, e.permissionOverwrites[t.id]);
    if (i && !o) {
        for (let e of Object.values(I.Z.getRoles(t.id)))
            if (
                O({
                    guildId: t.id,
                    role: e,
                    isPreviewingRoles: n
                }) &&
                (0, E.MT)(e)
            )
                return !0;
    }
    return !1;
}
function C(e) {
    let t = I.Z.getGuild(e);
    if (null == t) return;
    let n = (A[e] = new Set());
    if (!t.hasFeature(g.oNc.ROLE_SUBSCRIPTIONS_ENABLED) || (!(0, d.kT)(e) && !(0, l.Rw)(t))) return;
    let r = p.Z.getMutableGuildChannelsForGuild(e);
    for (let e in r) {
        let i = r[e];
        R(i, t) && n.add(i.id);
    }
}
function y(e, t) {
    let n = A[e];
    if (null == n) return !1;
    let r = p.Z.getChannel(t);
    if (null == r) return !1;
    let i = I.Z.getGuild(r.getGuildId());
    if (null == i) return !1;
    let a = n.has(t),
        o = R(r, i);
    return a !== o && (o ? n.add(t) : n.delete(t), !0);
}
function b() {
    (A = {}), v.clear();
}
function L(e) {
    let { guild: t } = e;
    delete A[t.id];
}
function D(e) {
    let { guildId: t } = e;
    delete A[t];
}
function M(e) {
    let { channel: t } = e;
    return null != t.guild_id && y(t.guild_id, t.id);
}
function P(e) {
    let { channels: t } = e,
        n = !1;
    for (let e of t) {
        if (null != e.guild_id) y(e.guild_id, e.id) && (n = !0);
    }
    return n;
}
function U(e) {
    let { guildId: t, restrictions: n } = e;
    (0, u.uq)(n) ? v.add(t) : v.delete(t);
}
function w(e) {
    let { guildId: t } = e;
    v.add(t);
}
class x extends (r = o.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, p.Z, f.Z), c.Zo.subscribe({ location: '1' }, () => b());
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = A[e];
        return null == n && (C(e), (n = A[e])), null != n && n.has(t);
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !v.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = p.Z.getChannel(t);
        return !!(null != n && null != n.parent_id && h.Ec.has(null == n ? void 0 : n.type)) && this.isChannelOrThreadParentGated(e, n.parent_id);
    }
}
S(x, 'displayName', 'GatedChannelStore'),
    (t.Z = new x(s.Z, {
        CONNECTION_OPEN: b,
        OVERLAY_INITIALIZE: b,
        CACHE_LOADED_LAZY: b,
        GUILD_CREATE: L,
        GUILD_UPDATE: L,
        GUILD_DELETE: L,
        GUILD_ROLE_CREATE: D,
        GUILD_ROLE_UPDATE: D,
        GUILD_ROLE_DELETE: D,
        IMPERSONATE_UPDATE: D,
        IMPERSONATE_STOP: D,
        CHANNEL_CREATE: M,
        CHANNEL_DELETE: M,
        CHANNEL_UPDATES: P,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: U,
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: w
    }));
