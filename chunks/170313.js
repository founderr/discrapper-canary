"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
}), r("794252");
var a = r("884691"),
  n = r("506838"),
  u = r("265586"),
  i = r("65597"),
  l = r("599110"),
  s = r("853987"),
  o = r("491232"),
  c = r("49111"),
  d = r("646718"),
  f = e => {
    let t = (0, i.default)([s.default], () => s.default.products);
    return (0, a.useCallback)(r => {
      let {
        type: a,
        skuId: i
      } = r, s = t.get(i);
      l.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: (0, n.match)(a).with(u.CollectiblesItemType.AVATAR_DECORATION, () => d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(u.CollectiblesItemType.PROFILE_EFFECT, () => d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
        feature_tier: (0, o.isPremiumCollectiblesProduct)(s) ? d.AnalyticsPremiumFeatureTiers.FREE : d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
        feature_selection: null == s ? void 0 : s.name,
        location_stack: e
      })
    }, [t, e])
  }