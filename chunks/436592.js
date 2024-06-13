"use strict";
n.r(e), n.d(e, {
  useIsSecureFramesUIEnabled: function() {
    return a
  }
});
var i = n("229502");

function a(t) {
  let {
    enabled: e
  } = i.SecureFramesUIExperiment.useExperiment({
    location: "useIsSecureFramesUIEnabled"
  });
  return e && !1
}