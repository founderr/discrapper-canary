"use strict";

function a() {
  return {
    logsUploaded: new Date().toISOString(),
    releaseChannel: window.GLOBAL_ENV.RELEASE_CHANNEL,
    buildNumber: "275208",
    versionHash: "91d45873bc7bd573879973cd130bc221e7511d2d"
  }
}
n.r(t), n.d(t, {
  default: function() {
    return a
  }
})