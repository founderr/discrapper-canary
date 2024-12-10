let r;
var i,
    a,
    s,
    o,
    l = n(442837),
    u = n(544891),
    c = n(570140),
    d = n(70956),
    f = n(314897),
    _ = n(300429),
    p = n(981631),
    h = n(176505);
let m = 10 * d.Z.Millis.SECOND,
    g = 1.5 * d.Z.Millis.SECOND,
    E = {},
    v = Object.freeze({});
function I(e) {
    var t;
    return null !== (t = E[e]) && void 0 !== t ? t : v;
}
function T(e) {
    var t, n;
    let { channelId: r, userId: i } = e,
        a = { ...I(r) };
    clearTimeout(a[i]),
        (a[i] =
            ((t = r),
            (n = i),
            setTimeout(() => {
                c.Z.dispatch({
                    type: 'TYPING_STOP',
                    channelId: t,
                    userId: n
                });
            }, m))),
        (E[r] = a);
}
function b(e) {
    let { channelId: t, userId: n } = e,
        r = E[t];
    if (null == r || null == r[n]) return !1;
    let i = { ...r };
    clearTimeout(i[n]), delete i[n], (E[t] = i);
}
function S() {
    E = {};
}
class y extends (o = l.ZP.Store) {
    getTypingUsers(e) {
        return I(e);
    }
    isTyping(e, t) {
        return null != I(e)[t];
    }
}
(s = 'TypingStore'),
    (a = 'displayName') in (i = y)
        ? Object.defineProperty(i, a, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[a] = s),
    (t.Z = new y(c.Z, {
        TYPING_START: T,
        TYPING_STOP: b,
        TYPING_START_LOCAL: function (e) {
            let { channelId: t } = e,
                n = f.default.getId();
            if (null == n || t === h.V) return !1;
            null != r && r.channelId !== t && (null != r.timeout && clearTimeout(r.timeout), (r = null));
            let i = Date.now(),
                a = 0.8 * m;
            if (null != r && (null != r.timeout || r.prevSend + a > i)) return !1;
            let s = setTimeout(
                () => {
                    if (null == r || r.channelId !== t || n !== f.default.getId() || null == r.timeout) return;
                    if (
                        ((r.timeout = null),
                        !(
                            (function (e) {
                                let t = I(e);
                                return t === v ? 0 : Object.keys(t).length;
                            })(t) > 5
                        ))
                    )
                        u.tn
                            .post({
                                url: p.ANM.TYPING(t),
                                oldFormErrors: !0,
                                rejectWithError: !0
                            })
                            .then((e) => {
                                if (200 === e.status) {
                                    var n, r;
                                    let i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
                                        a = null !== (r = e.body.thread_create_cooldown_ms) && void 0 !== r ? r : 0;
                                    i > 0 &&
                                        c.Z.dispatch({
                                            type: 'SLOWMODE_SET_COOLDOWN',
                                            channelId: t,
                                            slowmodeType: _.S.SendMessage,
                                            cooldownMs: i
                                        }),
                                        a > 0 &&
                                            c.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: t,
                                                slowmodeType: _.S.CreateThread,
                                                cooldownMs: a
                                            });
                                }
                            });
                },
                null == r || r.prevSend > i - 2 * a ? g : 0
            );
            return (
                (r = {
                    channelId: t,
                    timeout: s,
                    prevSend: i
                }),
                T({
                    channelId: t,
                    userId: n
                })
            );
        },
        TYPING_STOP_LOCAL: function (e) {
            let { channelId: t } = e,
                n = f.default.getId();
            return (
                null != n &&
                null != r &&
                r.channelId === t &&
                null != r.timeout &&
                (clearTimeout(r.timeout),
                (r = null),
                b({
                    channelId: t,
                    userId: n
                }))
            );
        },
        CONNECTION_OPEN: S,
        OVERLAY_INITIALIZE: S,
        MESSAGE_CREATE: function (e) {
            let {
                channelId: t,
                message: { author: n },
                optimistic: i
            } = e;
            return (
                i &&
                    !(function (e) {
                        if (null == r || r.channelId !== e) return;
                        null != r.timeout && clearTimeout(r.timeout), (r = null);
                    })(t),
                null != n &&
                    b({
                        channelId: t,
                        userId: n.id
                    })
            );
        }
    }));
