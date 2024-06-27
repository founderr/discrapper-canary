"use strict";
n(47120);
var i = n(147913),
  r = n(70956),
  s = n(192720),
  o = n(121254),
  a = n(742989);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class u extends i.Z {
  constructor(...e) {
    super(...e), l(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen()
    }), l(this, "handlePostConnectionOpen", () => {
      ! function e() {
        (o.Z.getCurrentConfig({
          location: "saved_messages_manager"
        }, {
          autoTrackExposure: !1
        }).enabled || a.Z.getCurrentConfig({
          location: "saved_messages_manager"
        }, {
          autoTrackExposure: !1
        }).showReminders) && (0, s.sE)().then(() => setTimeout(e, 15 * r.Z.Millis.MINUTE))
      }()
    })
  }
}
t.Z = new u