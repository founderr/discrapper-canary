n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(442837),
    r = n(223892),
    l = n(430824),
    a = n(594174),
    o = n(981631);
function s(e) {
    var t;
    let n = (0, i.e7)([l.Z], () => l.Z.getGuild(e)),
        s = (0, i.e7)([a.default], () => a.default.getCurrentUser()),
        c = (null == n ? void 0 : n.ownerId) === (null == s ? void 0 : s.id),
        d = (0, r.Sd)();
    return c && null !== (t = null == n ? void 0 : n.hasFeature(o.oNc.COMMUNITY)) && void 0 !== t && t && d && !((null == n ? void 0 : n.hasFeature(o.oNc.CREATOR_MONETIZABLE)) || (null == n ? void 0 : n.hasFeature(o.oNc.CREATOR_MONETIZABLE_PROVISIONAL)) || (null == n ? void 0 : n.hasFeature(o.oNc.CREATOR_MONETIZABLE_DISABLED)));
}
