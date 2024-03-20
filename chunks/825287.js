"use strict";

function a() {
  return {
    logsUploaded: new Date().toISOString(),
    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
    buildNumber: "277235",
    versionHash: "b19f0df0ab7b980da173843d8a8298996d4def5f"
  }
}
n.r(t), n.d(t, {
  default: function() {
    return a
  }
})