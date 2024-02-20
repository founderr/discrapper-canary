"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("424973");
var r = n("49111");
let i = [],
  o = !1;

function l() {
  let e = window.navigator.connection;
  return null == e ? {
    type: r.NetworkConnectionTypes.UNKNOWN,
    effectiveSpeed: r.NetworkConnectionSpeeds.UNKNOWN
  } : {
    type: null != e.type ? e.type : r.NetworkConnectionTypes.UNKNOWN,
    effectiveSpeed: e.effectiveType
  }
}

function u() {
  let e = l();
  i.forEach(t => t(e))
}
var a = {
  addOnlineCallback(e) {
    window.addEventListener("online", e)
  },
  removeOnlineCallback(e) {
    window.removeEventListener("online", e)
  },
  addOfflineCallback(e) {
    window.addEventListener("offline", e)
  },
  removeOfflineCallback(e) {
    window.removeEventListener("offline", e)
  },
  addChangeCallback(e) {
    var t;
    t = e, i.push(t),
      function() {
        if (!0 === o) return;
        let e = window.navigator.connection;
        null != e && (o = !0, e.addEventListener("change", u))
      }()
  },
  removeChangeCallback(e) {
    ! function(e) {
      let t = i.indexOf(e); - 1 !== t && (i.splice(t, 1), ! function() {
        if (!1 === o) return;
        let e = window.navigator.connection;
        null != e && 0 === i.length && null != e && (e.removeEventListener("change", u), o = !1)
      }())
    }(e)
  },
  getNetworkInformation: () => Promise.resolve(l()),
  isOnline() {
    let e = navigator.onLine;
    return void 0 === e || e
  }
}