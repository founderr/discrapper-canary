"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("907002"),
  o = n("446674"),
  u = n("430568"),
  d = n("206230"),
  c = n("718517"),
  f = n("568088"),
  h = n("86807");
let m = 6 * c.default.Millis.SECOND,
  p = 2 * c.default.Millis.SECOND,
  E = 2 * c.default.Millis.SECOND,
  S = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function g(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: s
  } = e, {
    emoji: c,
    sentAt: g
  } = n, C = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), [_, I] = a.useState(!0), T = !C, v = (0, r.useTransition)(_, {
    from: {
      rotate: -120
    },
    enter: {
      rotate: 0
    },
    leave: {
      rotate: -120
    },
    config: r.config.default,
    immediate: C,
    onRest: (e, t) => {
      let {
        phase: n
      } = t;
      "leave" === n && s()
    }
  });
  return (a.useEffect(() => {
    let e;
    return Date.now() - g >= E ? (0, f.clearVoiceChannelEffectForUser)(t) : e = setTimeout(() => {
      I(!1), T && (0, f.clearVoiceChannelEffectForUser)(t)
    }, T ? p : m), () => {
      null != e && clearTimeout(e)
    }
  }, [g, t, T]), T) ? null : v((e, t) => {
    var n;
    let {
      rotate: a
    } = e;
    return t && (0, l.jsx)(r.animated.div, {
      className: h.voiceChannelEffectEmojiContainer,
      style: {
        transform: a.to(S)
      },
      children: (0, l.jsx)(u.default, {
        className: i(h.voiceChannelEffectEmoji),
        emojiId: c.id,
        emojiName: c.name,
        animated: null !== (n = c.animated) && void 0 !== n && n
      })
    })
  })
}