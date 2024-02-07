"use strict";
let l;
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var i = n("446674"),
  r = n("872717"),
  s = n("913144"),
  a = n("718517"),
  u = n("271938"),
  o = n("401848"),
  d = n("49111"),
  c = n("724210");
let f = 10 * a.default.Millis.SECOND,
  h = 1.5 * a.default.Millis.SECOND,
  g = {},
  I = Object.freeze({});

function v(e) {
  var t;
  return null !== (t = g[e]) && void 0 !== t ? t : I
}

function E(e) {
  var t, n;
  let {
    channelId: l,
    userId: i
  } = e, r = {
    ...v(l)
  };
  clearTimeout(r[i]), r[i] = (t = l, n = i, setTimeout(() => {
    s.default.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: n
    })
  }, f)), g[l] = r
}

function _(e) {
  let {
    channelId: t,
    userId: n
  } = e, l = g[t];
  if (null == l || null == l[n]) return !1;
  let i = {
    ...l
  };
  clearTimeout(i[n]), delete i[n], g[t] = i
}

function m() {
  g = {}
}
class p extends i.default.Store {
  getTypingUsers(e) {
    return v(e)
  }
  isTyping(e, t) {
    return null != v(e)[t]
  }
}
p.displayName = "TypingStore";
var T = new p(s.default, {
  TYPING_START: E,
  TYPING_STOP: _,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = u.default.getId();
    if (null == n || t === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    null != l && l.channelId !== t && (null != l.timeout && clearTimeout(l.timeout), l = null);
    let i = Date.now(),
      a = .8 * f;
    if (null != l && (null != l.timeout || l.prevSend + a > i)) return !1;
    let g = null == l || l.prevSend > i - 2 * a ? h : 0,
      _ = setTimeout(() => {
        if (null != l && l.channelId === t && n === u.default.getId() && null != l.timeout) l.timeout = null, !(function(e) {
          let t = v(e);
          return t === I ? 0 : Object.keys(t).length
        }(t) > 5) && r.default.post({
          url: d.Endpoints.TYPING(t),
          oldFormErrors: !0
        }).then(e => {
          if (200 === e.status) {
            var n, l;
            let i = null !== (n = e.body.message_send_cooldown_ms) && void 0 !== n ? n : 0,
              r = null !== (l = e.body.thread_create_cooldown_ms) && void 0 !== l ? l : 0;
            i > 0 && s.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: o.SlowmodeType.SendMessage,
              cooldownMs: i
            }), r > 0 && s.default.dispatch({
              type: "SLOWMODE_SET_COOLDOWN",
              channelId: t,
              slowmodeType: o.SlowmodeType.CreateThread,
              cooldownMs: r
            })
          }
        })
      }, g);
    return l = {
      channelId: t,
      timeout: _,
      prevSend: i
    }, E({
      channelId: t,
      userId: n
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, n = u.default.getId();
    return null != n && null != l && l.channelId === t && null != l.timeout && (clearTimeout(l.timeout), l = null, _({
      channelId: t,
      userId: n
    }))
  },
  CONNECTION_OPEN: m,
  OVERLAY_INITIALIZE: m,
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
    }(t), null != n && _({
      channelId: t,
      userId: n.id
    })
  }
})