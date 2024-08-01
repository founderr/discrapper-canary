n.d(t, {
  T: function() {
return g;
  }
}), n(47120);
var r, i = n(392711),
  a = n.n(i),
  s = n(661869),
  o = n(876215),
  l = n(442837),
  u = n(570140),
  c = n(158776),
  d = n(146282),
  _ = n(26033),
  E = n(180335),
  f = n(561308),
  h = n(981631);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let m = new Set([o.s.LISTENED_SESSION]),
  I = new Map(),
  T = new Map();

function g(e) {
  return ''.concat(e.author_id, ':').concat(e.id);
}

function S(e) {
  let t = new Set(),
n = new Set();
  for (let r of e) {
let e = function(e) {
  return (0, f.n2)(e) ? null : (0, f.kr)(e) && e.author_type === s.i.USER ? c.Z.getActivities(e.author_id).find(t => t.type === h.IIU.PLAYING && (0, _.dX)(e) ? (0, E.Ym)(e, t) : !!(t.type === h.IIU.LISTENING && (0, _.kx)(e)) && (0, E.pB)(e, t)) : void 0;
}(r.content);
if (void 0 !== e) {
  let i = g(r.content);
  n.add(i), e !== I.get(i) && (t.add(i), I.set(i, e));
}
  }
  return {
updatedKeys: t,
matchedKeys: n
  };
}

function A() {
  let e = !1,
t = Array.from(I.keys()),
n = new Set(),
r = new Set();
  for (let t of d.Z.getFeeds().values()) {
let {
  updatedKeys: i,
  matchedKeys: a
} = S(n.size > 0 ? t.entries.filter(e => !n.has(g(e.content))) : t.entries);
for (let e of i)
  n.add(e);
for (let e of a)
  r.add(e);
e = e || i.size > 0;
  }
  for (let n of a().difference(t, [...r]))
I.delete(n), e = !0;
  return e;
}
class N extends(r = l.ZP.Store) {
  initialize() {
this.waitFor(d.Z, c.Z), this.syncWith([c.Z], A);
  }
  getMatchingActivity(e) {
return (0, f.n2)(e) ? null : I.get(g(e));
  }
  getMatchingOutboxEntry(e) {
let {
  activity: t,
  userId: n
} = e, r = T.get(n);
if (null != r && null != t)
  return (0, E.vu)(r.entries, t);
  }
  getUserOutbox(e) {
return T.get(e);
  }
  constructor(...e) {
super(...e), p(this, 'canRenderContent', e => !(0, f.n2)(e) && (!m.has(e.content_type) || null != this.getMatchingActivity(e)));
  }
}
p(N, 'displayName', 'ContentInventoryActivityStore'), t.Z = new N(u.Z, {
  CONNECTION_OPEN: function() {
I.clear();
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
let {
  feed: t
} = e, {
  updatedKeys: n
} = S(t.entries);
return n.size > 0;
  },
  CONTENT_INVENTORY_SET_USER_OUTBOX: function(e) {
let {
  outbox: t,
  userId: n
} = e;
T.set(n, t);
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY: function(e) {
let {
  entry: t,
  userId: n
} = e, r = T.get(n);
if (null == r)
  return !1;
let i = r.entries.filter(e => e.id !== t.id);
T.set(n, {
  entries: i
});
  }
});