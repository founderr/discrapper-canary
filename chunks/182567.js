"use strict";
s.r(t), s.d(t, {
  AnalyticsLocationsProvider: function() {
    return r
  }
}), s("47120");
var a = s("735250");
s("470079");
var i = s("906732");

function r(e) {
  let {
    analyticsLocations: t
  } = (0, i.default)(...e.newLocations);
  return (0, a.jsx)(i.LocationContext.Provider, {
    value: t,
    children: e.children
  })
}