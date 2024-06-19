n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(442837),
  s = n(430824),
  l = n(644542),
  a = n(923726),
  r = n(144507),
  o = n(981631);

function c(e) {
  let t = (0, i.e7)([s.Z], () => s.Z.getGuild(e)),
    n = (0, a.ss)(e),
    c = (0, a.Gp)(),
    u = (null == t ? void 0 : t.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0 && (null == t ? void 0 : t.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !1,
    d = (0, r.H2)(t);
  return u && c && d && l.jJ.trackExposure({
    guildId: e,
    location: "ca30d9_1"
  }), u && c && d && n
}