"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var i = n("862337"),
  a = n("913144"),
  l = n("689988");
class s extends l.default {
  _terminate() {
    this.clearErrorTimeout.stop()
  }
  constructor(...e) {
    super(...e), this.clearErrorTimeout = new i.Timeout, this.actions = {
      MEDIA_ENGINE_NOISE_CANCELLATION_ERROR: () => this.handleNoiseCancellationError()
    }, this.handleNoiseCancellationError = () => {
      this.clearErrorTimeout.start(3e3, () => a.default.dispatch({
        type: "MEDIA_ENGINE_NOISE_CANCELLATION_ERROR_RESET"
      }))
    }
  }
}
var r = new s