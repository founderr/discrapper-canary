"use strict";
r.r(t), r.d(t, {
  trackSearchStart: function() {
    return y
  },
  trackSearchResultViewed: function() {
    return S
  },
  search: function() {
    return T
  },
  fetchSuggestions: function() {
    return C
  },
  resetSearch: function() {
    return A
  },
  trackSelectGIF: function() {
    return G
  },
  initializeSearch: function() {
    return x
  },
  fetchTrending: function() {
    return N
  },
  fetchTrendingGIFs: function() {
    return P
  },
  addFavoriteGIF: function() {
    return M
  },
  removeFavoriteGIF: function() {
    return O
  }
}), r("781738"), r("511434"), r("313619"), r("654714"), r("287168"), r("956660"), r("222007");
var s = r("917351"),
  n = r.n(s),
  l = r("748820"),
  i = r("872717"),
  a = r("713349"),
  o = r("913144"),
  u = r("716241"),
  c = r("787336"),
  d = r("915639"),
  h = r("872173"),
  f = r("510849"),
  m = r("599110"),
  p = r("564703"),
  I = r("404118"),
  g = r("49111"),
  _ = r("397336"),
  E = r("782340");
let R = /-/g;

function y(e) {
  let t = null != e ? {
    [e]: 1
  } : {};
  u.default.trackWithMetadata(g.AnalyticEvents.SEARCH_STARTED, {
    search_type: g.SearchTypes.GIF,
    load_id: f.default.getAnalyticsID(),
    num_modifiers: Object.keys(t).length,
    modifiers: t
  })
}

function S(e, t) {
  let {
    startTime: r,
    ...s
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = {
    offset: 0,
    limit: null,
    totalResults: e.length
  }, l = (0, p.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
    ...n,
    ...s,
    results: e
  }), i = null == r ? {} : {
    load_duration_ms: Date.now() - r
  };
  u.default.trackWithMetadata(g.AnalyticEvents.SEARCH_RESULT_VIEWED, {
    ...l,
    ...i
  })
}

function v(e, t, r) {
  let s = Date.now();
  y(t), i.default.get({
    url: g.Endpoints.GIFS_SEARCH,
    query: {
      q: e,
      media_format: f.default.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
      limit: r
    },
    oldFormErrors: !0
  }).then(n => {
    let l = n.body;
    S(l, t, {
      startTime: s,
      limit: r
    }), o.default.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      query: e,
      items: l
    })
  }, () => o.default.dispatch({
    type: "GIF_PICKER_QUERY_FAILURE",
    query: e
  }))
}
let F = n.debounce(v, 250);

function T(e, t) {
  let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    s = arguments.length > 3 ? arguments[3] : void 0;
  "" === e ? A() : (o.default.dispatch({
    type: "GIF_PICKER_QUERY",
    query: e
  }), r ? v(e, t, s) : F(e, t, s))
}

function C(e) {
  "" !== e && null != e && i.default.get({
    url: g.Endpoints.GIFS_SUGGEST,
    query: {
      q: e,
      provider: "tenor",
      limit: 5,
      locale: d.default.locale
    },
    oldFormErrors: !0
  }).then(t => {
    let r = t.body;
    o.default.dispatch({
      type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
      query: e,
      items: r
    })
  })
}

function A() {
  o.default.dispatch({
    type: "GIF_PICKER_QUERY",
    query: ""
  })
}

function G(e) {
  let {
    type: t,
    index: r,
    offset: s,
    limit: n,
    results: l,
    totalResults: a,
    query: o,
    gifId: c
  } = e, d = (0, p.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
    offset: s,
    limit: n,
    results: l,
    totalResults: a
  });
  u.default.trackWithMetadata(g.AnalyticEvents.SEARCH_RESULT_SELECTED, {
    ...d,
    index_num: r,
    source_object: "GIF Picker",
    query: o
  }), null != c && i.default.post({
    url: g.Endpoints.GIFS_SELECT,
    body: {
      id: c,
      q: o
    },
    oldFormErrors: !0
  })
}

function x() {
  let e = (0, l.v4)().replace(R, "");
  u.default.trackWithMetadata(g.AnalyticEvents.SEARCH_OPENED, {
    search_type: g.SearchTypes.GIF,
    load_id: e
  }), o.default.wait(() => {
    o.default.dispatch({
      type: "GIF_PICKER_INITIALIZE",
      analyticsID: e
    })
  })
}

function N() {
  i.default.get({
    url: g.Endpoints.GIFS_TRENDING,
    query: {
      provider: "tenor",
      locale: d.default.locale,
      media_format: f.default.getSelectedFormat()
    },
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e, {
      categories: r,
      gifs: s
    } = t;
    o.default.dispatch({
      type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
      trendingCategories: r,
      trendingGIFPreview: s[0]
    })
  })
}

function P(e) {
  let t = Date.now();
  y(g.GIFPickerResultTypes.TRENDING_GIFS), i.default.get({
    url: g.Endpoints.GIFS_TRENDING_GIFS,
    query: {
      media_format: f.default.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
      limit: e
    },
    oldFormErrors: !0
  }).then(r => {
    let {
      body: s
    } = r;
    S(s, g.GIFPickerResultTypes.TRENDING_GIFS, {
      startTime: t,
      limit: e
    }), o.default.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      items: s
    })
  }, () => {
    o.default.dispatch({
      type: "GIF_PICKER_QUERY_FAILURE"
    })
  })
}

function w(e) {
  let t = new URL(e);
  return (0, c.isAttachmentUrl)(t) ? (0, c.removeSignedUrlParameters)(t).toString() : e
}

function M(e) {
  h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
    var r;
    let s = null !== (r = n.max(Object.values(t.gifs).map(e => e.order))) && void 0 !== r ? r : 0;
    t.gifs[w(e.url)] = {
      ...e,
      order: s + 1
    };
    let l = a.FavoriteGIFs.toBinary(t).length;
    if (l > _.MAX_FAVORITE_GIFS_SIZE) return I.default.show({
      title: E.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
      body: E.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
    }), !1;
    n.size(t.gifs) > 2 && (t.hideTooltip = !0)
  }, _.UserSettingsDelay.INFREQUENT_USER_ACTION), m.default.track(g.AnalyticEvents.GIF_FAVORITED)
}

function O(e) {
  h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
    e in t.gifs ? delete t.gifs[e] : delete t.gifs[w(e)]
  }, _.UserSettingsDelay.INFREQUENT_USER_ACTION), m.default.track(g.AnalyticEvents.GIF_UNFAVORITED)
}