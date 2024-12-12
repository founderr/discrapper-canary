var i,
    a = r(442837),
    s = r(570140),
    o = r(981631);
function l(e, n, r) {
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
let u = {};
function c() {
    u = {};
}
function d() {
    delete u[o.K3D.SOUND];
}
function f(e) {
    let { errorMessage: n, errorCode: r } = e;
    u[o.K3D.SOUND] = {
        errorMessage: n,
        errorCode: r
    };
}
class _ extends (i = a.ZP.Store) {
    getHookError(e) {
        return u[e];
    }
}
l(_, 'displayName', 'HookErrorStore'),
    (n.Z = new _(s.Z, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: c,
        MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: d,
        MEDIA_ENGINE_SOUNDSHARE_FAILED: f
    }));
