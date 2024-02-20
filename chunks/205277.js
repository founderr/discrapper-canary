"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var i = n("689988"),
  a = n("718517"),
  l = n("931318"),
  s = n("979268");
class r extends i.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }, this.handlePostConnectionOpen = () => {
      ! function e() {
        s.default.getCurrentConfig({
          location: "e391b1_1"
        }, {
          autoTrackExposure: !1
        }).showReminders && (0, l.fetchAndUpdateSavedMessages)().then(() => setTimeout(e, 15 * a.default.Millis.MINUTE))
      }()
    }
  }
}
var o = new r