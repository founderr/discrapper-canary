r.d(n, {
    O5: function () {
        return H;
    },
    V6: function () {
        return j;
    }
});
var i,
    a,
    s = r(47120);
var o = r(789020);
var l = r(653041);
var u = r(392711),
    c = r.n(u),
    d = r(866442),
    f = r(442837),
    _ = r(570140),
    h = r(2572),
    p = r(710845),
    m = r(69882),
    g = r(134049),
    E = r(160404),
    v = r(630388),
    I = r(823379),
    T = r(709054),
    b = r(314897),
    y = r(592125),
    S = r(430824),
    A = r(372897);
function N(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let C = new p.Z('GuildMemberStore'),
    R = {},
    O = {},
    D = {},
    L = {},
    x = !1,
    w = 0,
    P = 0,
    M = {},
    k = {},
    U = {
        added: [],
        removed: []
    };
function B(e, n) {
    if (null == n.communicationDisabledUntil || !(0, m.b)(n)) return G(e, n.userId);
    let r = V(e, n.userId);
    L[r] !== n.communicationDisabledUntil && (0, m.b)(n) && ((L[r] = n.communicationDisabledUntil), Z(r));
}
function G(e, n) {
    if (null != n) {
        let r = V(e, n);
        null != L[r] && Z(r), F(V(e, n));
    } else
        for (let n in L) {
            let r = n;
            H(r) === e && (Z(n), F(r));
        }
}
function Z(e) {
    (w += 1), (M[e] = w);
}
function F(e) {
    j(e) === b.default.getId() && (0, g.l)(H(e)), delete L[e];
}
function V(e, n) {
    let r = [];
    return (r[0] = e), (r[1] = n), r.join('-');
}
function j(e) {
    return e.split('-')[1];
}
function H(e) {
    return e.split('-')[0];
}
function Y(e, n) {
    let r, i, a, s, o;
    if (0 === n.length)
        return {
            colorString: void 0,
            colorRoleId: void 0,
            hoistRoleId: void 0,
            iconRoleId: void 0,
            highestRoleId: void 0
        };
    for (let r of n) {
        let n = e[r];
        if (null != n) (null == o || n.position > o.position) && (o = n), n.color > 0 && (null == i || n.position > i.position) && (i = n), n.hoist && (null == a || n.position > a.position) && (a = n), (null != n.icon || null != n.unicodeEmoji) && (null == s || n.position > s.position) && (s = n);
    }
    if (null != i) {
        var l;
        null == i.colorString && i.color > 0 && (i.colorString = (0, d.Rf)(i.color)), (r = null !== (l = i.colorString) && void 0 !== l ? l : void 0);
    }
    return {
        colorString: r,
        colorRoleId: null == i ? void 0 : i.id,
        iconRoleId: null == s ? void 0 : s.id,
        hoistRoleId: null == a ? void 0 : a.id,
        highestRoleId: null == o ? void 0 : o.id
    };
}
function W(e) {
    let { userId: n, nick: r, guildId: i, avatar: a, avatarDecoration: s, guildRoles: o, roles: l, premiumSince: u, isPending: c, joinedAt: d, communicationDisabledUntil: f, unusualDMActivityUntil: _, fullProfileLoadedTimestamp: h, flags: p } = e,
        { colorString: m, colorRoleId: g, iconRoleId: v, hoistRoleId: I, highestRoleId: y } = Y(o, l),
        S = {
            userId: n,
            nick: r,
            guildId: i,
            avatar: a,
            avatarDecoration: s,
            roles: l,
            colorString: m,
            colorRoleId: g,
            iconRoleId: v,
            hoistRoleId: I,
            highestRoleId: y,
            premiumSince: u,
            isPending: c,
            joinedAt: d,
            communicationDisabledUntil: f,
            unusualDMActivityUntil: _,
            fullProfileLoadedTimestamp: h,
            flags: p
        };
    if (null == R[i]) return S;
    if (n === b.default.getId()) {
        if (E.Z.isViewingRoles(i) || E.Z.isFullServerPreview(i)) {
            let e = E.Z.getViewingRoles(i);
            O[i] = {
                ...S,
                ...E.Z.getMemberOptions(i),
                roles: null != e ? T.default.keys(e) : []
            };
        } else null != O[i] && delete O[i];
    }
    return S;
}
function K(e) {
    x ? (x = !1) : (R = {}), (L = {}), q(e);
}
function z(e) {
    e.guilds.forEach((e) => {
        var n;
        let r = e.id;
        eg({
            id: r,
            members: e.members
        }),
            null === (n = e.activity_instances) ||
                void 0 === n ||
                n.forEach((e) => {
                    em(r, e.participants);
                });
    });
}
function q(e) {
    e.guilds.forEach((e) => {
        eg(e);
    });
}
function Q(e) {
    let { guildMembers: n } = e;
    R = { ...n };
}
function X(e) {
    let { guildMembers: n, guilds: r } = e;
    (x = !0), (R = { ...n }), (D = {}), $(r);
}
function J(e) {
    let { guilds: n } = e;
    $(n);
}
function $(e) {
    for (let n of e) {
        if (null != n.member) {
            if (
                (null == D[n.id]
                    ? (D[n.id] = n.member)
                    : (D[n.id] = {
                          ...n.member,
                          roles: n.member.roles
                      }),
                null != R[n.id])
            ) {
                let e = R[n.id];
                null != e[n.member.userId] &&
                    (e[n.member.userId] = {
                        ...e[n.member.userId],
                        roles: n.member.roles
                    });
            }
        }
    }
}
function ee(e) {
    var n, r;
    if (null == e.guildId || null == S.Z.getGuild(e.guildId)) return !1;
    (x = !0), (R[e.guildId] = null !== (n = R[e.guildId]) && void 0 !== n ? n : {});
    let i = !1;
    for (let n of ((x = !0), (R[e.guildId] = null !== (r = R[e.guildId]) && void 0 !== r ? r : {}), e.members)) null == R[e.guildId][n.userId] && ((i = !0), (R[e.guildId][n.userId] = n));
    return i;
}
function et(e) {
    var n;
    let { guildId: r, user: i, nick: a, avatar: s, avatarDecoration: o, roles: l, premiumSince: u, isPending: c, joinedAt: d, communicationDisabledUntil: f, unusualDMActivityUntil: _, flags: h } = e,
        p = R[r];
    if (null == p) return !1;
    let m = S.Z.getGuild(r);
    if (null == m) return C.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (p[i.id] = W({
        userId: i.id,
        nick: a,
        guildId: r,
        avatar: s,
        avatarDecoration:
            null != o
                ? {
                      asset: o.asset,
                      skuId: o.sku_id
                  }
                : void 0,
        guildRoles: S.Z.getRoles(m.id),
        roles: l,
        premiumSince: u,
        isPending: c,
        joinedAt: d,
        communicationDisabledUntil: f,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: null === (n = p[i.id]) || void 0 === n ? void 0 : n.fullProfileLoadedTimestamp,
        flags: h
    })),
        B(r, p[i.id]);
}
function en(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = R[n];
    if (null == a) return !1;
    let s = S.Z.getGuild(n);
    if (null == s) return C.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = a[r];
    if (null == o || o.roles.includes(i)) return !1;
    o.roles = [...o.roles, i];
    let l = Y(S.Z.getRoles(s.id), o.roles);
    return (
        (a[r] = {
            ...o,
            ...l
        }),
        !0
    );
}
function er(e) {
    let { guildId: n, userId: r, roleId: i } = e,
        a = R[n];
    if (null == a) return !1;
    let s = S.Z.getGuild(n);
    if (null == s) return C.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = a[r];
    if (null == o || !o.roles.includes(i)) return !1;
    o.roles = o.roles.filter((e) => e !== i);
    let l = Y(S.Z.getRoles(s.id), o.roles);
    return (
        (a[r] = {
            ...o,
            ...l
        }),
        !0
    );
}
function ei(e) {
    let { guildMember: n, guildId: r } = e,
        i = R[r];
    if (null == i) return !1;
    let a = S.Z.getGuild(r);
    if (null == a) return C.warn('Guild '.concat(r, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (i[n.user.id] = W({
        userId: n.user.id,
        nick: n.nick,
        guildId: r,
        avatar: n.avatar,
        avatarDecoration: ef(n),
        guildRoles: S.Z.getRoles(a.id),
        roles: n.roles,
        premiumSince: n.premium_since,
        isPending: n.pending,
        joinedAt: n.joined_at,
        communicationDisabledUntil: n.communication_disabled_until,
        unusualDMActivityUntil: n.unusual_dm_activity_until,
        flags: n.flags,
        fullProfileLoadedTimestamp: Date.now()
    })),
        B(r, i[n.user.id]);
}
function ea(e) {
    let n = !1;
    for (let r of e.chunks) n = ed(r.guildId, r.members) || n;
    return n;
}
function es(e) {
    return !!(e.members.length > 0) && ed(e.guildId, e.members);
}
function eo(e) {
    let { guildId: n, members: r } = e;
    return ed(n, r.map((e) => e.member).filter(I.lm));
}
function el(e) {
    let { guildId: n, owners: r } = e;
    return ed(n, r);
}
function eu(e) {
    let { guildId: n, threads: r } = e;
    return ed(
        n,
        Object.values(r)
            .map((e) => e.owner)
            .filter(I.lm)
    );
}
function ec(e) {
    let { guildId: n, addedMembers: r } = e;
    return null != r && ed(n, r.map((e) => e.member).filter(I.lm));
}
function ed(e, n) {
    let r = R[e];
    if (null == r) return !1;
    let i = S.Z.getGuild(e);
    return null == i
        ? (C.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (n.forEach((n) => {
              var a;
              let s = r[n.user.id];
              (r[n.user.id] = W({
                  userId: n.user.id,
                  nick: n.nick,
                  guildId: e,
                  avatar: n.avatar,
                  avatarDecoration: ef(n),
                  guildRoles: S.Z.getRoles(i.id),
                  roles: n.roles,
                  premiumSince: n.premium_since,
                  isPending: n.pending,
                  joinedAt: n.joined_at,
                  communicationDisabledUntil: n.communication_disabled_until,
                  flags: n.flags,
                  fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (a = n.unusual_dm_activity_until) && void 0 !== a ? a : null == s ? void 0 : s.unusualDMActivityUntil
              })),
                  B(e, r[n.user.id]);
          }),
          P++,
          !0);
}
function ef(e) {
    return null != e.avatar_decoration_data
        ? {
              asset: e.avatar_decoration_data.asset,
              skuId: e.avatar_decoration_data.sku_id
          }
        : void 0;
}
function e_(e) {
    let { guildId: n, members: r } = e;
    return ed(
        n,
        r.map((e) => {
            let { member: n } = e;
            return n;
        })
    );
}
function eh(e) {
    let { guildId: n, user: r } = e,
        i = R[n];
    if (null == i || null == i[r.id]) return !1;
    delete i[r.id], G(n, r.id), P++;
}
function ep(e) {
    let { guild: n } = e;
    return eg(n);
}
function em(e, n) {
    return eg({
        id: e,
        members: n.filter(h.Z).map((e) => e.member)
    });
}
function eg(e) {
    let n = e.id;
    !(n in R) && (R[e.id] = {});
    let r = S.Z.getGuild(n);
    if (null == r) return !1;
    let i = R[n];
    for (let s of e.members) {
        var a;
        let o = s.user.id,
            l = i[o],
            u = W({
                userId: o,
                nick: s.nick,
                guildId: e.id,
                avatar: s.avatar,
                avatarDecoration: ef(s),
                guildRoles: S.Z.getRoles(r.id),
                roles: s.roles,
                premiumSince: s.premium_since,
                isPending: s.pending,
                joinedAt: s.joined_at,
                communicationDisabledUntil: s.communication_disabled_until,
                fullProfileLoadedTimestamp: null == l ? void 0 : l.fullProfileLoadedTimestamp,
                flags: s.flags,
                unusualDMActivityUntil: null !== (a = s.unusual_dm_activity_until) && void 0 !== a ? a : null == l ? void 0 : l.unusualDMActivityUntil
            });
        (i[o] = u), B(n, u);
    }
    return !0;
}
function eE(e) {
    let { guild: n } = e;
    delete R[n.id], G(n.id);
}
function ev(e) {
    let n = R[e.guildId];
    if (null == n) return !1;
    let r = S.Z.getGuild(e.guildId);
    if (null == r) return C.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    let i = b.default.getId();
    for (let a of T.default.keys(n)) {
        let s = n[a];
        if ((null != s.roles && s.roles.length > 0) || null != s.colorString || null != s.hoistRoleId) {
            let o = a === i && 'GUILD_ROLE_DELETE' === e.type ? s.roles.filter((n) => n !== e.roleId) : s.roles;
            (n[a] = W({
                userId: a,
                nick: s.nick,
                guildId: e.guildId,
                avatar: s.avatar,
                avatarDecoration: s.avatarDecoration,
                guildRoles: S.Z.getRoles(r.id),
                roles: o,
                premiumSince: s.premiumSince,
                isPending: s.isPending,
                joinedAt: s.joinedAt,
                flags: s.flags,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp
            })),
                B(e.guildId, n[a]);
        }
    }
}
function eI(e) {
    var n, r, i;
    let { guildId: a, roles: s, addedRoleIds: o, removedRoleIds: l, flags: u } = e,
        d = b.default.getId(),
        f = R[a],
        _ = null != f ? f[d] : null;
    if (null == _) return !1;
    let h = S.Z.getGuild(a);
    if (null == h) return !1;
    let p = null !== (n = k[a]) && void 0 !== n ? n : {};
    (k[a] = {
        added: c().difference(c().union(null !== (r = p.added) && void 0 !== r ? r : [], o), null != l ? l : []),
        removed: c().difference(c().union(null !== (i = p.removed) && void 0 !== i ? i : [], l), null != o ? o : [])
    }),
        (f[d] = W({
            userId: d,
            guildId: a,
            nick: _.nick,
            avatar: _.avatar,
            avatarDecoration: _.avatarDecoration,
            guildRoles: S.Z.getRoles(h.id),
            roles: null != s ? s : _.roles,
            premiumSince: _.premiumSince,
            isPending: _.isPending,
            joinedAt: _.joinedAt,
            flags: null != u ? u : _.flags,
            fullProfileLoadedTimestamp: _.fullProfileLoadedTimestamp
        }));
}
function eT(e) {
    let { guildId: n } = e;
    if (null == n) return !1;
    delete k[n];
}
function eb(e) {
    let { guildId: n } = e,
        r = R[n];
    if (null == r) return !1;
    let i = S.Z.getGuild(n);
    if (null == i) return C.warn('Guild '.concat(n, ' not found during IMPERSONATE_UPDATE.')), !1;
    let a = b.default.getId(),
        s = r[a];
    r[a] = W({
        userId: a,
        nick: s.nick,
        guildId: n,
        avatar: s.avatar,
        avatarDecoration: s.avatarDecoration,
        guildRoles: S.Z.getRoles(i.id),
        roles: s.roles,
        premiumSince: s.premiumSince,
        isPending: s.isPending,
        joinedAt: s.joinedAt,
        communicationDisabledUntil: s.communicationDisabledUntil,
        fullProfileLoadedTimestamp: s.fullProfileLoadedTimestamp,
        flags: s.flags
    });
}
function ey(e) {
    var n;
    let { message: r, guildId: i } = e;
    (null === (n = r.resolved) || void 0 === n ? void 0 : n.members) != null &&
        null != i &&
        eg({
            id: i,
            members: Object.entries(r.resolved.members)
                .map((e) => {
                    var n, i;
                    let [a, s] = e,
                        o = null === (i = r.resolved) || void 0 === i ? void 0 : null === (n = i.users) || void 0 === n ? void 0 : n[a];
                    if (null != o)
                        return {
                            ...s,
                            user: o
                        };
                })
                .filter((e) => null != e)
        });
}
function eS(e) {
    var n;
    if ((null === (n = e.resolved) || void 0 === n ? void 0 : n.members) == null) return;
    let r = y.Z.getChannel(e.channel_id);
    !(null == r || r.isPrivate()) &&
        eg({
            id: r.guild_id,
            members: Object.entries(e.resolved.members)
                .map((n) => {
                    var r, i;
                    let [a, s] = n,
                        o = null === (i = e.resolved) || void 0 === i ? void 0 : null === (r = i.users) || void 0 === r ? void 0 : r[a];
                    if (null != o)
                        return {
                            ...s,
                            user: o
                        };
                })
                .filter((e) => null != e)
        });
}
function eA(e) {
    let { messages: n } = e;
    n.forEach((e) => eS(e));
}
function eN(e) {
    let { messages: n } = e;
    n.forEach((e) => eA({ messages: e }));
}
function eC(e) {
    let { location: n, participants: r } = e;
    return null != n.guild_id && em(n.guild_id, r);
}
!(function (e) {
    (e[(e.GUILD = 0)] = 'GUILD'), (e[(e.USER = 1)] = 'USER');
})(i || (i = {}));
class eR extends (a = f.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, b.default, E.Z);
    }
    getMutableAllGuildsAndMembers() {
        return R;
    }
    memberOf(e) {
        return c()(R)
            .toPairs()
            .filter((n) => {
                let [r, i] = n;
                return null != i[e];
            })
            .map((e) => {
                let [n] = e;
                return n;
            })
            .value();
    }
    getNicknameGuildsMapping(e) {
        let n = {};
        for (let i in R) {
            var r;
            let a = null === (r = R[i][e]) || void 0 === r ? void 0 : r.nick;
            if (null != a) !Object.prototype.hasOwnProperty.call(n, a) && (n[a] = []), n[a].push(i);
        }
        return n;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, n) {
        if (null == e || null == n) return !1;
        let r = R[e];
        return null != r && null != r[n];
    }
    isGuestOrLurker(e, n) {
        var r;
        if (null == e || null == n) return !1;
        let i = R[e];
        return null != i && (null === (r = i[n]) || void 0 === r ? void 0 : r.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let n = b.default.getId(),
            r = R[e];
        if (null == r || null == r[n]) return !1;
        let i = r[n].flags;
        return null != i && (0, v.yE)(i, A.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let n = R[e];
        return null == n ? [] : T.default.keys(n);
    }
    getMembers(e) {
        if (null == e) return [];
        let n = R[e];
        return null == n ? [] : Object.values(n);
    }
    getTrueMember(e, n) {
        let r = R[e];
        return null != r ? r[n] : null;
    }
    getMember(e, n) {
        let r = this.getTrueMember(e, n);
        if (null != r && n === b.default.getId() && (E.Z.isViewingRoles(e) || E.Z.isFullServerPreview(e))) {
            var i;
            return null !== (i = O[e]) && void 0 !== i ? i : r;
        }
        return r;
    }
    getSelfMember(e) {
        return this.getMember(e, b.default.getId());
    }
    getCachedSelfMember(e) {
        var n;
        return null !== (n = D[e]) && void 0 !== n ? n : null;
    }
    getNick(e, n) {
        if (null == e || null == n) return null;
        let r = this.getMember(e, n);
        return null != r ? r.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return L;
    }
    getCommunicationDisabledVersion() {
        return w;
    }
    getPendingRoleUpdates(e) {
        var n;
        return null !== (n = k[e]) && void 0 !== n ? n : U;
    }
    getMemberRoleWithPendingUpdates(e, n) {
        var r, i;
        let a = null !== (i = null === (r = this.getMember(e, n)) || void 0 === r ? void 0 : r.roles) && void 0 !== i ? i : [],
            s = k[e];
        return null == s ? a : c().difference(c().union(a, s.added), s.removed);
    }
    getMemberVersion() {
        return P;
    }
}
N(eR, 'displayName', 'GuildMemberStore'),
    (n.ZP = new eR(_.Z, {
        CONNECTION_OPEN: K,
        CONNECTION_OPEN_SUPPLEMENTAL: z,
        OVERLAY_INITIALIZE: Q,
        CACHE_LOADED: X,
        CACHE_LOADED_LAZY: J,
        GUILD_CREATE: ep,
        GUILD_DELETE: eE,
        GUILD_MEMBER_ADD: et,
        GUILD_MEMBER_UPDATE: et,
        GUILD_MEMBER_UPDATE_LOCAL: eI,
        GUILD_MEMBERS_CHUNK_BATCH: ea,
        GUILD_MEMBER_REMOVE: eh,
        THREAD_MEMBER_LIST_UPDATE: eo,
        THREAD_MEMBERS_UPDATE: ec,
        LOAD_ARCHIVED_THREADS_SUCCESS: el,
        LOAD_FORUM_POSTS: eu,
        GUILD_ROLE_UPDATE: ev,
        GUILD_ROLE_DELETE: ev,
        GUILD_ROLE_MEMBER_REMOVE: er,
        GUILD_ROLE_MEMBER_ADD: en,
        GUILD_MEMBER_PROFILE_UPDATE: ei,
        IMPERSONATE_UPDATE: eb,
        IMPERSONATE_STOP: eb,
        PASSIVE_UPDATE_V2: es,
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: eT,
        LOCAL_MESSAGES_LOADED: ee,
        MESSAGE_CREATE: ey,
        MESSAGE_UPDATE: ey,
        LOAD_MESSAGES_SUCCESS: eA,
        LOAD_MESSAGES_AROUND_SUCCESS: eA,
        LOAD_PINNED_MESSAGES_SUCCESS: eA,
        LOAD_RECENT_MENTIONS_SUCCESS: eA,
        SEARCH_FINISH: eN,
        MOD_VIEW_SEARCH_FINISH: eN,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: e_,
        EMBEDDED_ACTIVITY_UPDATE_V2: eC
    }));
