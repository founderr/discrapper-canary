n.d(t, {
    O5: function () {
        return Z;
    },
    V6: function () {
        return F;
    }
});
var r,
    i,
    a = n(47120);
var o = n(789020);
var s = n(653041);
var l = n(392711),
    u = n.n(l),
    c = n(866442),
    d = n(442837),
    _ = n(570140),
    E = n(710845),
    f = n(69882),
    h = n(134049),
    p = n(160404),
    m = n(630388),
    I = n(823379),
    T = n(709054),
    g = n(314897),
    S = n(592125),
    A = n(430824),
    v = n(372897);
function N(e, t, n) {
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
let O = new E.Z('GuildMemberStore'),
    R = {},
    C = {},
    y = {},
    L = !1,
    b = 0,
    D = 0,
    M = {},
    P = {},
    U = {
        added: [],
        removed: []
    };
function w(e, t) {
    if (null == t.communicationDisabledUntil || !(0, f.b)(t)) return x(e, t.userId);
    let n = B(e, t.userId);
    y[n] !== t.communicationDisabledUntil && (0, f.b)(t) && ((y[n] = t.communicationDisabledUntil), G(n));
}
function x(e, t) {
    if (null != t) {
        let n = B(e, t);
        null != y[n] && G(n), k(B(e, t));
    } else
        for (let t in y) {
            let n = t;
            Z(n) === e && (G(t), k(n));
        }
}
function G(e) {
    (b += 1), (M[e] = b);
}
function k(e) {
    F(e) === g.default.getId() && (0, h.l)(Z(e)), delete y[e];
}
function B(e, t) {
    let n = [];
    return (n[0] = e), (n[1] = t), n.join('-');
}
function F(e) {
    return e.split('-')[1];
}
function Z(e) {
    return e.split('-')[0];
}
function V(e, t) {
    let n, r, i, a, o;
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
        if (null != t) (null == o || t.position > o.position) && (o = t), t.color > 0 && (null == r || t.position > r.position) && (r = t), t.hoist && (null == i || t.position > i.position) && (i = t), (null != t.icon || null != t.unicodeEmoji) && (null == a || t.position > a.position) && (a = t);
    }
    if (null != r) {
        var s;
        null == r.colorString && r.color > 0 && (r.colorString = (0, c.Rf)(r.color)), (n = null !== (s = r.colorString) && void 0 !== s ? s : void 0);
    }
    return {
        colorString: n,
        colorRoleId: null == r ? void 0 : r.id,
        iconRoleId: null == a ? void 0 : a.id,
        hoistRoleId: null == i ? void 0 : i.id,
        highestRoleId: null == o ? void 0 : o.id
    };
}
function H(e) {
    let { userId: t, nick: n, guildId: r, avatar: i, avatarDecoration: a, guildRoles: o, roles: s, premiumSince: l, isPending: u, joinedAt: c, communicationDisabledUntil: d, unusualDMActivityUntil: _, fullProfileLoadedTimestamp: E, flags: f } = e,
        { colorString: h, colorRoleId: m, iconRoleId: I, hoistRoleId: S, highestRoleId: A } = V(o, s),
        v = {
            userId: t,
            nick: n,
            guildId: r,
            avatar: i,
            avatarDecoration: a,
            roles: s,
            colorString: h,
            colorRoleId: m,
            iconRoleId: I,
            hoistRoleId: S,
            highestRoleId: A,
            premiumSince: l,
            isPending: u,
            joinedAt: c,
            communicationDisabledUntil: d,
            unusualDMActivityUntil: _,
            fullProfileLoadedTimestamp: E,
            flags: f
        };
    if (null == R[r]) return v;
    if (t === g.default.getId()) {
        if (p.Z.isViewingRoles(r) || p.Z.isFullServerPreview(r)) {
            let e = p.Z.getViewingRoles(r);
            C[r] = {
                ...v,
                ...p.Z.getMemberOptions(r),
                roles: null != e ? T.default.keys(e) : []
            };
        } else null != C[r] && delete C[r];
    }
    return v;
}
function Y(e) {
    L ? (L = !1) : (R = {}), (y = {}), W(e);
}
function j(e) {
    e.guilds.forEach((e) => {
        var t;
        let n = e.id;
        e_({
            id: n,
            members: e.members
        }),
            null === (t = e.activity_instances) ||
                void 0 === t ||
                t.forEach((e) => {
                    ed(n, e.participants);
                });
    });
}
function W(e) {
    e.guilds.forEach((e) => {
        e_(e);
    });
}
function K(e) {
    let { guildMembers: t } = e;
    R = { ...t };
}
function z(e) {
    let { guildMembers: t } = e;
    (L = !0), (R = { ...t });
}
function q(e) {
    var t, n;
    if (null == e.guildId || null == A.Z.getGuild(e.guildId)) return !1;
    (L = !0), (R[e.guildId] = null !== (t = R[e.guildId]) && void 0 !== t ? t : {});
    let r = !1;
    for (let t of ((L = !0), (R[e.guildId] = null !== (n = R[e.guildId]) && void 0 !== n ? n : {}), e.members)) null == R[e.guildId][t.userId] && ((r = !0), (R[e.guildId][t.userId] = t));
    return r;
}
function Q(e) {
    var t;
    let { guildId: n, user: r, nick: i, avatar: a, avatarDecoration: o, roles: s, premiumSince: l, isPending: u, joinedAt: c, communicationDisabledUntil: d, unusualDMActivityUntil: _, flags: E } = e,
        f = R[n];
    if (null == f) return !1;
    let h = A.Z.getGuild(n);
    if (null == h) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (f[r.id] = H({
        userId: r.id,
        nick: i,
        guildId: n,
        avatar: a,
        avatarDecoration:
            null != o
                ? {
                      asset: o.asset,
                      skuId: o.sku_id
                  }
                : void 0,
        guildRoles: A.Z.getRoles(h.id),
        roles: s,
        premiumSince: l,
        isPending: u,
        joinedAt: c,
        communicationDisabledUntil: d,
        unusualDMActivityUntil: _,
        fullProfileLoadedTimestamp: null === (t = f[r.id]) || void 0 === t ? void 0 : t.fullProfileLoadedTimestamp,
        flags: E
    })),
        w(n, f[r.id]);
}
function X(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = R[t];
    if (null == i) return !1;
    let a = A.Z.getGuild(t);
    if (null == a) return O.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = i[n];
    if (null == o || o.roles.includes(r)) return !1;
    o.roles = [...o.roles, r];
    let s = V(A.Z.getRoles(a.id), o.roles);
    return (
        (i[n] = {
            ...o,
            ...s
        }),
        !0
    );
}
function $(e) {
    let { guildId: t, userId: n, roleId: r } = e,
        i = R[t];
    if (null == i) return !1;
    let a = A.Z.getGuild(t);
    if (null == a) return O.warn('Guild '.concat(t, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    let o = i[n];
    if (null == o || !o.roles.includes(r)) return !1;
    o.roles = o.roles.filter((e) => e !== r);
    let s = V(A.Z.getRoles(a.id), o.roles);
    return (
        (i[n] = {
            ...o,
            ...s
        }),
        !0
    );
}
function J(e) {
    let { guildMember: t, guildId: n } = e,
        r = R[n];
    if (null == r) return !1;
    let i = A.Z.getGuild(n);
    if (null == i) return O.warn('Guild '.concat(n, ' not found during GUILD_MEMBER_UPDATE.')), !1;
    (r[t.user.id] = H({
        userId: t.user.id,
        nick: t.nick,
        guildId: n,
        avatar: t.avatar,
        avatarDecoration: es(t),
        guildRoles: A.Z.getRoles(i.id),
        roles: t.roles,
        premiumSince: t.premium_since,
        isPending: t.pending,
        joinedAt: t.joined_at,
        communicationDisabledUntil: t.communication_disabled_until,
        unusualDMActivityUntil: t.unusual_dm_activity_until,
        flags: t.flags,
        fullProfileLoadedTimestamp: Date.now()
    })),
        w(n, r[t.user.id]);
}
function ee(e) {
    let t = !1;
    for (let n of e.chunks) t = eo(n.guildId, n.members) || t;
    return t;
}
function et(e) {
    return !!(e.members.length > 0) && eo(e.guildId, e.members);
}
function en(e) {
    let { guildId: t, members: n } = e;
    return eo(t, n.map((e) => e.member).filter(I.lm));
}
function er(e) {
    let { guildId: t, owners: n } = e;
    return eo(t, n);
}
function ei(e) {
    let { guildId: t, threads: n } = e;
    return eo(
        t,
        Object.values(n)
            .map((e) => e.owner)
            .filter(I.lm)
    );
}
function ea(e) {
    let { guildId: t, addedMembers: n } = e;
    return null != n && eo(t, n.map((e) => e.member).filter(I.lm));
}
function eo(e, t) {
    let n = R[e];
    if (null == n) return !1;
    let r = A.Z.getGuild(e);
    return null == r
        ? (O.warn('Guild '.concat(e, ' not found during batchUpdateGuildMembers.')), !1)
        : (t.forEach((t) => {
              var i;
              let a = n[t.user.id];
              (n[t.user.id] = H({
                  userId: t.user.id,
                  nick: t.nick,
                  guildId: e,
                  avatar: t.avatar,
                  avatarDecoration: es(t),
                  guildRoles: A.Z.getRoles(r.id),
                  roles: t.roles,
                  premiumSince: t.premium_since,
                  isPending: t.pending,
                  joinedAt: t.joined_at,
                  communicationDisabledUntil: t.communication_disabled_until,
                  flags: t.flags,
                  fullProfileLoadedTimestamp: null == a ? void 0 : a.fullProfileLoadedTimestamp,
                  unusualDMActivityUntil: null !== (i = t.unusual_dm_activity_until) && void 0 !== i ? i : null == a ? void 0 : a.unusualDMActivityUntil
              })),
                  w(e, n[t.user.id]);
          }),
          D++,
          !0);
}
function es(e) {
    return null != e.avatar_decoration_data
        ? {
              asset: e.avatar_decoration_data.asset,
              skuId: e.avatar_decoration_data.sku_id
          }
        : void 0;
}
function el(e) {
    let { guildId: t, members: n } = e;
    return eo(
        t,
        n.map((e) => {
            let { member: t } = e;
            return t;
        })
    );
}
function eu(e) {
    let { guildId: t, user: n } = e,
        r = R[t];
    if (null == r || null == r[n.id]) return !1;
    delete r[n.id], x(t, n.id), D++;
}
function ec(e) {
    let { guild: t } = e;
    return e_(t);
}
function ed(e, t) {
    e_({
        id: e,
        members: t.map((e) => e.member).filter(I.lm)
    });
}
function e_(e) {
    let t = e.id;
    !(t in R) && (R[e.id] = {});
    let n = A.Z.getGuild(t);
    if (null == n) return !1;
    let r = R[t];
    for (let a of e.members) {
        var i;
        let o = a.user.id,
            s = r[o],
            l = H({
                userId: o,
                nick: a.nick,
                guildId: e.id,
                avatar: a.avatar,
                avatarDecoration: es(a),
                guildRoles: A.Z.getRoles(n.id),
                roles: a.roles,
                premiumSince: a.premium_since,
                isPending: a.pending,
                joinedAt: a.joined_at,
                communicationDisabledUntil: a.communication_disabled_until,
                fullProfileLoadedTimestamp: null == s ? void 0 : s.fullProfileLoadedTimestamp,
                flags: a.flags,
                unusualDMActivityUntil: null !== (i = a.unusual_dm_activity_until) && void 0 !== i ? i : null == s ? void 0 : s.unusualDMActivityUntil
            });
        (r[o] = l), w(t, l);
    }
    return !0;
}
function eE(e) {
    let { guild: t } = e;
    delete R[t.id], x(t.id);
}
function ef(e) {
    let t = R[e.guildId];
    if (null == t) return !1;
    let n = A.Z.getGuild(e.guildId);
    if (null == n) return O.warn('Guild '.concat(e.guildId, ' not found during ').concat(e.type, '.')), !1;
    for (let r of T.default.keys(t)) {
        let i = t[r];
        ((null != i.roles && i.roles.length > 0) || null != i.colorString || null != i.hoistRoleId) &&
            ((t[r] = H({
                userId: r,
                nick: i.nick,
                guildId: e.guildId,
                avatar: i.avatar,
                avatarDecoration: i.avatarDecoration,
                guildRoles: A.Z.getRoles(n.id),
                roles: i.roles,
                premiumSince: i.premiumSince,
                isPending: i.isPending,
                joinedAt: i.joinedAt,
                flags: i.flags,
                fullProfileLoadedTimestamp: null == i ? void 0 : i.fullProfileLoadedTimestamp
            })),
            w(e.guildId, t[r]));
    }
}
function eh(e) {
    var t, n, r;
    let { guildId: i, roles: a, addedRoleIds: o, removedRoleIds: s, flags: l } = e,
        c = g.default.getId(),
        d = R[i],
        _ = null != d ? d[c] : null;
    if (null == _) return !1;
    let E = A.Z.getGuild(i);
    if (null == E) return !1;
    let f = null !== (t = P[i]) && void 0 !== t ? t : {};
    (P[i] = {
        added: u().difference(u().union(null !== (n = f.added) && void 0 !== n ? n : [], o), null != s ? s : []),
        removed: u().difference(u().union(null !== (r = f.removed) && void 0 !== r ? r : [], s), null != o ? o : [])
    }),
        (d[c] = H({
            userId: c,
            guildId: i,
            nick: _.nick,
            avatar: _.avatar,
            avatarDecoration: _.avatarDecoration,
            guildRoles: A.Z.getRoles(E.id),
            roles: null != a ? a : _.roles,
            premiumSince: _.premiumSince,
            isPending: _.isPending,
            joinedAt: _.joinedAt,
            flags: null != l ? l : _.flags,
            fullProfileLoadedTimestamp: _.fullProfileLoadedTimestamp
        }));
}
function ep(e) {
    let { guildId: t } = e;
    if (null == t) return !1;
    delete P[t];
}
function em(e) {
    let { guildId: t } = e,
        n = R[t];
    if (null == n) return !1;
    let r = A.Z.getGuild(t);
    if (null == r) return O.warn('Guild '.concat(t, ' not found during IMPERSONATE_UPDATE.')), !1;
    let i = g.default.getId(),
        a = n[i];
    n[i] = H({
        userId: i,
        nick: a.nick,
        guildId: t,
        avatar: a.avatar,
        avatarDecoration: a.avatarDecoration,
        guildRoles: A.Z.getRoles(r.id),
        roles: a.roles,
        premiumSince: a.premiumSince,
        isPending: a.isPending,
        joinedAt: a.joinedAt,
        communicationDisabledUntil: a.communicationDisabledUntil,
        fullProfileLoadedTimestamp: a.fullProfileLoadedTimestamp,
        flags: a.flags
    });
}
function eI(e) {
    var t;
    let { message: n, guildId: r } = e;
    (null === (t = n.resolved) || void 0 === t ? void 0 : t.members) != null &&
        null != r &&
        e_({
            id: r,
            members: Object.entries(n.resolved.members)
                .map((e) => {
                    var t, r;
                    let [i, a] = e,
                        o = null === (r = n.resolved) || void 0 === r ? void 0 : null === (t = r.users) || void 0 === t ? void 0 : t[i];
                    if (null != o)
                        return {
                            ...a,
                            user: o
                        };
                })
                .filter((e) => null != e)
        });
}
function eT(e) {
    var t;
    if ((null === (t = e.resolved) || void 0 === t ? void 0 : t.members) == null) return;
    let n = S.Z.getChannel(e.channel_id);
    !(null == n || n.isPrivate()) &&
        e_({
            id: n.guild_id,
            members: Object.entries(e.resolved.members)
                .map((t) => {
                    var n, r;
                    let [i, a] = t,
                        o = null === (r = e.resolved) || void 0 === r ? void 0 : null === (n = r.users) || void 0 === n ? void 0 : n[i];
                    if (null != o)
                        return {
                            ...a,
                            user: o
                        };
                })
                .filter((e) => null != e)
        });
}
function eg(e) {
    let { messages: t } = e;
    t.forEach((e) => eT(e));
}
function eS(e) {
    let { messages: t } = e;
    t.forEach((e) => eg({ messages: e }));
}
function eA(e) {
    let { location: t, participants: n } = e;
    null != t.guild_id && ed(t.guild_id, n);
}
!(function (e) {
    (e[(e.GUILD = 0)] = 'GUILD'), (e[(e.USER = 1)] = 'USER');
})(r || (r = {}));
class ev extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(A.Z, g.default, p.Z);
    }
    getMutableAllGuildsAndMembers() {
        return R;
    }
    memberOf(e) {
        return u()(R)
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
        for (let r in R) {
            var n;
            let i = null === (n = R[r][e]) || void 0 === n ? void 0 : n.nick;
            if (null != i) !Object.prototype.hasOwnProperty.call(t, i) && (t[i] = []), t[i].push(r);
        }
        return t;
    }
    getNicknames(e) {
        return Object.keys(this.getNicknameGuildsMapping(e));
    }
    isMember(e, t) {
        if (null == e || null == t) return !1;
        let n = R[e];
        return null != n && null != n[t];
    }
    isGuestOrLurker(e, t) {
        var n;
        if (null == e || null == t) return !1;
        let r = R[e];
        return null != r && (null === (n = r[t]) || void 0 === n ? void 0 : n.joinedAt) == null;
    }
    isCurrentUserGuest(e) {
        if (null == e) return !1;
        let t = g.default.getId(),
            n = R[e];
        if (null == n || null == n[t]) return !1;
        let r = n[t].flags;
        return null != r && (0, m.yE)(r, v.q.IS_GUEST);
    }
    getMemberIds(e) {
        if (null == e) return [];
        let t = R[e];
        return null == t ? [] : T.default.keys(t);
    }
    getMembers(e) {
        if (null == e) return [];
        let t = R[e];
        return null == t ? [] : Object.values(t);
    }
    getTrueMember(e, t) {
        let n = R[e];
        return null != n ? n[t] : null;
    }
    getMember(e, t) {
        let n = this.getTrueMember(e, t);
        if (null != n && t === g.default.getId() && (p.Z.isViewingRoles(e) || p.Z.isFullServerPreview(e))) {
            var r;
            return null !== (r = C[e]) && void 0 !== r ? r : n;
        }
        return n;
    }
    getSelfMember(e) {
        return this.getMember(e, g.default.getId());
    }
    getNick(e, t) {
        if (null == e || null == t) return null;
        let n = this.getMember(e, t);
        return null != n ? n.nick : null;
    }
    getCommunicationDisabledUserMap() {
        return y;
    }
    getCommunicationDisabledVersion() {
        return b;
    }
    getPendingRoleUpdates(e) {
        var t;
        return null !== (t = P[e]) && void 0 !== t ? t : U;
    }
    getMemberRoleWithPendingUpdates(e, t) {
        var n, r;
        let i = null !== (r = null === (n = this.getMember(e, t)) || void 0 === n ? void 0 : n.roles) && void 0 !== r ? r : [],
            a = P[e];
        return null == a ? i : u().difference(u().union(i, a.added), a.removed);
    }
    getMemberVersion() {
        return D;
    }
}
N(ev, 'displayName', 'GuildMemberStore'),
    (t.ZP = new ev(_.Z, {
        CONNECTION_OPEN: Y,
        CONNECTION_OPEN_SUPPLEMENTAL: j,
        OVERLAY_INITIALIZE: K,
        CACHE_LOADED: z,
        GUILD_CREATE: ec,
        GUILD_DELETE: eE,
        GUILD_MEMBER_ADD: Q,
        GUILD_MEMBER_UPDATE: Q,
        GUILD_MEMBER_UPDATE_LOCAL: eh,
        GUILD_MEMBERS_CHUNK_BATCH: ee,
        GUILD_MEMBER_REMOVE: eu,
        THREAD_MEMBER_LIST_UPDATE: en,
        THREAD_MEMBERS_UPDATE: ea,
        LOAD_ARCHIVED_THREADS_SUCCESS: er,
        LOAD_FORUM_POSTS: ei,
        GUILD_ROLE_UPDATE: ef,
        GUILD_ROLE_DELETE: ef,
        GUILD_ROLE_MEMBER_REMOVE: $,
        GUILD_ROLE_MEMBER_ADD: X,
        GUILD_MEMBER_PROFILE_UPDATE: J,
        IMPERSONATE_UPDATE: em,
        IMPERSONATE_STOP: em,
        PASSIVE_UPDATE_V2: et,
        CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: ep,
        LOCAL_MESSAGES_LOADED: q,
        MESSAGE_CREATE: eI,
        MESSAGE_UPDATE: eI,
        LOAD_MESSAGES_SUCCESS: eg,
        LOAD_MESSAGES_AROUND_SUCCESS: eg,
        LOAD_PINNED_MESSAGES_SUCCESS: eg,
        LOAD_RECENT_MENTIONS_SUCCESS: eg,
        SEARCH_FINISH: eS,
        MOD_VIEW_SEARCH_FINISH: eS,
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: el,
        EMBEDDED_ACTIVITY_UPDATE_V2: eA
    }));
