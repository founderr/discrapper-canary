n(47120), n(733860), n(653041);
var i,
    l,
    r,
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
    v = n(13245),
    g = n(435064),
    E = n(786761),
    _ = n(695346),
    C = n(314897),
    S = n(592125),
    Z = n(375954),
    I = n(292959),
    x = n(158776),
    N = n(885110),
    O = n(246946),
    T = n(594174),
    y = n(974180),
    b = n(237997),
    A = n(70956),
    L = n(150097),
    R = n(129724),
    k = n(388627),
    M = n(996050),
    w = n(609626),
    P = n(421824),
    j = n(777036),
    D = n(333727),
    z = n(585708),
    U = n(588909),
    V = n(981631),
    G = n(388032);
((o = i || (i = {}))[(o.GENERIC = 0)] = 'GENERIC'), (o[(o.TEXT = 1)] = 'TEXT'), (o[(o.INCOMING_CALL = 2)] = 'INCOMING_CALL'), (o[(o.NUDGE = 3)] = 'NUDGE'), ((a = l || (l = {}))[(a.NORMAL = 0)] = 'NORMAL'), (a[(a.HIGH = 1)] = 'HIGH'), (a[(a.URGENT = 2)] = 'URGENT');
let W = 5 * A.Z.Millis.SECOND,
    F = 8 * A.Z.Millis.SECOND,
    B = 30 * A.Z.Millis.SECOND,
    H = 30 * A.Z.Millis.SECOND,
    Y = Object.freeze({
        timestamp: 0,
        priority: 0,
        duration: W,
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
            (n >= e || t.timestamp < Date.now() - B) && $(t.id, V._1z.DISMISSED);
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
        l = !1,
        r = {
            id: i,
            status: V._1z.ACTIVE,
            timer: (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let l = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            r = l ? V._1z.TIMED_OUT : V._1z.DISMISSED;
                        -1 === i && (i = setTimeout(() => v.Z.updateNotificationStatus(e, r), null != n ? n : W));
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
        o = Q ? X : [...K],
        a = o.findIndex((e) => e.priority <= n.priority);
    if ((-1 === a ? o.push(r) : o.splice(a, 0, r), o.length > 40)) {
        let e = o.pop();
        !Q && e.timer.stop();
    }
    return !Q && ((K = o), r.timer.start()), i;
}
function ei(e) {
    let { channelId: t, ringing: n } = e,
        i = et(t);
    if (!n.includes(C.default.getId())) return $(i);
    if (null != i) return !1;
    let l = S.Z.getChannel(t);
    if (null == l || !l.isPrivate() || N.Z.getStatus() === V.Skl.DND || _.QZ.getSetting()) return !1;
    let r = K.find((e) => 1 === e.type && e.channelId === t && e.messageType === V.uaV.CALL);
    null != r && $(r.id),
        en((0, j.Z)(l), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: l.id
        });
}
class el extends (r = p.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, T.default);
    }
    getNotifications() {
        return K;
    }
}
(c = 'OverlayNotificationsStore'),
    (u = 'displayName') in (s = el)
        ? Object.defineProperty(s, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (s[u] = c);
let er = new el(m.Z, {
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
                duration: F
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
        var t, n, i, l;
        let { channelId: r, message: o } = e,
            a = S.Z.getChannel(r),
            s = T.default.getUser(null === (t = o.author) || void 0 === t ? void 0 : t.id);
        if (null == a || null == s) return !1;
        if ((null === (n = o.activity) || void 0 === n ? void 0 : n.type) === V.mFx.JOIN || (null === (i = o.activity) || void 0 === i ? void 0 : i.type) === V.mFx.JOIN_REQUEST) {
            if (!(0, L.eF)(o, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                var i;
                let l, r;
                if ((h()(null != t.activity, 'received null message activity'), n.id === C.default.getId())) return !1;
                let o = (0, k.pL)(),
                    a = null !== (i = null == o ? void 0 : o.altId) && void 0 !== i ? i : null == o ? void 0 : o.id;
                if (null == o || null == a) return !1;
                switch (t.activity.type) {
                    case V.mFx.JOIN:
                        if (null == (l = x.Z.getApplicationActivity(n.id, a)) || null == l.party || l.party.id !== t.activity.party_id) return !1;
                        r = (0, M.Z)(e, t, n, o, l);
                        break;
                    case V.mFx.JOIN_REQUEST:
                        if (null == (l = N.Z.getApplicationActivity(a)) || null == l.party || l.party.id !== t.activity.party_id) return !1;
                        r = (0, D.Z)(e, n, o, l);
                }
                return (
                    null != r &&
                    (en(r, {
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
        if (b.Z.getTextChatNotificationMode() === V.Ypu.DISABLED || O.Z.disableNotifications || !(0, L.eF)(o, r)) return !1;
        let u = !I.Z.isSoundDisabled(y.Ay),
            c = null !== (l = Z.Z.getMessage(r, o.id)) && void 0 !== l ? l : (0, E.e5)(o);
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
            { actionType: n, user: i, applicationId: l } = e,
            r = (0, k.pL)();
        if (null == r || (null == r ? void 0 : r.id) == null || (r.id !== l && r.altId !== l)) return !1;
        if (n === V.mFx.JOIN) t = (0, w.Z)(i, r);
        if (null == t) return !1;
        en(t, {
            priority: 2,
            type: 0
        });
    },
    CLIPS_SAVE_CLIP_START: function () {
        en((0, P.f)(G.intl.string(G.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        en((0, P.f)(G.intl.format(G.t.KLhk6u, { duration: (0, R.A)(g.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        en((0, P.f)(G.intl.string(G.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, P.y)();
        null != t && en(t);
    }
});
t.Z = er;
