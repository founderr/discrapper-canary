"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("446674"),
  a = n("872717"),
  i = n("913144"),
  r = n("718517"),
  u = n("271938"),
  o = n("401848"),
  d = n("49111"),
  c = n("724210");
let f = 10 * r.default.Millis.SECOND,
  h = 1.5 * r.default.Millis.SECOND,
  g = {},
  I = Object.freeze({});

function E(e) {
  var t;
  return null !== (t = g[e]) && void 0 !== t ? t : I
}

function v(e) {
  var t, n;
  let {
    channelId: l,
    userId: s
  } = e, a = {
    ...E(l)
  };
  clearTimeout(a[s]), a[s] = (t = l, n = s, setTimeout(() => {
    i.default.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, f)), g[l] = a
}

function m(e) {
  let {
    channelId: t,
    userId: n
  } = e, l = g[t];
  if (null == l || null == l[n]) return !1;
  let s = {
    ...l
  };
  clearTimeout(s[n]), delete s[n], g[t] = s
}

function p() {
  g = {}
}
class _ extends s.default.Store {
  getTypingUsers(e) {
    return E(e)
  }
  isTyping(e, t) {
    return null != E(e)[t]
  }
}
_.displayName = "TypingStore";
var T = new _(i.default, {
  TYPING_START: v,
  TYPING_STOP: m,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = u.default.getId();
    if (null == n || t === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), l = null);
    let s = Date.now(),
      r = .8 * f;
    if (null != l && (null != l.timeout || l.prevSend + r > s)) return !1;
    let g = null == l || l.prevSend > s - 2 * r ? h : 0,
      m = setTimeout(() => {
        if (null != l && l.channelId === t && n === u.default.getId() && null != l.timeout) l.timeout = null, !(function(e) {
          let t = E(e);
          return t === I ? 0 : Object.keys(t).length
        }(t) > 5) && a.default.post({
          url: d.Endpoints.TYPING(t),
          oldFormErrors: !0
        }).then(e => {
          if (200 === e.status) {
            var n, l;
            let s = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
              a = null !== (l = e.body.thread_create_cooldown_ms) && void 0 !== l ? l : 0;
            s > 0 && i.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: o.SlowmodeType.SendMessage,
              cooldownMs: s
            }), a > 0 && i.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: o.SlowmodeType.CreateThread,
              cooldownMs: a
            })
          }
        })
      }, g);
    return l = {
      channelId: t,
      timeout: m,
      prevSend: s
    }, v({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = u.default.getId();
    return null != n && null != l && l.channelId === t && null != l.timeout && (clearTimeout(l.timeout), l = null, m({
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
      optimistic: s
    } = e;
    return s && ! function(e) {
      if (null == l || l.channelId !== e) return;
      null != l.timeout && clearTimeout(l.timeout), l = null
    }(t), null != n && m({
      channelId: t,
      userId: n.id
    })
  }
})