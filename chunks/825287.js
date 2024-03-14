"use strict";

function a() {
  return {
    logsUploaded: new Date().toISOString(),
    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
    buildNumber: "275237",
    versionHash: "35e730aee071825e55a52410c69022d6df505120"
  }
}
n.r(t), n.d(t, {
  default: function() {
    return a
  }
})