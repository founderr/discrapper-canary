n.d(t, {
  Z: function() {
return l;
  }
});
var s = n(230711),
  a = n(202527),
  r = n(332325),
  i = n(981631);

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
{
  shouldMergeGameSettings: n
} = a.b.getCurrentConfig({
  location: 'navigator'
}, {
  autoTrackExposure: !1
});
  n ? s.Z.open(i.oAB.GAMES, e, t) : s.Z.open(function(e) {
switch (e) {
  case r.Z.MY_GAMES:
    return i.oAB.REGISTERED_GAMES;
  case r.Z.CLIPS:
    return i.oAB.CLIPS;
  case r.Z.OVERLAY:
    return i.oAB.OVERLAY;
  case r.Z.ACTIVITY_PRIVACY:
    return i.oAB.ACTIVITY_PRIVACY;
}
  }(e), null, t);
}