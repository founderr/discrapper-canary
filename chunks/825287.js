"use strict";

function a() {
  return {
    logsUploaded: new Date().toISOString(),
    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
    buildNumber: "275005",
    versionHash: "c5713295a8a1ce004f273c743080553d1d9de1af"
  }
}
n.r(t), n.d(t, {
  default: function() {
    return a
  }
})