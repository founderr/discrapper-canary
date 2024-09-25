var r,
    i = n(442837),
    a = n(570140),
    o = n(981631);
function s(e, t, n) {
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
let l = {};
function u() {
    l = {};
}
function c() {
    delete l[o.K3D.SOUND];
}
function d(e) {
    let { errorMessage: t, errorCode: n } = e;
    l[o.K3D.SOUND] = {
        errorMessage: t,
        errorCode: n
    };
}
class _ extends (r = i.ZP.Store) {
    getHookError(e) {
        return l[e];
    }
}
s(_, 'displayName', 'HookErrorStore'),
    (t.Z = new _(a.Z, {
        MEDIA_ENGINE_SET_GO_LIVE_SOURCE: u,
        MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING: c,
        MEDIA_ENGINE_SOUNDSHARE_FAILED: d
    }));
