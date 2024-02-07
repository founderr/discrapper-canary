"use strict";
s.r(t), s.d(t, {
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
    return G
  },
  trackSelectGIF: function() {
    return A
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
    return w
  },
  removeFavoriteGIF: function() {
    return O
  }
}), s("781738"), s("511434"), s("313619"), s("654714"), s("287168"), s("956660"), s("222007");
var r = s("917351"),
  n = s.n(r),
  l = s("748820"),
  i = s("872717"),
  a = s("713349"),
  o = s("913144"),
  u = s("716241"),
  c = s("787336"),
  d = s("915639"),
  h = s("872173"),
  f = s("510849"),
  p = s("599110"),
  m = s("564703"),
  I = s("404118"),
  g = s("49111"),
  _ = s("397336"),
  E = s("782340");
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
    startTime: s,
    ...r
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = {
    offset: 0,
    limit: null,
    totalResults: e.length
  }, l = (0, m.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
    ...n,
    ...r,
    results: e
  }), i = null == s ? {} : {
    load_duration_ms: Date.now() - s
  };
  u.default.trackWithMetadata(g.AnalyticEvents.SEARCH_RESULT_VIEWED, {
    ...l,
    ...i
  })
}

function F(e, t, s) {
  let r = Date.now();
  y(t), i.default.get({
    url: g.Endpoints.GIFS_SEARCH,
    query: {
      q: e,
      media_format: f.default.getSelectedFormat(),
      provider: "tenor",
      locale: d.default.locale,
      limit: s
    },
    oldFormErrors: !0
  }).then(n => {
    let l = n.body;
    S(l, t, {
      startTime: r,
      limit: s
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
let v = n.debounce(F, 250);

function T(e, t) {
  let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = arguments.length > 3 ? arguments[3] : void 0;
  "" === e ? G() : (o.default.dispatch({
    type: "GIF_PICKER_QUERY",
    query: e
  }), s ? F(e, t, r) : v(e, t, r))
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
    let s = t.body;
    o.default.dispatch({
      type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
      query: e,
      items: s
    })
  })
}

function G() {
  o.default.dispatch({
    type: "GIF_PICKER_QUERY",
    query: ""
  })
}

function A(e) {
  let {
    type: t,
    index: s,
    offset: r,
    limit: n,
    results: l,
    totalResults: a,
    query: o,
    gifId: c
  } = e, d = (0, m.calculateAnalyticsMetadata)(f.default.getAnalyticsID(), t, {
    offset: r,
    limit: n,
    results: l,
    totalResults: a
  });
  u.default.trackWithMetadata(g.AnalyticEvents.SEARCH_RESULT_SELECTED, {
    ...d,
    index_num: s,
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
      categories: s,
      gifs: r
    } = t;
    o.default.dispatch({
      type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
      trendingCategories: s,
      trendingGIFPreview: r[0]
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
  }).then(s => {
    let {
      body: r
    } = s;
    S(r, g.GIFPickerResultTypes.TRENDING_GIFS, {
      startTime: t,
      limit: e
    }), o.default.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      items: r
    })
  }, () => {
    o.default.dispatch({
      type: "GIF_PICKER_QUERY_FAILURE"
    })
  })
}

function M(e) {
  let t = new URL(e);
  return (0, c.isAttachmentUrl)(t) ? (0, c.removeSignedUrlParameters)(t).toString() : e
}

function w(e) {
  h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
    var s;
    let r = null !== (s = n.max(Object.values(t.gifs).map(e => e.order))) && void 0 !== s ? s : 0;
    t.gifs[M(e.url)] = {
      ...e,
      order: r + 1
    };
    let l = a.FavoriteGIFs.toBinary(t).length;
    if (l > _.MAX_FAVORITE_GIFS_SIZE) return I.default.show({
      title: E.default.Messages.FAVORITES_LIMIT_REACHED_TITLE,
      body: E.default.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
    }), !1;
    n.size(t.gifs) > 2 && (t.hideTooltip = !0)
  }, _.UserSettingsDelay.INFREQUENT_USER_ACTION), p.default.track(g.AnalyticEvents.GIF_FAVORITED)
}

function O(e) {
  h.FrecencyUserSettingsActionCreators.updateAsync("favoriteGifs", t => {
    e in t.gifs ? delete t.gifs[e] : delete t.gifs[M(e)]
  }, _.UserSettingsDelay.INFREQUENT_USER_ACTION), p.default.track(g.AnalyticEvents.GIF_UNFAVORITED)
}