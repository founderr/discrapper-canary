n.d(t, {
  Z: function() {
    return N
  }
});
var s = n(512722),
  r = n.n(s),
  i = n(525654),
  l = n.n(i),
  a = n(39612),
  o = n(271579),
  u = n(756647),
  c = n(703656),
  d = n(314897),
  E = n(896797),
  _ = n(626135),
  h = n(954824),
  I = n(981631);

function N(e) {
  let t = function(e) {
      var t;
      let n = null === (t = l().os) || void 0 === t ? void 0 : t.family;
      if ("Android" === n || "iOS" === n) {
        let t = d.default.getFingerprint(),
          n = (0, o.WS)();
        return r()(null != e, "generateAppPath: guildId cannot be null"), (0, o.ZP)((0, a.z0)(e), {
          utmSource: "verify_hub_email",
          fingerprint: t,
          attemptId: n
        })
      }
      return "discord://"
    }(e),
    n = (0, o.zS)(t);
  null != n && _.default.track(I.rMx.DEEP_LINK_CLICKED, {
    fingerprint: (0, u.K)(n.fingerprint),
    attempt_id: n.attemptId,
    source: n.utmSource
  }), h.Z.launch(t, e => {
    !e && (0, c.dL)(E.Z.fallbackRoute)
  })
}