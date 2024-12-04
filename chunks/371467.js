n(47120), n(733860), n(653041);
var i,
    l,
    o,
    r,
    s,
    a,
    u,
    c,
    d = n(512722),
    h = n.n(d),
    f = n(772848),
    p = n(442837),
    m = n(570140),
    v = n(13245),
    g = n(435064),
    E = n(786761),
    x = n(695346),
    C = n(314897),
    Z = n(592125),
    _ = n(375954),
    S = n(292959),
    I = n(158776),
    N = n(885110),
    b = n(246946),
    O = n(594174),
    y = n(974180),
    j = n(237997),
    T = n(70956),
    k = n(150097),
    w = n(129724),
    A = n(388627),
    L = n(996050),
    R = n(609626),
    M = n(421824),
    z = n(777036),
    D = n(333727),
    P = n(585708),
    V = n(588909),
    W = n(981631),
    U = n(388032);
((r = i || (i = {}))[(r.GENERIC = 0)] = 'GENERIC'), (r[(r.TEXT = 1)] = 'TEXT'), (r[(r.INCOMING_CALL = 2)] = 'INCOMING_CALL'), (r[(r.NUDGE = 3)] = 'NUDGE'), ((s = l || (l = {}))[(s.NORMAL = 0)] = 'NORMAL'), (s[(s.HIGH = 1)] = 'HIGH'), (s[(s.URGENT = 2)] = 'URGENT');
let F = 5 * T.Z.Millis.SECOND,
    B = 8 * T.Z.Millis.SECOND,
    H = 30 * T.Z.Millis.SECOND,
    Y = 30 * T.Z.Millis.SECOND,
    G = Object.freeze({
        timestamp: 0,
        priority: 0,
        duration: F,
        expirationExternallyManaged: !1,
        type: 0
    }),
    K = [],
    X = !1,
    Q = [];
function J() {
    if (X && null == K.find((e) => e.status === W._1z.FOCUSED)) for (let e of ((X = !1), (K = [...K, ...Q]), (Q = []), K.length > 40 && (K.length = 40), K)) e.timer.start();
}
function q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    K.filter((e) => 1 === e.type && e.status === W._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - H) && $(t.id, W._1z.DISMISSED);
        });
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : W._1z.DISMISSED;
    if (null == e) return !1;
    let n = K.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = K[n];
    if ((i.timer.stop(), (K = [...K]), t === W._1z.FOCUSED)) {
        let [e] = K.splice(n, 1);
        (e = {
            ...e,
            status: t
        }),
            K.unshift(e),
            (X = !0);
        return;
    }
    t === W._1z.DISMISSED
        ? K.splice(n, 1)
        : (K[n] = {
              ...i,
              status: t
          }),
        J();
}
function ee(e) {
    let t = K.length,
        n = (K = K.filter((t) => 1 !== t.type || t.channelId !== e || !1)).length !== t;
    return n && J(), n;
}
function et(e) {
    let t = K.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function en(e, t) {
    let n = {
            ...G,
            timestamp: Date.now(),
            ...t
        },
        i = (0, f.Z)(),
        l = !1,
        o = {
            id: i,
            status: W._1z.ACTIVE,
            timer: (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            o = l ? W._1z.TIMED_OUT : W._1z.DISMISSED;
                        -1 === i && (i = setTimeout(() => v.Z.updateNotificationStatus(e, o), null != n ? n : F));
                    },
                    stop() {
                        clearTimeout(i), (i = -1);
                    }
                };
            })(i, n.expirationExternallyManaged, n.duration),
            props: {
                ...e,
                onNotificationShow: () => {
                    var t;
                    !l && ((l = !0), null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i));
                }
            },
            ...n
        },
        r = X ? Q : [...K],
        s = r.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? r.push(o) : r.splice(s, 0, o), r.length > 40)) {
        let e = r.pop();
        !X && e.timer.stop();
    }
    return !X && ((K = r), o.timer.start()), i;
}
function ei(e) {
    let { channelId: t, ringing: n } = e,
        i = et(t);
    if (!n.includes(C.default.getId())) return $(i);
    if (null != i) return !1;
    let l = Z.Z.getChannel(t);
    if (null == l || !l.isPrivate() || N.Z.getStatus() === W.Skl.DND || x.QZ.getSetting()) return !1;
    let o = K.find((e) => 1 === e.type && e.channelId === t && e.messageType === W.uaV.CALL);
    null != o && $(o.id),
        en((0, z.Z)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id
        });
}
class el extends (o = p.ZP.Store) {
    initialize() {
        this.waitFor(Z.Z, O.default);
    }
    getNotifications() {
        return K;
    }
}
(c = 'OverlayNotificationsStore'),
    (u = 'displayName') in (a = el)
        ? Object.defineProperty(a, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[u] = c);
