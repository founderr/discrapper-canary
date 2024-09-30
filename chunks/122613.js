n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(592125),
    i = n(594174),
    a = n(585483),
    o = n(337682),
    s = n(566620),
    l = n(224189),
    u = n(574952),
    c = n(981631);
async function d(e) {
    let { targetApplicationId: t, locationObject: n, channelId: d, analyticsLocations: _, componentId: E, commandOrigin: f, sectionName: h, source: p, onExecutedCallback: m } = e,
        I = (0, u.Z)(),
        T = i.default.getCurrentUser();
    if (null == t) return !1;
    let g = await (0, l.Z)(t, d);
    return null == d
        ? (a.S.dispatch(c.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: t }), !1)
        : null != r.Z.getChannel(d) &&
              null != T &&
              null != g &&
              (o.tZ(g.id),
              await (0, s.af)({
                  channelId: d,
                  applicationId: g.id,
                  isStart: !0,
                  embeddedActivitiesManager: I,
                  componentId: E,
                  commandOrigin: f,
                  sectionName: h,
                  locationObject: n,
                  analyticsLocations: _,
                  source: p,
                  onExecutedCallback: m
              }));
}
