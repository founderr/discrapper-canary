n.d(t, {
  I: function() {
    return r
  },
  N: function() {
    return a
  }
});
var i = n(470079),
  s = n(818083),
  l = n(695346);
let a = (0, s.B)({
  kind: "user",
  id: "2022-01_discovery_iar",
  label: "Ability to report servers in Server Discovery",
  defaultConfig: {
    canSeeInAppReportingButtons: !1
  },
  treatments: [{
    id: 1,
    label: "Show IAR buttons in Server Discovery",
    config: {
      canSeeInAppReportingButtons: !0
    }
  }]
});

function r() {
  let {
    canSeeInAppReportingButtons: e
  } = a.useExperiment({
    location: "7a11e2_1"
  }, {
    autoTrackExposure: !1
  }), t = l.Sb.useSetting();
  return i.useEffect(() => {
    a.trackExposure({
      location: "7a11e2_2"
    })
  }, []), e || t
}