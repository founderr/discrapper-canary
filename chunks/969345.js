r.d(n, {
    Z: function () {
        return a;
    }
});
var i = r(812206);
function a(e) {
    var n;
    let { applicationId: r, activityConfigs: a, applications: s } = e,
        o = null !== (n = null == s ? void 0 : s.find((e) => e.id === r)) && void 0 !== n ? n : i.Z.getApplication(r),
        l = a.find((e) => e.application_id === r);
    return null == l || null == o
        ? null
        : {
              activity: l,
              application: o
          };
}
