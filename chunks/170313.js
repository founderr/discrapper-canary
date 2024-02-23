"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("794252");
var i = n("884691"),
  a = n("506838"),
  r = n("265586"),
  l = n("65597"),
  s = n("599110"),
  o = n("853987"),
  u = n("491232"),
  c = n("49111"),
  d = n("646718"),
  f = e => {
    let t = (0, l.default)([o.default], () => o.default.products);
    return (0, i.useCallback)(n => {
      let {
        type: i,
        skuId: l
      } = n, o = t.get(l);
      s.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
        feature_name: (0, a.match)(i).with(r.CollectiblesItemType.AVATAR_DECORATION, () => d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION).with(r.CollectiblesItemType.PROFILE_EFFECT, () => d.AnalyticsPremiumFeatureNames.PROFILE_EFFECT).otherwise(() => void 0),
        feature_tier: (0, u.isPremiumCollectiblesProduct)(o) ? d.AnalyticsPremiumFeatureTiers.FREE : d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD,
        feature_selection: null == o ? void 0 : o.name,
        location_stack: e
      })
    }, [t, e])
  }