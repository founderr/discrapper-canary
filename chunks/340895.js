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
    _ = n(581883),
    E = n(314897),
    f = n(592125),
    h = n(885110),
    p = n(451478),
    I = n(981631);
let m = {
        width: 232,
        height: 315
    },
    T = new Set(),
    S = [],
    g = new Map(),
    A = new Set(),
    N = !1;
function R(e) {
    if (null == e || null == g.get(e)) return !1;
    g.delete(e), (A = new Set(A)).delete(e);
}
function O(e) {
    let { channelId: t, ringing: n } = e,
        i = n.includes(E.default.getId());
    if (!A.has(t) && i) {
        let e = f.Z.getChannel(t);
        if (null == e) return !1;
        let n = 10 * A.size,
            { x: i, y: a } = (function () {
                let e = p.Z.windowSize();
                return null != r && r.x + m.width < e.width && r.y + m.height < e.height
                    ? r
                    : {
                          x: e.width / 2 - m.width / 2,
                          y: e.height / 2 - m.height / 2
                      };
            })();
        return (
            g.set(t, {
                channel: e,
                x: i + n,
                y: a + n
            }),
            (A = new Set(A)).add(t),
            void 0
        );
    }
    return !!A.has(t) && !i && R(t);
}
function v() {
    N = h.Z.getStatus() === I.Skl.DND || d.QZ.getSetting();
}
class C extends (i = l.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, h.Z), this.syncWith([h.Z], v), this.syncWith([_.Z], v);
    }
    getIncomingCalls() {
        return N ? S : Array.from(g.values());
    }
    getIncomingCallChannelIds() {
        return N ? T : A;
    }
    getFirstIncomingCallId() {
        return N ? null : A.values().next().value;
    }
    hasIncomingCalls() {
        return !N && A.size > 0;
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
        CALL_CREATE: O,
        CALL_UPDATE: O,
        CALL_DELETE: function (e) {
            let { channelId: t } = e;
            return R(t);
        },
        VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return R(t);
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
            return R(t.id);
        }
    }));
