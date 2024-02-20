"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var i = n("850068"),
  a = n("689988"),
  l = n("843663");
class s extends a.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: () => {
        let {
          enabled: e
        } = l.LocalizedPricingPromoManagerExperiment.getCurrentConfig({
          location: "cd74f0_1"
        }, {
          autoTrackExposure: !1
        });
        e && (0, i.fetchLocalizedPromo)()
      }
    }
  }
}
var r = new s