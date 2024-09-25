var r,
    i = n(47120);
var a = n(442837),
    o = n(570140),
    s = n(797258),
    l = n(979651);
function u(e, t, n) {
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
let c = null,
    d = null,
    _ = new Set(),
    E = {},
    f = {},
    h = new Set();
function p(e) {
    let { sessionId: t } = e;
    (c = t), (d = null);
}
function m() {
    (c = null), (d = null);
}
function I(e) {
    let { sessionType: t, nonce: n, channelId: r, deviceId: i, commandId: a } = e;
    d = {
        type: t,
        nonce: n,
        channelId: r,
        startedAt: Date.now(),
        deviceId: i,
        commandId: a
    };
}
function T(e) {
    let { platform: t } = e;
    h.add(t);
}
function g(e) {
    let { platform: t, devices: n } = e;
    h.delete(t);
    let r = (E[t] = {}),
        i = {};
    for (let e of n) (r[e.id] = e), f[t] === e.id && (i[t] = e.id);
    f = i;
}
function S(e) {
    let { platform: t } = e;
    h.delete(t);
}
function A(e) {
    let { platform: t, deviceId: n } = e;
    f[t] = n;
}
let v = Object.freeze({});
class N extends (r = a.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (f = e.lastSelectedDeviceByPlatform), this.waitFor(s.Z, l.Z);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: f };
    }
    getDevicesForPlatform(e) {
        var t;
        return null !== (t = E[e]) && void 0 !== t ? t : v;
    }
    getLastSelectedDeviceByPlatform(e) {
        return f[e];
    }
    getDevice(e, t) {
        var n;
        return null === (n = E[e]) || void 0 === n ? void 0 : n[t];
    }
    getFetchingDevices(e) {
        return h.has(e);
    }
    getPendingDeviceCommands() {
        return _;
    }
    getRemoteSessionId() {
        return c;
    }
    getAwaitingRemoteSessionInfo() {
        return d;
    }
}
u(N, 'displayName', 'GameConsoleStore'),
    u(N, 'persistKey', 'GameConsoleStore'),
    (t.Z = new N(o.Z, {
        REMOTE_SESSION_CONNECT: p,
        REMOTE_SESSION_DISCONNECT: m,
        WAIT_FOR_REMOTE_SESSION: I,
        GAME_CONSOLE_FETCH_DEVICES_START: T,
        GAME_CONSOLE_FETCH_DEVICES_SUCCESS: g,
        GAME_CONSOLE_FETCH_DEVICES_FAIL: S,
        GAME_CONSOLE_SELECT_DEVICE: A
    }));
