"use strict";

function a() {
  return {
    logsUploaded: new Date().toISOString(),
    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
    buildNumber: "275113",
    versionHash: "9523ace0f287d524c0632192195266f67cdcfacc"
  }
}
n.r(t), n.d(t, {
  default: function() {
    return a
  }
})