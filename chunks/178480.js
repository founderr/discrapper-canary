"use strict";
n.d(t, {
  RB: function() {
    return c
  },
  a3: function() {
    return a
  },
  hn: function() {
    return _
  },
  mH: function() {
    return u
  },
  r: function() {
    return l
  }
});
var i = n(695346),
  r = n(709054),
  s = n(497089),
  o = n(925928);
let a = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return (0, o.ZP)({
      since: e,
      getFormatter: t ? o.d0 : o.Zk
    })
  },
  l = (e, t) => e.acked || t !== i.uL && r.default.compare(t, e.id) >= 0;

function u(e, t) {
  let n = r.default.fromTimestamp(new Date(t).getTime());
  return {
    acked: !1,
    forceUnacked: !0,
    other_user: e,
    kind: "notification-center-item",
    local_id: "incoming_friend_requests_".concat(e.id, "_").concat(n),
    deeplink: "https://discord.com/users/".concat(e.id),
    type: s.O7.INCOMING_FRIEND_REQUESTS,
    id: n
  }
}

function _(e) {
  return {
    acked: !1,
    enableBadge: !0,
    id: r.default.fromTimestamp(new Date().getTime()),
    kind: "notification-center-item",
    local_id: "mobile_update_available_".concat(e.build),
    type: s.O7.MOBILE_NATIVE_UPDATE_AVAILABLE,
    deeplink: e.urls.install.toString()
  }
}
let c = e => e.type === s.DY.RECENT_MENTION || e.type === s.DY.REPLY_MENTION