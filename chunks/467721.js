var i,
    l = n(442837),
    r = n(570140);
function a(e, t, n) {
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
function o() {
    return { lastTriggered: 0 };
}
let s = o();
class c extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        s = {
            ...o(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return s;
    }
    cooldownIsActive() {
        return s.lastTriggered >= Date.now() - 172800000;
    }
}
a(c, 'displayName', 'HDStreamingViewerStore'),
    a(c, 'persistKey', 'HDStreamingViewerStore'),
    (t.Z = new c(r.Z, {
        LOGOUT: function () {
            s = o();
        },
        HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
            s.lastTriggered = Date.now();
        }
    }));