let eo = new el(m.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        $(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        let { nudges: t } = e;
        q(0);
        let n = (0, V.Z)((0, A.pL)(), t);
        null != n &&
            en(n, {
                priority: 2,
                type: 3,
                duration: B
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of K) e.status === W._1z.FOCUSED && $(e.id, W._1z.ACTIVE);
            return !0;
        }
        for (let e of (q(), K)) 3 === e.type ? $(e.id, W._1z.DISMISSED) : e.status === W._1z.ACTIVE && !e.expirationExternallyManaged && (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (K.length > 0) {
            var n;
            return $(null === (n = K.filter((e) => 1 === e.type).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, W._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i, l;
        let { channelId: o, message: r } = e,
            s = Z.Z.getChannel(o),
            a = O.default.getUser(null === (t = r.author) || void 0 === t ? void 0 : t.id);
        if (null == s || null == a) return !1;
        if ((null === (n = r.activity) || void 0 === n ? void 0 : n.type) === W.mFx.JOIN || (null === (i = r.activity) || void 0 === i ? void 0 : i.type) === W.mFx.JOIN_REQUEST) {
            if (!(0, k.eF)(r, o, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let l, o;
                if ((h()(null != t.activity, 'received null message activity'), n.id === C.default.getId())) return !1;
                let r = (0, A.pL)(),
                    s = null !== (i = null == r ? void 0 : r.altId) && void 0 !== i ? i : null == r ? void 0 : r.id;
                if (null == r || null == s) return !1;
                switch (t.activity.type) {
                    case W.mFx.JOIN:
                        if (null == (l = I.Z.getApplicationActivity(n.id, s)) || null == l.party || l.party.id !== t.activity.party_id) return !1;
                        o = (0, L.Z)(e, t, n, r, l);
                        break;
                    case W.mFx.JOIN_REQUEST:
                        if (null == (l = N.Z.getApplicationActivity(s)) || null == l.party || l.party.id !== t.activity.party_id) return !1;
                        o = (0, D.Z)(e, n, r, l);
                }
                return (
                    null != o &&
                    (en(o, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: Y
                    }),
                    !0)
                );
            })(s, r, a);
            if (!1 !== e) return e;
        }
        if (j.Z.getTextChatNotificationMode() === W.Ypu.DISABLED || b.Z.disableNotifications || !(0, k.eF)(r, o)) return !1;
        let u = !S.Z.isSoundDisabled(y.Ay),
            c = null !== (l = _.Z.getMessage(o, r.id)) && void 0 !== l ? l : (0, E.e5)(r);
        en((0, P.Z)(s, c, a, u), {
            type: 1,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: r.type
        }),
            q();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && ee(t);
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        return ee(t);
    },
    CALL_CREATE: ei,
    CALL_UPDATE: ei,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        $(et(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: l } = e,
            o = (0, A.pL)();
        if (null == o || (null == o ? void 0 : o.id) == null || (o.id !== l && o.altId !== l)) return !1;
        if (n === W.mFx.JOIN) t = (0, R.Z)(i, o);
        if (null == t) return !1;
        en(t, {
            priority: 2,
            type: 0
        });
    },
    CLIPS_SAVE_CLIP_START: function () {
        en((0, M.f)(U.intl.string(U.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        en((0, M.f)(U.intl.format(U.t.KLhk6u, { duration: (0, w.A)(g.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        en((0, M.f)(U.intl.string(U.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, M.y)();
        null != t && en(t);
    }
});
t.Z = eo;
