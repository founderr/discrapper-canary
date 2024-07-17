n.d(t, {
  i: function() {
return i;
  }
});
let r = (0, n(818083).B)({
  kind: 'user',
  id: '2024-07_profile_effects_webp',
  label: 'Uses WEBP for Profile Effect Assets',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Enabled',
config: {
  enabled: !0
}
  }]
});

function i(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
{
  enabled: n
} = r.useExperiment({
  location: e
}, {
  autoTrackExposure: t
});
  return n;
}