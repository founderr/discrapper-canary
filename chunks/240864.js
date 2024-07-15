t.d(n, {
  M: function() {
return r;
  }
}), t(653041), t(47120);
var r, i, o, l, u, a, s = t(442837),
  c = t(759174),
  d = t(570140),
  _ = t(70956),
  f = t(709054);
(o = r || (r = {}))[o.NOT_FETCHED = 0] = 'NOT_FETCHED', o[o.FETCHING = 1] = 'FETCHING', o[o.FETCHED = 2] = 'FETCHED';
let E = {},
  I = {},
  g = {},
  p = 10 * _.Z.Millis.MINUTE;

function S(e) {
  return 'guild:'.concat(e);
}

function C(e) {
  return 'guild:'.concat(e, ':published');
}
let T = new c.h(e => {
let n = [S(e.guild_id)];
return e.published && n.push(C(e.guild_id)), n;
  }, e => function(e) {
let n = f.default.extractTimestamp(e.id);
return e.published ? -n : -n + 1000000000000;
  }(e)),
  m = [];
class A extends(i = s.ZP.Store) {
  getGuildProductsForGuildFetchState(e) {
var n;
return null !== (n = E[e]) && void 0 !== n ? n : 0;
  }
  getGuildProduct(e) {
return T.get(e);
  }
  getGuildProductsForGuild(e, n) {
let {
  publishedOnly: t
} = n;
return null == e ? m : T.values(t ? C(e) : S(e));
  }
  getGuildProductFetchState(e) {
var n;
return null !== (n = I[e]) && void 0 !== n ? n : 0;
  }
  isGuildProductsCacheExpired(e) {
var n;
return Date.now() - (null !== (n = g[e]) && void 0 !== n ? n : 0) > p;
  }
}
a = 'GuildProductsStore', (u = 'displayName') in(l = A) ? Object.defineProperty(l, u, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[u] = a, n.Z = new A(d.Z, {
  CONNECTION_OPEN: function() {
T.clear(), E = {}, I = {}, g = {};
  },
  GUILD_PRODUCTS_FETCH: function(e) {
let {
  guildId: n
} = e;
E[n] = 1, [...T.values(S(n))].forEach(e => {
  T.delete(e.id);
});
  },
  GUILD_PRODUCTS_FETCH_SUCCESS: function(e) {
let {
  guildId: n,
  products: t
} = e;
E[n] = 2, g[n] = Date.now(), t.forEach(e => {
  T.set(e.id, e), I[e.id] = 2;
});
  },
  GUILD_PRODUCTS_FETCH_FAILURE: function(e) {
let {
  guildId: n
} = e;
E[n] = 2;
  },
  GUILD_PRODUCT_CREATE: function(e) {
let {
  product: n
} = e;
T.set(n.id, n);
  },
  GUILD_PRODUCT_UPDATE: function(e) {
let {
  product: n
} = e;
T.set(n.id, n);
  },
  GUILD_PRODUCT_DELETE: function(e) {
let {
  productId: n
} = e;
T.delete(n);
  },
  GUILD_PRODUCT_FETCH: function(e) {
let {
  productId: n
} = e;
I[n] = 1;
  },
  GUILD_PRODUCT_FETCH_SUCCESS: function(e) {
let {
  product: n
} = e;
I[n.id] = 2, T.set(n.id, n);
  },
  GUILD_PRODUCT_FETCH_FAILURE: function(e) {
let {
  productId: n,
  error: t
} = e;
I[n] = 2, 404 === t.status && T.delete(n);
  }
});