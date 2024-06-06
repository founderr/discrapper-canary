"use strict";
s.r(t);
var a = s("735250"),
  r = s("470079"),
  i = s("937579"),
  n = s("104494"),
  l = s("639119"),
  o = s("702328"),
  u = s("474936");
t.default = e => {
  let {
    entrypoint: t
  } = e, s = (0, l.usePremiumTrialOffer)(), c = (0, n.usePremiumDiscountOffer)(), d = t === u.PremiumMarketingEntrypoints.ApplicationStoreHome;
  return r.useEffect(() => {
    (null != s || null != c) && (0, i.acknowledgeUserOffer)(s, c)
  }, [s, c]), (0, a.jsx)(o.default, {
    isFullscreen: d,
    entrypoint: t
  })
}