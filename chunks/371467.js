n(47120), n(733860), n(653041);
var i,
    o,
    r,
    l,
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
    _ = n(695346),
    C = n(314897),
    S = n(592125),
    I = n(375954),
    x = n(292959),
    Z = n(158776),
    y = n(885110),
    N = n(246946),
    b = n(594174),
    O = n(974180),
    T = n(237997),
    A = n(70956),
    L = n(150097),
    R = n(129724),
    k = n(86071),
    w = n(388627),
    M = n(996050),
    j = n(609626),
    P = n(421824),
    D = n(647271),
    z = n(777036),
    U = n(90525),
    V = n(333727),
    F = n(585708),
    B = n(588909),
    W = n(987650),
    H = n(981631),
    G = n(388032);
((l = i || (i = {}))[(l.GENERIC = 0)] = 'GENERIC'), (l[(l.TEXT = 1)] = 'TEXT'), (l[(l.INCOMING_CALL = 2)] = 'INCOMING_CALL'), (l[(l.NUDGE = 3)] = 'NUDGE'), ((s = o || (o = {}))[(s.NORMAL = 0)] = 'NORMAL'), (s[(s.HIGH = 1)] = 'HIGH'), (s[(s.URGENT = 2)] = 'URGENT');
let Y = 5 * A.Z.Millis.SECOND,
    K = 8 * A.Z.Millis.SECOND,
    X = 30 * A.Z.Millis.SECOND,
    Q = Object.freeze({
        timestamp: 0,
        priority: 0,
        duration: Y,
        expirationExternallyManaged: !1,
        type: 0
    }),
    J = [],
    q = !1,
    $ = [];
function ee() {
    if (q && null == J.find((e) => e.status === H._1z.FOCUSED)) for (let e of ((q = !1), (J = [...J, ...$]), ($ = []), J.length > 40 && (J.length = 40), J)) e.timer.start();
}
function et() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3;
    J.filter((e) => 1 === e.type && e.status === H._1z.TIMED_OUT)
        .sort((e, t) => t.timestamp - e.timestamp)
        .forEach((t, n) => {
            n >= e && en(t.id, H._1z.DISMISSED);
        });
}
function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H._1z.DISMISSED;
    if (null == e) return !1;
    let n = J.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = J[n];
    if ((i.timer.stop(), (J = [...J]), t === H._1z.FOCUSED)) {
        let [e] = J.splice(n, 1);
        (e = {
            ...e,
            status: t
        }),
            J.unshift(e),
            (q = !0);
        return;
    }
    t === H._1z.DISMISSED
        ? J.splice(n, 1)
        : (J[n] = {
              ...i,
              status: t
          }),
        ee();
}
function ei(e) {
    let t = J.length,
        n = (J = J.filter((t) => 1 !== t.type || t.channelId !== e || !1)).length !== t;
    return n && ee(), n;
}
function eo(e) {
    let t = J.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function er(e, t) {
    let n = {
            ...Q,
            timestamp: Date.now(),
            ...t
        },
        i = (0, f.Z)(),
        o = !1,
        r = {
            id: i,
            status: H._1z.ACTIVE,
            timer: (function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = -1;
                return {
                    start() {
                        let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t,
                            r = o ? H._1z.TIMED_OUT : H._1z.DISMISSED;
                        -1 === i && (i = setTimeout(() => v.Z.updateNotificationStatus(e, r), null != n ? n : Y));
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
                    !o && ((o = !0), null === (t = e.onNotificationShow) || void 0 === t || t.call(e, i));
                }
            },
            ...n
        },
        l = q ? $ : [...J],
        s = l.findIndex((e) => e.priority <= n.priority);
    if ((-1 === s ? l.push(r) : l.splice(s, 0, r), l.length > 40)) {
        let e = l.pop();
        !q && e.timer.stop();
    }
    return !q && ((J = l), r.timer.start()), i;
}
function el(e) {
    let { channelId: t, ringing: n } = e,
        i = eo(t);
    if (!n.includes(C.default.getId())) return en(i);
    if (null != i) return !1;
    let o = S.Z.getChannel(t);
    if (null == o || !o.isPrivate() || y.Z.getStatus() === H.Skl.DND || _.QZ.getSetting()) return !1;
    let r = J.find((e) => 1 === e.type && e.channelId === t && e.messageType === H.uaV.CALL);
    null != r && en(r.id),
        er((0, z.Z)(o), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: o.id
        });
}
class es extends (r = p.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, b.default);
    }
    getNotifications() {
        return J;
    }
}
(c = 'OverlayNotificationsStore'),
    (u = 'displayName') in (a = es)
        ? Object.defineProperty(a, u, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[u] = c);
