n(47120);
var r, i, a, s, o = n(442837),
  l = n(570140),
  u = n(180335);
let c = new Map(),
  d = null,
  _ = !1;

function E() {
  c = new Map(), d = null, _ = !1;
}
class f extends(r = o.ZP.Store) {
  getMatchingOutboxEntry(e) {
let {
  activity: t,
  userId: n
} = e, r = c.get(n);
if (null != r && null != t)
  return (0, u.vu)(r.entries, t);
  }
  getUserOutbox(e) {
return c.get(e);
  }
  get deleteOutboxEntryError() {
return d;
  }
  get isDeletingEntryHistory() {
return _;
  }
}
s = 'ContentInventoryOutboxStore', (a = 'displayName') in(i = f) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new f(l.Z, {
  CONNECTION_OPEN: function() {
E();
  },
  LOGOUT: function() {
E();
  },
  CONTENT_INVENTORY_FETCH_OUTBOX_SUCCESS: function(e) {
let {
  outbox: t,
  userId: n
} = e;
c.set(n, {
  ...t,
  lastFetched: Date.now()
});
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_START: function() {
d = null, _ = !0;
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_SUCCESS: function(e) {
let {
  entry: t,
  userId: n
} = e;
d = null;
let r = c.get(n);
if (null == r)
  return !1;
let i = r.entries.filter(e => e.id !== t.id);
c.set(n, {
  ...r,
  entries: i
}), _ = !1;
  },
  CONTENT_INVENTORY_DELETE_OUTBOX_ENTRY_FAILURE: function(e) {
let {
  error: t
} = e;
d = t, _ = !1;
  },
  CONTENT_INVENTORY_CLEAR_DELETE_HISTORY_ERROR: function() {
d = null, _ = !1;
  }
});