t.d(n, {
  M: function() {
return s;
  }
});
var i, o, l, a, s, r, u = t(442837),
  d = t(570140);
(i = s || (s = {}))[i.FETCHING = 0] = 'FETCHING', i[i.FETCHED = 1] = 'FETCHED', i[i.ERROR = 2] = 'ERROR';
let c = {},
  m = {},
  h = {};

function E(e) {
  let {
location: n,
channelId: t,
withCommands: i
  } = e;
  return 'location:'.concat(n, ' channelId:').concat('0', ' withCommands:').concat(i);
}
let I = Object.freeze([]);
class p extends(r = u.ZP.Store) {
  getLastFetchTimeMs(e) {
let {
  location: n,
  channelId: t,
  withCommands: i
} = e;
return h[E({
  location: n,
  channelId: t,
  withCommands: i
})];
  }
  getFetchState(e) {
let {
  location: n,
  channelId: t,
  withCommands: i
} = e;
return m[E({
  location: n,
  channelId: t,
  withCommands: i
})];
  }
  getRecommendations(e) {
var n;
let {
  location: t,
  channelId: i,
  withCommands: o
} = e;
return null !== (n = c[E({
  location: t,
  channelId: i,
  withCommands: o
})]) && void 0 !== n ? n : I;
  }
}
a = void 0, (l = 'displayName') in(o = p) ? Object.defineProperty(o, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[l] = a, n.ZP = new p(d.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
let {
  location: n,
  channelId: t,
  withCommands: i
} = e;
m = {
  ...m,
  [E({
    location: n,
    channelId: t,
    withCommands: i
  })]: 0
};
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: function(e) {
let {
  recommendations: n,
  location: t,
  channelId: i,
  withCommands: o
} = e, l = E({
  location: t,
  channelId: i,
  withCommands: o
});
c = {
  ...c,
  [l]: n
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
  location: n,
  channelId: t,
  withCommands: i
} = e;
m = {
  ...m,
  [E({
    location: n,
    channelId: t,
    withCommands: i
  })]: 2
};
  }
});