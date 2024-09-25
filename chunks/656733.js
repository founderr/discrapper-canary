var r,
    i = n(757143);
var a = n(47120);
var o = n(442837),
    s = n(377108),
    l = n(552075),
    u = n(570140),
    c = n(981631),
    d = n(689938);
function _(e, t, n) {
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
let E = {
        MP4: 'mp4',
        TINYMP4: 'tinymp4',
        NANOMP4: 'nanomp4',
        WEBM: 'webm',
        TINYWEBM: 'tinywebm',
        NANOWEBM: 'nanowebm'
    },
    f = {
        FIXED_HEIGHT_MP4: 'fixed_height.mp4',
        FIXED_HEIGHT_SMALL_MP4: 'fixed_height_small.mp4',
        FIXED_WIDTH_MP4: 'fixed_width.mp4',
        FIXED_WIDTH_SMALL_MP4: 'fixed_width_small.mp4',
        DOWNSIZED_SMALL_MP4: 'downsized_small.mp4',
        ORIGINAL_MP4: 'original.mp4'
    },
    h = (() => E.MP4)(),
    p = null,
    m = '',
    I = '',
    T = [],
    g = [],
    S = h,
    A = [],
    v = [];
function N(e) {
    p = e.analyticsID;
}
function O(e) {
    '' === (m = e.query) && ((I = ''), (T = []), (A = []));
}
function R(e) {
    switch (e) {
        case f.FIXED_HEIGHT_MP4:
        case f.FIXED_HEIGHT_SMALL_MP4:
        case f.FIXED_WIDTH_MP4:
        case f.FIXED_WIDTH_SMALL_MP4:
        case f.DOWNSIZED_SMALL_MP4:
        case f.ORIGINAL_MP4:
        case E.MP4:
        case E.TINYMP4:
        case E.NANOMP4:
        case E.WEBM:
        case E.TINYWEBM:
        case E.NANOWEBM:
            return !0;
        default:
            return !1;
    }
}
function C(e) {
    return e.replace(/^https?:/, '');
}
function y(e) {
    if (null != e.query && m === I) return !1;
    null != e.query && (I = e.query),
        (T = e.items.map((e) => {
            let { width: t, height: n, src: r, gif_src: i, url: a, id: o } = e;
            return {
                width: t,
                height: n,
                src: C(r),
                gifSrc: C(i),
                url: a,
                id: o,
                format: R(S) ? s.EO.VIDEO : s.EO.IMAGE
            };
        }));
}
function b(e) {
    let { query: t } = e;
    if (null == t) return !1;
    (I = t), (T = []);
}
function L(e) {
    let t = e.trendingCategories;
    g = [
        ...(null != e.trendingGIFPreview
            ? [
                  {
                      type: c.wI2.TRENDING_GIFS,
                      icon: l.I,
                      name: d.Z.Messages.GIF_PICKER_RESULT_TYPE_TRENDING_GIFS,
                      src: C(e.trendingGIFPreview.src),
                      format: s.EO.IMAGE
                  }
              ]
            : []),
        ...t.map((e) => ({
            ...e,
            src: C(e.src),
            type: c.wI2.TRENDING_CATEGORY,
            format: s.EO.VIDEO
        }))
    ];
}
function D(e) {
    let { items: t } = e;
    A = t;
}
function M(e) {
    let { items: t } = e;
    v = t;
}
class P extends (r = o.ZP.Store) {
    getAnalyticsID() {
        return p;
    }
    getQuery() {
        return m;
    }
    getResultQuery() {
        return I;
    }
    getResultItems() {
        return T;
    }
    getTrendingCategories() {
        return g;
    }
    getSelectedFormat() {
        return S;
    }
    getSuggestions() {
        return A;
    }
    getTrendingSearchTerms() {
        return v;
    }
}
_(P, 'displayName', 'GIFPickerViewStore'),
    (t.Z = new P(u.Z, {
        GIF_PICKER_INITIALIZE: N,
        GIF_PICKER_QUERY: O,
        GIF_PICKER_QUERY_SUCCESS: y,
        GIF_PICKER_QUERY_FAILURE: b,
        GIF_PICKER_TRENDING_FETCH_SUCCESS: L,
        GIF_PICKER_SUGGESTIONS_SUCCESS: D,
        GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: M
    }));
