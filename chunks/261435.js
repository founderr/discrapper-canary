"use strict";
n(47120), n(653041);
var i, s, l, o, a, r, c, d, u = n(512722),
  h = n.n(u),
  p = n(772848),
  f = n(442837),
  E = n(570140),
  g = n(13245),
  m = n(836932),
  Z = n(175553),
  I = n(158979),
  S = n(181912),
  _ = n(194295),
  C = n(998033),
  v = n(181364),
  x = n(24313),
  N = n(435064),
  T = n(668761),
  O = n(358446),
  A = n(695346),
  y = n(314897),
  R = n(592125),
  M = n(292959),
  L = n(158776),
  P = n(944486),
  D = n(885110),
  b = n(246946),
  j = n(594174),
  w = n(974180),
  k = n(237997),
  V = n(70956),
  U = n(150097),
  B = n(129724),
  G = n(449224),
  z = n(981631),
  Y = n(987650),
  W = n(689938);
(o = i || (i = {}))[o.GENERIC = 0] = "GENERIC", o[o.TEXT = 1] = "TEXT", o[o.INCOMING_CALL = 2] = "INCOMING_CALL", (a = s || (s = {}))[a.NORMAL = 0] = "NORMAL", a[a.HIGH = 1] = "HIGH", a[a.URGENT = 2] = "URGENT";
let F = 5 * V.Z.Millis.SECOND,
  H = 8 * V.Z.Millis.SECOND,
  K = 30 * V.Z.Millis.SECOND,
  X = Object.freeze({
    priority: 0,
    duration: F,
    expirationExternallyManaged: !1,
    type: 0
  }),
  Q = [],
  J = (e, t, n) => {
    let i = t ? z._1z.TIMED_OUT : z._1z.DISMISSED;
    return setTimeout(() => g.Z.updateNotificationStatus(e, i), null != n ? n : F)
  };

function q(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : z._1z.DISMISSED;
  if (null == e) return !1;
  let n = Q.findIndex(t => t.id === e);
  if (-1 === n) return !1;
  let i = Q[n];
  clearTimeout(i.timerId), Q = [...Q], t === z._1z.DISMISSED ? Q.splice(n, 1) : Q[n] = {
    ...i,
    status: t
  }
}

function $(e) {
  let t = Q.length;
  return (Q = Q.filter(t => 1 !== t.type || t.channelId !== e || !1)).length !== t
}

function ee(e) {
  let t = Q.find(t => 2 === t.type && t.channelId === e);
  return null != t ? t.id : null
}

function et(e, t) {
  let n = {
    ...X,
    ...t
  };
  if (2 !== n.priority && !k.Z.isInstanceFocused()) return null;
  let i = (0, p.Z)(),
    s = {
      id: i,
      status: z._1z.ACTIVE,
      timerId: J(i, n.expirationExternallyManaged, n.duration),
      props: e,
      ...n
    },
    l = (Q = [...Q]).findIndex(e => e.priority <= n.priority);
  return -1 === l ? Q.push(s) : Q.splice(l, 0, s), Q.length > 10 && clearTimeout(Q.pop().timerId), i
}

