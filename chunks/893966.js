var r,
    i = n(47120);
var a = n(724458);
var o = n(653041);
var s = n(442837),
    l = n(570140),
    u = n(314897),
    c = n(271383),
    d = n(430824),
    _ = n(594174),
    E = n(823379),
    f = n(709054),
    h = n(752560),
    p = n(588215),
    m = n(44715),
    I = n(327999),
    T = n(981631);
function g(e, t, n) {
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
let S = !1,
    A = {};
function v(e) {
    return null == A[e] && (A[e] = new h.P(e)), A[e];
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    v(e).reset(t);
}
function O() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    for (let t in A) N(t, e);
}
function R(e) {
    let { guild: t } = e,
        n = v(t.id);
    N(t.id, n.isInitialized);
}
function C(e) {
    let {
        guild: { id: t }
    } = e;
    N(t);
}
function y() {
    return !1;
}
function L(e) {
    let { guildId: t, userIds: n } = e;
    return v(t).updateMembersByMemberIds(n);
}
function b(e) {
    let { chunks: t } = e,
        n = !1;
    for (let e of t) n = v(e.guildId).updateServerMembers(e.members) || n;
    return n;
}
function D(e) {
    let { guildId: t } = e,
        n = u.default.getId();
    return v(t).updateMembersByMemberIds([n]);
}
function M(e) {
    let { guildId: t, user: n } = e;
    return v(t).removeMember(n.id);
}
function P(e) {
    let t = !1,
        n = v(e.guildId);
    return 'GUILD_ROLE_DELETE' === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}
