n(47120), n(653041);
var i,
    s,
    a,
    o,
    r,
    l,
    c,
    d,
    u = n(512722),
    h = n.n(u),
    p = n(772848),
    f = n(442837),
    _ = n(570140),
    E = n(13245),
    g = n(836932),
    m = n(175553),
    I = n(158979),
    Z = n(181912),
    v = n(791288),
    S = n(194295),
    C = n(998033),
    x = n(181364),
    N = n(435064),
    T = n(668761),
    O = n(86071),
    A = n(358446),
    y = n(695346),
    R = n(314897),
    M = n(592125),
    L = n(292959),
    b = n(158776),
    P = n(944486),
    D = n(885110),
    j = n(246946),
    w = n(594174),
    k = n(974180),
    V = n(237997),
    B = n(70956),
    U = n(150097),
    z = n(129724),
    G = n(449224),
    Y = n(981631),
    W = n(987650),
    F = n(689938);
((o = i || (i = {}))[(o.GENERIC = 0)] = 'GENERIC'), (o[(o.TEXT = 1)] = 'TEXT'), (o[(o.INCOMING_CALL = 2)] = 'INCOMING_CALL'), ((r = s || (s = {}))[(r.NORMAL = 0)] = 'NORMAL'), (r[(r.HIGH = 1)] = 'HIGH'), (r[(r.URGENT = 2)] = 'URGENT');
let H = 5 * B.Z.Millis.SECOND,
    K = 8 * B.Z.Millis.SECOND,
    X = 30 * B.Z.Millis.SECOND,
    Q = Object.freeze({
        priority: 0,
        duration: H,
        expirationExternallyManaged: !1,
        type: 0
    }),
    J = [],
    q = (e, t, n) => {
        let i = t ? Y._1z.TIMED_OUT : Y._1z.DISMISSED;
        return setTimeout(() => E.Z.updateNotificationStatus(e, i), null != n ? n : H);
    };
