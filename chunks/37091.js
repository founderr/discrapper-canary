var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
let s = { enabled: !1 },
    l = {},
    u = {},
    c = !1;
function d(e) {
    let { userId: t, channelId: n, emoji: r } = e;
    l[n] = {
        ...l[n],
        [t]: r
    };
}
function _(e) {
    let { userId: t, channelId: n } = e,
        r = l[n];
    if (null == r) return !1;
    delete r[t];
}
function E(e) {
    let { enabled: t } = e;
    c = t;
}
function f(e) {
    var t;
    let { completingEmoji: n, completingUserId: r, waitingUserId: i, channelId: a } = e,
        o = null !== (t = l[a]) && void 0 !== t ? t : {},
        s = o[i];
    if ((delete o[i], null == s)) return !1;
    u[a] = {
        ...u[a],
        [i]: [s, n],
        [r]: [n, s]
    };
}
function h(e) {
    var t;
    let { firstUserId: n, secondUserId: r, channelId: i } = e,
        a = null !== (t = u[i]) && void 0 !== t ? t : {};
    delete a[n], delete a[r];
}
class p extends (r = i.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
        c = e.enabled;
    }
    getWaitingHighFive(e, t) {
        var n;
        return null === (n = l[e]) || void 0 === n ? void 0 : n[t];
    }
    getCompletedHighFive(e, t) {
        var n;
        return null === (n = u[e]) || void 0 === n ? void 0 : n[t];
    }
    getEnabled() {
        return c;
    }
    getUserAgnosticState() {
        return { enabled: c };
    }
}
o(p, 'persistKey', 'HighFiveStore'),
    (t.Z = new p(a.Z, {
        HIGH_FIVE_QUEUE: d,
        HIGH_FIVE_REMOVE: _,
        HIGH_FIVE_SET_ENABLED: E,
        HIGH_FIVE_COMPLETE: f,
        HIGH_FIVE_COMPLETE_CLEAR: h
    }));
