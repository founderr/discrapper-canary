n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(592125),
    i = n(594174),
    a = n(585483),
    s = n(337682),
    o = n(566620),
    l = n(224189),
    u = n(574952),
    c = n(981631);
async function d(e) {
    let { targetApplicationId: t, locationObject: n, channelId: d, analyticsLocations: f, componentId: _, commandOrigin: h, sectionName: p, source: m, onExecutedCallback: g } = e,
        E = (0, u.Z)(),
        v = i.default.getCurrentUser();
    if (null == t) return !1;
    let I = await (0, l.Z)(t, d);
    return null == d
        ? (a.S.dispatch(c.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: t }), !1)
        : null != r.Z.getChannel(d) &&
              null != v &&
              null != I &&
              (s.tZ(I.id),
              await (0, o.af)({
                  channelId: d,
                  applicationId: I.id,
                  isStart: !0,
                  embeddedActivitiesManager: E,
                  componentId: _,
                  commandOrigin: h,
                  sectionName: p,
                  locationObject: n,
                  analyticsLocations: f,
                  source: m,
                  onExecutedCallback: g
              }));
}
