let r;
var i,
    a = n(47120);
var o = n(442837),
    s = n(433517),
    l = n(570140),
    u = n(695346),
    c = n(581883),
    d = n(314897),
    _ = n(592125),
    E = n(885110),
    f = n(451478),
    h = n(981631);
function p(e, t, n) {
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
let m = 'IncomingCallStore',
    I = {
        width: 232,
        height: 315
    },
    T = 10,
    g = new Set(),
    S = [],
    A = new Map(),
    v = new Set(),
    N = !1;
function O() {
    let e = f.Z.windowSize();
    return null != r && r.x + I.width < e.width && r.y + I.height < e.height
        ? r
        : {
              x: e.width / 2 - I.width / 2,
              y: e.height / 2 - I.height / 2
          };
}
function R(e) {
    if (null == e || null == A.get(e)) return !1;
    A.delete(e), (v = new Set(v)).delete(e);
}
function C(e) {
    let { channelId: t, ringing: n } = e,
        r = n.includes(d.default.getId());
    if (!v.has(t) && r) {
        let e = _.Z.getChannel(t);
        if (null == e) return !1;
        let n = T * v.size,
            { x: r, y: i } = O();
        return (
            A.set(t, {
                channel: e,
                x: r + n,
                y: i + n
            }),
            (v = new Set(v)).add(t),
            void 0
        );
    }
    return !!v.has(t) && !r && R(t);
}
function y(e) {
    let { channelId: t } = e;
    return R(t);
}
function L(e) {
    let { channelId: t } = e;
    return R(t);
}
function b(e) {
    let { x: t, y: n } = e;
    return (
        (r = {
            x: t,
            y: n
        }),
        s.K.set(m, r),
        !1
    );
}
function D(e) {
    let { channel: t } = e;
    return R(t.id);
}
function M() {
    N = E.Z.getStatus() === h.Skl.DND || u.QZ.getSetting();
}
class P extends (i = o.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, E.Z), this.syncWith([E.Z], M), this.syncWith([c.Z], M);
    }
    getIncomingCalls() {
        return N ? S : Array.from(A.values());
    }
    getIncomingCallChannelIds() {
        return N ? g : v;
    }
    getFirstIncomingCallId() {
        return N ? null : v.values().next().value;
    }
    hasIncomingCalls() {
        return !N && v.size > 0;
    }
}
p(P, 'displayName', 'IncomingCallStore'),
    (t.Z = new P(l.Z, {
        CALL_CREATE: C,
        CALL_UPDATE: C,
        CALL_DELETE: y,
        VOICE_CHANNEL_SELECT: L,
        INCOMING_CALL_MOVE: b,
        CHANNEL_DELETE: D
    }));
