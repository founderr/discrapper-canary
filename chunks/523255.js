n.d(t, {
  SI: function() {
    return c
  },
  hZ: function() {
    return d
  }
});
var s = n(913527),
  i = n.n(s),
  l = n(835913),
  a = n(675478),
  r = n(581883),
  o = n(905567);
let c = e => {
    var t;
    if (!u(e)) return !1;
    let n = null === (t = r.Z.settings.userContent) || void 0 === t ? void 0 : t.safetyUserSentimentNoticeDismissedAt,
      s = null != n ? l.E.toDate(n) : void 0,
      a = null != s ? i()().diff(s, "days") : null,
      c = null != n;
    if (c && !(null != a && a > 30)) return !1;
    let {
      isEligible: d
    } = o.C.getCurrentConfig({
      location: "657a81_1"
    }, {
      autoTrackExposure: !0
    });
    return d
  },
  u = e => null != e && Date.now() - e.createdAt.getTime() > 2592e6,
  d = () => {
    let e = l.E.now();
    a.hW.updateAsync("userContent", t => {
      t.safetyUserSentimentNoticeDismissedAt = e
    }, a.fy.INFREQUENT_USER_ACTION)
  }