n(47120);
var r,
    i,
    a,
    s,
    o = n(149765),
    l = n(442837),
    u = n(570140),
    c = n(223892),
    d = n(738774),
    f = n(644542),
    _ = n(923726),
    h = n(973542),
    p = n(790285),
    m = n(160404),
    g = n(131704),
    E = n(592125),
    v = n(271383),
    I = n(430824),
    S = n(594174),
    b = n(981631);
let T = {},
    y = new Set();
function A(e) {
    let { guildId: t, role: n, isPreviewingRoles: r } = e;
    return (
        !!(0, h.Z)(n) &&
        (!!(
            r ||
            (0, h.h)(null != n ? n : void 0) ||
            (function (e, t) {
                if (null == e) return !1;
                let n = S.default.getCurrentUser();
                if (null == n) return !1;
                let r = v.ZP.getMember(t, n.id);
                return null != r && r.roles.includes(e.id);
            })(n, t)
        ) ||
            !1)
    );
}
function N(e, t) {
    if (!t.hasFeature(b.oNc.CREATOR_MONETIZABLE) && !t.hasFeature(b.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) return !1;
    let n = m.Z.isViewingServerShop(t.id);
    for (let r of Object.keys(e.permissionOverwrites)) {
        let i = I.Z.getRole(t.id, r);
        if (
            !A({
                guildId: t.id,
                role: i,
                isPreviewingRoles: n
            })
        )
            continue;
        let a = e.permissionOverwrites[r];
        if ((0, p.TG)(e, a)) return !0;
    }
    let r = I.Z.getRole(t.id, t.getEveryoneRoleId()),
        i = null != r && !o.e$(r.permissions, b.Plq.VIEW_CHANNEL),
        a = (0, p.wB)(e, e.permissionOverwrites[t.id]);
    if (i && !a) {
        for (let e of Object.values(I.Z.getRoles(t.id)))
            if (
                A({
                    guildId: t.id,
                    role: e,
                    isPreviewingRoles: n
                }) &&
                (0, p.MT)(e)
            )
                return !0;
    }
    return !1;
}
function C(e, t) {
    let n = T[e];
    if (null == n) return !1;
    let r = E.Z.getChannel(t);
    if (null == r) return !1;
    let i = I.Z.getGuild(r.getGuildId());
    if (null == i) return !1;
    let a = n.has(t),
        s = N(r, i);
    return a !== s && (s ? n.add(t) : n.delete(t), !0);
}
function R() {
    (T = {}), y.clear();
}
function O(e) {
    let { guild: t } = e;
    delete T[t.id];
}
function D(e) {
    let { guildId: t } = e;
    delete T[t];
}
function L(e) {
    let { channel: t } = e;
    return null != t.guild_id && C(t.guild_id, t.id);
}
class x extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, E.Z, m.Z), f.Zo.subscribe({ location: '1' }, () => R());
    }
    isChannelGated(e, t) {
        if (null == e) return !1;
        let n = T[e];
        return (
            null == n &&
                (!(function (e) {
                    let t = I.Z.getGuild(e);
                    if (null == t) return;
                    let n = (T[e] = new Set());
                    if (!t.hasFeature(b.oNc.ROLE_SUBSCRIPTIONS_ENABLED) || (!(0, _.kT)(e) && !(0, c.Rw)(t))) return;
                    let r = E.Z.getMutableGuildChannelsForGuild(e);
                    for (let e in r) {
                        let i = r[e];
                        N(i, t) && n.add(i.id);
                    }
                })(e),
                (n = T[e])),
            null != n && n.has(t)
        );
    }
    isChannelGatedAndVisible(e, t) {
        return null != e && this.isChannelGated(e, t) && !y.has(e);
    }
    isChannelOrThreadParentGated(e, t) {
        if (null == e) return !1;
        if (this.isChannelGated(e, t)) return !0;
        let n = E.Z.getChannel(t);
        return !!(null != n && null != n.parent_id && g.Ec.has(null == n ? void 0 : n.type)) && this.isChannelOrThreadParentGated(e, n.parent_id);
    }
}
(s = 'GatedChannelStore'),
    (a = 'displayName') in (i = x)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new x(u.Z, {
        CONNECTION_OPEN: R,
        OVERLAY_INITIALIZE: R,
        CACHE_LOADED_LAZY: R,
        GUILD_CREATE: O,
        GUILD_UPDATE: O,
        GUILD_DELETE: O,
        GUILD_ROLE_CREATE: D,
        GUILD_ROLE_UPDATE: D,
        GUILD_ROLE_DELETE: D,
        IMPERSONATE_UPDATE: D,
        IMPERSONATE_STOP: D,
        CHANNEL_CREATE: L,
        CHANNEL_DELETE: L,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let e of t) {
                if (null != e.guild_id) C(e.guild_id, e.id) && (n = !0);
            }
            return n;
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: function (e) {
            let { guildId: t, restrictions: n } = e;
            (0, d.uq)(n) ? y.add(t) : y.delete(t);
        },
        GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: function (e) {
            let { guildId: t } = e;
            y.add(t);
        }
    }));
