let r;
n(47120);
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(433517),
    c = n(570140),
    d = n(695346),
    f = n(581883),
    _ = n(314897),
    h = n(592125),
    p = n(885110),
    m = n(451478),
    g = n(981631);
let E = {
        width: 232,
        height: 315
    },
    v = new Set(),
    I = [],
    S = new Map(),
    T = new Set(),
    b = !1;
function y(e) {
    if (null == e || null == S.get(e)) return !1;
    S.delete(e), (T = new Set(T)).delete(e);
}
function A(e) {
    let { channelId: t, ringing: n } = e,
        i = n.includes(_.default.getId());
    if (!T.has(t) && i) {
        let e = h.Z.getChannel(t);
        if (null == e) return !1;
        let n = 10 * T.size,
            { x: i, y: a } = (function () {
                let e = m.Z.windowSize();
                return null != r && r.x + E.width < e.width && r.y + E.height < e.height
                    ? r
                    : {
                          x: e.width / 2 - E.width / 2,
                          y: e.height / 2 - E.height / 2
                      };
            })();
        return (
            S.set(t, {
                channel: e,
                x: i + n,
                y: a + n
            }),
            (T = new Set(T)).add(t),
            void 0
        );
    }
    return !!T.has(t) && !i && y(t);
}
function N() {
    b = p.Z.getStatus() === g.Skl.DND || d.QZ.getSetting();
}
class C extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(h.Z, p.Z), this.syncWith([p.Z], N), this.syncWith([f.Z], N);
    }
    getIncomingCalls() {
        return b ? I : Array.from(S.values());
    }
    getIncomingCallChannelIds() {
        return b ? v : T;
    }
    getFirstIncomingCallId() {
        return b ? null : T.values().next().value;
    }
    hasIncomingCalls() {
        return !b && T.size > 0;
    }
}
(o = 'IncomingCallStore'),
    (s = 'displayName') in (a = C)
        ? Object.defineProperty(a, s, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = o),
    (t.Z = new C(c.Z, {
        CALL_CREATE: A,
        CALL_UPDATE: A,
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            return y(t);
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return y(t);
        },
        INCOMING_CALL_MOVE: function (e) {
            let { x: t, y: n } = e;
            return (
                (r = {
                    x: t,
                    y: n
                }),
                u.K.set('IncomingCallStore', r),
                !1
            );
        },
        CHANNEL_DELETE: function (e) {
            let { channel: t } = e;
            return y(t.id);
        }
    }));
