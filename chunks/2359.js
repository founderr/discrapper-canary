"use strict";
s.r(t);
var a = s("735250"),
  r = s("470079"),
  i = s("937579"),
  n = s("316941"),
  l = s("104494"),
  o = s("639119"),
  u = s("633361"),
  d = s("702328"),
  c = s("474936");
t.default = e => {
  let {
    entrypoint: t
  } = e, s = (0, o.usePremiumTrialOffer)(), _ = (0, l.usePremiumDiscountOffer)(), E = t === c.PremiumMarketingEntrypoints.ApplicationStoreHome;
  return r.useEffect(() => {
    (null != s || null != _) && ((0, u.shouldHitUserOfferEndPoints)("PremiumMarketing") ? (0, i.acknowledgeUserOffer)(s, _) : null != s && n.default.acknowledgeUserTrialOffer(s))
  }, [s, _]), (0, a.jsx)(d.default, {
    isFullscreen: E,
    entrypoint: t
  })
}