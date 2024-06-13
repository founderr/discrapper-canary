"use strict";
a.r(t), a.d(t, {
  useIsSecureFramesUIEnabled: function() {
    return l
  }
});
var u = a("229502");

function l(e) {
  let {
    enabled: t
  } = u.SecureFramesUIExperiment.useExperiment({
    location: "useIsSecureFramesUIEnabled"
  });
  return t && !1
}