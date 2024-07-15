n(47120);
var i, a = n(442837),
  s = n(570140);

function r(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let l = 5 * n(70956).Z.Millis.DAY,
  o = {
readIdToTimestampMap: {}
  };
class c extends(i = a.ZP.DeviceSettingsStore) {
  initialize(e) {
o = null != e && null != e.readIdToTimestampMap ? {
  readIdToTimestampMap: e.readIdToTimestampMap
} : {
  readIdToTimestampMap: {}
};
let t = Date.now() - l;
for (let e of Object.keys(o.readIdToTimestampMap).filter(e => o.readIdToTimestampMap[e] < t))
  delete o.readIdToTimestampMap[e];
  }
  getReadTimestamp(e) {
return o.readIdToTimestampMap[e];
  }
  compare(e, t) {
let n = o.readIdToTimestampMap[e],
  i = o.readIdToTimestampMap[t];
return null == n && null == i ? 0 : null == n ? 1 : null == i ? -1 : n - i;
  }
  getState() {
return o;
  }
  getUserAgnosticState() {
return o;
  }
}
r(c, 'displayName', 'GravityUnreadStateStore'), r(c, 'persistKey', 'GravityUnreadStateStore'), t.Z = new c(s.Z, {
  GRAVITY_ACK_ITEMS: function(e) {
let {
  items: t
} = e;
t.forEach(e => {
  null != e && null == o.readIdToTimestampMap[e.id] && (o.readIdToTimestampMap[e.id] = e.timestamp);
});
  }
});