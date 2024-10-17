n.d(t, {
    O5: function () {
        return H;
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
    _ = n(442837),
    E = n(570140),
    f = n(710845),
    h = n(69882),
    p = n(134049),
    I = n(160404),
    m = n(630388),
    T = n(823379),
    S = n(709054),
    g = n(314897),
    A = n(592125),
    N = n(430824),
    R = n(372897);
let O = new f.Z('GuildMemberStore'),
    v = {},
    C = {},
    L = {},
    D = {},
    y = !1,
    b = 0,
    M = 0,
    P = {},
    U = {},
    w = {
        added: [],
        removed: []
    };
function x(e, t) {
    if (null == t.communicationDisabledUntil || !(0, h.b)(t)) return G(e, t.userId);
    let n = F(e, t.userId);
    D[n] !== t.communicationDisabledUntil && (0, h.b)(t) && ((D[n] = t.communicationDisabledUntil), k(n));
}
function G(e, t) {
    if (null != t) {
        let n = F(e, t);
        null != D[n] && k(n), B(F(e, t));
    } else for (let t in D) H(t) === e && (k(t), B(t));
}
function k(e) {
    (b += 1), (P[e] = b);
}
function B(e) {
    V(e) === g.default.getId() && (0, p.l)(H(e)), delete D[e];
}
function F(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join('-');
}
function V(e) {
    return e.split('-')[1];
}
function H(e) {
    return e.split('-')[0];
}
function Z(e, t) {
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
    let { userId: t, nick: n, guildId: r, avatar: i, avatarDecoration: a, guildRoles: s, roles: o, premiumSince: l, isPending: u, joinedAt: c, communicationDisabledUntil: d, unusualDMActivityUntil: _, fullProfileLoadedTimestamp: E, flags: f } = e,
        { colorString: h, colorRoleId: p, iconRoleId: m, hoistRoleId: T, highestRoleId: A } = Z(s, o),
        N = {
            userId: t,
            nick: n,
            guildId: r,
            avatar: i,
            avatarDecoration: a,
            roles: o,
            colorString: h,
            colorRoleId: p,
            iconRoleId: m,
            hoistRoleId: T,
            highestRoleId: A,
            premiumSince: l,
            isPending: u,
            joinedAt: c,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: _,
            fullProfileLoadedTimestamp: E,
            flags: f
        };
    if (null == v[r]) return N;
    if (t === g.default.getId()) {
        if (I.Z.isViewingRoles(r) || I.Z.isFullServerPreview(r)) {
            let e = I.Z.getViewingRoles(r);
            C[r] = {
                ...N,
                ...I.Z.getMemberOptions(r),
                roles: null != e ? S.default.keys(e) : []
            };
        } else null != C[r] && delete C[r];
    }
    return N;
}
((a = r || (r = {}))[(a.GUILD = 0)] = 'GUILD'), (a[(a.USER = 1)] = 'USER');
function j(e) {
    for (let t of e) {
        if (null != t.member) {
            if (
                (null == L[t.id]
                    ? (L[t.id] = t.member)
                    : (L[t.id] = {
                          ...t.member,
                          roles: t.member.roles
                      }),
                null != v[t.id])
            ) {
                let e = v[t.id];
                null != e[t.member.userId] &&
                    (e[t.member.userId] = {
                        ...e[t.member.userId],
                        roles: t.member.roles
                    });
            }
        }
    }
}
function W(e) {
    var t;
    let { guildId: n, user: r, nick: i, avatar: a, avatarDecoration: s, roles: o, premiumSince: l, isPending: u, joinedAt: c, communicationDisabledUntil: d, unusualDMActivityUntil: _, flags: E } = e,
        f = v[n];
    if (null == f) return !1;
    let h = N.Z.getGuild(n);
    if (null == h) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (f[r.id] = Y({
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
        guildRoles: N.Z.getRoles(h.id),
        roles: o,
        premiumSince: l,
        isPending: u,
        joinedAt: c,
        communicationDisabledUntil: d,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: null === (t = f[r.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
        flags: E
    })),
        x(n, f[r.id]);
}
function K(e, t) {
    let n = v[e];
    if (null == n) return !1;
    let r = N.Z.getGuild(e);
    return null == r
        ? (O.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (t.forEach((t) => {
              var i;
              let a = n[t.user.id];
              (n[t.user.id] = Y({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: z(t),
                  guildRoles: N.Z.getRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (i = t.unusual_dm_activity_until) && void 0 !== i ? i : null == a ? void 0 : a.unusualDMActivityUntil
              })),
                  x(e, n[t.user.id]);
          }),
          M++,
          !0);
}
function z(e) {
    return null != e.avatar_decoration_data
        ? {
              asset: e.avatar_decoration_data.asset,
              skuId: e.avatar_decoration_data.sku_id
          }
        : void 0;
}
function q(e, t) {
    Q({
        id: e,
        members: t.map((e) => e.member).filter(T.lm)
    });
}
function Q(e) {
    let t = e.id;
    !(t in v) && (v[e.id] = {});
    let n = N.Z.getGuild(t);
    if (null == n) return !1;
    let r = v[t];
    for (let a of e.members) {
        var i;
        let s = a.user.id,
            o = r[s],
            l = Y({
                userId: s,
                nick: a.nick,
                guildId: e.id,
                avatar: a.avatar,
                avatarDecoration: z(a),
                guildRoles: N.Z.getRoles(n.id),
                roles: a.roles,
                premiumSince: a.premium_since,
                isPending: a.pending,
                joinedAt: a.joined_at,
                communicationDisabledUntil: a.communication_disabled_until,
                fullProfileLoadedTimestamp: null == o ? void 0 : o.fullProfileLoadedTimestamp,
                flags: a.flags,
                unusualDMActivityUntil: null !== (i = a.unusual_dm_activity_until) && void 0 !== i ? i : null == o ? void 0 : o.unusualDMActivityUntil
            });
        (r[s] = l), x(t, l);
    }
    return !0;
}
function X(e) {
    let t = v[e.guildId];
    if (null == t) return !1;
    let n = N.Z.getGuild(e.guildId);
    if (null == n) return O.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let r = g.default.getId();
    for (let i of S.default.keys(t)) {
        let a = t[i];
        if ((null != a.roles && a.roles.length > 0) || null != a.colorString || null != a.hoistRoleId) {
            let s = i === r && 'GUILD_ROLE_DELETE' === e.type ? a.roles.filter((t) => t !== e.roleId) : a.roles;
            (t[i] = Y({
                userId: i,
                nick: a.nick,
                guildId: e.guildId,
                avatar: a.avatar,
                avatarDecoration: a.avatarDecoration,
                guildRoles: N.Z.getRoles(n.id),
                roles: s,
                premiumSince: a.premiumSince,
                isPending: a.isPending,
                joinedAt: a.joinedAt,
                flags: a.flags,
                fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp
            })),
                x(e.guildId, t[i]);
        }
    }
}
function $(e) {
    let { guildId: t } = e,
        n = v[t];
    if (null == n) return !1;
    let r = N.Z.getGuild(t);
    if (null == r) return O.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1;
    let i = g.default.getId(),
        a = n[i];
    n[i] = Y({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: N.Z.getRoles(r.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags
    });
}
function J(e) {
    var t;
    let { message: n, guildId: r } = e;
    (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null &&
        null != r &&
        Q({
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
function ee(e) {
    let { messages: t } = e;
    t.forEach((e) =>
        (function (e) {
            var t;
            if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
            let n = A.Z.getChannel(e.channel_id);
            !(null == n || n.isPrivate()) &&
                Q({
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
function et(e) {
    let { messages: t } = e;
    t.forEach((e) => ee({ messages: e }));
}
class en extends (i = _.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, g.default, I.Z);
    }
    getMutableAllGuildsAndMembers() {
        return v;
    }
    memberOf(e) {
        return c()(v)
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
        for (let r in v) {
            var n;
            let i = null === (n = v[r][e]) || void 0 === n ? void 0 : n.nick;
            if (null != i) !Object.prototype.hasOwnProperty.call(t, i) && (t[i] = []), t[i].push(r);
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = v[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let r = v[e];
        return null != r && (null === (n = r[t]) || void 0 === n ? void 0 : n.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = g.default.getId(),
            n = v[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, m.yE)(r, R.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = v[e];
        return null == t ? [] : S.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = v[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = v[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === g.default.getId() && (I.Z.isViewingRoles(e) || I.Z.isFullServerPreview(e))) {
            var r;
            return null !== (r = C[e]) && void 0 !== r ? r : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, g.default.getId());
    }
    getCachedSelfMember(e) {
        var t;
        return null !== (t = L[e]) && void 0 !== t ? t : null;
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
        return b;
    }
    getPendingRoleUpdates(e) {
        var t;
        return null !== (t = U[e]) && void 0 !== t ? t : w;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, r;
        let i = null !== (r = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== r ? r : [],
            a = U[e];
        return null == a ? i : c().difference(c().union(i, a.added), a.removed);
    }
    getMemberVersion() {
        return M;
    }
}
(l = 'GuildMemberStore'),
    (o = 'displayName') in (s = en)
        ? Object.defineProperty(s, o, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[o] = l),
    (t.ZP = new en(E.Z, {
        CONNECTION_OPEN: function (e) {
            y ? (y = !1) : (v = {}),
                (D = {}),
                (function (e) {
                    e.guilds.forEach((e) => {
                        Q(e);
                    });
                })(e);
        },
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            e.guilds.forEach((e) => {
                var t;
                let n = e.id;
                Q({
                    id: n,
                    members: e.members
                }),
                    null === (t = e.activity_instances) ||
                        void 0 === t ||
                        t.forEach((e) => {
                            q(n, e.participants);
                        });
            });
        },
        OVERLAY_INITIALIZE: function (e) {
            let { guildMembers: t } = e;
            v = { ...t };
        },
        CACHE_LOADED: function (e) {
            let { guildMembers: t, guilds: n } = e;
            (y = !0), (v = { ...t }), (L = {}), j(n);
        },
        CACHE_LOADED_LAZY: function (e) {
            let { guilds: t } = e;
            j(t);
        },
        GUILD_CREATE: function (e) {
            let { guild: t } = e;
            return Q(t);
        },
        GUILD_DELETE: function (e) {
            let { guild: t } = e;
            delete v[t.id], G(t.id);
        },
        GUILD_MEMBER_ADD: W,
        GUILD_MEMBER_UPDATE: W,
        GUILD_MEMBER_UPDATE_LOCAL: function (e) {
            var t, n, r;
            let { guildId: i, roles: a, addedRoleIds: s, removedRoleIds: o, flags: l } = e,
                u = g.default.getId(),
                d = v[i],
                _ = null != d ? d[u] : null;
            if (null == _) return !1;
            let E = N.Z.getGuild(i);
            if (null == E) return !1;
            let f = null !== (t = U[i]) && void 0 !== t ? t : {};
            (U[i] = {
                added: c().difference(c().union(null !== (n = f.added) && void 0 !== n ? n : [], s), null != o ? o : []),
                removed: c().difference(c().union(null !== (r = f.removed) && void 0 !== r ? r : [], o), null != s ? s : [])
            }),
                (d[u] = Y({
                    userId: u,
                    guildId: i,
                    nick: _.nick,
                    avatar: _.avatar,
                    avatarDecoration: _.avatarDecoration,
                    guildRoles: N.Z.getRoles(E.id),
                    roles: null != a ? a : _.roles,
                    premiumSince: _.premiumSince,
                    isPending: _.isPending,
                    joinedAt: _.joinedAt,
                    flags: null != l ? l : _.flags,
                    fullProfileLoadedTimestamp: _.fullProfileLoadedTimestamp
                }));
        },
        GUILD_MEMBERS_CHUNK_BATCH: function (e) {
            let t = !1;
            for (let n of e.chunks) t = K(n.guildId, n.members) || t;
            return t;
        },
        GUILD_MEMBER_REMOVE: function (e) {
            let { guildId: t, user: n } = e,
                r = v[t];
            if (null == r || null == r[n.id]) return !1;
            delete r[n.id], G(t, n.id), M++;
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, members: n } = e;
            return K(t, n.map((e) => e.member).filter(T.lm));
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let { guildId: t, addedMembers: n } = e;
            return null != n && K(t, n.map((e) => e.member).filter(T.lm));
        },
        LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
            let { guildId: t, owners: n } = e;
            return K(t, n);
        },
        LOAD_FORUM_POSTS: function (e) {
            let { guildId: t, threads: n } = e;
            return K(
                t,
                Object.values(n)
                    .map((e) => e.owner)
                    .filter(T.lm)
            );
        },
        GUILD_ROLE_UPDATE: X,
        GUILD_ROLE_DELETE: X,
        GUILD_ROLE_MEMBER_REMOVE: function (e) {
            let { guildId: t, userId: n, roleId: r } = e,
                i = v[t];
            if (null == i) return !1;
            let a = N.Z.getGuild(t);
            if (null == a) return O.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
            let s = i[n];
            if (null == s || !s.roles.includes(r)) return !1;
            s.roles = s.roles.filter((e) => e !== r);
            let o = Z(N.Z.getRoles(a.id), s.roles);
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
                i = v[t];
            if (null == i) return !1;
            let a = N.Z.getGuild(t);
            if (null == a) return O.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
            let s = i[n];
            if (null == s || s.roles.includes(r)) return !1;
            s.roles = [...s.roles, r];
            let o = Z(N.Z.getRoles(a.id), s.roles);
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
                r = v[n];
            if (null == r) return !1;
            let i = N.Z.getGuild(n);
            if (null == i) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
            (r[t.user.id] = Y({
                userId: t.user.id,
                nick: t.nick,
                guildId: n,
                avatar: t.avatar,
                avatarDecoration: z(t),
                guildRoles: N.Z.getRoles(i.id),
                roles: t.roles,
                premiumSince: t.premium_since,
                isPending: t.pending,
                joinedAt: t.joined_at,
                communicationDisabledUntil: t.communication_disabled_until,
                unusualDMActivityUntil: t.unusual_dm_activity_until,
                flags: t.flags,
                fullProfileLoadedTimestamp: Date.now()
            })),
                x(n, r[t.user.id]);
        },
        IMPERSONATE_UPDATE: $,
        IMPERSONATE_STOP: $,
        PASSIVE_UPDATE_V2: function (e) {
            return !!(e.members.length > 0) && K(e.guildId, e.members);
        },
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
            let { guildId: t } = e;
            if (null == t) return !1;
            delete U[t];
        },
        LOCAL_MESSAGES_LOADED: function (e) {
            var t, n;
            if (null == e.guildId || null == N.Z.getGuild(e.guildId)) return !1;
            (y = !0), (v[e.guildId] = null !== (t = v[e.guildId]) && void 0 !== t ? t : {});
            let r = !1;
            for (let t of ((y = !0), (v[e.guildId] = null !== (n = v[e.guildId]) && void 0 !== n ? n : {}), e.members)) null == v[e.guildId][t.userId] && ((r = !0), (v[e.guildId][t.userId] = t));
            return r;
        },
        MESSAGE_CREATE: J,
        MESSAGE_UPDATE: J,
        LOAD_MESSAGES_SUCCESS: ee,
        LOAD_MESSAGES_AROUND_SUCCESS: ee,
        LOAD_PINNED_MESSAGES_SUCCESS: ee,
        LOAD_RECENT_MENTIONS_SUCCESS: ee,
        SEARCH_FINISH: et,
        MOD_VIEW_SEARCH_FINISH: et,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
            let { guildId: t, members: n } = e;
            return K(
                t,
                n.map((e) => {
                    let { member: t } = e;
                    return t;
                })
            );
        },
        EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
            let { location: t, participants: n } = e;
            null != t.guild_id && q(t.guild_id, n);
        }
    }));
