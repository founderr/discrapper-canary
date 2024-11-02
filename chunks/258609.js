n(47120);
var r,
    i = n(442837),
    a = n(570140),
    s = n(797258),
    o = n(979651);
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
let u = null,
    c = null,
    d = new Set(),
    f = {},
    _ = {},
    h = new Set(),
    p = Object.freeze({});
class m extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        null != e && (_ = e.lastSelectedDeviceByPlatform), this.waitFor(s.Z, o.Z);
    }
    getUserAgnosticState() {
        return { lastSelectedDeviceByPlatform: _ };
    }
    getDevicesForPlatform(e) {
        var t;
        return null !== (t = f[e]) && void 0 !== t ? t : p;
    }
    getLastSelectedDeviceByPlatform(e) {
        return _[e];
    }
    getDevice(e, t) {
        var n;
        return null === (n = f[e]) || void 0 === n ? void 0 : n[t];
    }
    getFetchingDevices(e) {
        return h.has(e);
    }
    getPendingDeviceCommands() {
        return d;
    }
    getRemoteSessionId() {
        return u;
    }
    getAwaitingRemoteSessionInfo() {
        return c;
    }
}
l(m, 'displayName', 'GameConsoleStore'),
    l(m, 'persistKey', 'GameConsoleStore'),
    (t.Z = new m(a.Z, {
        REMOTE_SESSION_CONNECT: function (e) {
            let { sessionId: t } = e;
            (u = t), (c = null);
        },
        REMOTE_SESSION_DISCONNECT: function () {
            (u = null), (c = null);
        },
        WAIT_FOR_REMOTE_SESSION: function (e) {
            let { sessionType: t, nonce: n, channelId: r, deviceId: i, commandId: a } = e;
            c = {
                type: t,
                nonce: n,
                channelId: r,
                startedAt: Date.now(),
                deviceId: i,
                commandId: a
            };
        },
        GAME_CONSOLE_FETCH_DEVICES_START: function (e) {
            let { platform: t } = e;
            h.add(t);
        },
        GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function (e) {
            let { platform: t, devices: n } = e;
            h.delete(t);
            let r = (f[t] = {}),
                i = {};
            for (let e of n) (r[e.id] = e), _[t] === e.id && (i[t] = e.id);
            _ = i;
        },
        GAME_CONSOLE_FETCH_DEVICES_FAIL: function (e) {
            let { platform: t } = e;
            h.delete(t);
        },
        GAME_CONSOLE_SELECT_DEVICE: function (e) {
            let { platform: t, deviceId: n } = e;
            _[t] = n;
        }
    }));
