var i,
    a = r(47120);
var s = r(442837),
    o = r(570140),
    l = r(797258),
    u = r(979651);
function c(e, n, r) {
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
let d = null,
    f = null,
    _ = new Set(),
    h = {},
    p = {},
    m = new Set();
function g(e) {
    let { sessionId: n } = e;
    (d = n), (f = null);
}
function E() {
    (d = null), (f = null);
}
function v(e) {
    let { sessionType: n, nonce: r, channelId: i, deviceId: a, commandId: s } = e;
    f = {
        type: n,
        nonce: r,
        channelId: i,
        startedAt: Date.now(),
        deviceId: a,
        commandId: s
    };
}
function I(e) {
    let { platform: n } = e;
    m.add(n);
}
function T(e) {
    let { platform: n, devices: r } = e;
    m.delete(n);
    let i = (h[n] = {}),
        a = {};
    for (let e of r) (i[e.id] = e), p[n] === e.id && (a[n] = e.id);
    p = a;
}
function b(e) {
    let { platform: n } = e;
    m.delete(n);
}
function y(e) {
    let { platform: n, deviceId: r } = e;
    p[n] = r;
}
let S = Object.freeze({});
class A extends (i = s.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (p = e.lastSelectedDeviceByPlatform), this.waitFor(l.Z, u.Z);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: p };
    }
    getDevicesForPlatform(e) {
        var n;
        return null !== (n = h[e]) && void 0 !== n ? n : S;
    }
    getLastSelectedDeviceByPlatform(e) {
        return p[e];
    }
    getDevice(e, n) {
        var r;
        return null === (r = h[e]) || void 0 === r ? void 0 : r[n];
    }
    getFetchingDevices(e) {
        return m.has(e);
    }
    getPendingDeviceCommands() {
        return _;
    }
    getRemoteSessionId() {
        return d;
    }
    getAwaitingRemoteSessionInfo() {
        return f;
    }
}
c(A, 'displayName', 'GameConsoleStore'),
    c(A, 'persistKey', 'GameConsoleStore'),
    (n.Z = new A(o.Z, {
        REMOTE_SESSION_CONNECT: g,
        REMOTE_SESSION_DISCONNECT: E,
        WAIT_FOR_REMOTE_SESSION: v,
        GAME_CONSOLE_FETCH_DEVICES_START: I,
        GAME_CONSOLE_FETCH_DEVICES_SUCCESS: T,
        GAME_CONSOLE_FETCH_DEVICES_FAIL: b,
        GAME_CONSOLE_SELECT_DEVICE: y
    }));
