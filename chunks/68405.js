n.d(t, {
    PF: function () {
        return G;
    },
    R7: function () {
        return D;
    },
    Tg: function () {
        return P;
    },
    UU: function () {
        return U;
    },
    gK: function () {
        return M;
    },
    hM: function () {
        return O;
    },
    iy: function () {
        return w;
    },
    mO: function () {
        return L;
    },
    t1: function () {
        return N;
    },
    uL: function () {
        return x;
    },
    v2: function () {
        return b;
    },
    yC: function () {
        return y;
    }
});
var r = n(757143);
var i = n(392711),
    a = n.n(i),
    o = n(772848),
    s = n(544891),
    l = n(377108),
    u = n(570140),
    c = n(367907),
    d = n(198620),
    _ = n(706454),
    E = n(675478),
    f = n(656733),
    h = n(626135),
    p = n(708406),
    m = n(591759),
    I = n(668781),
    T = n(981631),
    g = n(526761),
    S = n(689938);
let A = 250,
    v = /-/g;
function N(e) {
    let t = null != e ? { [e]: 1 } : {};
    c.ZP.trackWithMetadata(T.rMx.SEARCH_STARTED, {
        search_type: T.aib.GIF,
        load_id: f.Z.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t
    });
}
function O(e, t) {
    let { startTime: n, ...r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = {
            offset: 0,
            limit: null,
            totalResults: e.length
        },
        a = (0, p._)(f.Z.getAnalyticsID(), t, {
            ...i,
            ...r,
            results: e
        }),
        o = null == n ? {} : { load_duration_ms: Date.now() - n };
    c.ZP.trackWithMetadata(T.rMx.SEARCH_RESULT_VIEWED, {
        ...a,
        ...o
    });
}
function R(e, t, n) {
    let r = Date.now();
    N(t),
        s.tn
            .get({
                url: T.ANM.GIFS_SEARCH,
                query: {
                    q: e,
                    media_format: f.Z.getSelectedFormat(),
                    provider: 'tenor',
                    locale: _.default.locale,
                    limit: n
                },
                oldFormErrors: !0
            })
            .then(
                (i) => {
                    let a = i.body;
                    O(a, t, {
                        startTime: r,
                        limit: n
                    }),
                        u.Z.dispatch({
                            type: 'GIF_PICKER_QUERY_SUCCESS',
                            query: e,
                            items: a
                        });
                },
                () =>
                    u.Z.dispatch({
                        type: 'GIF_PICKER_QUERY_FAILURE',
                        query: e
                    })
            );
}
let C = a().debounce(R, A);
function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    '' === e
        ? b()
        : (u.Z.dispatch({
              type: 'GIF_PICKER_QUERY',
              query: e
          }),
          n ? R(e, t, r) : C(e, t, r));
}
function L(e) {
    if ('' !== e && null != e)
        s.tn
            .get({
                url: T.ANM.GIFS_SUGGEST,
                query: {
                    q: e,
                    provider: 'tenor',
                    limit: 5,
                    locale: _.default.locale
                },
                oldFormErrors: !0
            })
            .then((t) => {
                let n = t.body;
                u.Z.dispatch({
                    type: 'GIF_PICKER_SUGGESTIONS_SUCCESS',
                    query: e,
                    items: n
                });
            });
}
function b() {
    u.Z.dispatch({
        type: 'GIF_PICKER_QUERY',
        query: ''
    });
}
function D(e) {
    let { type: t, index: n, offset: r, limit: i, results: a, totalResults: o, query: l, gifId: u } = e,
        d = (0, p._)(f.Z.getAnalyticsID(), t, {
            offset: r,
            limit: i,
            results: a,
            totalResults: o
        });
    c.ZP.trackWithMetadata(T.rMx.SEARCH_RESULT_SELECTED, {
        ...d,
        index_num: n,
        source_object: 'GIF Picker',
        query: l
    }),
        null != u &&
            s.tn.post({
                url: T.ANM.GIFS_SELECT,
                body: {
                    id: u,
                    q: l
                },
                oldFormErrors: !0
            });
}
function M() {
    let e = (0, o.Z)().replace(v, '');
    c.ZP.trackWithMetadata(T.rMx.SEARCH_OPENED, {
        search_type: T.aib.GIF,
        load_id: e
    }),
        u.Z.wait(() => {
            u.Z.dispatch({
                type: 'GIF_PICKER_INITIALIZE',
                analyticsID: e
            });
        });
}
function P() {
    s.tn
        .get({
            url: T.ANM.GIFS_TRENDING,
            query: {
                provider: 'tenor',
                locale: _.default.locale,
                media_format: f.Z.getSelectedFormat()
            },
            oldFormErrors: !0
        })
        .then((e) => {
            let { body: t } = e,
                { categories: n, gifs: r } = t;
            u.Z.dispatch({
                type: 'GIF_PICKER_TRENDING_FETCH_SUCCESS',
                trendingCategories: n,
                trendingGIFPreview: r[0]
            });
        });
}
function U(e) {
    let t = Date.now();
    N(T.wI2.TRENDING_GIFS),
        s.tn
            .get({
                url: T.ANM.GIFS_TRENDING_GIFS,
                query: {
                    media_format: f.Z.getSelectedFormat(),
                    provider: 'tenor',
                    locale: _.default.locale,
                    limit: e
                },
                oldFormErrors: !0
            })
            .then(
                (n) => {
                    let { body: r } = n;
                    O(r, T.wI2.TRENDING_GIFS, {
                        startTime: t,
                        limit: e
                    }),
                        u.Z.dispatch({
                            type: 'GIF_PICKER_QUERY_SUCCESS',
                            items: r
                        });
                },
                () => {
                    u.Z.dispatch({ type: 'GIF_PICKER_QUERY_FAILURE' });
                }
            );
}
function w(e) {
    let t = m.Z.toURLSafe(e);
    return null == t ? e : (0, d.MO)(t) ? (0, d.q5)(t).toString() : e;
}
function x(e) {
    E.DZ.updateAsync(
        'favoriteGifs',
        (t) => {
            var n;
            let r = null !== (n = a().max(Object.values(t.gifs).map((e) => e.order))) && void 0 !== n ? n : 0;
            if (
                ((t.gifs[w(e.url)] = {
                    ...e,
                    order: r + 1
                }),
                l.wK.toBinary(t).length > g.vY)
            )
                return (
                    I.Z.show({
                        title: S.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
                        body: S.Z.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
                    }),
                    !1
                );
            let i = a().size(t.gifs);
            i > 2 && (t.hideTooltip = !0), h.default.track(T.rMx.GIF_FAVORITED, { total_num_favorited: i });
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
function G(e) {
    E.DZ.updateAsync(
        'favoriteGifs',
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[w(e)], h.default.track(T.rMx.GIF_UNFAVORITED, { total_num_favorited: a().size(t.gifs) });
        },
        g.fy.INFREQUENT_USER_ACTION
    );
}
