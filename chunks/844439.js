n.d(t, {
  M: function() {
return c;
  }
});
var i, o, a, l, c, d, r = n(442837),
  s = n(570140);
(i = c || (c = {}))[i.FETCHING = 0] = 'FETCHING', i[i.FETCHED = 1] = 'FETCHED', i[i.ERROR = 2] = 'ERROR';
let m = {},
  u = {},
  p = {};

function _(e) {
  let {
location: t,
channelId: n,
withCommands: i
  } = e;
  return 'location:'.concat(t, ' channelId:').concat('0', ' withCommands:').concat(i);
}
let E = Object.freeze([]);
class g extends(d = r.ZP.Store) {
  getLastFetchTimeMs(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
return p[_({
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
return u[_({
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
return null !== (t = m[_({
  location: n,
  channelId: i,
  withCommands: o
})]) && void 0 !== t ? t : E;
  }
}
l = void 0, (a = 'displayName') in(o = g) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.ZP = new g(s.Z, {
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS: function(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
u = {
  ...u,
  [_({
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
} = e, a = _({
  location: n,
  channelId: i,
  withCommands: o
});
m = {
  ...m,
  [a]: t
}, u = {
  ...u,
  [a]: 1
};
let l = Date.now();
p = {
  ...p,
  [a]: l
};
  },
  APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_FAILURE: function(e) {
let {
  location: t,
  channelId: n,
  withCommands: i
} = e;
u = {
  ...u,
  [_({
    location: t,
    channelId: n,
    withCommands: i
  })]: 2
};
  }
});