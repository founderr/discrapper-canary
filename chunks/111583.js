let o;
var r, a, i, l, d = n(442837), c = n(544891), u = n(570140), f = n(70956), s = n(314897), _ = n(300429), h = n(981631), b = n(176505);
let I = 10 * f.Z.Millis.SECOND, p = 1.5 * f.Z.Millis.SECOND, m = {}, E = Object.freeze({});
function T(e) {
    var t;
    return null !== (t = m[e]) && void 0 !== t ? t : E;
}
function S(e) {
    var t, n;
    let {
            channelId: o,
            userId: r
        } = e, a = { ...T(o) };
    clearTimeout(a[r]), a[r] = (t = o, n = r, setTimeout(() => {
        u.Z.dispatch({
            type: 'TYPING_STOP',
            channelId: t,
            userId: n
        });
    }, I)), m[o] = a;
}
function C(e) {
    let {
            channelId: t,
            userId: n
        } = e, o = m[t];
    if (null == o || null == o[n])
        return !1;
    let r = { ...o };
    clearTimeout(r[n]), delete r[n], m[t] = r;
}
function g() {
    m = {};
}
class v extends (l = d.ZP.Store) {
    getTypingUsers(e) {
        return T(e);
    }
    isTyping(e, t) {
        return null != T(e)[t];
    }
}
i = 'TypingStore', (a = 'displayName') in (r = v) ? Object.defineProperty(r, a, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : r[a] = i, t.Z = new v(u.Z, {
    TYPING_START: S,
    TYPING_STOP: C,
    TYPING_START_LOCAL: function (e) {
        let {channelId: t} = e, n = s.default.getId();
        if (null == n || t === b.V)
            return !1;
        null != o && o.channelId !== t && (null != o.timeout && clearTimeout(o.timeout), o = null);
        let r = Date.now(), a = 0.8 * I;
        if (null != o && (null != o.timeout || o.prevSend + a > r))
            return !1;
        let i = setTimeout(() => {
            if (null == o || o.channelId !== t || n !== s.default.getId() || null == o.timeout)
                return;
            if (o.timeout = null, !(function (e) {
                    let t = T(e);
                    return t === E ? 0 : Object.keys(t).length;
                }(t) > 5))
                c.tn.post({
                    url: h.ANM.TYPING(t),
                    oldFormErrors: !0
                }).then(e => {
                    if (200 === e.status) {
                        var n, o;
                        let r = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0, a = null !== (o = e.body.thread_create_cooldown_ms) && void 0 !== o ? o : 0;
                        r > 0 && u.Z.dispatch({
                            type: 'SLOWMODE_SET_COOLDOWN',
                            channelId: t,
                            slowmodeType: _.S.SendMessage,
                            cooldownMs: r
                        }), a > 0 && u.Z.dispatch({
                            type: 'SLOWMODE_SET_COOLDOWN',
                            channelId: t,
                            slowmodeType: _.S.CreateThread,
                            cooldownMs: a
                        });
                    }
                });
        }, null == o || o.prevSend > r - 2 * a ? p : 0);
        return o = {
            channelId: t,
            timeout: i,
            prevSend: r
        }, S({
            channelId: t,
            userId: n
        });
    },
    TYPING_STOP_LOCAL: function (e) {
        let {channelId: t} = e, n = s.default.getId();
        return null != n && null != o && o.channelId === t && null != o.timeout && (clearTimeout(o.timeout), o = null, C({
            channelId: t,
            userId: n
        }));
    },
    CONNECTION_OPEN: g,
    OVERLAY_INITIALIZE: g,
    MESSAGE_CREATE: function (e) {
        let {
            channelId: t,
            message: {author: n},
            optimistic: r
        } = e;
        return r && !function (e) {
            if (null == o || o.channelId !== e)
                return;
            null != o.timeout && clearTimeout(o.timeout), o = null;
        }(t), null != n && C({
            channelId: t,
            userId: n.id
        });
    }
});
