n.d(t, {
    Nz: function () {
        return c;
    },
    QQ: function () {
        return p;
    },
    QY: function () {
        return I;
    },
    Vj: function () {
        return u;
    },
    j8: function () {
        return m;
    },
    jn: function () {
        return h;
    },
    m$: function () {
        return d;
    },
    oO: function () {
        return _;
    },
    qt: function () {
        return C;
    },
    u$: function () {
        return S;
    },
    yC: function () {
        return o;
    }
}),
    n(724458);
var r = n(570140),
    i = n(367907),
    l = n(768119),
    s = n(405656),
    a = n(981631);
function o(e, t, n, o) {
    (0, s.jW)(t, e), o && (t.search_everywhere = !0);
    let u = Object.keys(t);
    i.ZP.trackWithMetadata(a.rMx.SEARCH_STARTED, {
        search_type: l.Z.getSearchType(),
        prev_search_id: l.Z.getAnalyticsId(e),
        num_modifiers: u.length,
        modifiers: u.reduce((e, n) => {
            let r = t[n];
            return (e[n] = Array.isArray(r) ? r.length : 1), e;
        }, {})
    }),
        r.Z.dispatch({
            type: 'SEARCH_START',
            query: t,
            searchId: e,
            queryString: n,
            searchEverywhere: o
        });
}
function u(e) {
    return 'relevance' === e.sort_by ? a.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? a.QIO.OLDEST : a.QIO.NEWEST;
}
function c(e, t) {
    let n = l.Z.getQuery(e),
        r = (function (e) {
            switch (e) {
                case a.QIO.MOST_RELEVANT:
                    return {
                        sort_by: 'relevance',
                        sort_order: 'desc'
                    };
                case a.QIO.OLDEST:
                    return {
                        sort_by: 'timestamp',
                        sort_order: 'asc'
                    };
                case a.QIO.NEWEST:
                default:
                    return {
                        sort_by: 'timestamp',
                        sort_order: 'desc'
                    };
            }
        })(t);
    return o(e, {
        ...n,
        ...r,
        offset: 0
    });
}
function d(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.vpv;
    return f(e, t);
}
function h(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.vpv;
    return f(e, -t);
}
function _(e, t) {
    return E(e, t * a.vpv);
}
function f(e, t) {
    let n = l.Z.getOffset(e);
    return E(e, n + t);
}
function E(e, t) {
    let n = l.Z.getQuery(e),
        r = l.Z.getTotalResults(e);
    if (!(t < 0) && !(t > r))
        return o(e, {
            ...n,
            offset: t
        });
}
function p(e) {
    r.Z.dispatch({
        type: 'SEARCH_CLEAR_HISTORY',
        searchId: e
    });
}
function m(e, t) {
    null != e &&
        r.Z.dispatch({
            type: 'SEARCH_EDITOR_STATE_CHANGE',
            searchId: e,
            editorState: t
        });
}
function C(e) {
    i.ZP.trackWithMetadata(a.rMx.SEARCH_CLOSED, { search_id: l.Z.getAnalyticsId(e) }),
        r.Z.wait(() =>
            r.Z.dispatch({
                type: 'SEARCH_EDITOR_STATE_CLEAR',
                searchId: e
            })
        );
}
function S(e, t, n) {
    null != e &&
        r.Z.dispatch({
            type: 'SEARCH_AUTOCOMPLETE_QUERY_UPDATE',
            searchId: e,
            tokens: t,
            cursorScope: n
        });
}
function I(e, t) {
    r.Z.dispatch({
        type: 'SEARCH_SET_SHOW_BLOCKED_RESULTS',
        searchId: e,
        showBlocked: t
    });
}
