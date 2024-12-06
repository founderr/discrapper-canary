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
    let { targetApplicationId: t, locationObject: n, channelId: s, analyticsLocations: f, componentId: _, commandOrigin: p, sectionName: h, source: m, onExecutedCallback: g } = e,
        E = (0, c.Z)(),
        v = i.default.getCurrentUser();
    if (null == t) return !1;
    let I = await (0, u.Z)(t, s);
    return null == s
        ? (a.S.dispatch(d.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: t }), !1)
        : null != r.Z.getChannel(s) &&
              null != v &&
              null != I &&
              (o.tZ(I.id),
              await (0, l.af)({
                  channelId: s,
                  applicationId: I.id,
                  isStart: !0,
                  embeddedActivitiesManager: E,
                  componentId: _,
                  commandOrigin: p,
                  sectionName: h,
                  locationObject: n,
                  analyticsLocations: f,
                  source: m,
                  onExecutedCallback: g
              }));
}
