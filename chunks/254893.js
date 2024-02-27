"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var a = s("37983"),
  i = s("884691"),
  r = s("456015"),
  n = s("982457"),
  l = s("154889"),
  o = s("917247"),
  u = s("157829"),
  d = s("143476"),
  c = s("646718"),
  _ = e => {
    let {
      entrypoint: t
    } = e, s = (0, o.usePremiumTrialOffer)(), _ = (0, l.usePremiumDiscountOffer)(), E = t === c.PremiumMarketingEntrypoints.ApplicationStoreHome;
    return i.useEffect(() => {
      if (null != s || null != _) {
        let e = (0, u.shouldHitUserOfferEndPoints)("PremiumMarketing");
        e ? (0, r.acknowledgeUserOffer)(s, _) : null != s && n.default.acknowledgeUserTrialOffer(s)
      }
    }, [s, _]), (0, a.jsx)(d.default, {
      isFullscreen: E
    })
  }