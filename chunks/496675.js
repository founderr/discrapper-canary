n(47120);
var r,
    i,
    a,
    s,
    o = n(392711),
    l = n.n(o),
    u = n(149765),
    c = n(442837),
    d = n(570140),
    f = n(160404),
    _ = n(41776),
    p = n(427679),
    h = n(569471),
    m = n(195663),
    g = n(131704),
    E = n(601964),
    v = n(598077),
    I = n(386438),
    b = n(700785),
    S = n(592125),
    T = n(683301),
    y = n(271383),
    A = n(430824),
    N = n(594174),
    C = n(981631),
    R = n(478743);
let O = {},
    D = {},
    L = {},
    x = 0;
function w(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = O[e];
    if (null != n) return n;
    let r = N.default.getCurrentUser();
    if (null == r) return b.Hn;
    let i = A.Z.getGuild(e);
    return null == i
        ? b.Hn
        : (O[e] = b.uB({
              user: r,
              context: i,
              checkElevated: t
          }));
}
function M(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = N.default.getCurrentUser();
    if (null == r) return b.Hn;
    let i = S.Z.getChannel(e);
    if (null == i) return b.Hn;
    let a = i.getGuildId(),
        s = null != a && (_.Z.isLurking(a) || (null === (t = y.ZP.getMember(a, r.id)) || void 0 === t ? void 0 : t.isPending));
    return !i.isScheduledForDeletion() && !s && l().isEmpty(i.permissionOverwrites) && null != a
        ? w(a)
        : b.uB({
              user: r,
              context: i,
              checkElevated: n
          });
}
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = D[e];
    return null != n ? n : (D[e] = M(e, t));
}
function k(e) {
    if (null != e) {
        var t;
        L[e] = (null !== (t = L[e]) && void 0 !== t ? t : 0) + 1;
    }
}
function U() {
    for (let e in ((O = {}), (D = {}), L)) L[e] += 1;
    x += 1;
}
function B() {
    U();
}
function G() {
    U();
}
function Z(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    U();
}
function F() {
    return !0;
}
function V(e) {
    let { messages: t, threads: n } = e;
    return !!(n.length > 0) || t.some((e) => e.some((e) => null != e.thread));
}
function j(e) {
    let { guildId: t } = e;
    delete O[t];
    let n = S.Z.getMutableBasicGuildChannelsForGuild(t);
    l().forEach(n, (e) => {
        delete D[e.id];
    }),
        (x += 1),
        k(t);
}
function H(e) {
    let { instance: t } = e,
        n = S.Z.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = N.default.getCurrentUser(),
        i = b.uB({
            user: r,
            context: n
        });
    if (i === D[n.id]) return !1;
    (D[n.id] = i), (x += 1);
}
function Y(e) {
    let { guildId: t } = e;
    delete O[t];
    let n = S.Z.getMutableBasicGuildChannelsForGuild(t);
    l().forEach(n, (e) => {
        delete D[e.id];
    }),
        (x += 1),
        k(t);
}
function W(e, t, n, r) {
    let i = b.Hn;
    if (e instanceof g.Sf) {
        if (g.Ec.has(e.type)) {
            let i = S.Z.getChannel(e.parent_id);
            return null == i ? b.Hn : b.Og(e, W(i, t, n, r), h.Z.hasJoined(e.id));
        }
        i = P(e.id);
    } else e instanceof E.ZP && (i = w(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? b.uB({
              user: N.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: r
          })
        : i;
}
class K extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(N.default, A.Z, S.Z, y.ZP, T.ZP, h.Z, p.Z, f.Z);
    }
    getChannelPermissions(e) {
        return g.Ec.has(e.type) ? M(e.id) : P(e.id);
    }
    getGuildPermissions(e) {
        return w(e.id);
    }
    getGuildPermissionProps(e) {
        let t = N.default.getCurrentUser();
        return {
            canManageGuild: this.can(C.Plq.MANAGE_GUILD, e),
            canManageChannels: this.can(C.Plq.MANAGE_CHANNELS, e),
            canManageRoles: this.can(C.Plq.MANAGE_ROLES, e),
            canManageBans: this.can(C.Plq.BAN_MEMBERS, e),
            canManageNicknames: this.can(C.Plq.MANAGE_NICKNAMES, e),
            canManageGuildExpressions: this.can(C.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(C.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(C.Plq.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(C.Plq.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(C.Plq.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(C.Plq.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(C.Plq.ADMINISTRATOR, e),
            isOwner: null != t && e.isOwner(t),
            isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
            guild: e
        };
    }
    canAccessMemberSafetyPage(e) {
        return u.Db(w(e.id), R.N);
    }
    canAccessGuildSettings(e) {
        return u.Db(w(e.id), b.ym);
    }
    canWithPartialContext(e, t) {
        return 'channelId' in t && 'string' == typeof t.channelId ? this.can(e, S.Z.getChannel(t.channelId)) : 'guildId' in t && 'string' == typeof t.guildId && this.can(e, A.Z.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let a = W(t, n, r, i);
        return u.e$(a, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return 'basicPermissions' in t ? I.Z.has(t.basicPermissions, e) : u.e$(W(t, n, r, i), I.Z.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return W(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return 'basicPermissions' in e ? e.basicPermissions : I.Z.asBasicFlag(W(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof v.Z ? t.id : t;
        if (n.isOwner(r)) return !1;
        let i = N.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != i ? b.e9(n, i.id) : void 0,
            s = b.e9(n, r);
        return null != i && b.r6(n, i.id, a, s);
    }
    getHighestRole(e) {
        let t = N.default.getCurrentUser();
        return null != t ? b.e9(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = N.default.getCurrentUser(),
            i = f.Z.isViewingRoles(e.id);
        return b.r6(e, i ? void 0 : null == r ? void 0 : r.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(C.Plq.MANAGE_GUILD, e) && this.can(C.Plq.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null !== (t = L[e]) && void 0 !== t ? t : 0;
    }
    getChannelsVersion() {
        return x;
    }
}
function z() {
    (D = {}), (O = {}), (L = {}), (x = 0);
}
(s = 'PermissionStore'),
    (a = 'displayName') in (i = K)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new K(d.Z, {
        BACKGROUND_SYNC: B,
        CONNECTION_OPEN: B,
        OVERLAY_INITIALIZE: B,
        CACHE_LOADED: B,
        CACHE_LOADED_LAZY: B,
        CONNECTION_CLOSED: function () {
            z();
        },
        GUILD_CREATE: G,
        GUILD_UPDATE: G,
        GUILD_DELETE: G,
        GUILD_MEMBER_ADD: Z,
        GUILD_MEMBER_UPDATE: Z,
        CURRENT_USER_UPDATE: Z,
        CHANNEL_CREATE: function (e) {
            let {
                    channel: { id: t }
                } = e,
                n = S.Z.getChannel(t);
            if (null == n || n.isPrivate()) return !1;
            let r = N.default.getCurrentUser(),
                i = b.uB({
                    user: r,
                    context: n
                });
            if (D[n.id] === i) return !1;
            (D[n.id] = i), (x += 1), k(n.getGuildId());
        },
        THREAD_CREATE: F,
        THREAD_UPDATE: F,
        THREAD_LIST_SYNC: F,
        LOAD_THREADS_SUCCESS: F,
        LOAD_ARCHIVED_THREADS_SUCCESS: F,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let { id: e } of t) {
                let t = S.Z.getChannel(e);
                if (null == t || t.isPrivate()) continue;
                let r = N.default.getCurrentUser(),
                    i = b.uB({
                        user: r,
                        context: t
                    });
                if (D[t.id] !== i) (D[t.id] = i), k(t.getGuildId()), (n = !0);
            }
            return !!n && ((x += 1), n);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { messages: t } = e;
            return t.some((e) => null != e.thread);
        },
        SEARCH_FINISH: V,
        MOD_VIEW_SEARCH_FINISH: V,
        THREAD_MEMBER_UPDATE: function (e) {
            var t;
            return (null === (t = N.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (k(e.guildId), !0);
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            return !!(0, m.s)(e) && (k(e.guildId), !0);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return delete D[t.id], (x += 1), k(t.guild_id), !1;
        },
        GUILD_ROLE_CREATE: j,
        GUILD_ROLE_UPDATE: j,
        GUILD_ROLE_DELETE: j,
        LOGOUT: z,
        STAGE_INSTANCE_CREATE: H,
        STAGE_INSTANCE_UPDATE: H,
        STAGE_INSTANCE_DELETE: H,
        IMPERSONATE_UPDATE: Y,
        IMPERSONATE_STOP: Y
    }));
