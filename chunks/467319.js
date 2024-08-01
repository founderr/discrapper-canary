t.d(n, {
  H: function() {
return a;
  },
  a: function() {
return i;
  }
});
var l = t(460083);

function a(e) {
  let {
enabled: n
  } = l.d.getCurrentConfig({
guildId: e,
location: '988d4e_3'
  });
  return n;
}

function i(e) {
  let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
{
  enabled: t
} = l.d.useExperiment({
  guildId: e,
  location: '988d4e_4'
}, {
  autoTrackExposure: n
});
  return t;
}