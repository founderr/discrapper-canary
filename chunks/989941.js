let r;
t.d(n, {
    Z: function () {
        return u;
    }
});
var i = t(145597);
function u(e, n) {
    if (__OVERLAY__) {
        let e = n.getGame(),
            t = (0, i.QF)();
        return null == e || null == t
            ? null
            : (null == r ? void 0 : r.id) === e.id && (null == r ? void 0 : r.pid) === t
              ? r
              : (r = {
                    id: e.id,
                    pid: t,
                    pidPath: [],
                    nativeProcessObserverId: 0,
                    hidden: !1,
                    elevated: !1,
                    name: e.name,
                    lastFocused: 0,
                    exePath: '',
                    exeName: '',
                    cmdLine: '',
                    processName: '',
                    distributor: null,
                    windowHandle: null,
                    fullscreenType: 0
                });
    }
    return e.getVisibleGame();
}
