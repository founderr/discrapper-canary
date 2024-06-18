"use strict";
n(47120);
var i = n(433517),
  r = n(147913),
  s = n(594174),
  o = n(918505),
  a = n(548161),
  l = n(347649),
  u = n(776319),
  _ = n(801461);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = "lastSawPomelo";
class E extends r.Z {
  constructor(...e) {
    super(...e), c(this, "actions", {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen()
    }), c(this, "onPostConnectionOpen", () => {
      if (function() {
          if (!o.w8.getCurrentConfig({
              location: "b9eb97_1"
            }, {
              autoTrackExposure: !1
            }).enabled) return !1;
          let e = s.default.getCurrentUser();
          if (null == e || e.isPomelo() || !e.hasVerifiedEmailOrPhone()) return !1;
          let t = (0, l.ov)(),
            n = i.K.get(t ? "lastSawPomeloMigration" : d);
          return !(null != n && Date.now() - n < 6048e5) && !0
        }()) {
        let e = u.Z.getCurrentConfig({
          location: "uu_one_click"
        }, {
          autoTrackExposure: !1
        }).enabled;
        (0, a.a)(_.Kq.APP_START, e, !1) && i.K.set(d, Date.now())
      }
    })
  }
}
t.Z = new E