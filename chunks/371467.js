n(47120), n(733860), n(653041);
var i,
    r,
    l,
    o,
    a,
    s,
    u,
    c,
    d = n(512722),
    h = n.n(d),
    f = n(772848),
    p = n(442837),
    m = n(570140),
    E = n(13245),
    v = n(435064),
    g = n(786761),
    _ = n(695346),
    C = n(314897),
    S = n(592125),
    I = n(375954),
    Z = n(292959),
    N = n(158776),
    x = n(885110),
    O = n(246946),
    T = n(594174),
    A = n(974180),
    y = n(237997),
    b = n(70956),
    R = n(150097),
    L = n(129724),
    k = n(388627),
    M = n(996050),
    P = n(609626),
    w = n(421824),
    j = n(777036),
    D = n(333727),
    z = n(585708),
    U = n(588909),
    V = n(981631),
    G = n(388032);
((o = i || (i = {}))[(o.GENERIC = 0)] = 'GENERIC'), (o[(o.TEXT = 1)] = 'TEXT'), (o[(o.INCOMING_CALL = 2)] = 'INCOMING_CALL'), (o[(o.NUDGE = 3)] = 'NUDGE'), ((a = r || (r = {}))[(a.NORMAL = 0)] = 'NORMAL'), (a[(a.HIGH = 1)] = 'HIGH'), (a[(a.URGENT = 2)] = 'URGENT');
let F = 5 * b.Z.Millis.SECOND,
    B = 8 * b.Z.Millis.SECOND,
    W = 30 * b.Z.Millis.SECOND,
    H = 30 * b.Z.Millis.SECOND,
    Y = Object.freeze({
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
    if (Q && null == K.find((e) => e.status === V._1z.FOCUSED)) for (let e of ((Q = !1), (K = [...K, ...X]), (X = []), K.length > 40 && (K.length = 40), K)) e.timer.start();
}
function q() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    K.filter((e) => 1 === e.type && e.status === V._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            (n >= e || t.timestamp < Date.now() - W) && $(t.id, V._1z.DISMISSED);
        });
}
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : V._1z.DISMISSED;
    if (null == e) return !1;
    let n = K.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = K[n];
    if ((i.timer.stop(), (K = [...K]), t === V._1z.FOCUSED)) {
        let [e] = K.splice(n, 1);
        (e = {
            ...e,
            status: t
        }),
            K.unshift(e),
            (Q = !0);
        return;
    }
    t === V._1z.DISMISSED
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
            ...Y,
            timestamp: Date.now(),
            ...t
        },
        i = (0, f.Z)(),
        r = !1,
        l = {
            id: i,
            status: V._1z.ACTIVE,
            timer: (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            l = r ? V._1z.TIMED_OUT : V._1z.DISMISSED;
                        -1 === i && (i = setTimeout(() => E.Z.updateNotificationStatus(e, l), null != n ? n : F));
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
                    !r && ((r = !0), null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i));
                }
            },
            ...n
        },
        o = Q ? X : [...K],
        a = o.findIndex((e) => e.priority <= n.priority);
    if ((-1 === a ? o.push(l) : o.splice(a, 0, l), o.length > 40)) {
        let e = o.pop();
        !Q && e.timer.stop();
    }
    return !Q && ((K = o), l.timer.start()), i;
}
function ei(e) {
    let { channelId: t, ringing: n } = e,
        i = et(t);
    if (!n.includes(C.default.getId())) return $(i);
    if (null != i) return !1;
    let r = S.Z.getChannel(t);
    if (null == r || !r.isPrivate() || x.Z.getStatus() === V.Skl.DND || _.QZ.getSetting()) return !1;
    let l = K.find((e) => 1 === e.type && e.channelId === t && e.messageType === V.uaV.CALL);
    null != l && $(l.id),
        en((0, j.Z)(r), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: r.id
        });
}
class er extends (l = p.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, T.default);
    }
    getNotifications() {
        return K;
    }
}
(c = 'OverlayNotificationsStore'),
    (u = 'displayName') in (s = er)
        ? Object.defineProperty(s, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[u] = c);
let el = new er(m.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        $(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        let { nudges: t } = e;
        q(0);
        let n = (0, U.Z)((0, k.pL)(), t);
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
            for (let e of K) e.status === V._1z.FOCUSED && $(e.id, V._1z.ACTIVE);
            return !0;
        }
        for (let e of (q(), K)) 3 === e.type ? $(e.id, V._1z.DISMISSED) : e.status === V._1z.ACTIVE && !e.expirationExternallyManaged && (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (K.length > 0) {
            var n;
            return $(null === (n = K.filter((e) => 1 === e.type).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, V._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i, r;
        let { channelId: l, message: o } = e,
            a = S.Z.getChannel(l),
            s = T.default.getUser(null === (t = o.author) || void 0 === t ? void 0 : t.id);
        if (null == a || null == s) return !1;
        if ((null === (n = o.activity) || void 0 === n ? void 0 : n.type) === V.mFx.JOIN || (null === (i = o.activity) || void 0 === i ? void 0 : i.type) === V.mFx.JOIN_REQUEST) {
            if (!(0, R.eF)(o, l, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let r, l;
                if ((h()(null != t.activity, 'received null message activity'), n.id === C.default.getId())) return !1;
                let o = (0, k.pL)(),
                    a = null !== (i = null == o ? void 0 : o.altId) && void 0 !== i ? i : null == o ? void 0 : o.id;
                if (null == o || null == a) return !1;
                switch (t.activity.type) {
                    case V.mFx.JOIN:
                        if (null == (r = N.Z.getApplicationActivity(n.id, a)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        l = (0, M.Z)(e, t, n, o, r);
                        break;
                    case V.mFx.JOIN_REQUEST:
                        if (null == (r = x.Z.getApplicationActivity(a)) || null == r.party || r.party.id !== t.activity.party_id) return !1;
                        l = (0, D.Z)(e, n, o, r);
                }
                return (
                    null != l &&
                    (en(l, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: H
                    }),
                    !0)
                );
            })(a, o, s);
            if (!1 !== e) return e;
        }
        if (y.Z.getTextChatNotificationMode() === V.Ypu.DISABLED || O.Z.disableNotifications || !(0, R.eF)(o, l)) return !1;
        let u = !Z.Z.isSoundDisabled(A.Ay),
            c = null !== (r = I.Z.getMessage(l, o.id)) && void 0 !== r ? r : (0, g.e5)(o);
        en((0, z.Z)(a, c, s, u), {
            type: 1,
            channelId: a.id,
            expirationExternallyManaged: !0,
            messageType: o.type
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
            { actionType: n, user: i, applicationId: r } = e,
            l = (0, k.pL)();
        if (null == l || (null == l ? void 0 : l.id) == null || (l.id !== r && l.altId !== r)) return !1;
        if (n === V.mFx.JOIN) t = (0, P.Z)(i, l);
        if (null == t) return !1;
        en(t, {
            priority: 2,
            type: 0
        });
    },
    CLIPS_SAVE_CLIP_START: function () {
        en((0, w.f)(G.intl.string(G.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        en((0, w.f)(G.intl.format(G.t.KLhk6u, { duration: (0, L.A)(v.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        en((0, w.f)(G.intl.string(G.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, w.y)();
        null != t && en(t);
    }
});
t.Z = el;
