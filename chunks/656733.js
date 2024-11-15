n(757143), n(47120);
var r,
    i,
    a,
    s,
    o = n(442837),
    l = n(377108),
    u = n(552075),
    c = n(570140),
    d = n(981631),
    f = n(388032);
let _ = {
        MP4: 'mp4',
        TINYMP4: 'tinymp4',
        NANOMP4: 'nanomp4',
        WEBM: 'webm',
        TINYWEBM: 'tinywebm',
        NANOWEBM: 'nanowebm'
    },
    p = {
        FIXED_HEIGHT_MP4: 'fixed_height.mp4',
        FIXED_HEIGHT_SMALL_MP4: 'fixed_height_small.mp4',
        FIXED_WIDTH_MP4: 'fixed_width.mp4',
        FIXED_WIDTH_SMALL_MP4: 'fixed_width_small.mp4',
        DOWNSIZED_SMALL_MP4: 'downsized_small.mp4',
        ORIGINAL_MP4: 'original.mp4'
    },
    h = _.MP4,
    m = null,
    g = '',
    E = '',
    v = [],
    b = [],
    I = [],
    S = [];
function T(e) {
    return e.replace(/^https?:/, '');
}
class y extends (r = o.ZP.Store) {
    getAnalyticsID() {
        return m;
    }
    getQuery() {
        return g;
    }
    getResultQuery() {
        return E;
    }
    getResultItems() {
        return v;
    }
    getTrendingCategories() {
        return b;
    }
    getSelectedFormat() {
        return h;
    }
    getSuggestions() {
        return I;
    }
    getTrendingSearchTerms() {
        return S;
    }
}
(s = 'GIFPickerViewStore'),
    (a = 'displayName') in (i = y)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new y(c.Z, {
        GIF_PICKER_INITIALIZE: function (e) {
            m = e.analyticsID;
        },
        GIF_PICKER_QUERY: function (e) {
            '' === (g = e.query) && ((E = ''), (v = []), (I = []));
        },
        GIF_PICKER_QUERY_SUCCESS: function (e) {
            if (null != e.query && g === E) return !1;
            null != e.query && (E = e.query),
                (v = e.items.map((e) => {
                    let { width: t, height: n, src: r, gif_src: i, url: a, id: s } = e;
                    return {
                        width: t,
                        height: n,
                        src: T(r),
                        gifSrc: T(i),
                        url: a,
                        id: s,
                        format: !(function (e) {
                            switch (e) {
                                case p.FIXED_HEIGHT_MP4:
                                case p.FIXED_HEIGHT_SMALL_MP4:
                                case p.FIXED_WIDTH_MP4:
                                case p.FIXED_WIDTH_SMALL_MP4:
                                case p.DOWNSIZED_SMALL_MP4:
                                case p.ORIGINAL_MP4:
                                case _.MP4:
                                case _.TINYMP4:
                                case _.NANOMP4:
                                case _.WEBM:
                                case _.TINYWEBM:
                                case _.NANOWEBM:
                                    return !0;
                                default:
                                    return !1;
                            }
                        })(h)
                            ? l.EO.IMAGE
                            : l.EO.VIDEO
                    };
                }));
        },
        GIF_PICKER_QUERY_FAILURE: function (e) {
            let { query: t } = e;
            if (null == t) return !1;
            (E = t), (v = []);
        },
        GIF_PICKER_TRENDING_FETCH_SUCCESS: function (e) {
            let t = e.trendingCategories;
            b = [
                ...(null != e.trendingGIFPreview
                    ? [
                          {
                              type: d.wI2.TRENDING_GIFS,
                              icon: u.I,
                              name: f.intl.string(f.t.H6zNFx),
                              src: T(e.trendingGIFPreview.src),
                              format: l.EO.IMAGE
                          }
                      ]
                    : []),
                ...t.map((e) => ({
                    ...e,
                    src: T(e.src),
                    type: d.wI2.TRENDING_CATEGORY,
                    format: l.EO.VIDEO
                }))
            ];
        },
        GIF_PICKER_SUGGESTIONS_SUCCESS: function (e) {
            let { items: t } = e;
            I = t;
        },
        GIF_PICKER_TRENDING_SEARCH_TERMS_SUCCESS: function (e) {
            let { items: t } = e;
            S = t;
        }
    }));
