let u;
var r,
    l,
    i,
    o,
    a = t(442837),
    d = t(544891),
    c = t(570140),
    s = t(70956),
    f = t(314897),
    g = t(300429),
    m = t(981631),
    Z = t(176505);
let h = 10 * s.Z.Millis.SECOND,
    v = 1.5 * s.Z.Millis.SECOND,
    E = {},
    T = Object.freeze({});
function _(e) {
    var n;
    return null !== (n = E[e]) && void 0 !== n ? n : T;
}
function S(e) {
    var n, t;
    let { channelId: u, userId: r } = e,
        l = { ..._(u) };
    clearTimeout(l[r]),
        (l[r] =
            ((n = u),
            (t = r),
            setTimeout(() => {
                c.Z.dispatch({
                    type: 'TYPING_STOP',
                    channelId: n,
                    userId: t
                });
            }, h))),
        (E[u] = l);
}
function I(e) {
    let { channelId: n, userId: t } = e,
        u = E[n];
    if (null == u || null == u[t]) return !1;
    let r = { ...u };
    clearTimeout(r[t]), delete r[t], (E[n] = r);
}
function p() {
    E = {};
}
class M extends (o = a.ZP.Store) {
    getTypingUsers(e) {
        return _(e);
    }
    isTyping(e, n) {
        return null != _(e)[n];
    }
}
(i = 'TypingStore'),
    (l = 'displayName') in (r = M)
        ? Object.defineProperty(r, l, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = i),
    (n.Z = new M(c.Z, {
        TYPING_START: S,
        TYPING_STOP: I,
        TYPING_START_LOCAL: function (e) {
            let { channelId: n } = e,
                t = f.default.getId();
            if (null == t || n === Z.V) return !1;
            null != u && u.channelId !== n && (null != u.timeout && clearTimeout(u.timeout), (u = null));
            let r = Date.now(),
                l = 0.8 * h;
            if (null != u && (null != u.timeout || u.prevSend + l > r)) return !1;
            let i = setTimeout(
                () => {
                    if (null == u || u.channelId !== n || t !== f.default.getId() || null == u.timeout) return;
                    if (
                        ((u.timeout = null),
                        !(
                            (function (e) {
                                let n = _(e);
                                return n === T ? 0 : Object.keys(n).length;
                            })(n) > 5
                        ))
                    )
                        d.tn
                            .post({
                                url: m.ANM.TYPING(n),
                                oldFormErrors: !0,
                                rejectWithError: !1
                            })
                            .then((e) => {
                                if (200 === e.status) {
                                    var t, u;
                                    let r = null !== (t = e.body.message_send_cooldown_ms) && void 0 !== t ? t : 0,
                                        l = null !== (u = e.body.thread_create_cooldown_ms) && void 0 !== u ? u : 0;
                                    r > 0 &&
                                        c.Z.dispatch({
                                            type: 'SLOWMODE_SET_COOLDOWN',
                                            channelId: n,
                                            slowmodeType: g.S.SendMessage,
                                            cooldownMs: r
                                        }),
                                        l > 0 &&
                                            c.Z.dispatch({
                                                type: 'SLOWMODE_SET_COOLDOWN',
                                                channelId: n,
                                                slowmodeType: g.S.CreateThread,
                                                cooldownMs: l
                                            });
                                }
                            });
                },
                null == u || u.prevSend > r - 2 * l ? v : 0
            );
            return (
                (u = {
                    channelId: n,
                    timeout: i,
                    prevSend: r
                }),
                S({
                    channelId: n,
                    userId: t
                })
            );
        },
        TYPING_STOP_LOCAL: function (e) {
            let { channelId: n } = e,
                t = f.default.getId();
            return (
                null != t &&
                null != u &&
                u.channelId === n &&
                null != u.timeout &&
                (clearTimeout(u.timeout),
                (u = null),
                I({
                    channelId: n,
                    userId: t
                }))
            );
        },
        CONNECTION_OPEN: p,
        OVERLAY_INITIALIZE: p,
        MESSAGE_CREATE: function (e) {
            let {
                channelId: n,
                message: { author: t },
                optimistic: r
            } = e;
            return (
                r &&
                    !(function (e) {
                        if (null == u || u.channelId !== e) return;
                        null != u.timeout && clearTimeout(u.timeout), (u = null);
                    })(n),
                null != t &&
                    I({
                        channelId: n,
                        userId: t.id
                    })
            );
        }
    }));