let ea = new es(m.Z, {
    OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
        let { notificationId: t, status: n } = e;
        en(t, n);
    },
    OVERLAY_MOUNTED: function (e) {
        let { nudge: t } = e;
        et(0);
        let n = (function (e) {
            switch (e.type) {
                case W.nc.GO_LIVE_VOICE:
                case W.nc.GO_LIVE_NON_VOICE:
                    return (0, D.Z)(e);
                case W.nc.NEWS:
                default:
                    return (0, B.Z)(e);
            }
        })(t);
        null != n &&
            er(n, {
                priority: 2,
                type: 3,
                duration: K
            });
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t } = e;
        if (t) {
            for (let e of J) e.status === H._1z.FOCUSED && en(e.id, H._1z.ACTIVE);
            return !0;
        }
        for (let e of J) 3 === e.type ? en(e.id, H._1z.DISMISSED) : e.status === H._1z.ACTIVE && !e.expirationExternallyManaged && (e.timer.stop(), e.timer.start(e.expirationExternallyManaged));
        if (J.length > 0) {
            var n;
            return en(null === (n = J.filter((e) => 1 === e.type).sort((e, t) => t.timestamp - e.timestamp)[0]) || void 0 === n ? void 0 : n.id, H._1z.FOCUSED);
        }
    },
    MESSAGE_CREATE: function (e) {
        var t, n, i, o;
        let { channelId: r, message: l } = e,
            s = S.Z.getChannel(r),
            a = b.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
        if (null == s || null == a) return !1;
        if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === H.mFx.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === H.mFx.JOIN_REQUEST) {
            if (!(0, L.eF)(l, r, !0, !0)) return !1;
            let e = (function (e, t, n) {
                let i, o;
                if ((h()(null != t.activity, 'received null message activity'), n.id === C.default.getId())) return !1;
                let r = (0, w.t6)();
                if (null == r) return !1;
                switch (t.activity.type) {
                    case H.mFx.JOIN:
                        if (null == (i = Z.Z.getApplicationActivity(n.id, r.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        o = (0, M.Z)(e, t, n, r, i);
                        break;
                    case H.mFx.JOIN_REQUEST:
                        if (null == (i = y.Z.getApplicationActivity(r.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                        o = (0, V.Z)(e, n, r, i);
                }
                return (
                    null != o &&
                    (er(o, {
                        priority: 2,
                        expirationExternallyManaged: !0,
                        channelId: e.id,
                        duration: X
                    }),
                    !0)
                );
            })(s, l, a);
            if (!1 !== e) return e;
        }
        if (T.Z.getTextChatNotificationMode() === H.Ypu.DISABLED || N.Z.disableNotifications || !(0, L.eF)(l, r)) return !1;
        let u = !x.Z.isSoundDisabled(O.Ay),
            c = null !== (o = I.Z.getMessage(r, l.id)) && void 0 !== o ? o : (0, E.e5)(l);
        er((0, F.Z)(s, c, a, u), {
            type: 1,
            channelId: s.id,
            expirationExternallyManaged: !0,
            messageType: l.type
        }),
            et();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return null != t && ei(t);
    },
    MESSAGE_ACK: function (e) {
        let { channelId: t } = e;
        return ei(t);
    },
    CALL_CREATE: el,
    CALL_UPDATE: el,
    CALL_DELETE: function (e) {
        let { channelId: t } = e;
        en(eo(t));
    },
    ACTIVITY_USER_ACTION: function (e) {
        let t,
            { actionType: n, user: i, applicationId: o } = e,
            r = (0, w.t6)();
        if (null == r || r.id !== o) return !1;
        if (n === H.mFx.JOIN) t = (0, j.Z)(i, r);
        if (null == t) return !1;
        er(t, {
            priority: 2,
            type: 0
        });
    },
    CLIPS_SAVE_CLIP_START: function () {
        er((0, P.f)(G.intl.string(G.t.NBMK9v)));
    },
    CLIPS_SAVE_CLIP: function () {
        er((0, P.f)(G.intl.format(G.t.KLhk6u, { duration: (0, R.A)(g.Z.getSettings().clipsLength / 1000, !0) })));
    },
    CLIPS_SAVE_CLIP_ERROR: function () {
        er((0, P.f)(G.intl.string(G.t['1ZbZur'])));
    },
    STREAM_START: function (e) {
        let t = (0, P.y)();
        null != t && er(t);
    },
    OVERLAY_CONTENT_INVENTORY_READY: function (e) {
        let { contentInventoryEntries: t } = e;
        if (0 === t.length) return;
        let n = (0, w.t6)();
        if (null == n) return;
        let { enabled: i } = k.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' }, { autoTrackExposure: !0 });
        i &&
            er((0, U.Z)(n, t), {
                priority: 2,
                type: 3,
                duration: K
            });
    }
});
t.Z = ea;
