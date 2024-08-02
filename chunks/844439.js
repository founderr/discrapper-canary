n.d(t, {
  M: function() {
return s;
  }
});
var i, o, a, l, s, r, u = n(442837),
  d = n(570140);
(i = s || (s = {}))[i.FETCHING = 0] = 'FETCHING', i[i.FETCHED = 1] = 'FETCHED', i[i.ERROR = 2] = 'ERROR';
let c = {},
  m = {},
  h = {};

function p(e) {
  let {
location: t,
channelId: n,
withCommands: i
  } = e;
  return 'location:'.concat(t, ' channelId:').concat('0', ' withCommands:').concat(i);
}
let E = Object.freeze([]);
class I extends(r = u.ZP.Store) {
  getLastFetchTimeMs(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
return h[p({
  location: t,
  channelId: n,
  withCommands: i
})];
  }
  getFetchState(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
return m[p({
  location: t,
  channelId: n,
  withCommands: i
})];
  }
  getRecommendations(e) {
var t;
let {
  location: n,
  channelId: i,
  withCommands: o
} = e;
return null !== (t = c[p({
  location: n,
  channelId: i,
  withCommands: o
})]) && void 0 !== t ? t : E;
  }
}
l = void 0, (a = 'displayName') in(o = I) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.ZP = new I(d.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
m = {
  ...m,
  [p({
    location: t,
    channelId: n,
    withCommands: i
  })]: 0
};
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function(e) {
let {
  recommendations: t,
  location: n,
  channelId: i,
  withCommands: o
} = e, a = p({
  location: n,
  channelId: i,
  withCommands: o
});
c = {
  ...c,
  [a]: t
}, m = {
  ...m,
  [a]: 1
};
let l = Date.now();
h = {
  ...h,
  [a]: l
};
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
m = {
  ...m,
  [p({
    location: t,
    channelId: n,
    withCommands: i
  })]: 2
};
  }
});