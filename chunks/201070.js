n.d(t, {
    $j: function () {
        return w;
    },
    M3: function () {
        return P;
    }
}),
    n(47120),
    n(411104);
var r,
    i,
    a,
    s,
    o = n(348327),
    l = n.n(o),
    u = n(392711),
    c = n(15729),
    d = n(259443),
    f = n(731965),
    _ = n(379649),
    p = n(147913),
    h = n(823379),
    m = n(709054),
    g = n(823596),
    E = n(733026),
    v = n(588215),
    I = n(496135),
    T = n(893966);
let b = new d.Yd('MemberSafetySearchManager');
function S(e) {
    return 'guild_'.concat(e);
}
function y(e) {
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
((a = r || (r = {}))[(a.FAILED = 0)] = 'FAILED'), (a[(a.UNFETCHED = 1)] = 'UNFETCHED'), (a[(a.PENDING = 2)] = 'PENDING'), (a[(a.SUCCEEDED = 3)] = 'SUCCEEDED'), (a[(a.STILL_INDEXING = 4)] = 'STILL_INDEXING');
let A = (0, c.U)((e) => ({}));
function N(e, t) {
    let n = A.getState()[e];
    return (
        null == n && (n = y(1)),
        (n = {
            ...n,
            ...t
        }),
        (0, f.j)(() => {
            A.setState((t) => ({
                ...t,
                [e]: n
            }));
        }),
        n
    );
}
function C(e) {
    return A.getState()[e];
}
function R(e) {
    let t = C(e);
    return null == t && N(e, (t = y(1))), t;
}
async function O(e) {
    if ((await (0, _._v)(200), null != C(e)))
        N(e, {
            requestState: 3,
            abortController: null,
            lastUpdated: Date.now()
        });
}
function D(e) {
    var t;
    (t = S(e)),
        (0, f.j)(() => {
            A.setState((e) => {
                let n = { ...e };
                return delete n[t], n;
            });
        });
}
function L(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
((s = i || (i = {}))[(s.FIRST_PAGE_CHUNK = 0)] = 'FIRST_PAGE_CHUNK'), (s[(s.CURRENT_SEARCH_CHUNK = 1)] = 'CURRENT_SEARCH_CHUNK'), (s[(s.NEXT_SEARCH_CHUNK = 2)] = 'NEXT_SEARCH_CHUNK'), (s[(s.PREVIOUS_SEARCH_CHUNK = 3)] = 'PREVIOUS_SEARCH_CHUNK');
async function x(e) {
    var t, n, r, i, a;
    let s = T.Z.getSearchStateByGuildId(e),
        o = T.Z.getPaginationStateByGuildId(e),
        c = S(e),
        d = R(c),
        [f, _] = (function (e, t, n) {
            var r, i, a, s, o, l;
            let u = (function (e, t) {
                    var n;
                    let {
                            currentPageChunkNumber: r,
                            previousPageChunkNumber: i,
                            nextPageChunkNumber: a
                        } = (function (e) {
                            let t = (0, g.t3)(e),
                                n = e.pageSize * (e.currentPage - 1),
                                r = e.pageSize * e.currentPage,
                                i = e.pageSize * (e.currentPage + 1);
                            return {
                                previousPageChunkNumber: L(n, t),
                                currentPageChunkNumber: L(r, t),
                                nextPageChunkNumber: L(i, t)
                            };
                        })(t),
                        { previousPagination: s } = R(S(e)),
                        o = t.currentPage,
                        l = null !== (n = null == s ? void 0 : s.currentPage) && void 0 !== n ? n : 0,
                        u = T.Z.getElasticSearchPaginationByGuildId(e);
                    switch (!0) {
                        case null == u:
                        case r === a && 0 === r:
                            return 0;
                        case r === a && r === i:
                            return 1;
                        case l < o && r < a:
                            return 2;
                        case l > o && r >= i:
                            if (0 < r) return 3;
                            return 0;
                        default:
                            return 1;
                    }
                })(e, n),
                c = T.Z.getElasticSearchPaginationByGuildId(e),
                d = (0, g.t3)(n);
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
                            after: null !== (s = null == c ? void 0 : c.after) && void 0 !== s ? s : void 0
                        }
                    ];
                case 3:
                    return [
                        null !== (o = null == c ? void 0 : c.before) && void 0 !== o ? o : null,
                        {
                            limit: d,
                            before: null !== (l = null == c ? void 0 : c.before) && void 0 !== l ? l : void 0
                        }
                    ];
                default:
                    (0, h.vE)(u);
            }
        })(e, d, o);
    let p =
            ((i = (function (e) {
                var t, n;
                let r = {},
                    i = {},
                    { query: a } = e;
                if (null != (t = a) && t.length > 1) {
                    let [e, t] = (0, E.C)(a);
                    e.length > 0 && (r.usernames = { or_query: e }), t.length > 0 && (r.user_id = { or_query: t });
                }
                let { requireUnusualDmActivity: s, requireCommunicationDisabled: o, requireUnusualAccountActivity: l, requireUsernameQuarantined: u } = e,
                    c = {};
                s && (c.unusual_dm_activity_until = { range: { gte: Date.now() - v.rL } }), o && (c.communication_disabled_until = { range: { gte: Date.now() } }), l && (c.unusual_account_activity = l), u && (c.automod_quarantined_username = u), Object.keys(c).length > 0 && (i.safety_signals = c);
                let { selectedRoleIds: d } = e;
                d.size > 0 && (r.role_ids = { and_query: Array.from(d) });
                let { selectedJoinDateOption: f } = e;
                if (null != f.afterDate) {
                    r.guild_joined_at = {
                        range: {
                            gte: f.afterDate,
                            lte: null !== (n = f.beforeDate) && void 0 !== n ? n : void 0
                        }
                    };
                }
                let { selectedAccountAgeOption: _ } = e;
                if (null != _.afterDate) {
                    let e = r.user_id;
                    r.user_id = {
                        ...e,
                        range: {
                            gte: m.default.fromTimestamp(_.afterDate),
                            lte: null != _.beforeDate ? m.default.fromTimestamp(_.beforeDate) : void 0
                        }
                    };
                }
                let { selectedSourceInviteCode: p } = e;
                null != p && (r.source_invite_code = { or_query: [p] });
                let { selectedJoinSourceType: h } = e;
                null != h && (r.join_source_type = { or_query: [h] });
                let g = {
                        or_query: i,
                        and_query: r
                    },
                    { selectedSort: I } = e;
                return null != I && (g.sort = I), g;
            })(s)),
            null == (a = _)
                ? i
                : {
                      ...i,
                      ...a
                  }),
        y = null !== (t = s.selectedSort) && void 0 !== t ? t : v.d$.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (
        (function (e, t) {
            let n = R(e);
            return l()(n.query, t);
        })(c, p) &&
        (0, u.isEqual)(f, d.cursor)
    )
        return;
    let A = (function (e, t, n, r, i) {
        let a = C(e);
        if ((null == a ? void 0 : a.requestState) === 2) {
            var s;
            null === (s = a.abortController) || void 0 === s || s.abort();
        }
        return N(e, {
            requestState: 2,
            abortController: new AbortController(),
            lastUpdated: Date.now(),
            query: t,
            cursor: n,
            previousPagination: r,
            sort: i
        });
    })(c, p, f, o, y);
    try {
        if (
            (b.info('Making member search request', {
                query: A.query,
                guildId: e
            }),
            null == A.query)
        )
            throw Error('Query is null');
        await (0, I.D)(e, A.query, { signal: null !== (r = null === (n = A.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== r ? r : void 0 });
    } catch (e) {
        if (-1 === e.code) return;
        !(function (e) {
            if (null != C(e))
                N(e, {
                    requestState: 0,
                    abortController: null,
                    lastUpdated: Date.now()
                });
        })(c);
        return;
    }
    await O(c);
}
function w(e) {
    return A((t) => {
        var n;
        return (null === (n = t[S(e)]) || void 0 === n ? void 0 : n.requestState) === 2;
    });
}
function P(e) {
    return A((t) => {
        var n;
        return (null === (n = t[S(e)]) || void 0 === n ? void 0 : n.requestState) === 4;
    });
}
class M extends p.Z {
    handleInitialize(e) {
        let { guildId: t } = e;
        return D(t), x(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return D(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return x(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return x(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return O(S(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        N(S(t), {
            requestState: 4,
            abortController: null,
            lastUpdated: Date.now()
        });
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return x(t);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = {
                INITIALIZE_MEMBER_SAFETY_STORE: (e) => this.handleInitialize(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: (e) => this.handleSearchStateUpdate(e),
                MEMBER_SAFETY_PAGINATION_UPDATE: (e) => this.handlePaginationUpdate(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: (e) => this.handleGuildMemberSearchStillIndexing(e),
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: (e) => this.handleNewMemberTimestampRefresh(e)
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.ZP = new M();
