"use strict";
l.r(t), l.d(t, {
  CollectiblesShopMarketingVariants: function() {
    return i
  },
  default: function() {
    return a
  }
});
var s, i, n = l("862205");
(s = i || (i = {}))[s.DEFAULT = 0] = "DEFAULT", s[s.WINTER_2023_DROP = 1] = "WINTER_2023_DROP", s[s.MONSTER_DROP = 2] = "MONSTER_DROP";
let u = (0, n.createExperiment)({
  kind: "user",
  id: "2023-12_collectibles_shop_marketing",
  label: "Collectibles Shop Marketing Variations",
  defaultConfig: {
    variant: 0
  },
  treatments: [{
    id: 1,
    label: "Winter 2023",
    config: {
      variant: 1
    }
  }, {
    id: 2,
    label: "Jan 2024",
    config: {
      variant: 2
    }
  }]
});
var a = e => u.useExperiment({
  location: e
}).variant