function $(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y._1z.DISMISSED;
    if (null == e) return !1;
    let n = J.findIndex((t) => t.id === e);
    if (-1 === n) return !1;
    let i = J[n];
    clearTimeout(i.timerId),
        (J = [...J]),
        t === Y._1z.DISMISSED
            ? J.splice(n, 1)
            : (J[n] = {
                  ...i,
                  status: t
              });
}
function ee(e) {
    let t = J.length;
    return (J = J.filter((t) => 1 !== t.type || t.channelId !== e || !1)).length !== t;
}
function et(e) {
    let t = J.find((t) => 2 === t.type && t.channelId === e);
    return null != t ? t.id : null;
}
function en(e, t) {
    let n = {
        ...Q,
        ...t
    };
    if (2 !== n.priority && !V.Z.isInstanceFocused()) return null;
    let i = (0, p.Z)(),
        s = {
            id: i,
            status: Y._1z.ACTIVE,
            timerId: q(i, n.expirationExternallyManaged, n.duration),
            props: e,
            ...n
        },
        a = (J = [...J]).findIndex((e) => e.priority <= n.priority);
    return -1 === a ? J.push(s) : J.splice(a, 0, s), J.length > 10 && clearTimeout(J.pop().timerId), i;
}
function ei(e) {
    let { channelId: t, ringing: n } = e,
        i = et(t);
    if (!n.includes(R.default.getId())) return $(i);
    if (null != i) return !1;
    let s = M.Z.getChannel(t);
    if (null == s || !s.isPrivate() || D.Z.getStatus() === Y.Skl.DND || y.QZ.getSetting()) return !1;
    let a = J.find((e) => 1 === e.type && e.channelId === t && e.messageType === Y.uaV.CALL);
    null != a && $(a.id),
        en((0, Z.Z)(s), {
            priority: 1,
            expirationExternallyManaged: !0,
            type: 2,
            channelId: s.id
        });
}
class es extends (a = f.ZP.Store) {
    initialize() {
        this.waitFor(M.Z, w.default);
    }
    getNotifications() {
        return J;
    }
}
(d = 'OverlayNotificationsStore'),
    (c = 'displayName') in (l = es)
        ? Object.defineProperty(l, c, {
              value: d,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (l[c] = d),
    (t.Z = new es(
        _.Z,
        __OVERLAY__
            ? {
                  OVERLAY_UPDATE_NOTIFICATION_STATUS: function (e) {
                      let { notificationId: t, status: n } = e;
                      $(t, n);
                  },
                  OVERLAY_MOUNTED: function (e) {
                      let { nudge: t } = e,
                          n = (function (e) {
                              switch (e.type) {
                                  case W.nc.GO_LIVE_VOICE:
                                  case W.nc.GO_LIVE_NON_VOICE:
                                      return (0, I.Z)(e);
                                  case W.nc.KEYBIND_INDICATORS:
                                      return (0, A.Z)(e);
                                  case W.nc.NEWS:
                                  default:
                                      return (0, x.Z)(e);
                              }
                          })(t);
                      null != n &&
                          en(n, {
                              priority: 2,
                              duration: K
                          });
                  },
                  OVERLAY_SET_INPUT_LOCKED: function (e) {
                      let { locked: t } = e;
                      if (t) return !1;
                      J = J.map((e) =>
                          e.status === Y._1z.ACTIVE
                              ? (clearTimeout(e.timerId),
                                {
                                    ...e,
                                    timerId: q(e.id, e.expirationExternallyManaged)
                                })
                              : e
                      );
                  },
                  MESSAGE_CREATE: function (e) {
                      var t, n, i;
                      let { channelId: s, message: a } = e,
                          o = M.Z.getChannel(s),
                          r = w.default.getUser(null === (t = a.author) || void 0 === t ? void 0 : t.id);
                      if (null == o || null == r) return !1;
                      if ((null === (n = a.activity) || void 0 === n ? void 0 : n.type) === Y.mFx.JOIN || (null === (i = a.activity) || void 0 === i ? void 0 : i.type) === Y.mFx.JOIN_REQUEST) {
                          if (!(0, U.eF)(a, s, !0, !0)) return !1;
                          let e = (function (e, t, n) {
                              let i, s;
                              if ((h()(null != t.activity, 'received null message activity'), n.id === R.default.getId())) return !1;
                              let a = G.Z.getGame();
                              if (null == a) return !1;
                              switch (t.activity.type) {
                                  case Y.mFx.JOIN:
                                      if (null == (i = b.Z.getApplicationActivity(n.id, a.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                                      s = (0, g.Z)(e, t, n, a, i);
                                      break;
                                  case Y.mFx.JOIN_REQUEST:
                                      if (null == (i = D.Z.getApplicationActivity(a.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                                      s = (0, S.Z)(e, n, a, i);
                              }
                              if (null == s) return !1;
                              let o = en(s, {
                                  priority: 2,
                                  expirationExternallyManaged: !0,
                                  channelId: e.id
                              });
                              return null != o && q(o, !1, X), !0;
                          })(o, a, r);
                          if (!1 !== e) return e;
                      }
                      if (((!V.Z.isInstanceUILocked() || V.Z.isPinned(Y.Odu.TEXT)) && s === P.Z.getChannelId()) || V.Z.getTextChatNotificationMode() === Y.Ypu.DISABLED || j.Z.disableNotifications || !(0, U.eF)(a, s)) return !1;
                      let l = !L.Z.isSoundDisabled(k.Ay);
                      en((0, C.Z)(o, a, r, l), {
                          type: 1,
                          channelId: o.id,
                          messageType: a.type
                      });
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
                          { actionType: n, user: i, applicationId: s } = e,
                          a = G.Z.getGame();
                      if (null == a || a.id !== s) return !1;
                      if (n === Y.mFx.JOIN) t = (0, m.Z)(i, a);
                      if (null == t) return !1;
                      en(t, {
                          priority: 2,
                          type: 0
                      });
                  },
                  CLIPS_SAVE_CLIP_START: function () {
                      en((0, T.f)(F.Z.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE));
                  },
                  CLIPS_SAVE_CLIP: function () {
                      en((0, T.f)(F.Z.Messages.CLIPS_NOTIFICATION_TITLE.format({ duration: (0, z.A)(N.Z.getSettings().clipsLength / 1000, !0) })));
                  },
                  CLIPS_SAVE_CLIP_ERROR: function () {
                      en((0, T.f)(F.Z.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE));
                  },
                  STREAM_START: function (e) {
                      let t = (0, T.y)();
                      null != t && en(t);
                  },
                  OVERLAY_CONTENT_INVENTORY_READY: function (e) {
                      let { contentInventoryEntries: t } = e;
                      if (0 === t.length) return;
                      let n = G.Z.getGame();
                      if (null == n) return;
                      let { enabled: i } = O.Z.getCurrentConfig({ location: 'OverlayNotificationsStore' }, { autoTrackExposure: !0 });
                      i &&
                          en((0, v.Z)(n, t), {
                              priority: 2,
                              type: 0,
                              expirationExternallyManaged: !0,
                              duration: 30 * B.Z.Millis.SECOND
                          });
                  }
              }
            : {}
    ));
