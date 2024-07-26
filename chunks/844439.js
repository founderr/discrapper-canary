t.d(n, {
  M: function() {
return s;
  }
});
var i, o, a, l, s, r, u = t(442837),
  c = t(570140);
(i = s || (s = {}))[i.FETCHING = 0] = 'FETCHING', i[i.FETCHED = 1] = 'FETCHED', i[i.ERROR = 2] = 'ERROR';
let d = {},
  m = {},
  h = {};

function I(e) {
  let {
location: n,
channelId: t,
withCommands: i
  } = e;
  return 'location:'.concat(n, ' channelId:').concat('0', ' withCommands:').concat(i);
}
let E = Object.freeze([]);
class p extends(r = u.ZP.Store) {
  getLastFetchTimeMs(e) {
let {
  location: n,
  channelId: t,
  withCommands: i
} = e;
return h[I({
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
return m[I({
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
return null !== (n = d[I({
  location: t,
  channelId: i,
  withCommands: o
})]) && void 0 !== n ? n : E;
  }
}
l = void 0, (a = 'displayName') in(o = p) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, n.ZP = new p(c.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
let {
  location: n,
  channelId: t,
  withCommands: i
} = e;
m = {
  ...m,
  [I({
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
} = e, a = I({
  location: t,
  channelId: i,
  withCommands: o
});
d = {
  ...d,
  [a]: n
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
  location: n,
  channelId: t,
  withCommands: i
} = e;
m = {
  ...m,
  [I({
    location: n,
    channelId: t,
    withCommands: i
  })]: 2
};
  }
});