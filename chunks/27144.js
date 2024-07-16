n.d(t, {
  z: function() {
return i;
  }
});
let r = (0, n(818083).B)({
kind: 'user',
id: '2024-07_user_profile_past_activity',
label: 'User Profile Past Activity Experiment',
defaultConfig: {
  pastActivityEnabled: !1
},
treatments: [{
  id: 1,
  label: 'Past activity enabled',
  config: {
    pastActivityEnabled: !0
  }
}]
  }),
  i = e => {
let {
  location: t,
  autoTrackExposure: n = !0,
  trackExposureOptions: i = {}
} = e;
return r.useExperiment({
  location: t
}, {
  autoTrackExposure: n,
  trackExposureOptions: i
});
  };