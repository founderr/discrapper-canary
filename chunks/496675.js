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
    _ = n(160404),
    E = n(41776),
    f = n(427679),
    h = n(569471),
    p = n(195663),
    I = n(131704),
    m = n(601964),
    T = n(598077),
    S = n(386438),
    g = n(700785),
    A = n(592125),
    N = n(683301),
    O = n(271383),
    R = n(430824),
    v = n(594174),
    C = n(981631),
    L = n(478743);
let y = {},
    D = {},
    b = {},
    M = 0;
function P(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = y[e];
    if (null != n) return n;
    let r = v.default.getCurrentUser();
    if (null == r) return g.Hn;
    let i = R.Z.getGuild(e);
    return null == i
        ? g.Hn
        : (y[e] = g.uB({
              user: r,
              context: i,
              checkElevated: t
          }));
}
function U(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = v.default.getCurrentUser();
    if (null == r) return g.Hn;
    let i = A.Z.getChannel(e);
    if (null == i) return g.Hn;
    let a = i.getGuildId(),
        s = null != a && (E.Z.isLurking(a) || (null === (t = O.ZP.getMember(a, r.id)) || void 0 === t ? void 0 : t.isPending));
    return !i.isScheduledForDeletion() && !s && l().isEmpty(i.permissionOverwrites) && null != a
        ? P(a)
        : g.uB({
              user: r,
              context: i,
              checkElevated: n
          });
}
function w(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = D[e];
    return null != n ? n : (D[e] = U(e, t));
}
function x(e) {
    if (null != e) {
        var t;
        b[e] = (null !== (t = b[e]) && void 0 !== t ? t : 0) + 1;
    }
}
function G() {
    for (let e in ((y = {}), (D = {}), b)) b[e] += 1;
    M += 1;
}
function k() {
    G();
}
function B() {
    G();
}
function F(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    G();
}
function V() {
    return !0;
}
function H(e) {
    let { messages: t, threads: n } = e;
    return !!(n.length > 0) || t.some((e) => e.some((e) => null != e.thread));
}
function Z(e) {
    let { guildId: t } = e;
    delete y[t];
    let n = A.Z.getMutableBasicGuildChannelsForGuild(t);
    l().forEach(n, (e) => {
        delete D[e.id];
    }),
        (M += 1),
        x(t);
}
function Y(e) {
    let { instance: t } = e,
        n = A.Z.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = v.default.getCurrentUser(),
        i = g.uB({
            user: r,
            context: n
        });
    if (i === D[n.id]) return !1;
    (D[n.id] = i), (M += 1);
}
function j(e) {
    let { guildId: t } = e;
    delete y[t];
    let n = A.Z.getMutableBasicGuildChannelsForGuild(t);
    l().forEach(n, (e) => {
        delete D[e.id];
    }),
        (M += 1),
        x(t);
}
function W(e, t, n, r) {
    let i = g.Hn;
    if (e instanceof I.Sf) {
        if (I.Ec.has(e.type)) {
            let i = A.Z.getChannel(e.parent_id);
            return null == i ? g.Hn : g.Og(e, W(i, t, n, r), h.Z.hasJoined(e.id));
        }
        i = w(e.id);
    } else e instanceof m.ZP && (i = P(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? g.uB({
              user: v.default.getCurrentUser(),
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
        this.waitFor(v.default, R.Z, A.Z, O.ZP, N.ZP, h.Z, f.Z, _.Z);
    }
    getChannelPermissions(e) {
        return I.Ec.has(e.type) ? U(e.id) : w(e.id);
    }
    getGuildPermissions(e) {
        return P(e.id);
    }
    getGuildPermissionProps(e) {
        let t = v.default.getCurrentUser();
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
        return u.Db(P(e.id), L.N);
    }
    canAccessGuildSettings(e) {
        return u.Db(P(e.id), g.ym);
    }
    canWithPartialContext(e, t) {
        return 'channelId' in t && 'string' == typeof t.channelId ? this.can(e, A.Z.getChannel(t.channelId)) : 'guildId' in t && 'string' == typeof t.guildId && this.can(e, R.Z.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let a = W(t, n, r, i);
        return u.e$(a, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return 'basicPermissions' in t ? S.Z.has(t.basicPermissions, e) : u.e$(W(t, n, r, i), S.Z.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return W(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return 'basicPermissions' in e ? e.basicPermissions : S.Z.asBasicFlag(W(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof T.Z ? t.id : t;
        if (n.isOwner(r)) return !1;
        let i = v.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != i ? g.e9(n, i.id) : void 0,
            s = g.e9(n, r);
        return null != i && g.r6(n, i.id, a, s);
    }
    getHighestRole(e) {
        let t = v.default.getCurrentUser();
        return null != t ? g.e9(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = v.default.getCurrentUser(),
            i = _.Z.isViewingRoles(e.id);
        return g.r6(e, i ? void 0 : null == r ? void 0 : r.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(C.Plq.MANAGE_GUILD, e) && this.can(C.Plq.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null !== (t = b[e]) && void 0 !== t ? t : 0;
    }
    getChannelsVersion() {
        return M;
    }
}
function z() {
    (D = {}), (y = {}), (b = {}), (M = 0);
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
        BACKGROUND_SYNC: k,
        CONNECTION_OPEN: k,
        OVERLAY_INITIALIZE: k,
        CACHE_LOADED: k,
        CACHE_LOADED_LAZY: k,
        CONNECTION_CLOSED: function () {
            z();
        },
        GUILD_CREATE: B,
        GUILD_UPDATE: B,
        GUILD_DELETE: B,
        GUILD_MEMBER_ADD: F,
        GUILD_MEMBER_UPDATE: F,
        CURRENT_USER_UPDATE: F,
        CHANNEL_CREATE: function (e) {
            let {
                    channel: { id: t }
                } = e,
                n = A.Z.getChannel(t);
            if (null == n || n.isPrivate()) return !1;
            let r = v.default.getCurrentUser(),
                i = g.uB({
                    user: r,
                    context: n
                });
            if (D[n.id] === i) return !1;
            (D[n.id] = i), (M += 1), x(n.getGuildId());
        },
        THREAD_CREATE: V,
        THREAD_UPDATE: V,
        THREAD_LIST_SYNC: V,
        LOAD_THREADS_SUCCESS: V,
        LOAD_ARCHIVED_THREADS_SUCCESS: V,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let { id: e } of t) {
                let t = A.Z.getChannel(e);
                if (null == t || t.isPrivate()) continue;
                let r = v.default.getCurrentUser(),
                    i = g.uB({
                        user: r,
                        context: t
                    });
                if (D[t.id] !== i) (D[t.id] = i), x(t.getGuildId()), (n = !0);
            }
            return !!n && ((M += 1), n);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { messages: t } = e;
            return t.some((e) => null != e.thread);
        },
        SEARCH_FINISH: H,
        MOD_VIEW_SEARCH_FINISH: H,
        THREAD_MEMBER_UPDATE: function (e) {
            var t;
            return (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (x(e.guildId), !0);
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            return !!(0, p.s)(e) && (x(e.guildId), !0);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return delete D[t.id], (M += 1), x(t.guild_id), !1;
        },
        GUILD_ROLE_CREATE: Z,
        GUILD_ROLE_UPDATE: Z,
        GUILD_ROLE_DELETE: Z,
        LOGOUT: z,
        STAGE_INSTANCE_CREATE: Y,
        STAGE_INSTANCE_UPDATE: Y,
        STAGE_INSTANCE_DELETE: Y,
        IMPERSONATE_UPDATE: j,
        IMPERSONATE_STOP: j
    }));
