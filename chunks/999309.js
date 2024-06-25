n.d(t, {
  Z: function() {
    return o
  }
});
var s = n(442837),
  i = n(223892),
  l = n(430824),
  a = n(594174),
  r = n(981631);

function o(e) {
  var t;
  let n = (0, s.e7)([l.Z], () => l.Z.getGuild(e)),
    o = (0, s.e7)([a.default], () => a.default.getCurrentUser()),
    c = (null == n ? void 0 : n.ownerId) === (null == o ? void 0 : o.id),
    u = (0, i.Sd)();
  return c && null !== (t = null == n ? void 0 : n.hasFeature(r.oNc.COMMUNITY)) && void 0 !== t && t && u && !((null == n ? void 0 : n.hasFeature(r.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(r.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? void 0 : n.hasFeature(r.oNc.CREATOR_MONETIZABLE_DISABLED)))
}