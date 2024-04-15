"use strict";
n.r(t), n.d(t, {
  annualDiscountsExperimentEnabled: function() {
    return s
  },
  useAnnualDiscountExperiment: function() {
    return a
  }
});
let l = (0, n("818083").createExperiment)({
  kind: "user",
  id: "2024-03_annual_discounts_experiment",
  label: "Test price for standard annual plan utilizing discount framework",
  defaultConfig: {
    enabled: !1,
    discount_percentage: null
  },
  treatments: [{
    id: 0,
    label: "users receive regular standard annual price (16% discount)",
    config: {
      enabled: !0,
      discount_percentage: 16
    }
  }, {
    id: 1,
    label: "users receive 20% discount (4% off regular standard annual price)",
    config: {
      enabled: !0,
      discount_percentage: 20
    }
  }, {
    id: 2,
    label: "users receive 25% discount (10% off regular standard annual price)",
    config: {
      enabled: !0,
      discount_percentage: 25
    }
  }]
});

function a(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    {
      enabled: n
    } = l.useExperiment({
      location: e
    }, {
      autoTrackExposure: t
    });
  return n
}
let s = e => {
  let {
    enabled: t
  } = l.getCurrentConfig({
    location: e
  }, {
    autoTrackExposure: !1
  });
  return t
}