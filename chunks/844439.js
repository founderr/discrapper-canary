"use strict";
n.r(t), n.d(t, {
  FetchState: function() {
    return o
  }
});
var i, r, s, a, o, l, u = n("442837"),
  d = n("570140");
(i = o || (o = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
let _ = {},
  c = {},
  E = {};

function I(e) {
  let {
    location: t,
    channelId: n
  } = e;
  return "location:".concat(t, " channelId:").concat(n)
}
class T extends(l = u.default.Store) {
  getLastFetchTimeMs(e) {
    let {
      location: t,
      channelId: n
    } = e;
    return E[I({
      location: t,
      channelId: n
    })]
  }
  getFetchState(e) {
    let {
      location: t,
      channelId: n
    } = e;
    return c[I({
      location: t,
      channelId: n
    })]
  }
  getRecommendations(e) {
    var t;
    let {
      location: n,
      channelId: i
    } = e;
    return null !== (t = _[I({
      location: n,
      channelId: i
    })]) && void 0 !== t ? t : []
  }
}
a = void 0, (s = "displayName") in(r = T) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new T(d.default, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
    let {
      location: t,
      channelId: n
    } = e;
    c = {
      ...c,
      [I({
        location: t,
        channelId: n
      })]: 0
    }
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function(e) {
    let {
      recommendations: t,
      location: n,
      channelId: i
    } = e, r = I({
      location: n,
      channelId: i
    });
    _ = {
      ..._,
      [r]: t
    }, c = {
      ...c,
      [r]: 1
    };
    let s = Date.now();
    E = {
      ...E,
      [r]: s
    }
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function(e) {
    let {
      location: t,
      channelId: n
    } = e;
    c = {
      ...c,
      [I({
        location: t,
        channelId: n
      })]: 2
    }
  }
})