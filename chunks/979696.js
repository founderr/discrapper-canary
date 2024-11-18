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
let s = { toastsEnabledForChannel: {} },
    o = s;
class c extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        o = null != e ? e : s;
    }
    getToastsEnabled(e) {
        var t;
        return null === (t = o.toastsEnabledForChannel[e]) || void 0 === t || t;
    }
    getState() {
        return o;
    }
}
a(c, 'displayName', 'CallChatToastsStore'),
    a(c, 'persistKey', 'CallChatToasts'),
    (t.Z = new c(r.Z, {
        CALL_CHAT_TOASTS_SET_ENABLED: function (e) {
            let { channelId: t, toastsEnabled: n } = e;
            o.toastsEnabledForChannel[t] = n;
        },
        LOGOUT: function () {
            o.toastsEnabledForChannel = {};
        }
    }));
