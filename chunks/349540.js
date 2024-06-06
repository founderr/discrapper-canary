"use strict";
n.r(t), n("47120");
var i = n("147913"),
  r = n("594174"),
  s = n("74538"),
  a = n("163684"),
  o = n("748770"),
  l = n("474936");
class u extends i.default {
  onPostConnectionOpen() {
    this.maybeFetchActiveOutboundPromotions()
  }
  maybeFetchActiveOutboundPromotions() {
    let e = r.default.getCurrentUser(),
      t = s.default.isPremium(e),
      n = a.OutboundPromoDesktopUpsellExperiment.getCurrentConfig({
        location: "maybeFetchActiveOutboundPromotions"
      }, {
        autoTrackExposure: !t,
        disable: t
      }).enabled;
    (s.default.isPremiumExactly(e, l.PremiumTypes.TIER_2) || n) && (0, o.fetchActiveOutboundPromotions)()
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: this.onPostConnectionOpen.bind(this),
      EXPERIMENTS_FETCH_SUCCESS: this.onPostConnectionOpen.bind(this)
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.default = new u