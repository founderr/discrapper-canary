"use strict";
n.r(t), n.d(t, {
  hideHotspot: function() {
    return l
  },
  setHotspotOverride: function() {
    return a
  },
  clearHotspotOverride: function() {
    return u
  }
});
var s = n("913144"),
  r = n("599110"),
  i = n("49111");

function l(e) {
  r.default.track(i.AnalyticEvents.HOTSPOT_HIDDEN, {
    hotspot_location: e
  }), s.default.wait(() => {
    s.default.dispatch({
      type: "HOTSPOT_HIDE",
      location: e
    })
  })
}

function a(e, t) {
  s.default.dispatch({
    type: "HOTSPOT_OVERRIDE_SET",
    location: e,
    enabled: t
  })
}

function u(e) {
  s.default.dispatch({
    type: "HOTSPOT_OVERRIDE_CLEAR",
    location: e
  })
}