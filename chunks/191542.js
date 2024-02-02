"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("446674"),
  s = n("872717"),
  a = n("913144"),
  r = n("718517"),
  o = n("271938"),
  u = n("401848"),
  d = n("49111"),
  c = n("724210");
let f = 10 * r.default.Millis.SECOND,
  g = 1.5 * r.default.Millis.SECOND,
  h = {},
  I = Object.freeze({});

function E(e) {
  var t;
  return null !== (t = h[e]) && void 0 !== t ? t : I
}

function m(e) {
  var t, n;
  let {
    channelId: l,
    userId: i
  } = e, s = {
    ...E(l)
  };
  clearTimeout(s[i]), s[i] = (t = l, n = i, setTimeout(() => {
    a.default.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, f)), h[l] = s
}

function v(e) {
  let {
    channelId: t,
    userId: n
  } = e, l = h[t];
  if (null == l || null == l[n]) return !1;
  let i = {
    ...l
  };
  clearTimeout(i[n]), delete i[n], h[t] = i
}

function p() {
  h = {}
}
class T extends i.default.Store {
  getTypingUsers(e) {
    return E(e)
  }
  isTyping(e, t) {
    return null != E(e)[t]
  }
}
T.displayName = "TypingStore";
var _ = new T(a.default, {
  TYPING_START: m,
  TYPING_STOP: v,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = o.default.getId();
    if (null == n || t === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), l = null);
    let i = Date.now(),
      r = .8 * f;
    if (null != l && (null != l.timeout || l.prevSend + r > i)) return !1;
    let h = null == l || l.prevSend > i - 2 * r ? g : 0,
      v = setTimeout(() => {
        if (null != l && l.channelId === t && n === o.default.getId() && null != l.timeout) l.timeout = null, !(function(e) {
          let t = E(e);
          return t === I ? 0 : Object.keys(t).length
        }(t) > 5) && s.default.post({
          url: d.Endpoints.TYPING(t),
          oldFormErrors: !0
        }).then(e => {
          if (200 === e.status) {
            var n, l;
            let i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
              s = null !== (l = e.body.thread_create_cooldown_ms) && void 0 !== l ? l : 0;
            i > 0 && a.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: u.SlowmodeType.SendMessage,
              cooldownMs: i
            }), s > 0 && a.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: u.SlowmodeType.CreateThread,
              cooldownMs: s
            })
          }
        })
      }, h);
    return l = {
      channelId: t,
      timeout: v,
      prevSend: i
    }, m({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = o.default.getId();
    return null != n && null != l && l.channelId === t && null != l.timeout && (clearTimeout(l.timeout), l = null, v({
      channelId: t,
      userId: n
    }))
  },
  CONNECTION_OPEN: p,
  OVERLAY_INITIALIZE: p,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: {
        author: n
      },
      optimistic: i
    } = e;
    return i && ! function(e) {
      if (null == l || l.channelId !== e) return;
      null != l.timeout && clearTimeout(l.timeout), l = null
    }(t), null != n && v({
      channelId: t,
      userId: n.id
    })
  }
})