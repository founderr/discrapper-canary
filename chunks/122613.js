n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(592125),
    i = n(594174),
    a = n(585483),
    s = n(636449),
    o = n(337682),
    l = n(566620),
    u = n(224189),
    c = n(574952),
    d = n(981631);
function f(e) {
    return (0, s.C)(() => _(e));
}
async function _(e) {
    let { targetApplicationId: t, locationObject: n, channelId: s, analyticsLocations: f, componentId: _, commandOrigin: p, sectionName: h, source: m, onExecutedCallback: g, referrerId: E, customId: v } = e,
        I = (0, c.Z)(),
        T = i.default.getCurrentUser();
    if (null == t) return !1;
    let b = await (0, u.Z)(t, s);
    return null == s
        ? (a.S.dispatch(d.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: t }), !1)
        : null != r.Z.getChannel(s) &&
              null != T &&
              null != b &&
              (o.tZ(b.id),
              await (0, l.af)({
                  channelId: s,
                  applicationId: b.id,
                  isStart: !0,
                  embeddedActivitiesManager: I,
                  componentId: _,
                  commandOrigin: p,
                  sectionName: h,
                  locationObject: n,
                  analyticsLocations: f,
                  source: m,
                  onExecutedCallback: g,
                  referrerId: E,
                  customId: v
              }));
}
