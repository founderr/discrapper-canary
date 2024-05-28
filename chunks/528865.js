"use strict";
n.r(t), n.d(t, {
  June2024NewAppStylesWhatsNewCardExperiment: function() {
    return i
  }
});
let i = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-05_june_2024_new_app_styles_whats_new_card",
  label: "June 2024 New App Styles Whats New Card",
  defaultConfig: {
    shouldShowCard: !1,
    canFlipCard: !1
  },
  treatments: [{
    id: 1,
    label: "Can only see the locked card",
    config: {
      shouldShowCard: !0,
      canFlipCard: !1
    }
  }, {
    id: 2,
    label: "Can see the locked card and flip it",
    config: {
      shouldShowCard: !0,
      canFlipCard: !0
    }
  }]
})