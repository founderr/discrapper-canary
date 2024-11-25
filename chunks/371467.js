n(47120), n(733860), n(653041);
var i,
    l,
    o,
    r,
    s,
    a,
    u,
    d,
    c = n(512722),
    h = n.n(c),
    f = n(772848),
    p = n(442837),
    m = n(570140),
    g = n(13245),
    v = n(435064),
    E = n(786761),
    Z = n(695346),
    C = n(314897),
    x = n(592125),
    S = n(375954),
    I = n(292959),
    _ = n(158776),
    O = n(885110),
    N = n(246946),
    y = n(594174),
    T = n(974180),
    j = n(237997),
    b = n(70956),
    L = n(150097),
    R = n(129724),
    w = n(388627),
    k = n(996050),
    A = n(609626),
    M = n(421824),
    z = n(777036),
    D = n(333727),
    P = n(585708),
    V = n(588909),
    U = n(981631),
    W = n(388032);
((r = i || (i = {}))[(r.GENERIC = 0)] = 'GENERIC'), (r[(r.TEXT = 1)] = 'TEXT'), (r[(r.INCOMING_CALL = 2)] = 'INCOMING_CALL'), (r[(r.NUDGE = 3)] = 'NUDGE'), ((s = l || (l = {}))[(s.NORMAL = 0)] = 'NORMAL'), (s[(s.HIGH = 1)] = 'HIGH'), (s[(s.URGENT = 2)] = 'URGENT');
let F = 5 * b.Z.Millis.SECOND,
    H = 8 * b.Z.Millis.SECOND,
    Y = 30 * b.Z.Millis.SECOND,
    G = 30 * b.Z.Millis.SECOND,
    B = Object.freeze({
        timestamp: 0,
        priority: 0,
        duration: F,
        expirationExternallyManaged: !1,
        type: 0
    }),
    K = [],
    Q = !1,
    X = [];
function J() {
    if (Q && null == K.find((e) => e.status === U._1z.FOCUSED)) for (let e of ((Q = !1), (K = [...K, ...X]), (X = []), K.length > 40 && (K.length = 40), K)) e.timer.start();
}
function q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    K.filter((e) => 1 === e.type && e.status === U._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - Y) && $(t.id, U._1z.DISMISSED);
        });
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U._1z.DISMISSED;
    if (null == e) return !1;
    let n = K.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = K[n];
    if ((i.timer.stop(), (K = [...K]), t === U._1z.FOCUSED)) {
        let [e] = K.splice(n, 1);
        (e = {
            ...e,
            status: t
        }),
            K.unshift(e),
            (Q = !0);
        return;
    }
    t === U._1z.DISMISSED
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
            ...B,
            timestamp: Date.now(),
            ...t
        },
        i = (0, f.Z)(),
        l = !1,
        o = {
            id: i,
            status: U._1z.ACTIVE,
            timer: (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            o = l ? U._1z.TIMED_OUT : U._1z.DISMISSED;
                        -1 === i && (i = setTimeout(() => g.Z.updateNotificationStatus(e, o), null != n ? n : F));
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
        r = Q ? X : [...K],
        s = r.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? r.push(o) : r.splice(s, 0, o), r.length > 40)) {
        let e = r.pop();
        !Q && e.timer.stop();
    }
    return !Q && ((K = r), o.timer.start()), i;
}
function ei(e) {
    let { channelId: t, ringing: n } = e,
        i = et(t);
    if (!n.includes(C.default.getId())) return $(i);
    if (null != i) return !1;
    let l = x.Z.getChannel(t);
    if (null == l || !l.isPrivate() || O.Z.getStatus() === U.Skl.DND || Z.QZ.getSetting()) return !1;
    let o = K.find((e) => 1 === e.type && e.channelId === t && e.messageType === U.uaV.CALL);
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
        this.waitFor(x.Z, y.default);
    }
    getNotifications() {
        return K;
    }
}
(d = 'OverlayNotificationsStore'),
    (u = 'displayName') in (a = el)
        ? Object.defineProperty(a, u, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[u] = d);
let eo = new el(m.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        $(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        let { nudges: t } = e;
        q(0);
        let n = (0, V.Z)((0, w.pL)(), t);
        null != n &&
            en(n, {
                priority: 2,
                type: 3,
                duration: H
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of K) e.status === U._1z.FOCUSED && $(e.id, U._1z.ACTIVE);
            return !0;
        }
        for (let e of (q(), K)) 3 === e.type ? $(e.id, U._1z.DISMISSED) : e.status === U._1z.ACTIVE && !e.expirationExternallyManaged && (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (K.length > 0) {
            var n;
            return $(null === (n = K.filter((e) => 1 === e.type).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, U._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i, l;
        let { channelId: o, message: r } = e,
            s = x.Z.getChannel(o),
            a = y.default.getUser(null === (t = r.author) || void 0 === t ? void 0 : t.id);
        if (null == s || null == a) return !1;
        if ((null === (n = r.activity) || void 0 === n ? void 0 : n.type) === U.mFx.JOIN || (null === (i = r.activity) || void 0 === i ? void 0 : i.type) === U.mFx.JOIN_REQUEST) {
            if (!(0, L.eF)(r, o, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let l, o;
                if ((h()(null != t.activity, 'received null message activity'), n.id === C.default.getId())) return !1;
                let r = (0, w.pL)(),
                    s = null !== (i = null == r ? void 0 : r.altId) && void 0 !== i ? i : null == r ? void 0 : r.id;
                if (null == r || null == s) return !1;
                switch (t.activity.type) {
                    case U.mFx.JOIN:
                        if (null == (l = _.Z.getApplicationActivity(n.id, s)) || null == l.party || l.party.id !== t.activity.party_id) return !1;
                        o = (0, k.Z)(e, t, n, r, l);
                        break;
                    case U.mFx.JOIN_REQUEST:
                        if (null == (l = O.Z.getApplicationActivity(s)) || null == l.party || l.party.id !== t.activity.party_id) return !1;
                        o = (0, D.Z)(e, n, r, l);
                }
                return (
                    null != o &&
                    (en(o, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: G
                    }),
                    !0)
                );
            })(s, r, a);
            if (!1 !== e) return e;
        }
        if (j.Z.getTextChatNotificationMode() === U.Ypu.DISABLED || N.Z.disableNotifications || !(0, L.eF)(r, o)) return !1;
        let u = !I.Z.isSoundDisabled(T.Ay),
            d = null !== (l = S.Z.getMessage(o, r.id)) && void 0 !== l ? l : (0, E.e5)(r);
        en((0, P.Z)(s, d, a, u), {
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
            o = (0, w.pL)();
        if (null == o || (null == o ? void 0 : o.id) == null || (o.id !== l && o.altId !== l)) return !1;
        if (n === U.mFx.JOIN) t = (0, A.Z)(i, o);
        if (null == t) return !1;
        en(t, {
            priority: 2,
            type: 0
        });
    },
    CLIPS_SAVE_CLIP_START: function () {
        en((0, M.f)(W.intl.string(W.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        en((0, M.f)(W.intl.format(W.t.KLhk6u, { duration: (0, R.A)(v.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        en((0, M.f)(W.intl.string(W.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, M.y)();
        null != t && en(t);
    }
});
t.Z = eo;
