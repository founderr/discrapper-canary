var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let s = null,
    l = !1;
function u(e) {
    let { progress: t, total: n, name: r } = e;
    s = {
        progress: t,
        total: n,
        name: r
    };
}
function c() {
    (s = null), (l = !1);
}
function d() {
    l = !0;
}
class _ extends (r = i.ZP.Store) {
    getLastProgress() {
        return s;
    }
    isRunning() {
        return l;
    }
}
o(_, 'displayName', 'DispatchApplicationLaunchSetupStore'),
    (t.Z = new _(a.Z, {
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: d,
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: u,
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: c
    }));
