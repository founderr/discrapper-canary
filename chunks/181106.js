var r,
    i = n(442837),
    a = n(846519),
    o = n(570140),
    s = n(981631);
function l(e, t, n) {
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
let u = {},
    c = {},
    d = 120000;
function _(e) {
    let { applicationId: t, activityType: n } = e,
        r = u[t];
    if (null == r || r[n] !== s.OcF.FAILED) return !1;
    delete r[n];
}
function E(e, t, n) {
    var r;
    let { applicationId: i } = n,
        l = null !== (r = u[i]) && void 0 !== r ? r : {};
    if (((l[t] = e), (u[i] = l), !__OVERLAY__ && e === s.OcF.FAILED)) {
        null != c[i] && c[i].stop();
        let e = new a.V7();
        e.start(d, () =>
            o.Z.dispatch({
                type: 'ACTIVITY_LAUNCH_FAIL',
                applicationId: i,
                activityType: t
            })
        ),
            (c[i] = e);
    }
}
function f(e) {
    let { activityLauncherStates: t } = e;
    u = { ...t };
}
function h(e) {
    return E(s.OcF.COMPLETE, s.mFx.JOIN, e);
}
class p extends (r = i.ZP.Store) {
    getState(e, t) {
        let n = u[e];
        return null == n ? void 0 : n[t];
    }
    getStates() {
        return u;
    }
}
l(p, 'displayName', 'ActivityLauncherStore'),
    (t.Z = new p(o.Z, {
        OVERLAY_INITIALIZE: f,
        ACTIVITY_JOIN_LOADING: (e) => E(s.OcF.LOADING, s.mFx.JOIN, e),
        ACTIVITY_JOIN_FAILED: (e) => E(s.OcF.FAILED, s.mFx.JOIN, e),
        ACTIVITY_JOIN: h,
        EMBEDDED_ACTIVITY_CLOSE: h,
        ACTIVITY_LAUNCH_FAIL: _
    }));
