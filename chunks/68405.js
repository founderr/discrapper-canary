n.d(t, {
    PF: function () {
        return P;
    },
    R7: function () {
        return O;
    },
    Tg: function () {
        return L;
    },
    UU: function () {
        return x;
    },
    gK: function () {
        return D;
    },
    hM: function () {
        return T;
    },
    iy: function () {
        return w;
    },
    mO: function () {
        return C;
    },
    t1: function () {
        return S;
    },
    uL: function () {
        return M;
    },
    v2: function () {
        return R;
    },
    yC: function () {
        return N;
    }
}),
    n(757143);
var r = n(392711),
    i = n.n(r),
    a = n(772848),
    s = n(544891),
    o = n(377108),
    l = n(570140),
    u = n(367907),
    c = n(198620),
    d = n(706454),
    f = n(675478),
    _ = n(656733),
    p = n(626135),
    h = n(708406),
    m = n(591759),
    g = n(668781),
    E = n(981631),
    v = n(526761),
    b = n(388032);
let I = /-/g;
function S(e) {
    let t = null != e ? { [e]: 1 } : {};
    u.ZP.trackWithMetadata(E.rMx.SEARCH_STARTED, {
        search_type: E.aib.GIF,
        load_id: _.Z.getAnalyticsID(),
        num_modifiers: Object.keys(t).length,
        modifiers: t
    });
}
function T(e, t) {
    let { startTime: n, ...r } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = {
            offset: 0,
            limit: null,
            totalResults: e.length
        },
        a = (0, h._)(_.Z.getAnalyticsID(), t, {
            ...i,
            ...r,
            results: e
        }),
        s = null == n ? {} : { load_duration_ms: Date.now() - n };
    u.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_VIEWED, {
        ...a,
        ...s
    });
}
function y(e, t, n) {
    let r = Date.now();
    S(t),
        s.tn
            .get({
                url: E.ANM.GIFS_SEARCH,
                query: {
                    q: e,
                    media_format: _.Z.getSelectedFormat(),
                    provider: 'tenor',
                    locale: d.default.locale,
                    limit: n
                },
                oldFormErrors: !0
            })
            .then(
                (i) => {
                    let a = i.body;
                    T(a, t, {
                        startTime: r,
                        limit: n
                    }),
                        l.Z.dispatch({
                            type: 'GIF_PICKER_QUERY_SUCCESS',
                            query: e,
                            items: a
                        });
                },
                () =>
                    l.Z.dispatch({
                        type: 'GIF_PICKER_QUERY_FAILURE',
                        query: e
                    })
            );
}
let A = i().debounce(y, 250);
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 ? arguments[3] : void 0;
    '' === e
        ? R()
        : (l.Z.dispatch({
              type: 'GIF_PICKER_QUERY',
              query: e
          }),
          n ? y(e, t, r) : A(e, t, r));
}
function C(e) {
    if ('' !== e && null != e)
        s.tn
            .get({
                url: E.ANM.GIFS_SUGGEST,
                query: {
                    q: e,
                    provider: 'tenor',
                    limit: 5,
                    locale: d.default.locale
                },
                oldFormErrors: !0
            })
            .then((t) => {
                let n = t.body;
                l.Z.dispatch({
                    type: 'GIF_PICKER_SUGGESTIONS_SUCCESS',
                    query: e,
                    items: n
                });
            });
}
function R() {
    l.Z.dispatch({
        type: 'GIF_PICKER_QUERY',
        query: ''
    });
}
function O(e) {
    let { type: t, index: n, offset: r, limit: i, results: a, totalResults: o, query: l, gifId: c } = e,
        d = (0, h._)(_.Z.getAnalyticsID(), t, {
            offset: r,
            limit: i,
            results: a,
            totalResults: o
        });
    u.ZP.trackWithMetadata(E.rMx.SEARCH_RESULT_SELECTED, {
        ...d,
        index_num: n,
        source_object: 'GIF Picker',
        query: l
    }),
        null != c &&
            s.tn.post({
                url: E.ANM.GIFS_SELECT,
                body: {
                    id: c,
                    q: l
                },
                oldFormErrors: !0
            });
}
function D() {
    let e = (0, a.Z)().replace(I, '');
    u.ZP.trackWithMetadata(E.rMx.SEARCH_OPENED, {
        search_type: E.aib.GIF,
        load_id: e
    }),
        l.Z.wait(() => {
            l.Z.dispatch({
                type: 'GIF_PICKER_INITIALIZE',
                analyticsID: e
            });
        });
}
function L() {
    s.tn
        .get({
            url: E.ANM.GIFS_TRENDING,
            query: {
                provider: 'tenor',
                locale: d.default.locale,
                media_format: _.Z.getSelectedFormat()
            },
            oldFormErrors: !0
        })
        .then((e) => {
            let { body: t } = e,
                { categories: n, gifs: r } = t;
            l.Z.dispatch({
                type: 'GIF_PICKER_TRENDING_FETCH_SUCCESS',
                trendingCategories: n,
                trendingGIFPreview: r[0]
            });
        });
}
function x(e) {
    let t = Date.now();
    S(E.wI2.TRENDING_GIFS),
        s.tn
            .get({
                url: E.ANM.GIFS_TRENDING_GIFS,
                query: {
                    media_format: _.Z.getSelectedFormat(),
                    provider: 'tenor',
                    locale: d.default.locale,
                    limit: e
                },
                oldFormErrors: !0
            })
            .then(
                (n) => {
                    let { body: r } = n;
                    T(r, E.wI2.TRENDING_GIFS, {
                        startTime: t,
                        limit: e
                    }),
                        l.Z.dispatch({
                            type: 'GIF_PICKER_QUERY_SUCCESS',
                            items: r
                        });
                },
                () => {
                    l.Z.dispatch({ type: 'GIF_PICKER_QUERY_FAILURE' });
                }
            );
}
function w(e) {
    let t = m.Z.toURLSafe(e);
    return null == t ? e : (0, c.MO)(t) ? (0, c.q5)(t).toString() : e;
}
function M(e) {
    f.DZ.updateAsync(
        'favoriteGifs',
        (t) => {
            var n;
            let r = null !== (n = i().max(Object.values(t.gifs).map((e) => e.order))) && void 0 !== n ? n : 0;
            if (
                ((t.gifs[w(e.url)] = {
                    ...e,
                    order: r + 1
                }),
                o.wK.toBinary(t).length > v.vY)
            )
                return (
                    g.Z.show({
                        title: b.intl.string(b.t['+XYXtb']),
                        body: b.intl.string(b.t.YSDH9v)
                    }),
                    !1
                );
            let a = i().size(t.gifs);
            a > 2 && (t.hideTooltip = !0), p.default.track(E.rMx.GIF_FAVORITED, { total_num_favorited: a });
        },
        v.fy.INFREQUENT_USER_ACTION
    );
}
function P(e) {
    f.DZ.updateAsync(
        'favoriteGifs',
        (t) => {
            e in t.gifs ? delete t.gifs[e] : delete t.gifs[w(e)], p.default.track(E.rMx.GIF_UNFAVORITED, { total_num_favorited: i().size(t.gifs) });
        },
        v.fy.INFREQUENT_USER_ACTION
    );
}
