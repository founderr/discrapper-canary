let r;
var i,
    a = n(442837),
    o = n(544891),
    s = n(570140),
    l = n(70956),
    u = n(314897),
    c = n(300429),
    d = n(981631),
    _ = n(176505);
function E(e, t, n) {
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
let f = 10 * l.Z.Millis.SECOND,
    h = 1.5 * l.Z.Millis.SECOND,
    p = 5,
    m = {},
    I = Object.freeze({});
function T(e) {
    var t;
    return null !== (t = m[e]) && void 0 !== t ? t : I;
}
function g(e) {
    let { channelId: t } = e,
        n = u.default.getId();
    if (null == n || t === _.V) return !1;
    null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
    let i = Date.now(),
        a = 0.8 * f;
    if (null != r && (null != r.timeout || r.prevSend + a > i)) return !1;
    let l = setTimeout(
        () => {
            if (null == r || r.channelId !== t || n !== u.default.getId() || null == r.timeout) return;
            if (((r.timeout = null), !(y(t) > p)))
                o.tn
                    .post({
                        url: d.ANM.TYPING(t),
                        oldFormErrors: !0
                    })
                    .then((e) => {
                        if (200 === e.status) {
                            var n, r;
                            let i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                a = null !== (r = e.body.thread_create_cooldown_ms) && void 0 !== r ? r : 0;
                            i > 0 &&
                                s.Z.dispatch({
                                    type: 'SLOWMODE_SET_COOLDOWN',
                                    channelId: t,
                                    slowmodeType: c.S.SendMessage,
                                    cooldownMs: i
                                }),
                                a > 0 &&
                                    s.Z.dispatch({
                                        type: 'SLOWMODE_SET_COOLDOWN',
                                        channelId: t,
                                        slowmodeType: c.S.CreateThread,
                                        cooldownMs: a
                                    });
                        }
                    });
        },
        null == r || r.prevSend > i - 2 * a ? h : 0
    );
    return (
        (r = {
            channelId: t,
            timeout: l,
            prevSend: i
        }),
        N({
            channelId: t,
            userId: n
        })
    );
}
function S(e) {
    if (null == r || r.channelId !== e) return !1;
    null != r.timeout && clearTimeout(r.timeout), (r = null);
}
function A(e) {
    let { channelId: t } = e,
        n = u.default.getId();
    return (
        null != n &&
        null != r &&
        r.channelId === t &&
        null != r.timeout &&
        (clearTimeout(r.timeout),
        (r = null),
        O({
            channelId: t,
            userId: n
        }))
    );
}
function v(e, t) {
    return setTimeout(() => {
        s.Z.dispatch({
            type: 'TYPING_STOP',
            channelId: e,
            userId: t
        });
    }, f);
}
function N(e) {
    let { channelId: t, userId: n } = e,
        r = { ...T(t) };
    clearTimeout(r[n]), (r[n] = v(t, n)), (m[t] = r);
}
function O(e) {
    let { channelId: t, userId: n } = e,
        r = m[t];
    if (null == r || null == r[n]) return !1;
    let i = { ...r };
    clearTimeout(i[n]), delete i[n], (m[t] = i);
}
function R(e) {
    let {
        channelId: t,
        message: { author: n },
        optimistic: r
    } = e;
    return (
        r && S(t),
        null != n &&
            O({
                channelId: t,
                userId: n.id
            })
    );
}
function C() {
    m = {};
}
function y(e) {
    let t = T(e);
    return t === I ? 0 : Object.keys(t).length;
}
class b extends (i = a.ZP.Store) {
    getTypingUsers(e) {
        return T(e);
    }
    isTyping(e, t) {
        return null != T(e)[t];
    }
}
E(b, 'displayName', 'TypingStore'),
    (t.Z = new b(s.Z, {
        TYPING_START: N,
        TYPING_STOP: O,
        TYPING_START_LOCAL: g,
        TYPING_STOP_LOCAL: A,
        CONNECTION_OPEN: C,
        OVERLAY_INITIALIZE: C,
        MESSAGE_CREATE: R
    }));
