"use strict";
n.r(t), n.d(t, {
  useIsWatchTogetherPromoWeek2SparklesEnabled: function() {
    return s
  }
});
var l = n("862205");
let a = (0, l.createExperiment)({
    kind: "user",
    id: "2023-03_activities_watch_together_promo_sparkles_week_2",
    label: "Activities Watch Together Promo Week 2 Sparkles",
    defaultConfig: {
      enableWatchTogetherPromoWeek2Sparkles: !1
    },
    treatments: [{
      id: 1,
      label: "enable Watch Together promo week 2 sparkles",
      config: {
        enableWatchTogetherPromoWeek2Sparkles: !0
      }
    }]
  }),
  s = () => {
    let {
      enableWatchTogetherPromoWeek2Sparkles: e
    } = a.useExperiment({
      location: "afee10_1"
    }, {
      autoTrackExposure: !1
    });
    return e
  }