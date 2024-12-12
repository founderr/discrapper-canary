r.d(n, {
    PF: function () {
        return B;
    },
    R7: function () {
        return x;
    },
    Tg: function () {
        return P;
    },
    UU: function () {
        return M;
    },
    gK: function () {
        return w;
    },
    hM: function () {
        return N;
    },
    iy: function () {
        return k;
    },
    mO: function () {
        return D;
    },
    t1: function () {
        return A;
    },
    uL: function () {
        return U;
    },
    v2: function () {
        return L;
    },
    yC: function () {
        return O;
    }
});
var i = r(757143);
var a = r(392711),
    s = r.n(a),
    o = r(772848),
    l = r(544891),
    u = r(377108),
    c = r(570140),
    d = r(367907),
    f = r(198620),
    _ = r(706454),
    h = r(675478),
    p = r(656733),
    m = r(626135),
    g = r(708406),
    E = r(591759),
    v = r(668781),
    I = r(981631),
    T = r(526761),
    b = r(388032);
let y = 250,
    S = /-/g;
function A(e) {
    let n = null != e ? { [e]: 1 } : {};
    d.ZP.trackWithMetadata(I.rMx.SEARCH_STARTED, {
        search_type: I.aib.GIF,
        load_id: p.Z.getAnalyticsID(),
        num_modifiers: Object.keys(n).length,
        modifiers: n
    });
}
function N(e, n) {
    let { startTime: r, ...i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        a = {
            offset: 0,
            limit: null,
            totalResults: e.length
        },
        s = (0, g._)(p.Z.getAnalyticsID(), n, {
            ...a,
            ...i,
            results: e.length
        }),
        o = null == r ? {} : { load_duration_ms: Date.now() - r };
    d.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_VIEWED, {
        ...s,
        ...o
    });
}
function C(e, n, r) {
    let i = Date.now();
    A(n),
        l.tn
            .get({
                url: I.ANM.GIFS_SEARCH,
                query: {
                    q: e,
                    media_format: p.Z.getSelectedFormat(),
                    provider: 'tenor',
                    locale: _.default.locale,
                    limit: r
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (a) => {
                    let s = a.body;
                    N(s, n, {
                        startTime: i,
                        limit: r
                    }),
                        c.Z.dispatch({
                            type: 'GIF_PICKER_QUERY_SUCCESS',
                            query: e,
                            items: s
                        });
                },
                () =>
                    c.Z.dispatch({
                        type: 'GIF_PICKER_QUERY_FAILURE',
                        query: e
                    })
            );
}
let R = s().debounce(C, y);
function O(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 ? arguments[3] : void 0;
    '' === e
        ? L()
        : (c.Z.dispatch({
              type: 'GIF_PICKER_QUERY',
              query: e
          }),
          r ? C(e, n, i) : R(e, n, i));
}
function D(e) {
    if ('' !== e && null != e)
        l.tn
            .get({
                url: I.ANM.GIFS_SUGGEST,
                query: {
                    q: e,
                    provider: 'tenor',
                    limit: 5,
                    locale: _.default.locale
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then((n) => {
                let r = n.body;
                c.Z.dispatch({
                    type: 'GIF_PICKER_SUGGESTIONS_SUCCESS',
                    query: e,
                    items: r
                });
            });
}
function L() {
    c.Z.dispatch({
        type: 'GIF_PICKER_QUERY',
        query: ''
    });
}
function x(e) {
    let { type: n, index: r, offset: i, limit: a, results: s, totalResults: o, query: u, gifId: c } = e,
        f = (0, g._)(p.Z.getAnalyticsID(), n, {
            offset: i,
            limit: a,
            results: s,
            totalResults: o
        });
    d.ZP.trackWithMetadata(I.rMx.SEARCH_RESULT_SELECTED, {
        ...f,
        index_num: r,
        source_object: 'GIF Picker',
        query: u
    }),
        null != c &&
            l.tn.post({
                url: I.ANM.GIFS_SELECT,
                body: {
                    id: c,
                    q: u
                },
                oldFormErrors: !0,
                rejectWithError: !0
            });
}
function w() {
    let e = (0, o.Z)().replace(S, '');
    d.ZP.trackWithMetadata(I.rMx.SEARCH_OPENED, {
        search_type: I.aib.GIF,
        load_id: e
    }),
        c.Z.wait(() => {
            c.Z.dispatch({
                type: 'GIF_PICKER_INITIALIZE',
                analyticsID: e
            });
        });
}
function P() {
    l.tn
        .get({
            url: I.ANM.GIFS_TRENDING,
            query: {
                provider: 'tenor',
                locale: _.default.locale,
                media_format: p.Z.getSelectedFormat()
            },
            oldFormErrors: !0,
            rejectWithError: !0
        })
        .then((e) => {
            let { body: n } = e,
                { categories: r, gifs: i } = n;
            c.Z.dispatch({
                type: 'GIF_PICKER_TRENDING_FETCH_SUCCESS',
                trendingCategories: r,
                trendingGIFPreview: i[0]
            });
        });
}
function M(e) {
    let n = Date.now();
    A(I.wI2.TRENDING_GIFS),
        l.tn
            .get({
                url: I.ANM.GIFS_TRENDING_GIFS,
                query: {
                    media_format: p.Z.getSelectedFormat(),
                    provider: 'tenor',
                    locale: _.default.locale,
                    limit: e
                },
                oldFormErrors: !0,
                rejectWithError: !0
            })
            .then(
                (r) => {
                    let { body: i } = r;
                    N(i, I.wI2.TRENDING_GIFS, {
                        startTime: n,
                        limit: e
                    }),
                        c.Z.dispatch({
                            type: 'GIF_PICKER_QUERY_SUCCESS',
                            items: i
                        });
                },
                () => {
                    c.Z.dispatch({ type: 'GIF_PICKER_QUERY_FAILURE' });
                }
            );
}
function k(e) {
    let n = E.Z.toURLSafe(e);
    return null == n ? e : (0, f.MO)(n) ? (0, f.q5)(n).toString() : e;
}
function U(e) {
    h.DZ.updateAsync(
        'favoriteGifs',
        (n) => {
            var r;
            let i = null !== (r = s().max(Object.values(n.gifs).map((e) => e.order))) && void 0 !== r ? r : 0;
            if (
                ((n.gifs[k(e.url)] = {
                    ...e,
                    order: i + 1
                }),
                u.wK.toBinary(n).length > T.vY)
            )
                return (
                    v.Z.show({
                        title: b.intl.string(b.t['+XYXtb']),
                        body: b.intl.string(b.t.YSDH9v)
                    }),
                    !1
                );
            let a = s().size(n.gifs);
            a > 2 && (n.hideTooltip = !0), m.default.track(I.rMx.GIF_FAVORITED, { total_num_favorited: a });
        },
        T.fy.INFREQUENT_USER_ACTION
    );
}
function B(e) {
    h.DZ.updateAsync(
        'favoriteGifs',
        (n) => {
            e in n.gifs ? delete n.gifs[e] : delete n.gifs[k(e)], m.default.track(I.rMx.GIF_UNFAVORITED, { total_num_favorited: s().size(n.gifs) });
        },
        T.fy.INFREQUENT_USER_ACTION
    );
}
