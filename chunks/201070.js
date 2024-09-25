n.d(t, {
    $j: function () {
        return W;
    },
    M3: function () {
        return K;
    }
});
var r,
    i,
    a = n(47120);
var o = n(411104);
var s = n(348327),
    l = n.n(s),
    u = n(392711);
var c = n(652874),
    d = n(259443),
    _ = n(731965),
    E = n(379649),
    f = n(147913),
    h = n(823379),
    p = n(709054),
    m = n(823596),
    I = n(733026),
    T = n(588215),
    g = n(496135),
    S = n(893966);
function A(e, t, n) {
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
let v = -1,
    N = new d.Y('MemberSafetySearchManager');
function O(e) {
    return 'guild_'.concat(e);
}
function R(e) {
    return {
        requestState: e,
        abortController: null,
        lastUpdated: Date.now(),
        query: null,
        cursor: null,
        previousPagination: null,
        sort: null,
        elasticSearchCursor: null
    };
}
!(function (e) {
    (e[(e.FAILED = 0)] = 'FAILED'), (e[(e.UNFETCHED = 1)] = 'UNFETCHED'), (e[(e.PENDING = 2)] = 'PENDING'), (e[(e.SUCCEEDED = 3)] = 'SUCCEEDED'), (e[(e.STILL_INDEXING = 4)] = 'STILL_INDEXING');
})(r || (r = {}));
let C = (0, c.Z)((e) => ({}));
function y(e, t) {
    let n = C.getState()[e];
    return (
        null == n && (n = R(1)),
        (n = {
            ...n,
            ...t
        }),
        (0, _.j)(() => {
            C.setState((t) => ({
                ...t,
                [e]: n
            }));
        }),
        n
    );
}
function b(e) {
    return C.getState()[e];
}
function L(e) {
    let t = b(e);
    return null == t && y(e, (t = R(1))), t;
}
function D(e) {
    (0, _.j)(() => {
        C.setState((t) => {
            let n = { ...t };
            return delete n[e], n;
        });
    });
}
function M(e, t, n, r, i) {
    let a = b(e);
    if ((null == a ? void 0 : a.requestState) === 2) {
        var o;
        null === (o = a.abortController) || void 0 === o || o.abort();
    }
    return y(e, {
        requestState: 2,
        abortController: new AbortController(),
        lastUpdated: Date.now(),
        query: t,
        cursor: n,
        previousPagination: r,
        sort: i
    });
}
function P(e) {
    if (null != b(e))
        y(e, {
            requestState: 0,
            abortController: null,
            lastUpdated: Date.now()
        });
}
async function U(e) {
    if ((await (0, E._v)(200), null != b(e)))
        y(e, {
            requestState: 3,
            abortController: null,
            lastUpdated: Date.now()
        });
}
function w(e) {
    y(e, {
        requestState: 4,
        abortController: null,
        lastUpdated: Date.now()
    });
}
function x(e) {
    D(O(e));
}
function G(e) {
    return null != e && e.length > 1;
}
function k(e) {
    let t = {},
        n = {},
        { query: r } = e;
    if (G(r)) {
        let [e, n] = (0, I.C)(r);
        e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n });
    }
    let { requireUnusualDmActivity: i, requireCommunicationDisabled: a, requireUnusualAccountActivity: o, requireUsernameQuarantined: s } = e,
        l = {};
    i && (l.unusual_dm_activity_until = { range: { gte: Date.now() - T.rL } }), a && (l.communication_disabled_until = { range: { gte: Date.now() } }), o && (l.unusual_account_activity = o), s && (l.automod_quarantined_username = s), Object.keys(l).length > 0 && (n.safety_signals = l);
    let { selectedRoleIds: u } = e;
    u.size > 0 && (t.role_ids = { and_query: Array.from(u) });
    let { selectedJoinDateOption: c } = e;
    if (null != c.afterDate) {
        var d;
        t.guild_joined_at = {
            range: {
                gte: c.afterDate,
                lte: null !== (d = c.beforeDate) && void 0 !== d ? d : void 0
            }
        };
    }
    let { selectedAccountAgeOption: _ } = e;
    if (null != _.afterDate) {
        let e = t.user_id;
        t.user_id = {
            ...e,
            range: {
                gte: p.default.fromTimestamp(_.afterDate),
                lte: null != _.beforeDate ? p.default.fromTimestamp(_.beforeDate) : void 0
            }
        };
    }
    let { selectedSourceInviteCode: E } = e;
    null != E && (t.source_invite_code = { or_query: [E] });
    let { selectedJoinSourceType: f } = e;
    null != f && (t.join_source_type = { or_query: [f] });
    let h = {
            or_query: n,
            and_query: t
        },
        { selectedSort: m } = e;
    return null != m && (h.sort = m), h;
}
function B(e, t) {
    return null == t
        ? e
        : {
              ...e,
              ...t
          };
}
function F(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
function Z(e) {
    let t = (0, m.t3)(e),
        n = e.pageSize * (e.currentPage - 1),
        r = e.pageSize * e.currentPage,
        i = e.pageSize * (e.currentPage + 1);
    return {
        previousPageChunkNumber: F(n, t),
        currentPageChunkNumber: F(r, t),
        nextPageChunkNumber: F(i, t)
    };
}
function V(e, t) {
    var n;
    let { currentPageChunkNumber: r, previousPageChunkNumber: i, nextPageChunkNumber: a } = Z(t),
        { previousPagination: o } = L(O(e)),
        s = t.currentPage,
        l = null !== (n = null == o ? void 0 : o.currentPage) && void 0 !== n ? n : 0,
        u = S.Z.getElasticSearchPaginationByGuildId(e);
    switch (!0) {
        case null == u:
        case r === a && 0 === r:
            return 0;
        case r === a && r === i:
            return 1;
        case l < s && r < a:
            return 2;
        case l > s && r >= i:
            if (0 < r) return 3;
            return 0;
        default:
            return 1;
    }
}
function H(e, t, n) {
    var r, i, a, o, s, l;
    let u = V(e, n),
        c = S.Z.getElasticSearchPaginationByGuildId(e),
        d = (0, m.t3)(n);
    switch (u) {
        case 0:
            return [null, { limit: d }];
        case 1:
            return [
                null !== (r = t.cursor) && void 0 !== r ? r : null,
                {
                    limit: d,
                    after: null !== (i = t.cursor) && void 0 !== i ? i : void 0
                }
            ];
        case 2:
            return [
                null !== (a = null == c ? void 0 : c.after) && void 0 !== a ? a : null,
                {
                    limit: d,
                    after: null !== (o = null == c ? void 0 : c.after) && void 0 !== o ? o : void 0
                }
            ];
        case 3:
            return [
                null !== (s = null == c ? void 0 : c.before) && void 0 !== s ? s : null,
                {
                    limit: d,
                    before: null !== (l = null == c ? void 0 : c.before) && void 0 !== l ? l : void 0
                }
            ];
        default:
            (0, h.vE)(u);
    }
}
function Y(e, t) {
    let n = L(e);
    return l()(n.query, t);
}
async function j(e) {
    var t, n, r;
    let i = S.Z.getSearchStateByGuildId(e),
        a = S.Z.getPaginationStateByGuildId(e),
        o = O(e),
        s = L(o),
        [l, c] = H(e, s, a),
        d = B(k(i), c),
        _ = null !== (t = i.selectedSort) && void 0 !== t ? t : T.d$.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (Y(o, d) && (0, u.isEqual)(l, s.cursor)) return;
    let E = M(o, d, l, a, _);
    try {
        if (
            (N.info('Making member search request', {
                query: E.query,
                guildId: e
            }),
            null == E.query)
        )
            throw Error('Query is null');
        await (0, g.D)(e, E.query, { signal: null !== (r = null === (n = E.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== r ? r : void 0 });
    } catch (e) {
        if (v === e.code) return;
        P(o);
        return;
    }
    await U(o);
}
function W(e) {
    return C((t) => {
        var n;
        return (null === (n = t[O(e)]) || void 0 === n ? void 0 : n.requestState) === 2;
    });
}
function K(e) {
    return C((t) => {
        var n;
        return (null === (n = t[O(e)]) || void 0 === n ? void 0 : n.requestState) === 4;
    });
}
!(function (e) {
    (e[(e.FIRST_PAGE_CHUNK = 0)] = 'FIRST_PAGE_CHUNK'), (e[(e.CURRENT_SEARCH_CHUNK = 1)] = 'CURRENT_SEARCH_CHUNK'), (e[(e.NEXT_SEARCH_CHUNK = 2)] = 'NEXT_SEARCH_CHUNK'), (e[(e.PREVIOUS_SEARCH_CHUNK = 3)] = 'PREVIOUS_SEARCH_CHUNK');
})(i || (i = {}));
class z extends f.Z {
    handleInitialize(e) {
        let { guildId: t } = e;
        return x(t), j(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return x(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return j(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return j(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return U(O(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        return w(O(t));
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return j(t);
    }
    constructor(...e) {
        super(...e),
            A(this, 'actions', {
                INITIALIZE_MEMBER_SAFETY_STORE: (e) => this.handleInitialize(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: (e) => this.handleSearchStateUpdate(e),
                MEMBER_SAFETY_PAGINATION_UPDATE: (e) => this.handlePaginationUpdate(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: (e) => this.handleGuildMemberSearchStillIndexing(e),
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: (e) => this.handleNewMemberTimestampRefresh(e)
            });
    }
}
t.ZP = new z();
