a.d(s, {
  Z: function() {
    return o
  }
});
var t = a(230711),
  n = a(202527),
  r = a(332325),
  i = a(981631);

function o(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    {
      shouldMergeGameSettings: a
    } = n.b.getCurrentConfig({
      location: "navigator"
    }, {
      autoTrackExposure: !1
    });
  a ? t.Z.open(i.oAB.GAMES, e, s) : t.Z.open(function(e) {
    switch (e) {
      case r.Z.MY_GAMES:
        return i.oAB.REGISTERED_GAMES;
      case r.Z.CLIPS:
        return i.oAB.CLIPS;
      case r.Z.OVERLAY:
        return i.oAB.OVERLAY;
      case r.Z.ACTIVITY_PRIVACY:
        return i.oAB.ACTIVITY_PRIVACY
    }
  }(e), null, s)
}