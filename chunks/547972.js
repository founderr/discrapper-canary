s.d(t, {
  Z: function() {
    return l
  }
});
var n = s(230711),
  a = s(202527),
  i = s(332325),
  r = s(981631);

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      shouldMergeGameSettings: s
    } = a.b.getCurrentConfig({
      location: "navigator"
    }, {
      autoTrackExposure: !1
    });
  s ? n.Z.open(r.oAB.GAMES, e, t) : n.Z.open(function(e) {
    switch (e) {
      case i.Z.MY_GAMES:
        return r.oAB.REGISTERED_GAMES;
      case i.Z.CLIPS:
        return r.oAB.CLIPS;
      case i.Z.OVERLAY:
        return r.oAB.OVERLAY;
      case i.Z.ACTIVITY_PRIVACY:
        return r.oAB.ACTIVITY_PRIVACY
    }
  }(e), null, t)
}