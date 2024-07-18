s.d(t, {
  zF: function() {
return o;
  }
});
let T = (0, s(818083).B)({
  kind: 'user',
  id: '2024-05_throughline_care',
  label: 'Throughline Care Experiment',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Enable throughline care links',
config: {
  enabled: !0
}
  }]
});

function o(e) {
  return T.useExperiment({
location: e
  }, {
autoTrackExposure: !0
  }).enabled;
}