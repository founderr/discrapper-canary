n.d(t, {
  M: function() {
return s;
  }
});
var i, o, l, a, s, r, u = n(442837),
  c = n(570140);
(i = s || (s = {}))[i.FETCHING = 0] = 'FETCHING', i[i.FETCHED = 1] = 'FETCHED', i[i.ERROR = 2] = 'ERROR';
let d = {},
  m = {},
  h = {};

function I(e) {
  let {
location: t,
channelId: n,
withCommands: i
  } = e;
  return 'location:'.concat(t, ' channelId:').concat('0', ' withCommands:').concat(i);
}
let p = Object.freeze([]);
class E extends(r = u.ZP.Store) {
  getLastFetchTimeMs(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
return h[I({
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
return m[I({
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
return null !== (t = d[I({
  location: n,
  channelId: i,
  withCommands: o
})]) && void 0 !== t ? t : p;
  }
}
a = void 0, (l = 'displayName') in(o = E) ? Object.defineProperty(o, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[l] = a, t.ZP = new E(c.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
m = {
  ...m,
  [I({
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
} = e, l = I({
  location: n,
  channelId: i,
  withCommands: o
});
d = {
  ...d,
  [l]: t
}, m = {
  ...m,
  [l]: 1
};
let a = Date.now();
h = {
  ...h,
  [l]: a
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
  [I({
    location: t,
    channelId: n,
    withCommands: i
  })]: 2
};
  }
});