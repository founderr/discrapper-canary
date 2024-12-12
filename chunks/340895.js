let i;
var a,
    s = r(47120);
var o = r(442837),
    l = r(433517),
    u = r(570140),
    c = r(695346),
    d = r(581883),
    f = r(314897),
    _ = r(592125),
    h = r(885110),
    p = r(451478),
    m = r(981631);
function g(e, n, r) {
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
let E = 'IncomingCallStore',
    v = {
        width: 232,
        height: 315
    },
    I = 10,
    T = new Set(),
    b = [],
    y = new Map(),
    S = new Set(),
    A = !1;
function N() {
    let e = p.Z.windowSize();
    return null != i && i.x + v.width < e.width && i.y + v.height < e.height
        ? i
        : {
              x: e.width / 2 - v.width / 2,
              y: e.height / 2 - v.height / 2
          };
}
function C(e) {
    if (null == e || null == y.get(e)) return !1;
    y.delete(e), (S = new Set(S)).delete(e);
}
function R(e) {
    let { channelId: n, ringing: r } = e,
        i = r.includes(f.default.getId());
    if (!S.has(n) && i) {
        let e = _.Z.getChannel(n);
        if (null == e) return !1;
        let r = I * S.size,
            { x: i, y: a } = N();
        return (
            y.set(n, {
                channel: e,
                x: i + r,
                y: a + r
            }),
            (S = new Set(S)).add(n),
            void 0
        );
    }
    return !!S.has(n) && !i && C(n);
}
function O(e) {
    let { channelId: n } = e;
    return C(n);
}
function D(e) {
    let { channelId: n } = e;
    return C(n);
}
function L(e) {
    let { x: n, y: r } = e;
    return (
        (i = {
            x: n,
            y: r
        }),
        l.K.set(E, i),
        !1
    );
}
function x(e) {
    let { channel: n } = e;
    return C(n.id);
}
function w() {
    A = h.Z.getStatus() === m.Skl.DND || c.QZ.getSetting();
}
class P extends (a = o.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, h.Z), this.syncWith([h.Z], w), this.syncWith([d.Z], w);
    }
    getIncomingCalls() {
        return A ? b : Array.from(y.values());
    }
    getIncomingCallChannelIds() {
        return A ? T : S;
    }
    getFirstIncomingCallId() {
        return A ? null : S.values().next().value;
    }
    hasIncomingCalls() {
        return !A && S.size > 0;
    }
}
g(P, 'displayName', 'IncomingCallStore'),
    (n.Z = new P(u.Z, {
        CALL_CREATE: R,
        CALL_UPDATE: R,
        CALL_DELETE: O,
        VOICE_CHANNEL_SELECT: D,
        INCOMING_CALL_MOVE: L,
        CHANNEL_DELETE: x
    }));
