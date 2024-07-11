var i, l = t(442837), r = t(570140);
function a(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e;
}
let s = 10 * t(70956).Z.Millis.MINUTE, o = {
        lastUsedCommandId: null,
        lastUsedTimeMs: null
    };
class c extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        null != e && (o.lastUsedCommandId = e.lastUsedCommandId, o.lastUsedTimeMs = e.lastUsedTimeMs);
    }
    getState() {
        return o;
    }
    getLastUsedCommandId() {
        let e = Date.now();
        return null == o.lastUsedTimeMs || null == o.lastUsedCommandId ? null : (e > o.lastUsedTimeMs + s && (o.lastUsedCommandId = null, o.lastUsedTimeMs = null), o.lastUsedCommandId);
    }
}
a(c, 'displayName', 'AppLauncherLastUsedCommandStore'), a(c, 'persistKey', 'AppLauncherLastUsedCommandStore'), new c(r.Z, {
    APPLICATION_COMMAND_USED: function (e) {
        let {command: n} = e;
        o.lastUsedCommandId = n.id, o.lastUsedTimeMs = Date.now();
    }
});
