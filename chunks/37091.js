var i,
    a = r(442837),
    s = r(570140);
function o(e, n, r) {
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
let l = { enabled: !1 },
    u = {},
    c = {},
    d = !1;
function f(e) {
    let { userId: n, channelId: r, emoji: i } = e;
    u[r] = {
        ...u[r],
        [n]: i
    };
}
function _(e) {
    let { userId: n, channelId: r } = e,
        i = u[r];
    if (null == i) return !1;
    delete i[n];
}
function h(e) {
    let { enabled: n } = e;
    d = n;
}
function p(e) {
    var n;
    let { completingEmoji: r, completingUserId: i, waitingUserId: a, channelId: s } = e,
        o = null !== (n = u[s]) && void 0 !== n ? n : {},
        l = o[a];
    if ((delete o[a], null == l)) return !1;
    c[s] = {
        ...c[s],
        [a]: [l, r],
        [i]: [r, l]
    };
}
function m(e) {
    var n;
    let { firstUserId: r, secondUserId: i, channelId: a } = e,
        s = null !== (n = c[a]) && void 0 !== n ? n : {};
    delete s[r], delete s[i];
}
class g extends (i = a.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        d = e.enabled;
    }
    getWaitingHighFive(e, n) {
        var r;
        return null === (r = u[e]) || void 0 === r ? void 0 : r[n];
    }
    getCompletedHighFive(e, n) {
        var r;
        return null === (r = c[e]) || void 0 === r ? void 0 : r[n];
    }
    getEnabled() {
        return d;
    }
    getUserAgnosticState() {
        return { enabled: d };
    }
}
o(g, 'persistKey', 'HighFiveStore'),
    (n.Z = new g(s.Z, {
        HIGH_FIVE_QUEUE: f,
        HIGH_FIVE_REMOVE: _,
        HIGH_FIVE_SET_ENABLED: h,
        HIGH_FIVE_COMPLETE: p,
        HIGH_FIVE_COMPLETE_CLEAR: m
    }));
