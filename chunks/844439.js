t.d(n, {
  M: function() {
    return s
  }
});
var i, l, a, r, s, o, c = t(442837),
  u = t(570140);
(i = s || (s = {}))[i.FETCHING = 0] = "FETCHING", i[i.FETCHED = 1] = "FETCHED", i[i.ERROR = 2] = "ERROR";
let d = {},
  m = {},
  p = {};

function E(e) {
  let {
    location: n,
    channelId: t
  } = e;
  return "location:".concat(n, " channelId:").concat(t)
}
let h = Object.freeze([]);
class _ extends(o = c.ZP.Store) {
  getLastFetchTimeMs(e) {
    let {
      location: n,
      channelId: t
    } = e;
    return p[E({
      location: n,
      channelId: t
    })]
  }
  getFetchState(e) {
    let {
      location: n,
      channelId: t
    } = e;
    return m[E({
      location: n,
      channelId: t
    })]
  }
  getRecommendations(e) {
    var n;
    let {
      location: t,
      channelId: i
    } = e;
    return null !== (n = d[E({
      location: t,
      channelId: i
    })]) && void 0 !== n ? n : h
  }
}
r = void 0, (a = "displayName") in(l = _) ? Object.defineProperty(l, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[a] = r, n.Z = new _(u.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
    let {
      location: n,
      channelId: t
    } = e;
    m = {
      ...m,
      [E({
        location: n,
        channelId: t
      })]: 0
    }
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function(e) {
    let {
      recommendations: n,
      location: t,
      channelId: i
    } = e, l = E({
      location: t,
      channelId: i
    });
    d = {
      ...d,
      [l]: n
    }, m = {
      ...m,
      [l]: 1
    };
    let a = Date.now();
    p = {
      ...p,
      [l]: a
    }
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function(e) {
    let {
      location: n,
      channelId: t
    } = e;
    m = {
      ...m,
      [E({
        location: n,
        channelId: t
      })]: 2
    }
  }
})