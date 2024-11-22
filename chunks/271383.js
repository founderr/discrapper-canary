n.d(t, {
    O5: function () {
        return j;
    },
    V6: function () {
        return V;
    }
}),
    n(47120),
    n(789020),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u = n(392711),
    c = n.n(u),
    d = n(866442),
    f = n(442837),
    _ = n(570140),
    p = n(2572),
    h = n(710845),
    m = n(69882),
    g = n(134049),
    E = n(160404),
    v = n(630388),
    I = n(823379),
    b = n(709054),
    T = n(314897),
    S = n(592125),
    y = n(430824),
    A = n(372897);
let N = new h.Z('GuildMemberStore'),
    C = {},
    R = {},
    O = {},
    D = {},
    L = !1,
    x = 0,
    w = 0,
    M = {},
    P = {},
    k = {
        added: [],
        removed: []
    };
function U(e, t) {
    if (null == t.communicationDisabledUntil || !(0, m.b)(t)) return G(e, t.userId);
    let n = F(e, t.userId);
    D[n] !== t.communicationDisabledUntil && (0, m.b)(t) && ((D[n] = t.communicationDisabledUntil), B(n));
}
function G(e, t) {
    if (null != t) {
        let n = F(e, t);
        null != D[n] && B(n), Z(F(e, t));
    } else for (let t in D) j(t) === e && (B(t), Z(t));
}
function B(e) {
    (x += 1), (M[e] = x);
}
function Z(e) {
    V(e) === T.default.getId() && (0, g.l)(j(e)), delete D[e];
}
function F(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join('-');
}
function V(e) {
    return e.split('-')[1];
}
function j(e) {
    return e.split('-')[0];
}
function H(e, t) {
    let n, r, i, a, s;
    if (0 === t.length)
        return {
            colorString: void 0,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
    for (let n of t) {
        let t = e[n];
        if (null != t) (null == s || t.position > s.position) && (s = t), t.color > 0 && (null == r || t.position > r.position) && (r = t), t.hoist && (null == i || t.position > i.position) && (i = t), (null != t.icon || null != t.unicodeEmoji) && (null == a || t.position > a.position) && (a = t);
    }
    if (null != r) {
        var o;
        null == r.colorString && r.color > 0 && (r.colorString = (0, d.Rf)(r.color)), (n = null !== (o = r.colorString) && void 0 !== o ? o : void 0);
    }
    return {
        colorString: n,
        colorRoleId: null == r ? void 0 : r.id,
        iconRoleId: null == a ? void 0 : a.id,
        hoistRoleId: null == i ? void 0 : i.id,
        highestRoleId: null == s ? void 0 : s.id
    };
}
function Y(e) {
    let { userId: t, nick: n, guildId: r, avatar: i, avatarDecoration: a, guildRoles: s, roles: o, premiumSince: l, isPending: u, joinedAt: c, communicationDisabledUntil: d, unusualDMActivityUntil: f, fullProfileLoadedTimestamp: _, flags: p } = e,
        { colorString: h, colorRoleId: m, iconRoleId: g, hoistRoleId: v, highestRoleId: I } = H(s, o),
        S = {
            userId: t,
            nick: n,
            guildId: r,
            avatar: i,
            avatarDecoration: a,
            roles: o,
            colorString: h,
            colorRoleId: m,
            iconRoleId: g,
            hoistRoleId: v,
            highestRoleId: I,
            premiumSince: l,
            isPending: u,
            joinedAt: c,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: f,
            fullProfileLoadedTimestamp: _,
            flags: p
        };
    if (null == C[r]) return S;
    if (t === T.default.getId()) {
        if (E.Z.isViewingRoles(r) || E.Z.isFullServerPreview(r)) {
            let e = E.Z.getViewingRoles(r);
            R[r] = {
                ...S,
                ...E.Z.getMemberOptions(r),
                roles: null != e ? b.default.keys(e) : []
            };
        } else null != R[r] && delete R[r];
    }
    return S;
}
((a = r || (r = {}))[(a.GUILD = 0)] = 'GUILD'), (a[(a.USER = 1)] = 'USER');
function W(e) {
    for (let t of e) {
        if (null != t.member) {
            if (
                (null == O[t.id]
                    ? (O[t.id] = t.member)
                    : (O[t.id] = {
                          ...t.member,
                          roles: t.member.roles
                      }),
                null != C[t.id])
            ) {
                let e = C[t.id];
                null != e[t.member.userId] &&
                    (e[t.member.userId] = {
                        ...e[t.member.userId],
                        roles: t.member.roles
                    });
            }
        }
    }
}
function K(e) {
    var t;
    let { guildId: n, user: r, nick: i, avatar: a, avatarDecoration: s, roles: o, premiumSince: l, isPending: u, joinedAt: c, communicationDisabledUntil: d, unusualDMActivityUntil: f, flags: _ } = e,
        p = C[n];
    if (null == p) return !1;
    let h = y.Z.getGuild(n);
    if (null == h) return N.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (p[r.id] = Y({
        userId: r.id,
        nick: i,
        guildId: n,
        avatar: a,
        avatarDecoration:
            null != s
                ? {
                      asset: s.asset,
                      skuId: s.sku_id
                  }
                : void 0,
        guildRoles: y.Z.getRoles(h.id),
        roles: o,
        premiumSince: l,
        isPending: u,
        joinedAt: c,
        communicationDisabledUntil: d,
        unusualDMActivityUntil: f,
        fullProfileLoadedTimestamp: null === (t = p[r.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
        flags: _
    })),
        U(n, p[r.id]);
}
function z(e, t) {
    let n = C[e];
    if (null == n) return !1;
    let r = y.Z.getGuild(e);
    return null == r
        ? (N.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (t.forEach((t) => {
              var i;
              let a = n[t.user.id];
              (n[t.user.id] = Y({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: q(t),
                  guildRoles: y.Z.getRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (i = t.unusual_dm_activity_until) && void 0 !== i ? i : null == a ? void 0 : a.unusualDMActivityUntil
              })),
                  U(e, n[t.user.id]);
          }),
          w++,
          !0);
}
function q(e) {
    return null != e.avatar_decoration_data
        ? {
              asset: e.avatar_decoration_data.asset,
              skuId: e.avatar_decoration_data.sku_id
          }
        : void 0;
}
function Q(e, t) {
    return X({
        id: e,
        members: t.filter(p.Z).map((e) => e.member)
    });
}
function X(e) {
    let t = e.id;
    !(t in C) && (C[e.id] = {});
    let n = y.Z.getGuild(t);
    if (null == n) return !1;
    let r = C[t];
    for (let a of e.members) {
        var i;
        let s = a.user.id,
            o = r[s],
            l = Y({
                userId: s,
                nick: a.nick,
                guildId: e.id,
                avatar: a.avatar,
                avatarDecoration: q(a),
                guildRoles: y.Z.getRoles(n.id),
                roles: a.roles,
                premiumSince: a.premium_since,
                isPending: a.pending,
                joinedAt: a.joined_at,
                communicationDisabledUntil: a.communication_disabled_until,
                fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                flags: a.flags,
                unusualDMActivityUntil: null !== (i = a.unusual_dm_activity_until) && void 0 !== i ? i : null == o ? void 0 : o.unusualDMActivityUntil
            });
        (r[s] = l), U(t, l);
    }
    return !0;
}
function J(e) {
    let t = C[e.guildId];
    if (null == t) return !1;
    let n = y.Z.getGuild(e.guildId);
    if (null == n) return N.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let r = T.default.getId();
    for (let i of b.default.keys(t)) {
        let a = t[i];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let s = i === r && 'GUILD_ROLE_DELETE' === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            (t[i] = Y({
                userId: i,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: y.Z.getRoles(n.id),
                roles: s,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp
            })),
                U(e.guildId, t[i]);
        }
    }
}
function $(e) {
    let { guildId: t } = e,
        n = C[t];
    if (null == n) return !1;
    let r = y.Z.getGuild(t);
    if (null == r) return N.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1;
    let i = T.default.getId(),
        a = n[i];
    n[i] = Y({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: y.Z.getRoles(r.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags
    });
}
function ee(e) {
    var t;
    let { message: n, guildId: r } = e;
    (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null &&
        null != r &&
        X({
            id: r,
            members: Object.entries(n.resolved.members)
                .map((e) => {
                    var t, r;
                    let [i, a] = e,
                        s = null === (r = n.resolved) || void 0 === r ? void 0 : null === (t = r.users) || void 0 === t ? void 0 : t[i];
                    if (null != s)
                        return {
                            ...a,
                            user: s
                        };
                })
                .filter((e) => null != e)
        });
}
function et(e) {
    let { messages: t } = e;
    t.forEach((e) =>
        (function (e) {
            var t;
            if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
            let n = S.Z.getChannel(e.channel_id);
            !(null == n || n.isPrivate()) &&
                X({
                    id: n.guild_id,
                    members: Object.entries(e.resolved.members)
                        .map((t) => {
                            var n, r;
                            let [i, a] = t,
                                s = null === (r = e.resolved) || void 0 === r ? void 0 : null === (n = r.users) || void 0 === n ? void 0 : n[i];
                            if (null != s)
                                return {
                                    ...a,
                                    user: s
                                };
                        })
                        .filter((e) => null != e)
                });
        })(e)
    );
}
function en(e) {
    let { messages: t } = e;
    t.forEach((e) => et({ messages: e }));
}
class er extends (i = f.ZP.Store) {
    initialize() {
        this.waitFor(y.Z, T.default, E.Z);
    }
    getMutableAllGuildsAndMembers() {
        return C;
    }
    memberOf(e) {
        return c()(C)
            .toPairs()
            .filter((t) => {
                let [n, r] = t;
                return null != r[e];
            })
            .map((e) => {
                let [t] = e;
                return t;
            })
            .value();
    }
    getNicknameGuildsMapping(e) {
        let t = {};
        for (let r in C) {
            var n;
            let i = null === (n = C[r][e]) || void 0 === n ? void 0 : n.nick;
            if (null != i) !Object.prototype.hasOwnProperty.call(t, i) && (t[i] = []), t[i].push(r);
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = C[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let r = C[e];
        return null != r && (null === (n = r[t]) || void 0 === n ? void 0 : n.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = T.default.getId(),
            n = C[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, v.yE)(r, A.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = C[e];
        return null == t ? [] : b.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = C[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = C[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === T.default.getId() && (E.Z.isViewingRoles(e) || E.Z.isFullServerPreview(e))) {
            var r;
            return null !== (r = R[e]) && void 0 !== r ? r : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, T.default.getId());
    }
    getCachedSelfMember(e) {
        var t;
        return null !== (t = O[e]) && void 0 !== t ? t : null;
    }
    getNick(e, t) {
        if (null == e || null == t) return null;
        let n = this.getMember(e, t);
        return null != n ? n.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return D;
    }
    getCommunicationDisabledVersion() {
        return x;
    }
    getPendingRoleUpdates(e) {
        var t;
        return null !== (t = P[e]) && void 0 !== t ? t : k;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, r;
        let i = null !== (r = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== r ? r : [],
            a = P[e];
        return null == a ? i : c().difference(c().union(i, a.added), a.removed);
    }
    getMemberVersion() {
        return w;
    }
}
(l = 'GuildMemberStore'),
    (o = 'displayName') in (s = er)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.ZP = new er(_.Z, {
        CONNECTION_OPEN: function (e) {
            L ? (L = !1) : (C = {}),
                (D = {}),
                (function (e) {
                    e.guilds.forEach((e) => {
                        X(e);
                    });
                })(e);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            e.guilds.forEach((e) => {
                var t;
                let n = e.id;
                X({
                    id: n,
                    members: e.members
                }),
                    null === (t = e.activity_instances) ||
                        void 0 === t ||
                        t.forEach((e) => {
                            Q(n, e.participants);
                        });
            });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { guildMembers: t } = e;
            C = { ...t };
        },
        CACHE_LOADED: function (e) {
            let { guildMembers: t, guilds: n } = e;
            (L = !0), (C = { ...t }), (O = {}), W(n);
        },
        CACHE_LOADED_LAZY: function (e) {
            let { guilds: t } = e;
            W(t);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            return X(t);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete C[t.id], G(t.id);
        },
        GUILD_MEMBER_ADD: K,
        GUILD_MEMBER_UPDATE: K,
        GUILD_MEMBER_UPDATE_LOCAL: function (e) {
            var t, n, r;
            let { guildId: i, roles: a, addedRoleIds: s, removedRoleIds: o, flags: l } = e,
                u = T.default.getId(),
                d = C[i],
                f = null != d ? d[u] : null;
            if (null == f) return !1;
            let _ = y.Z.getGuild(i);
            if (null == _) return !1;
            let p = null !== (t = P[i]) && void 0 !== t ? t : {};
            (P[i] = {
                added: c().difference(c().union(null !== (n = p.added) && void 0 !== n ? n : [], s), null != o ? o : []),
                removed: c().difference(c().union(null !== (r = p.removed) && void 0 !== r ? r : [], o), null != s ? s : [])
            }),
                (d[u] = Y({
                    userId: u,
                    guildId: i,
                    nick: f.nick,
                    avatar: f.avatar,
                    avatarDecoration: f.avatarDecoration,
                    guildRoles: y.Z.getRoles(_.id),
                    roles: null != a ? a : f.roles,
                    premiumSince: f.premiumSince,
                    isPending: f.isPending,
                    joinedAt: f.joinedAt,
                    flags: null != l ? l : f.flags,
                    fullProfileLoadedTimestamp: f.fullProfileLoadedTimestamp
                }));
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let t = !1;
            for (let n of e.chunks) t = z(n.guildId, n.members) || t;
            return t;
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { guildId: t, user: n } = e,
                r = C[t];
            if (null == r || null == r[n.id]) return !1;
            delete r[n.id], G(t, n.id), w++;
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, members: n } = e;
            return z(t, n.map((e) => e.member).filter(I.lm));
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let { guildId: t, addedMembers: n } = e;
            return null != n && z(t, n.map((e) => e.member).filter(I.lm));
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
            let { guildId: t, owners: n } = e;
            return z(t, n);
        },
        LOAD_FORUM_POSTS: function (e) {
            let { guildId: t, threads: n } = e;
            return z(
                t,
                Object.values(n)
                    .map((e) => e.owner)
                    .filter(I.lm)
            );
        },
        GUILD_ROLE_UPDATE: J,
        GUILD_ROLE_DELETE: J,
        GUILD_ROLE_MEMBER_REMOVE: function (e) {
            let { guildId: t, userId: n, roleId: r } = e,
                i = C[t];
            if (null == i) return !1;
            let a = y.Z.getGuild(t);
            if (null == a) return N.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
            let s = i[n];
            if (null == s || !s.roles.includes(r)) return !1;
            s.roles = s.roles.filter((e) => e !== r);
            let o = H(y.Z.getRoles(a.id), s.roles);
            return (
                (i[n] = {
                    ...s,
                    ...o
                }),
                !0
            );
        },
        GUILD_ROLE_MEMBER_ADD: function (e) {
            let { guildId: t, userId: n, roleId: r } = e,
                i = C[t];
            if (null == i) return !1;
            let a = y.Z.getGuild(t);
            if (null == a) return N.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
            let s = i[n];
            if (null == s || s.roles.includes(r)) return !1;
            s.roles = [...s.roles, r];
            let o = H(y.Z.getRoles(a.id), s.roles);
            return (
                (i[n] = {
                    ...s,
                    ...o
                }),
                !0
            );
        },
        GUILD_MEMBER_PROFILE_UPDATE: function (e) {
            let { guildMember: t, guildId: n } = e,
                r = C[n];
            if (null == r) return !1;
            let i = y.Z.getGuild(n);
            if (null == i) return N.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
            (r[t.user.id] = Y({
                userId: t.user.id,
                nick: t.nick,
                guildId: n,
                avatar: t.avatar,
                avatarDecoration: q(t),
                guildRoles: y.Z.getRoles(i.id),
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                unusualDMActivityUntil: t.unusual_dm_activity_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: Date.now()
            })),
                U(n, r[t.user.id]);
        },
        IMPERSONATE_UPDATE: $,
        IMPERSONATE_STOP: $,
        PASSIVE_UPDATE_V2: function (e) {
            return !!(e.members.length > 0) && z(e.guildId, e.members);
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
            let { guildId: t } = e;
            if (null == t) return !1;
            delete P[t];
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            var t, n;
            if (null == e.guildId || null == y.Z.getGuild(e.guildId)) return !1;
            (L = !0), (C[e.guildId] = null !== (t = C[e.guildId]) && void 0 !== t ? t : {});
            let r = !1;
            for (let t of ((L = !0), (C[e.guildId] = null !== (n = C[e.guildId]) && void 0 !== n ? n : {}), e.members)) null == C[e.guildId][t.userId] && ((r = !0), (C[e.guildId][t.userId] = t));
            return r;
        },
        MESSAGE_CREATE: ee,
        MESSAGE_UPDATE: ee,
        LOAD_MESSAGES_SUCCESS: et,
        LOAD_MESSAGES_AROUND_SUCCESS: et,
        LOAD_PINNED_MESSAGES_SUCCESS: et,
        LOAD_RECENT_MENTIONS_SUCCESS: et,
        SEARCH_FINISH: en,
        MOD_VIEW_SEARCH_FINISH: en,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
            let { guildId: t, members: n } = e;
            return z(
                t,
                n.map((e) => {
                    let { member: t } = e;
                    return t;
                })
            );
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { location: t, participants: n } = e;
            return null != t.guild_id && Q(t.guild_id, n);
        }
    }));
