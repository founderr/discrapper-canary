var i,
    l = n(442837),
    r = n(570140);
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
let a = { toastsEnabledForChannel: {} },
    o = a;
class c extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        o = null != e ? e : a;
    }
    getToastsEnabled(e) {
        var t;
        return null === (t = o.toastsEnabledForChannel[e]) || void 0 === t || t;
    }
    getState() {
        return o;
    }
}
s(c, 'displayName', 'CallChatToastsStore'),
    s(c, 'persistKey', 'CallChatToasts'),
    (t.Z = new c(r.Z, {
        CALL_CHAT_TOASTS_SET_ENABLED: function (e) {
            let { channelId: t, toastsEnabled: n } = e;
            o.toastsEnabledForChannel[t] = n;
        },
        LOGOUT: function () {
            o.toastsEnabledForChannel = {};
        }
    }));
