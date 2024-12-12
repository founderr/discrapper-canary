r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(592125),
    a = r(594174),
    s = r(585483),
    o = r(636449),
    l = r(337682),
    u = r(566620),
    c = r(224189),
    d = r(574952),
    f = r(981631);
function _(e) {
    return (0, o.C)(() => h(e));
}
async function h(e) {
    let { targetApplicationId: n, locationObject: r, channelId: o, analyticsLocations: _, componentId: h, commandOrigin: p, sectionName: m, source: g, onExecutedCallback: E, referrerId: v, customId: I } = e,
        T = (0, d.Z)(),
        b = a.default.getCurrentUser();
    if (null == n) return !1;
    let y = await (0, c.Z)(n, o);
    return null == o
        ? (s.S.dispatch(f.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: n }), !1)
        : null != i.Z.getChannel(o) &&
              null != b &&
              null != y &&
              (l.tZ(y.id),
              await (0, u.af)({
                  channelId: o,
                  applicationId: y.id,
                  isStart: !0,
                  embeddedActivitiesManager: T,
                  componentId: h,
                  commandOrigin: p,
                  sectionName: m,
                  locationObject: r,
                  analyticsLocations: _,
                  source: g,
                  onExecutedCallback: E,
                  referrerId: v,
                  customId: I
              }));
}
