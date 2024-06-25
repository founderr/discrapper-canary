n.d(t, {
  Z: function() {
    return C
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(920906),
  o = n(442837),
  c = n(596454),
  u = n(607070),
  d = n(70956),
  h = n(456631),
  m = n(978417);
let E = 6 * d.Z.Millis.SECOND,
  p = 2 * d.Z.Millis.SECOND,
  g = 2 * d.Z.Millis.SECOND,
  f = e => "scale(".concat(1 - -(e / 120), ") rotate(").concat(e, "deg)");

function C(e) {
  let {
    userId: t,
    voiceChannelEffect: n,
    onComplete: s
  } = e, {
    emoji: d,
    sentAt: C
  } = n, _ = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), [I, x] = i.useState(!0), T = !_, N = (0, r.useTransition)(I, {
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
    immediate: _,
    onRest: (e, t) => {
      let {
        phase: n
      } = t;
      "leave" === n && s()
    }
  });
  return (i.useEffect(() => {
    let e;
    return Date.now() - C >= g ? (0, h.H)(t) : e = setTimeout(() => {
      x(!1), T && (0, h.H)(t)
    }, T ? p : E), () => {
      null != e && clearTimeout(e)
    }
  }, [C, t, T]), T) ? null : N((e, t) => {
    var n;
    let {
      rotate: i
    } = e;
    return t && (0, l.jsx)(r.animated.div, {
      className: m.voiceChannelEffectEmojiContainer,
      style: {
        transform: i.to(f)
      },
      children: (0, l.jsx)(c.Z, {
        className: a()(m.voiceChannelEffectEmoji),
        emojiId: d.id,
        emojiName: d.name,
        animated: null !== (n = d.animated) && void 0 !== n && n
      })
    })
  })
}