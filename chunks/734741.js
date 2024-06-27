n.d(t, {
  V: function() {
    return l
  }
});
var s = n(331119),
  a = n(575595),
  i = n(650032);
let r = "getWhatsNewBadgeCount",
  l = () => {
    let {
      enabled: e
    } = i._.getCurrentConfig({
      location: r
    }, {
      autoTrackExposure: !1
    }), {
      enabled: t
    } = a.r.getCurrentConfig({
      location: r
    }, {
      autoTrackExposure: !1
    }), {
      enabled: n
    } = s.C.getCurrentConfig({
      location: r
    }, {
      autoTrackExposure: !1
    });
    return e && !t && !n
  }