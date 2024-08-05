n(47120), n(653041);
var i, a = n(442837),
  s = n(570140);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let r = () => ({
itemImpressions: []
  }),
  o = r(),
  c = new Set(),
  u = new Set(),
  d = 0,
  h = !1,
  m = !1;

function p() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
  if (!e && Date.now() < d)
return;
  o.itemImpressions.length > 1000 && (o.itemImpressions = []);
  let t = 0,
n = Date.now() - 259200000;
  for (let e = 0; e < o.itemImpressions.length; e++) {
let [i, a] = o.itemImpressions[e];
if (a < n)
  t = e + 1;
else
  break;
  }
  t > 0 && (o.itemImpressions = o.itemImpressions.slice(t));
  let i = m ? 1000 : 57600000,
a = new Set(),
s = new Set(),
l = Date.now() - i,
r = null;
  for (let [e, t] of o.itemImpressions)
t < l ? a.add(e) : null == r && (r = t + i), s.add(e);
  c = a, u = s, d = null != r ? r : 1 / 0, h = !0;
}
class _ extends(i = a.ZP.PersistedStore) {
  initialize(e) {
o = {
  ...o,
  ...null != e ? e : {}
};
  }
  getState() {
return o;
  }
  getImpressionCappedItemIds() {
return p(), c;
  }
  getDebugFastImpressionCappingEnabled() {
return m;
  }
  reset() {
o = r();
  }
}
l(_, 'displayName', 'ContentInventoryPersistedStore'), l(_, 'persistKey', 'ContentInventoryPersistedStore'), t.Z = new _(s.Z, {
  CONTENT_INVENTORY_TRACK_ITEM_IMPRESSIONS: function(e) {
let {
  itemIds: t
} = e;
!h && p();
let n = Date.now(),
  i = !1;
for (let e of t)
  !u.has(e) && (o.itemImpressions.push([
    e,
    n
  ]), i = !0);
return p(i), i;
  },
  CONTENT_INVENTORY_DEBUG_CLEAR_IMPRESSIONS: function() {
o.itemImpressions = [], p(!0);
  },
  CONTENT_INVENTORY_DEBUG_LOG_IMPRESSIONS: function() {
return console.log('Item impressions:', o.itemImpressions), !1;
  },
  CONTENT_INVENTORY_DEBUG_TOGGLE_FAST_IMPRESSION_CAPPING: function() {
m = !m;
  }
});