t.d(s, {
  d: function() {
return o;
  }
});
let n = (0, t(818083).B)({
  kind: 'user',
  id: '2024-07_email_change_reasoning_buttons',
  label: 'Email Change Reasoning Buttons',
  defaultConfig: {
enabled: !1
  },
  treatments: [{
id: 1,
label: 'Add additional friction to the email change flow by asking users why they are changing their email',
config: {
  enabled: !0
}
  }]
});

function o(e) {
  return !!n.useExperiment({
location: e
  }, {
autoTrackExposure: !0
  }).enabled;
}