"use strict";
n.r(e), n.d(e, {
  SeasonalGiftingMarketingExperiment: function() {
    return d
  },
  useIsSeasonalGiftingActive: function() {
    return f
  },
  default: function() {
    return p
  }
}), n("222007");
var i = n("884691"),
  l = n("866227"),
  a = n.n(l),
  r = n("862337"),
  u = n("296892");
let s = new Date("2024-01-04T07:59:59.000Z"),
  o = a(s),
  c = (0, u.default)({
    id: "2023-11_seasonal_gifting",
    label: "Seasonal Gifting 2023",
    kind: "user",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: !0
      }
    }]
  }),
  d = (0, u.default)({
    id: "2023-11_seasonal_gifting_marketing_2023",
    label: "Seasonal Gifting Marketing 2023",
    kind: "user",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enabled",
      config: {
        enabled: !0
      }
    }]
  });

function f() {
  let [t, e] = i.useState(() => o.isAfter(Date.now()));
  return i.useEffect(() => {
    let n = new r.Timeout,
      i = () => {
        let t = Math.min(o.diff(Date.now(), "millisecond"), 864e5);
        null == n || n.start(t, () => {
          o.isBefore(Date.now()) ? e(!1) : i()
        })
      };
    return t && i(), () => n.stop()
  }), t
}
var p = c