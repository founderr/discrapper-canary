"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("95410"),
  a = n("689988"),
  l = n("697218"),
  s = n("553257"),
  r = n("363613"),
  o = n("42060"),
  u = n("275803"),
  d = n("935583");
let c = "lastSawPomelo";
class f extends a.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => this.onPostConnectionOpen()
    }, this.onPostConnectionOpen = () => {
      if (function() {
          let e = s.experiment.getCurrentConfig({
            location: "b9eb97_1"
          }, {
            autoTrackExposure: !1
          }).enabled;
          if (!e) return !1;
          let t = l.default.getCurrentUser();
          if (null == t || t.isPomelo() || !t.hasVerifiedEmailOrPhone()) return !1;
          let n = (0, o.getForceMigration)(),
            a = i.default.get(n ? "lastSawPomeloMigration" : c);
          return !(null != a && Date.now() - a < 6048e5) && !0
        }()) {
        let e = u.UUOneClickExperiment.getCurrentConfig({
            location: "uu_one_click"
          }, {
            autoTrackExposure: !1
          }).enabled,
          t = (0, r.openPomeloModal)(d.PomeloEntrypoints.APP_START, e, !1);
        t && i.default.set(c, Date.now())
      }
    }
  }
}
var E = new f