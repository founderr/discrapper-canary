var r,
    i = n(47120);
var a = n(392711),
    o = n.n(a),
    s = n(149765),
    l = n(442837),
    u = n(570140),
    c = n(160404),
    d = n(41776),
    _ = n(427679),
    E = n(569471),
    f = n(195663),
    h = n(131704),
    p = n(601964),
    m = n(598077),
    I = n(386438),
    T = n(700785),
    g = n(592125),
    S = n(683301),
    A = n(271383),
    v = n(430824),
    N = n(594174),
    O = n(981631),
    R = n(478743);
function C(e, t, n) {
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
let y = {},
    L = {},
    b = {},
    D = 0;
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = y[e];
    if (null != n) return n;
    let r = N.default.getCurrentUser();
    if (null == r) return T.Hn;
    let i = v.Z.getGuild(e);
    return null == i
        ? T.Hn
        : (y[e] = T.uB({
              user: r,
              context: i,
              checkElevated: t
          }));
}
function P(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = N.default.getCurrentUser();
    if (null == r) return T.Hn;
    let i = g.Z.getChannel(e);
    if (null == i) return T.Hn;
    let a = i.getGuildId(),
        s = null != a && (d.Z.isLurking(a) || (null === (t = A.ZP.getMember(a, r.id)) || void 0 === t ? void 0 : t.isPending));
    return !i.isScheduledForDeletion() && !s && o().isEmpty(i.permissionOverwrites) && null != a
        ? M(a)
        : T.uB({
              user: r,
              context: i,
              checkElevated: n
          });
}
function U(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = L[e];
    return null != n ? n : (L[e] = P(e, t));
}
function w(e) {
    if (null != e) {
        var t;
        b[e] = (null !== (t = b[e]) && void 0 !== t ? t : 0) + 1;
    }
}
function x() {
    for (let e in ((y = {}), (L = {}), b)) b[e] += 1;
    D += 1;
}
function G() {
    x();
}
function k() {
    ee();
}
function B() {
    x();
}
function F(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    x();
}
function Z(e) {
    let {
            channel: { id: t }
        } = e,
        n = g.Z.getChannel(t);
    if (null == n || n.isPrivate()) return !1;
    let r = N.default.getCurrentUser(),
        i = T.uB({
            user: r,
            context: n
        });
    if (L[n.id] === i) return !1;
    (L[n.id] = i), (D += 1), w(n.getGuildId());
}
function V(e) {
    let { channels: t } = e,
        n = !1;
    for (let { id: e } of t) {
        let t = g.Z.getChannel(e);
        if (null == t || t.isPrivate()) continue;
        let r = N.default.getCurrentUser(),
            i = T.uB({
                user: r,
                context: t
            });
        if (L[t.id] !== i) (L[t.id] = i), w(t.getGuildId()), (n = !0);
    }
    return !!n && ((D += 1), n);
}
function H() {
    return !0;
}
function Y(e) {
    var t;
    return (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (w(e.guildId), !0);
}
function j(e) {
    return !!(0, f.s)(e) && (w(e.guildId), !0);
}
function W(e) {
    let { messages: t } = e;
    return t.some((e) => null != e.thread);
}
function K(e) {
    let { messages: t, threads: n } = e;
    return !!(n.length > 0) || t.some((e) => e.some((e) => null != e.thread));
}
function z(e) {
    let { channel: t } = e;
    return delete L[t.id], (D += 1), w(t.guild_id), !1;
}
function q(e) {
    let { guildId: t } = e;
    delete y[t];
    let n = g.Z.getMutableBasicGuildChannelsForGuild(t);
    o().forEach(n, (e) => {
        delete L[e.id];
    }),
        (D += 1),
        w(t);
}
function Q(e) {
    let { instance: t } = e,
        n = g.Z.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = N.default.getCurrentUser(),
        i = T.uB({
            user: r,
            context: n
        });
    if (i === L[n.id]) return !1;
    (L[n.id] = i), (D += 1);
}
function X(e) {
    let { guildId: t } = e;
    delete y[t];
    let n = g.Z.getMutableBasicGuildChannelsForGuild(t);
    o().forEach(n, (e) => {
        delete L[e.id];
    }),
        (D += 1),
        w(t);
}
function $(e, t, n, r) {
    let i = T.Hn;
    if (e instanceof h.Sf) {
        if (h.Ec.has(e.type)) {
            let i = g.Z.getChannel(e.parent_id);
            return null == i ? T.Hn : T.Og(e, $(i, t, n, r), E.Z.hasJoined(e.id));
        }
        i = U(e.id);
    } else e instanceof p.ZP && (i = M(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? T.uB({
              user: N.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: r
          })
        : i;
}
class J extends (r = l.ZP.Store) {
    initialize() {
        this.waitFor(N.default, v.Z, g.Z, A.ZP, S.ZP, E.Z, _.Z, c.Z);
    }
    getChannelPermissions(e) {
        return h.Ec.has(e.type) ? P(e.id) : U(e.id);
    }
    getGuildPermissions(e) {
        return M(e.id);
    }
    getGuildPermissionProps(e) {
        let t = N.default.getCurrentUser();
        return {
            canManageGuild: this.can(O.Plq.MANAGE_GUILD, e),
            canManageChannels: this.can(O.Plq.MANAGE_CHANNELS, e),
            canManageRoles: this.can(O.Plq.MANAGE_ROLES, e),
            canManageBans: this.can(O.Plq.BAN_MEMBERS, e),
            canManageNicknames: this.can(O.Plq.MANAGE_NICKNAMES, e),
            canManageGuildExpressions: this.can(O.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(O.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(O.Plq.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(O.Plq.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(O.Plq.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(O.Plq.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(O.Plq.ADMINISTRATOR, e),
            isOwner: null != t && e.isOwner(t),
            isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
            guild: e
        };
    }
    canAccessMemberSafetyPage(e) {
        return s.Db(M(e.id), R.N);
    }
    canAccessGuildSettings(e) {
        return s.Db(M(e.id), T.ym);
    }
    canWithPartialContext(e, t) {
        return 'channelId' in t && 'string' == typeof t.channelId ? this.can(e, g.Z.getChannel(t.channelId)) : 'guildId' in t && 'string' == typeof t.guildId && this.can(e, v.Z.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let a = $(t, n, r, i);
        return s.e$(a, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return 'basicPermissions' in t ? I.Z.has(t.basicPermissions, e) : s.e$($(t, n, r, i), I.Z.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return $(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return 'basicPermissions' in e ? e.basicPermissions : I.Z.asBasicFlag($(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof m.Z ? t.id : t;
        if (n.isOwner(r)) return !1;
        let i = N.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != i ? T.e9(n, i.id) : void 0,
            o = T.e9(n, r);
        return null != i && T.r6(n, i.id, a, o);
    }
    getHighestRole(e) {
        let t = N.default.getCurrentUser();
        return null != t ? T.e9(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = N.default.getCurrentUser(),
            i = c.Z.isViewingRoles(e.id);
        return T.r6(e, i ? void 0 : null == r ? void 0 : r.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(O.Plq.MANAGE_GUILD, e) && this.can(O.Plq.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null !== (t = b[e]) && void 0 !== t ? t : 0;
    }
    getChannelsVersion() {
        return D;
    }
}
function ee() {
    (L = {}), (y = {}), (b = {}), (D = 0);
}
C(J, 'displayName', 'PermissionStore'),
    (t.Z = new J(u.Z, {
        BACKGROUND_SYNC: G,
        CONNECTION_OPEN: G,
        OVERLAY_INITIALIZE: G,
        CACHE_LOADED: G,
        CACHE_LOADED_LAZY: G,
        CONNECTION_CLOSED: k,
        GUILD_CREATE: B,
        GUILD_UPDATE: B,
        GUILD_DELETE: B,
        GUILD_MEMBER_ADD: F,
        GUILD_MEMBER_UPDATE: F,
        CURRENT_USER_UPDATE: F,
        CHANNEL_CREATE: Z,
        THREAD_CREATE: H,
        THREAD_UPDATE: H,
        THREAD_LIST_SYNC: H,
        LOAD_THREADS_SUCCESS: H,
        LOAD_ARCHIVED_THREADS_SUCCESS: H,
        CHANNEL_UPDATES: V,
        LOAD_MESSAGES_SUCCESS: W,
        SEARCH_FINISH: K,
        MOD_VIEW_SEARCH_FINISH: K,
        THREAD_MEMBER_UPDATE: Y,
        THREAD_MEMBERS_UPDATE: j,
        CHANNEL_DELETE: z,
        GUILD_ROLE_CREATE: q,
        GUILD_ROLE_UPDATE: q,
        GUILD_ROLE_DELETE: q,
        LOGOUT: ee,
        STAGE_INSTANCE_CREATE: Q,
        STAGE_INSTANCE_UPDATE: Q,
        STAGE_INSTANCE_DELETE: Q,
        IMPERSONATE_UPDATE: X,
        IMPERSONATE_STOP: X
    }));