function en(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = ee(t);
  if (!n.includes(y.default.getId())) return q(i);
  if (null != i) return !1;
  let s = R.Z.getChannel(t);
  if (null == s || !s.isPrivate() || D.Z.getStatus() === z.Skl.DND || A.QZ.getSetting()) return !1;
  let l = Q.find(e => 1 === e.type && e.channelId === t && e.messageType === z.uaV.CALL);
  null != l && q(l.id), et((0, S.Z)(s), {
    priority: 1,
    expirationExternallyManaged: !0,
    type: 2,
    channelId: s.id
  })
}
class ei extends(l = f.ZP.Store) {
  initialize() {
    this.waitFor(R.Z, j.default)
  }
  getNotifications() {
    return Q
  }
}
d = "OverlayNotificationsStore", (c = "displayName") in(r = ei) ? Object.defineProperty(r, c, {
  value: d,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[c] = d, t.Z = new ei(E.Z, __OVERLAY__ ? {
  OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
    let {
      notificationId: t,
      status: n
    } = e;
    q(t, n)
  },
  OVERLAY_MOUNTED: function(e) {
    let {
      nudge: t
    } = e, n = function(e) {
      switch (e.type) {
        case Y.nc.BROADCAST:
          return (0, x.Z)(e);
        case Y.nc.GO_LIVE_VOICE:
        case Y.nc.GO_LIVE_NON_VOICE:
          return (0, I.Z)(e);
        case Y.nc.KEYBIND_INDICATORS:
          return (0, O.Z)(e);
        case Y.nc.NEWS:
        default:
          return (0, v.Z)(e)
      }
    }(t);
    null != n && et(n, {
      priority: 2,
      duration: H
    })
  },
  OVERLAY_SET_INPUT_LOCKED: function(e) {
    let {
      locked: t
    } = e;
    if (t) return !1;
    Q = Q.map(e => e.status === z._1z.ACTIVE ? (clearTimeout(e.timerId), {
      ...e,
      timerId: J(e.id, e.expirationExternallyManaged)
    }) : e)
  },
  MESSAGE_CREATE: function(e) {
    var t, n, i;
    let {
      channelId: s,
      message: l
    } = e, o = R.Z.getChannel(s), a = j.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
    if (null == o || null == a) return !1;
    if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === z.mFx.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === z.mFx.JOIN_REQUEST) {
      if (!(0, U.eF)(l, s, !0, !0)) return !1;
      let e = function(e, t, n) {
        let i, s;
        if (h()(null != t.activity, "received null message activity"), n.id === y.default.getId()) return !1;
        let l = G.Z.getGame();
        if (null == l) return !1;
        switch (t.activity.type) {
          case z.mFx.JOIN:
            if (null == (i = L.Z.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            s = (0, m.Z)(e, t, n, l, i);
            break;
          case z.mFx.JOIN_REQUEST:
            if (null == (i = D.Z.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
            s = (0, _.Z)(e, n, l, i)
        }
        if (null == s) return !1;
        let o = et(s, {
          priority: 2,
          expirationExternallyManaged: !0,
          channelId: e.id
        });
        return null != o && J(o, !1, K), !0
      }(o, l, a);
      if (!1 !== e) return e
    }
    if ((!k.Z.isInstanceUILocked() || k.Z.isPinned(z.Odu.TEXT)) && s === P.Z.getChannelId() || k.Z.getTextChatNotificationMode() === z.Ypu.DISABLED || b.Z.disableNotifications || !(0, U.eF)(l, s)) return !1;
    let r = !M.Z.isSoundDisabled(w.Ay);
    et((0, C.Z)(o, l, a, r), {
      type: 1,
      channelId: o.id,
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
    q(ee(t))
  },
  ACTIVITY_USER_ACTION: function(e) {
    let t, {
        actionType: n,
        user: i,
        applicationId: s
      } = e,
      l = G.Z.getGame();
    if (null == l || l.id !== s) return !1;
    if (n === z.mFx.JOIN) t = (0, Z.Z)(i, l);
    if (null == t) return !1;
    et(t, {
      priority: 2,
      type: 0
    })
  },
  CLIPS_SAVE_CLIP_START: function() {
    et((0, T.f)(W.Z.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE))
  },
  CLIPS_SAVE_CLIP: function() {
    et((0, T.f)(W.Z.Messages.CLIPS_NOTIFICATION_TITLE.format({
      duration: (0, B.A)(N.Z.getSettings().clipsLength / 1e3, !0)
    })))
  },
  CLIPS_SAVE_CLIP_ERROR: function() {
    et((0, T.f)(W.Z.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE))
  },
  STREAM_START: function(e) {
    let t = (0, T.y)();
    null != t && et(t)
  }
} : {})