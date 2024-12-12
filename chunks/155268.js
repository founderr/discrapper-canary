r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(695103),
    a = r(115130);
function s(e) {
    let n = a.Z.getState();
    return n.useActivityUrlOverride && null != n.activityUrlOverride && '' !== n.activityUrlOverride ? n.activityUrlOverride : i.Z.inTestModeForEmbeddedApplication(e) ? i.Z.testModeOriginURL : o(e);
}
function o(e) {
    let n = window.GLOBAL_ENV.ACTIVITY_APPLICATION_HOST;
    return null == n ? null : 'https://'.concat(e, '.').concat(n);
}
