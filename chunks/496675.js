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
    b = n(386438),
    I = n(700785),
    S = n(592125),
    T = n(271383),
    y = n(430824),
    A = n(594174),
    N = n(981631),
    C = n(478743);
let R = {},
    O = {},
    D = {},
    L = 0;
function x(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = R[e];
    if (null != n) return n;
    let r = A.default.getCurrentUser();
    if (null == r) return I.Hn;
    let i = y.Z.getGuild(e);
    return null == i
        ? I.Hn
        : (R[e] = I.uB({
              user: r,
              context: i,
              checkElevated: t
          }));
}
function w(e) {
    var t;
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = A.default.getCurrentUser();
    if (null == r) return I.Hn;
    let i = S.Z.getChannel(e);
    if (null == i) return I.Hn;
    let a = i.getGuildId(),
        s = null != a && (_.Z.isLurking(a) || (null === (t = T.ZP.getMember(a, r.id)) || void 0 === t ? void 0 : t.isPending));
    return !i.isScheduledForDeletion() && !s && l().isEmpty(i.permissionOverwrites) && null != a
        ? x(a)
        : I.uB({
              user: r,
              context: i,
              checkElevated: n
          });
}
function M(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = O[e];
    return null != n ? n : (O[e] = w(e, t));
}
function P(e) {
    if (null != e) {
        var t;
        D[e] = (null !== (t = D[e]) && void 0 !== t ? t : 0) + 1;
    }
}
function k() {
    for (let e in ((R = {}), (O = {}), D)) D[e] += 1;
    L += 1;
}
function U() {
    k();
}
function G() {
    k();
}
function B(e) {
    var t;
    let { user: n } = e;
    if (n.id !== (null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
    k();
}
function Z() {
    return !0;
}
function F(e) {
    let { messages: t, threads: n } = e;
    return !!(n.length > 0) || t.some((e) => e.some((e) => null != e.thread));
}
function V(e) {
    let { guildId: t } = e;
    delete R[t];
    let n = S.Z.getMutableBasicGuildChannelsForGuild(t);
    l().forEach(n, (e) => {
        delete O[e.id];
    }),
        (L += 1),
        P(t);
}
function j(e) {
    let { instance: t } = e,
        n = S.Z.getChannel(t.channel_id);
    if (null == n) return !1;
    let r = A.default.getCurrentUser(),
        i = I.uB({
            user: r,
            context: n
        });
    if (i === O[n.id]) return !1;
    (O[n.id] = i), (L += 1);
}
function H(e) {
    let { guildId: t } = e;
    delete R[t];
    let n = S.Z.getMutableBasicGuildChannelsForGuild(t);
    l().forEach(n, (e) => {
        delete O[e.id];
    }),
        (L += 1),
        P(t);
}
function Y(e, t, n, r) {
    let i = I.Hn;
    if (e instanceof g.Sf) {
        if (g.Ec.has(e.type)) {
            let i = S.Z.getChannel(e.parent_id);
            return null == i ? I.Hn : I.Og(e, Y(i, t, n, r), h.Z.hasJoined(e.id));
        }
        i = M(e.id);
    } else e instanceof E.ZP && (i = x(e.id));
    return void 0 !== t || void 0 !== n || void 0 !== r
        ? I.uB({
              user: A.default.getCurrentUser(),
              context: e,
              overwrites: t,
              roles: n,
              checkElevated: !0,
              excludeGuildPermissions: r
          })
        : i;
}
class W extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(A.default, y.Z, S.Z, T.ZP, h.Z, p.Z, f.Z);
    }
    getChannelPermissions(e) {
        return g.Ec.has(e.type) ? w(e.id) : M(e.id);
    }
    getGuildPermissions(e) {
        return x(e.id);
    }
    getGuildPermissionProps(e) {
        let t = A.default.getCurrentUser();
        return {
            canManageGuild: this.can(N.Plq.MANAGE_GUILD, e),
            canManageChannels: this.can(N.Plq.MANAGE_CHANNELS, e),
            canManageRoles: this.can(N.Plq.MANAGE_ROLES, e),
            canManageBans: this.can(N.Plq.BAN_MEMBERS, e),
            canManageNicknames: this.can(N.Plq.MANAGE_NICKNAMES, e),
            canManageGuildExpressions: this.can(N.Plq.MANAGE_GUILD_EXPRESSIONS, e) || this.can(N.Plq.CREATE_GUILD_EXPRESSIONS, e),
            canViewAuditLog: this.can(N.Plq.VIEW_AUDIT_LOG, e),
            canViewAuditLogV2: this.can(N.Plq.VIEW_AUDIT_LOG, e),
            canManageWebhooks: this.can(N.Plq.MANAGE_WEBHOOKS, e),
            canViewGuildAnalytics: this.can(N.Plq.VIEW_GUILD_ANALYTICS, e),
            canAccessMembersPage: this.canAccessMemberSafetyPage(e),
            isGuildAdmin: this.can(N.Plq.ADMINISTRATOR, e),
            isOwner: null != t && e.isOwner(t),
            isOwnerWithRequiredMfaLevel: null != t && e.isOwnerWithRequiredMfaLevel(t),
            guild: e
        };
    }
    canAccessMemberSafetyPage(e) {
        return u.Db(x(e.id), C.N);
    }
    canAccessGuildSettings(e) {
        return u.Db(x(e.id), I.ym);
    }
    canWithPartialContext(e, t) {
        return 'channelId' in t && 'string' == typeof t.channelId ? this.can(e, S.Z.getChannel(t.channelId)) : 'guildId' in t && 'string' == typeof t.guildId && this.can(e, y.Z.getGuild(t.guildId));
    }
    can(e, t, n, r, i) {
        let a = Y(t, n, r, i);
        return u.e$(a, e);
    }
    canBasicChannel(e, t, n, r, i) {
        return 'basicPermissions' in t ? b.Z.has(t.basicPermissions, e) : u.e$(Y(t, n, r, i), b.Z.asBigFlag(e));
    }
    computePermissions(e, t, n, r) {
        return Y(e, t, n, r);
    }
    computeBasicPermissions(e) {
        return 'basicPermissions' in e ? e.basicPermissions : b.Z.asBasicFlag(Y(e));
    }
    canManageUser(e, t, n) {
        let r = t instanceof v.Z ? t.id : t;
        if (n.isOwner(r)) return !1;
        let i = A.default.getCurrentUser();
        if (!this.can(e, n)) return !1;
        let a = null != i ? I.e9(n, i.id) : void 0,
            s = I.e9(n, r);
        return null != i && I.r6(n, i.id, a, s);
    }
    getHighestRole(e) {
        let t = A.default.getCurrentUser();
        return null != t ? I.e9(e, t.id) : null;
    }
    isRoleHigher(e, t, n) {
        let r = A.default.getCurrentUser(),
            i = f.Z.isViewingRoles(e.id);
        return I.r6(e, i ? void 0 : null == r ? void 0 : r.id, t, n);
    }
    canImpersonateRole(e, t) {
        let n = this.getHighestRole(e),
            r = this.can(N.Plq.MANAGE_GUILD, e) && this.can(N.Plq.MANAGE_ROLES, e),
            i = this.isRoleHigher(e, n, t);
        return r && (i || t.id === (null == n ? void 0 : n.id));
    }
    getGuildVersion(e) {
        var t;
        return null !== (t = D[e]) && void 0 !== t ? t : 0;
    }
    getChannelsVersion() {
        return L;
    }
}
function K() {
    (O = {}), (R = {}), (D = {}), (L = 0);
}
(s = 'PermissionStore'),
    (a = 'displayName') in (i = W)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new W(d.Z, {
        BACKGROUND_SYNC: U,
        CONNECTION_OPEN: U,
        OVERLAY_INITIALIZE: U,
        CACHE_LOADED: U,
        CACHE_LOADED_LAZY: U,
        CONNECTION_CLOSED: function () {
            K();
        },
        GUILD_CREATE: G,
        GUILD_UPDATE: G,
        GUILD_DELETE: G,
        GUILD_MEMBER_ADD: B,
        GUILD_MEMBER_UPDATE: B,
        CURRENT_USER_UPDATE: B,
        CHANNEL_CREATE: function (e) {
            let {
                    channel: { id: t }
                } = e,
                n = S.Z.getChannel(t);
            if (null == n || n.isPrivate()) return !1;
            let r = A.default.getCurrentUser(),
                i = I.uB({
                    user: r,
                    context: n
                });
            if (O[n.id] === i) return !1;
            (O[n.id] = i), (L += 1), P(n.getGuildId());
        },
        THREAD_CREATE: Z,
        THREAD_UPDATE: Z,
        THREAD_LIST_SYNC: Z,
        LOAD_THREADS_SUCCESS: Z,
        LOAD_ARCHIVED_THREADS_SUCCESS: Z,
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let { id: e } of t) {
                let t = S.Z.getChannel(e);
                if (null == t || t.isPrivate()) continue;
                let r = A.default.getCurrentUser(),
                    i = I.uB({
                        user: r,
                        context: t
                    });
                if (O[t.id] !== i) (O[t.id] = i), P(t.getGuildId()), (n = !0);
            }
            return !!n && ((L += 1), n);
        },
        LOAD_MESSAGES_SUCCESS: function (e) {
            let { messages: t } = e;
            return t.some((e) => null != e.thread);
        },
        SEARCH_FINISH: F,
        MOD_VIEW_SEARCH_FINISH: F,
        THREAD_MEMBER_UPDATE: function (e) {
            var t;
            return (null === (t = A.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.userId && (P(e.guildId), !0);
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            return !!(0, m.s)(e) && (P(e.guildId), !0);
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return delete O[t.id], (L += 1), P(t.guild_id), !1;
        },
        GUILD_ROLE_CREATE: V,
        GUILD_ROLE_UPDATE: V,
        GUILD_ROLE_DELETE: V,
        LOGOUT: K,
        STAGE_INSTANCE_CREATE: j,
        STAGE_INSTANCE_UPDATE: j,
        STAGE_INSTANCE_DELETE: j,
        IMPERSONATE_UPDATE: H,
        IMPERSONATE_STOP: H
    }));
