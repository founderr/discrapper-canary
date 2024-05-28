"use strict";
n.r(t), n("47120"), n("653041");
var i, a, l, s, o, r, d, u, c = n("512722"),
  f = n.n(c),
  h = n("153832"),
  p = n("442837"),
  E = n("570140"),
  m = n("13245"),
  g = n("836932"),
  S = n("175553"),
  v = n("158979"),
  C = n("181912"),
  y = n("194295"),
  _ = n("998033"),
  O = n("181364"),
  T = n("24313"),
  N = n("435064"),
  I = n("668761"),
  A = n("358446"),
  x = n("695346"),
  R = n("314897"),
  L = n("592125"),
  M = n("292959"),
  D = n("158776"),
  b = n("944486"),
  P = n("885110"),
  w = n("246946"),
  k = n("594174"),
  j = n("974180"),
  V = n("237997"),
  U = n("70956"),
  F = n("150097"),
  B = n("129724"),
  W = n("449224"),
  G = n("981631"),
  H = n("987650"),
  z = n("689938");
(s = i || (i = {}))[s.GENERIC = 0] = "GENERIC", s[s.TEXT = 1] = "TEXT", s[s.INCOMING_CALL = 2] = "INCOMING_CALL", (o = a || (a = {}))[o.NORMAL = 0] = "NORMAL", o[o.HIGH = 1] = "HIGH", o[o.URGENT = 2] = "URGENT";
let Y = 5 * U.default.Millis.SECOND,
  K = 8 * U.default.Millis.SECOND,
  Z = 30 * U.default.Millis.SECOND,
  X = Object.freeze({
    priority: 0,
    duration: Y,
    expirationExternallyManaged: !1,
    type: 0
  }),
  J = [],
  q = (e, t, n) => {
    let i = t ? G.OverlayNotificationStatus.TIMED_OUT : G.OverlayNotificationStatus.DISMISSED;
    return setTimeout(() => m.default.updateNotificationStatus(e, i), null != n ? n : Y)
  };

function Q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : G.OverlayNotificationStatus.DISMISSED;
  if (null == e) return !1;
  let n = J.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = J[n];
  clearTimeout(i.timerId), J = [...J], t === G.OverlayNotificationStatus.DISMISSED ? J.splice(n, 1) : J[n] = {
    ...i,
    status: t
  }
}

function $(e) {
  let t = J.length;
  return (J = J.filter(t => 1 !== t.type || t.channelId !== e || !1)).length !== t
}

function ee(e) {
  let t = J.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function et(e, t) {
  let n = {
    ...X,
    ...t
  };
  if (2 !== n.priority && !V.default.isInstanceFocused()) return null;
  let i = (0, h.v4)(),
    a = {
      id: i,
      status: G.OverlayNotificationStatus.ACTIVE,
      timerId: q(i, n.expirationExternallyManaged, n.duration),
      props: e,
      ...n
    },
    l = (J = [...J]).findIndex(e => e.priority <= n.priority);
  return -1 === l ? J.push(a) : J.splice(l, 0, a), J.length > 10 && clearTimeout(J.pop().timerId), i
}

function en(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = ee(t);
  if (!n.includes(R.default.getId())) return Q(i);
  if (null != i) return !1;
  let a = L.default.getChannel(t);
  if (null == a || !a.isPrivate() || P.default.getStatus() === G.StatusTypes.DND || x.FocusMode.getSetting()) return !1;
  let l = J.find(e => 1 === e.type && e.channelId === t && e.messageType === G.MessageTypes.CALL);
  null != l && Q(l.id), et((0, C.default)(a), {
    priority: 1,
    expirationExternallyManaged: !0,
    type: 2,
    channelId: a.id
  })
}
class ei extends(l = p.default.Store) {
  initialize() {
    this.waitFor(L.default, k.default)
  }
  getNotifications() {
    return J
  }
}
u = "OverlayNotificationsStore", (d = "displayName") in(r = ei) ? Object.defineProperty(r, d, {
  value: u,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[d] = u, t.default = new ei(E.default, __OVERLAY__ ? {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    Q(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    let {
      nudge: t
    } = e, n = function(e) {
      switch (e.type) {
        case H.OverlayNudgeTypes.BROADCAST:
          return (0, T.default)(e);
        case H.OverlayNudgeTypes.GO_LIVE_VOICE:
        case H.OverlayNudgeTypes.GO_LIVE_NON_VOICE:
          return (0, v.default)(e);
        case H.OverlayNudgeTypes.KEYBIND_INDICATORS:
          return (0, A.default)(e);
        case H.OverlayNudgeTypes.NEWS:
        default:
          return (0, O.default)(e)
      }
    }(t);
    null != n && et(n, {
      priority: 2,
      duration: K
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) return !1;
    J = J.map(e => e.status === G.OverlayNotificationStatus.ACTIVE ? (clearTimeout(e.timerId), {
      ...e,
      timerId: q(e.id, e.expirationExternallyManaged)
    }) : e)
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: a,
      message: l
    } = e, s = L.default.getChannel(a), o = k.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
    if (null == s || null == o) return !1;
    if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === G.ActivityActionTypes.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === G.ActivityActionTypes.JOIN_REQUEST) {
      if (!(0, F.shouldNotify)(l, a, !0, !0)) return !1;
      let e = function(e, t, n) {
        let i, a;
        if (f()(null != t.activity, "received null message activity"), n.id === R.default.getId()) return !1;
        let l = W.default.getGame();
        if (null == l) return !1;
        switch (t.activity.type) {
          case G.ActivityActionTypes.JOIN:
            if (null == (i = D.default.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            a = (0, g.default)(e, t, n, l, i);
            break;
          case G.ActivityActionTypes.JOIN_REQUEST:
            if (null == (i = P.default.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            a = (0, y.default)(e, n, l, i)
        }
        if (null == a) return !1;
        let s = et(a, {
          priority: 2,
          expirationExternallyManaged: !0,
          channelId: e.id
        });
        return null != s && q(s, !1, Z), !0
      }(s, l, o);
      if (!1 !== e) return e
    }
    if ((!V.default.isInstanceUILocked() || V.default.isPinned(G.OverlayWidgets.TEXT)) && a === b.default.getChannelId() || V.default.getTextChatNotificationMode() === G.OverlayNotificationTextChatTypes.DISABLED || w.default.disableNotifications || !(0, F.shouldNotify)(l, a)) return !1;
    let r = !M.default.isSoundDisabled(j.MESSAGE_SOUND);
    et((0, _.default)(s, l, o, r), {
      type: 1,
      channelId: s.id,
      messageType: l.type
    })
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null != t && $(t)
  },
  MESSAGE_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return $(t)
  },
  CALL_CREATE: en,
  CALL_UPDATE: en,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    Q(ee(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: a
      } = e,
      l = W.default.getGame();
    if (null == l || l.id !== a) return !1;
    if (n === G.ActivityActionTypes.JOIN) t = (0, S.default)(i, l);
    if (null == t) return !1;
    et(t, {
      priority: 2,
      type: 0
    })
  },
  CLIPS_SAVE_CLIP_START: function() {
    et((0, I.createClipsNotification)(z.default.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE))
  },
  CLIPS_SAVE_CLIP: function() {
    et((0, I.createClipsNotification)(z.default.Messages.CLIPS_NOTIFICATION_TITLE.format({
      duration: (0, B.getSecondsSliderLabel)(N.default.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    et((0, I.createClipsNotification)(z.default.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE))
  },
  STREAM_START: function(e) {
    let t = (0, I.createClipsReminderNotification)();
    null != t && et(t)
  }
} : {})