"use strict";
let n;
l.r(t);
var u, i, r, a, s = l("442837"),
  d = l("544891"),
  o = l("570140"),
  f = l("70956"),
  E = l("314897"),
  c = l("300429"),
  T = l("981631"),
  I = l("176505");
let _ = 10 * f.default.Millis.SECOND,
  p = 1.5 * f.default.Millis.SECOND,
  A = {},
  h = Object.freeze({});

function S(e) {
  var t;
  return null !== (t = A[e]) && void 0 !== t ? t : h
}

function O(e) {
  var t, l;
  let {
    channelId: n,
    userId: u
  } = e, i = {
    ...S(n)
  };
  clearTimeout(i[u]), i[u] = (t = n, l = u, setTimeout(() => {
    o.default.dispatch({
      type: "TYPING_STOP",
      channelId: t,
      userId: l
    })
  }, _)), A[n] = i
}

function N(e) {
  let {
    channelId: t,
    userId: l
  } = e, n = A[t];
  if (null == n || null == n[l]) return !1;
  let u = {
    ...n
  };
  clearTimeout(u[l]), delete u[l], A[t] = u
}

function C() {
  A = {}
}
class v extends(a = s.default.Store) {
  getTypingUsers(e) {
    return S(e)
  }
  isTyping(e, t) {
    return null != S(e)[t]
  }
}
r = "TypingStore", (i = "displayName") in(u = v) ? Object.defineProperty(u, i, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[i] = r, t.default = new v(o.default, {
  TYPING_START: O,
  TYPING_STOP: N,
  TYPING_START_LOCAL: function(e) {
    let {
      channelId: t
    } = e, l = E.default.getId();
    if (null == l || t === I.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    null != n && n.channelId !== t && (null != n.timeout && clearTimeout(n.timeout), n = null);
    let u = Date.now(),
      i = .8 * _;
    if (null != n && (null != n.timeout || n.prevSend + i > u)) return !1;
    let r = setTimeout(() => {
      if (null != n && n.channelId === t && l === E.default.getId() && null != n.timeout) n.timeout = null, !(function(e) {
        let t = S(e);
        return t === h ? 0 : Object.keys(t).length
      }(t) > 5) && d.HTTP.post({
        url: T.Endpoints.TYPING(t),
        oldFormErrors: !0
      }).then(e => {
        if (200 === e.status) {
          var l, n;
          let u = null !== (l = e.body.message_send_cooldown_ms) && void 0 !== l ? l : 0,
            i = null !== (n = e.body.thread_create_cooldown_ms) && void 0 !== n ? n : 0;
          u > 0 && o.default.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: c.SlowmodeType.SendMessage,
            cooldownMs: u
          }), i > 0 && o.default.dispatch({
            type: "SLOWMODE_SET_COOLDOWN",
            channelId: t,
            slowmodeType: c.SlowmodeType.CreateThread,
            cooldownMs: i
          })
        }
      })
    }, null == n || n.prevSend > u - 2 * i ? p : 0);
    return n = {
      channelId: t,
      timeout: r,
      prevSend: u
    }, O({
      channelId: t,
      userId: l
    })
  },
  TYPING_STOP_LOCAL: function(e) {
    let {
      channelId: t
    } = e, l = E.default.getId();
    return null != l && null != n && n.channelId === t && null != n.timeout && (clearTimeout(n.timeout), n = null, N({
      channelId: t,
      userId: l
    }))
  },
  CONNECTION_OPEN: C,
  OVERLAY_INITIALIZE: C,
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: {
        author: l
      },
      optimistic: u
    } = e;
    return u && ! function(e) {
      if (null == n || n.channelId !== e) return;
      null != n.timeout && clearTimeout(n.timeout), n = null
    }(t), null != l && N({
      channelId: t,
      userId: l.id
    })
  }
})