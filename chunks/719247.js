n.d(t, {
  RL: function() {
return O;
  },
  TA: function() {
return A;
  }
}), n(47120);
var r, i = n(392711),
  a = n.n(i),
  s = n(661869),
  o = n(876215),
  l = n(423875),
  u = n(442837),
  c = n(570140),
  d = n(158776),
  _ = n(146282),
  E = n(26033),
  f = n(561308),
  h = n(981631),
  p = n(616922),
  m = n(728151);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let T = new Set([o.s.LISTENED_SESSION]),
  g = new Map(),
  S = new Map();

function A(e) {
  return ''.concat(e.author_id, ':').concat(e.id);
}

function N(e, t) {
  let n = e.extra;
  return null != n && ('application_id' in t && t.application_id === n.application_id || 'game_name' in n && t.name === n.game_name);
}

function v(e, t) {
  var n, r, i;
  return (null === (r = e.extra.entries[0]) || void 0 === r ? void 0 : null === (n = r.media) || void 0 === n ? void 0 : n.provider) === l.p.SPOTIFY && (0, p.Ps)(null === (i = t.party) || void 0 === i ? void 0 : i.id);
}

function O(e, t) {
  return t.application_id === m.sp && e.extra.application_id === m.sp && e.extra.media_title === t.details;
}

function R(e) {
  let t = new Set(),
n = new Set();
  for (let r of e) {
let e = function(e) {
  return (0, f.n2)(e) ? null : (0, f.kr)(e) && e.author_type === s.i.USER ? d.Z.getActivities(e.author_id).find(t => t.type === h.IIU.PLAYING && (0, E.dX)(e) ? N(e, t) : !!(t.type === h.IIU.LISTENING && (0, E.kx)(e)) && v(e, t)) : void 0;
}(r.content);
if (void 0 !== e) {
  let i = A(r.content);
  n.add(i), e !== g.get(i) && (t.add(i), g.set(i, e));
}
  }
  return {
updatedKeys: t,
matchedKeys: n
  };
}

function C() {
  let e = !1,
t = Array.from(g.keys()),
n = new Set(),
r = new Set();
  for (let t of _.Z.getFeeds().values()) {
let {
  updatedKeys: i,
  matchedKeys: a
} = R(n.size > 0 ? t.entries.filter(e => !n.has(A(e.content))) : t.entries);
for (let e of i)
  n.add(e);
for (let e of a)
  r.add(e);
e = e || i.size > 0;
  }
  for (let n of a().difference(t, [...r]))
g.delete(n), e = !0;
  return e;
}
class y extends(r = u.ZP.Store) {
  initialize() {
this.waitFor(_.Z, d.Z), this.syncWith([d.Z], C);
  }
  getMatchingActivity(e) {
return (0, f.n2)(e) ? null : g.get(A(e));
  }
  getMatchingOutboxEntry(e, t) {
let n = S.get(t);
if (null == n || null == e)
  return;
let r = n.entries.filter(f.kr);
return e.type === h.IIU.PLAYING ? r.filter(E.dX).find(t => N(t, e)) : e.type === h.IIU.LISTENING ? r.filter(E.kx).find(t => v(t, e)) : e.type === h.IIU.WATCHING ? n.entries.filter(E.r5).find(t => O(t, e)) : void 0;
  }
  getUserOutbox(e) {
return S.get(e);
  }
  constructor(...e) {
super(...e), I(this, 'canRenderContent', e => !(0, f.n2)(e) && (!T.has(e.content_type) || null != this.getMatchingActivity(e)));
  }
}
I(y, 'displayName', 'ContentInventoryActivityStore'), t.ZP = new y(c.Z, {
  CONNECTION_OPEN: function() {
g.clear();
  },
  CONTENT_INVENTORY_SET_FEED: function(e) {
let {
  feed: t
} = e, {
  updatedKeys: n
} = R(t.entries);
return n.size > 0;
  },
  CONTENT_INVENTORY_SET_USER_OUTBOX: function(e) {
let {
  outbox: t,
  userId: n
} = e;
S.set(n, t);
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY: function(e) {
let {
  entry: t,
  userId: n
} = e, r = S.get(n);
if (null == r)
  return !1;
let i = r.entries.filter(e => e.id !== t.id);
S.set(n, {
  entries: i
});
  }
});