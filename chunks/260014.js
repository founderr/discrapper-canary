"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  u = n("748820"),
  o = n("446674"),
  d = n("913144"),
  c = n("430568"),
  f = n("206230"),
  h = n("540060");
let m = [h.emoji1, h.emoji2, h.emoji3, h.emoji4],
  p = a.memo(function(e) {
    var t;
    let {
      emoji: n,
      onAnimationEnd: s
    } = e, u = (0, r.sample)(m), o = a.useCallback(() => {
      s(n.key)
    }, [n.key, s]);
    return (0, l.jsx)("div", {
      className: i(h.emoji, u),
      onAnimationEnd: o,
      children: (0, l.jsx)(c.default, {
        emojiId: n.id,
        emojiName: n.name,
        animated: null !== (t = n.animated) && void 0 !== t && t
      })
    })
  });

function E(e) {
  let {
    channelId: t,
    callHeight: n
  } = e, s = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), [i, r] = a.useState([]);
  a.useEffect(() => {
    function e(e) {
      let {
        channelId: n,
        emoji: l
      } = e;
      n === t && !s && null != l && r(e => [...e, {
        key: (0, u.v4)(),
        ...l
      }])
    }
    return d.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      d.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, s]);
  let c = a.useCallback(e => {
    r(t => t.filter(t => t.key !== e))
  }, []);
  return s ? null : (0, l.jsx)("div", {
    className: h.container,
    style: {
      top: n - 16
    },
    "aria-hidden": !0,
    children: i.map(e => (0, l.jsx)(p, {
      emoji: e,
      onAnimationEnd: c
    }, e.key))
  })
}