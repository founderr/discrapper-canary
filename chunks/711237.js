n.d(t, {
  J_: function() {
    return r
  },
  R6: function() {
    return l
  }
});
var i = n(818083),
  s = n(987338);
let l = (0, i.B)({
    kind: "user",
    id: s.fL,
    label: "Trigger Debugging User AA Experiment",
    defaultConfig: {
      inUse: !1
    },
    treatments: [{
      id: 1,
      label: "On",
      config: {
        inUse: !0
      }
    }]
  }),
  a = (0, i.B)({
    kind: "guild",
    id: s.nz,
    label: "Trigger Debugging Guild AA Experiment",
    defaultConfig: {
      inUse: !1
    },
    treatments: [{
      id: 1,
      label: "On",
      config: {
        inUse: !0
      }
    }]
  }),
  r = e => {
    let t = "guild trigger debug",
      n = "user trigger debug";
    a.useExperiment({
      location: t,
      guildId: e
    }, {
      autoTrackExposure: !1
    }), a.trackExposure({
      location: t,
      guildId: e
    }), l.useExperiment({
      location: n
    }, {
      autoTrackExposure: !1
    }), l.trackExposure({
      location: n
    })
  }