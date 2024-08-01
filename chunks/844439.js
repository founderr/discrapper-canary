t.d(n, {
  M: function() {
return s;
  }
});
var i, l, o, a, s, r, u = t(442837),
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
  withCommands: l
} = e;
return null !== (n = c[E({
  location: t,
  channelId: i,
  withCommands: l
})]) && void 0 !== n ? n : I;
  }
}
a = void 0, (o = 'displayName') in(l = p) ? Object.defineProperty(l, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[o] = a, n.ZP = new p(d.Z, {
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
  withCommands: l
} = e, o = E({
  location: t,
  channelId: i,
  withCommands: l
});
c = {
  ...c,
  [o]: n
}, m = {
  ...m,
  [o]: 1
};
let a = Date.now();
h = {
  ...h,
  [o]: a
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