function U(e) {
    let { guildId: t, userId: n } = e;
    return v(t).updateMembersByMemberIds([n]);
}
function w(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = v(t),
        i = n.reduce((e, t) => {
            if (null != t.member) {
                let n = t.member.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function x(e) {
    let { guildId: t, addedMembers: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = v(t),
        i = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function G(e) {
    let { guildId: t, members: n } = e;
    if (null == n || 0 === n.length) return !1;
    let r = v(t),
        i = n.reduce((e, t) => {
            let n = t.userId;
            return e.push(n), e;
        }, []);
    return r.updateMembersByMemberIds(i);
}
function k(e) {
    let { guildId: t, threads: n } = e,
        r = Object.values(n);
    if (0 === r.length) return !1;
    let i = v(t),
        a = r.reduce((e, t) => {
            if (null != t.owner) {
                let n = t.owner.user.id;
                e.push(n);
            }
            return e;
        }, []);
    return i.updateMembersByMemberIds(a);
}
function B(e) {
    let { guildId: t, guildMember: n } = e;
    return v(t).updateMembersByMemberIds([n.user.id]);
}
function F(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, members: r } = e;
            t = v(n).updateServerMembers(r) || t;
        }),
        t
    );
}
function Z(e) {
    let t = !1;
    return (
        e.guilds.forEach((e) => {
            let { id: n, activity_instances: r } = e,
                i = v(n),
                a = [];
            null == r ||
                r.forEach((e) => {
                    var t;
                    null === (t = e.participants) ||
                        void 0 === t ||
                        t.forEach((e) => {
                            (0, E.lm)(e.member) && a.push(e.member);
                        });
                }),
                (t = i.updateServerMembers(a) || t);
        }),
        t
    );
}
function V(e) {
    return S ? (S = !1) : O(!0), F(e);
}
function H(e) {
    return Z(e);
}
function Y(e) {
    let { guildMembers: t } = e,
        n = !1;
    return (
        (S = !0),
        f.default.entries(t).forEach((e) => {
            let [t, r] = e;
            n = v(t).updateClientMembers(Object.values(r)) || n;
        }),
        n
    );
}
function j(e) {
    let { guildId: t, members: n } = e;
    if (null == t || null == d.Z.getGuild(t)) return !1;
    S = !0;
    let r = v(t),
        i = [];
    for (let e of n) null == r.getMember(e.userId) && i.push(e);
    return i.length > 0 && r.updateClientMembers(i);
}
function W(e) {
    let { members: t, guildId: n } = e;
    return !!(t.length > 0) && v(n).updateServerMembers(t);
}
function K(e) {
    let { guildId: t } = e;
    return v(t).initialize();
}
function z(e) {
    let { guildId: t } = e;
    return v(t).refreshNewMembersAndSearchResults();
}
function q(e) {
    let { guildId: t, pagination: n } = e,
        [r] = v(t).updatePaginationState(n);
    return r;
}
function Q(e) {
    let { guildId: t, continuationToken: n } = e;
    return v(t).updatePaginationToken(n);
}
function X(e) {
    let { guildId: t, searchState: n } = e;
    return v(t).updateSearchState(n);
}
function $(e) {
    let { guildId: t, memberSupplementals: n } = e,
        r = (0, m.Qu)(t, n);
    return r && v(t).updateMembersByMemberIds(n.map((e) => e.userId)), r;
}
function J(e) {
    var t, n, r, i, a, o;
    let s, l;
    let { guildId: u, members: c, total_result_count: d } = e,
        _ = v(u),
        { memberIds: E, memberSupplementals: f } = c.reduce(
            (e, t) => {
                let { member: n, source_invite_code: r, join_source_type: i, inviter_id: a } = t,
                    o = n.user;
                return (
                    e.memberIds.push(o.id),
                    e.memberSupplementals.push({
                        userId: o.id,
                        sourceInviteCode: r,
                        joinSourceType: i,
                        inviterId: a
                    }),
                    e
                );
            },
            {
                memberIds: [],
                memberSupplementals: []
            }
        ),
        h = (0, m.Qu)(u, f);
    (0, I.nf)(u, E);
    let g = _.updateSearchedMembersByMemberIds(E);
    c.length > 0 && ((s = c[0]), (l = c[c.length - 1]));
    let [S] = _.updatePaginationState(
        {
            totalResultsCount: d,
            elasticSearchCursor: {
                before: (0, p.si)({
                    joinedAt: null == s ? void 0 : null === (t = s.member) || void 0 === t ? void 0 : t.joined_at,
                    userId: null !== (a = null == s ? void 0 : null === (n = s.member) || void 0 === n ? void 0 : n.user.id) && void 0 !== a ? a : T.lds
                }),
                after: (0, p.si)({
                    joinedAt: null == l ? void 0 : null === (r = l.member) || void 0 === r ? void 0 : r.joined_at,
                    userId: null !== (o = null == l ? void 0 : null === (i = l.member) || void 0 === i ? void 0 : i.user.id) && void 0 !== o ? o : T.lds
                })
            }
        },
        !1
    );
    return h || g || S;
}
class ee extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(u.default, c.ZP, _.default);
    }
    isInitialized(e) {
        return v(e).isInitialized;
    }
    getMembersByGuildId(e, t) {
        return v(e).getMembersByIndex(t);
    }
    getMembersCountByGuildId(e, t) {
        return v(e).countMembersByIndex(t);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let t = v(e),
            n = t.searchChunkSize,
            r = t.countMembersByIndex(t.getSearchIndex()),
            i = t.getTotalResultsCount();
        return null == i || i < n ? r : i;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let t = v(e);
        return t.countMembersByIndex(t.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let t = v(e);
        return t.getMembersByIndex(t.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return v(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return v(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return v(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return v(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return v(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, t) {
        return v(e).getMember(t);
    }
    getNewMemberTimestamp(e) {
        return v(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return v(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return v(e).lastCursorTimestamp;
    }
}
g(ee, 'displayName', 'MemberSafetyStore');
let et = new ee(l.Z, {
    CONNECTION_OPEN: V,
    CONNECTION_OPEN_SUPPLEMENTAL: H,
    LOCAL_MESSAGES_LOADED: j,
    CACHE_LOADED: Y,
    PASSIVE_UPDATE_V2: W,
    GUILD_CREATE: R,
    GUILD_DELETE: C,
    GUILD_MEMBERS_CHUNK_BATCH: b,
    GUILD_MEMBER_ADD: y,
    GUILD_MEMBER_UPDATE: y,
    GUILD_MEMBER_UPDATE_LOCAL: D,
    GUILD_MEMBER_REMOVE: M,
    GUILD_ROLE_UPDATE: P,
    GUILD_ROLE_DELETE: P,
    GUILD_MEMBER_PROFILE_UPDATE: B,
    GUILD_ROLE_MEMBER_REMOVE: U,
    GUILD_ROLE_MEMBER_ADD: U,
    THREAD_MEMBER_LIST_UPDATE: w,
    THREAD_MEMBERS_UPDATE: x,
    LOAD_ARCHIVED_THREADS_SUCCESS: G,
    LOAD_FORUM_POSTS: k,
    INITIALIZE_MEMBER_SAFETY_STORE: K,
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: z,
    MEMBER_SAFETY_PAGINATION_UPDATE: q,
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: Q,
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: X,
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: $,
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: J,
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: L
});
t.Z = et;
