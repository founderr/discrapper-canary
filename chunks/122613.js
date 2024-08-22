n.d(t, {
    Z: function () {
        return _;
    }
});
var r = n(592125),
    i = n(594174),
    a = n(585483),
    s = n(337682),
    o = n(566620),
    l = n(224189),
    u = n(574952),
    c = n(275920),
    d = n(981631);
async function _(e) {
    let { targetApplicationId: t, locationObject: n, channelId: _, analyticsLocations: E, componentId: f, commandOrigin: h, sectionName: p } = e,
        I = (0, u.Z)(),
        m = i.default.getCurrentUser();
    if (null == t) return !1;
    let T = await (0, l.Z)(t, _);
    return null == _
        ? (a.S.dispatch(d.CkL.SHOW_ACTIVITIES_CHANNEL_SELECTOR, { applicationId: t }), !1)
        : null != r.Z.getChannel(_) &&
              null != m &&
              null != T &&
              ((0, c.Z)({
                  type: d.q5t.LAUNCH,
                  userId: m.id,
                  applicationId: T.id,
                  locationObject: n,
                  analyticsLocations: E
              }),
              s.tZ(T.id),
              await (0, o.af)({
                  channelId: _,
                  applicationId: T.id,
                  isStart: !0,
                  embeddedActivitiesManager: I,
                  componentId: f,
                  commandOrigin: h,
                  sectionName: p
              }));
}
