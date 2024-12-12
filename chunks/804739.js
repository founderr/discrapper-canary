r.d(n, {
    Q: function () {
        return s;
    },
    t: function () {
        return o;
    }
});
var i = r(780570),
    a = r(358085);
function s() {
    return (0, a.isWindows)() || (0, a.isMac)();
}
function o(e) {
    let { LibraryApplicationStore: n, LaunchableGameStore: r, DispatchApplicationStore: a, ConnectedAppsStore: s, applicationId: o, branchId: l } = e;
    if (s.isConnected(o)) return !0;
    if ((null == l && (l = o), a.isLaunchable(o, l))) return !0;
    let u = n.getLibraryApplication(o, l);
    return !(null != u && (0, i.Je)(u)) && r.isLaunchable(o);
}
