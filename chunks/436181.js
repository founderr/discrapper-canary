var i,
    a = r(442837),
    s = r(570140);
function o(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let l = null,
    u = !1;
function c(e) {
    let { progress: n, total: r, name: i } = e;
    l = {
        progress: n,
        total: r,
        name: i
    };
}
function d() {
    (l = null), (u = !1);
}
function f() {
    u = !0;
}
class _ extends (i = a.ZP.Store) {
    getLastProgress() {
        return l;
    }
    isRunning() {
        return u;
    }
}
o(_, 'displayName', 'DispatchApplicationLaunchSetupStore'),
    (n.Z = new _(s.Z, {
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: f,
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: c,
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: d
    }));
