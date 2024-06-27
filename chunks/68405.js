"use strict";
n.d(t, {
  PF: function() {
    return G
  },
  R7: function() {
    return D
  },
  Tg: function() {
    return P
  },
  UU: function() {
    return y
  },
  gK: function() {
    return M
  },
  hM: function() {
    return R
  },
  iy: function() {
    return U
  },
  mO: function() {
    return v
  },
  t1: function() {
    return O
  },
  uL: function() {
    return b
  },
  v2: function() {
    return L
  },
  yC: function() {
    return C
  }
}), n(757143);
var i = n(392711),
  r = n.n(i),
  s = n(772848),
  o = n(544891),
  a = n(377108),
  l = n(570140),
  u = n(367907),
  _ = n(198620),
  c = n(706454),
  d = n(675478),
  E = n(656733),
  I = n(626135),
  T = n(708406),
  h = n(591759),
  f = n(668781),
  S = n(981631),
  A = n(526761),
  N = n(689938);
let m = /-/g;

function O(e) {
  let t = null != e ? {
    [e]: 1
  } : {};
  u.ZP.trackWithMetadata(S.rMx.SEARCH_STARTED, {
    search_type: S.aib.GIF,
    load_id: E.Z.getAnalyticsID(),
    num_modifiers: Object.keys(t).length,
    modifiers: t
  })
}

function R(e, t) {
  let {
    startTime: n,
    ...i
  } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = {
    offset: 0,
    limit: null,
    totalResults: e.length
  }, s = (0, T._)(E.Z.getAnalyticsID(), t, {
    ...r,
    ...i,
    results: e
  }), o = null == n ? {} : {
    load_duration_ms: Date.now() - n
  };
  u.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_VIEWED, {
    ...s,
    ...o
  })
}

function p(e, t, n) {
  let i = Date.now();
  O(t), o.tn.get({
    url: S.ANM.GIFS_SEARCH,
    query: {
      q: e,
      media_format: E.Z.getSelectedFormat(),
      provider: "tenor",
      locale: c.default.locale,
      limit: n
    },
    oldFormErrors: !0
  }).then(r => {
    let s = r.body;
    R(s, t, {
      startTime: i,
      limit: n
    }), l.Z.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      query: e,
      items: s
    })
  }, () => l.Z.dispatch({
    type: "GIF_PICKER_QUERY_FAILURE",
    query: e
  }))
}
let g = r().debounce(p, 250);

function C(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 ? arguments[3] : void 0;
  "" === e ? L() : (l.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: e
  }), n ? p(e, t, i) : g(e, t, i))
}

function v(e) {
  if ("" !== e && null != e) o.tn.get({
    url: S.ANM.GIFS_SUGGEST,
    query: {
      q: e,
      provider: "tenor",
      limit: 5,
      locale: c.default.locale
    },
    oldFormErrors: !0
  }).then(t => {
    let n = t.body;
    l.Z.dispatch({
      type: "GIF_PICKER_SUGGESTIONS_SUCCESS",
      query: e,
      items: n
    })
  })
}

function L() {
  l.Z.dispatch({
    type: "GIF_PICKER_QUERY",
    query: ""
  })
}

function D(e) {
  let {
    type: t,
    index: n,
    offset: i,
    limit: r,
    results: s,
    totalResults: a,
    query: l,
    gifId: _
  } = e, c = (0, T._)(E.Z.getAnalyticsID(), t, {
    offset: i,
    limit: r,
    results: s,
    totalResults: a
  });
  u.ZP.trackWithMetadata(S.rMx.SEARCH_RESULT_SELECTED, {
    ...c,
    index_num: n,
    source_object: "GIF Picker",
    query: l
  }), null != _ && o.tn.post({
    url: S.ANM.GIFS_SELECT,
    body: {
      id: _,
      q: l
    },
    oldFormErrors: !0
  })
}

function M() {
  let e = (0, s.Z)().replace(m, "");
  u.ZP.trackWithMetadata(S.rMx.SEARCH_OPENED, {
    search_type: S.aib.GIF,
    load_id: e
  }), l.Z.wait(() => {
    l.Z.dispatch({
      type: "GIF_PICKER_INITIALIZE",
      analyticsID: e
    })
  })
}

function P() {
  o.tn.get({
    url: S.ANM.GIFS_TRENDING,
    query: {
      provider: "tenor",
      locale: c.default.locale,
      media_format: E.Z.getSelectedFormat()
    },
    oldFormErrors: !0
  }).then(e => {
    let {
      body: t
    } = e, {
      categories: n,
      gifs: i
    } = t;
    l.Z.dispatch({
      type: "GIF_PICKER_TRENDING_FETCH_SUCCESS",
      trendingCategories: n,
      trendingGIFPreview: i[0]
    })
  })
}

function y(e) {
  let t = Date.now();
  O(S.wI2.TRENDING_GIFS), o.tn.get({
    url: S.ANM.GIFS_TRENDING_GIFS,
    query: {
      media_format: E.Z.getSelectedFormat(),
      provider: "tenor",
      locale: c.default.locale,
      limit: e
    },
    oldFormErrors: !0
  }).then(n => {
    let {
      body: i
    } = n;
    R(i, S.wI2.TRENDING_GIFS, {
      startTime: t,
      limit: e
    }), l.Z.dispatch({
      type: "GIF_PICKER_QUERY_SUCCESS",
      items: i
    })
  }, () => {
    l.Z.dispatch({
      type: "GIF_PICKER_QUERY_FAILURE"
    })
  })
}

function U(e) {
  let t = h.Z.toURLSafe(e);
  return null == t ? e : (0, _.MO)(t) ? (0, _.q5)(t).toString() : e
}

function b(e) {
  d.DZ.updateAsync("favoriteGifs", t => {
    var n;
    let i = null !== (n = r().max(Object.values(t.gifs).map(e => e.order))) && void 0 !== n ? n : 0;
    if (t.gifs[U(e.url)] = {
        ...e,
        order: i + 1
      }, a.wK.toBinary(t).length > A.vY) return f.Z.show({
      title: N.Z.Messages.FAVORITES_LIMIT_REACHED_TITLE,
      body: N.Z.Messages.FAVORITE_GIFS_LIMIT_REACHED_BODY
    }), !1;
    let s = r().size(t.gifs);
    s > 2 && (t.hideTooltip = !0), I.default.track(S.rMx.GIF_FAVORITED, {
      total_num_favorited: s
    })
  }, A.fy.INFREQUENT_USER_ACTION)
}

function G(e) {
  d.DZ.updateAsync("favoriteGifs", t => {
    e in t.gifs ? delete t.gifs[e] : delete t.gifs[U(e)], I.default.track(S.rMx.GIF_UNFAVORITED, {
      total_num_favorited: r().size(t.gifs)
    })
  }, A.fy.INFREQUENT_USER_ACTION)
}