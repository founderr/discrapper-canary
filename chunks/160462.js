"use strict";
n.r(t), n.d(t, {
  ConnectionOpenTriggerPoint: function() {
    return a
  }
});
var i = n("185745"),
  r = n("91641"),
  s = n("987338");
let a = new r.CommonTriggerPointConfiguration([i.CTPAppOpenVanillaExperiment, i.CTPAppOpenFiltersExperiment, i.CTPAppOpenEveryoneExperiment, i.CTPAppOpenMultipleBucketsExperiment, i.CTPAppOpenUnevenBucketsExperiment], s.CommonTriggerPoints.POST_CONNECTION_OPEN, {
  location: "connection open"
})