n.d(t, {
  Z: function() {
return g;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(338545),
  o = n(442837),
  c = n(481060),
  d = n(596454),
  u = n(607070),
  h = n(70956),
  p = n(456631),
  m = n(219040);
let _ = 6 * h.Z.Millis.SECOND,
  f = 2 * h.Z.Millis.SECOND,
  E = 2 * h.Z.Millis.SECOND,
  C = e => 'scale('.concat(1 - -(e / 120), ') rotate(').concat(e, 'deg)');

function g(e) {
  let {
userId: t,
voiceChannelEffect: n,
onComplete: s
  } = e, {
emoji: h,
sentAt: g
  } = n, I = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), [x, T] = a.useState(!0), v = !I, N = (0, c.useTransition)(x, {
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
onRest: (e, t) => {
  let {
    phase: n
  } = t;
  'leave' === n && s();
}
  });
  return (a.useEffect(() => {
let e;
return Date.now() - g >= E ? (0, p.H)(t) : e = setTimeout(() => {
  T(!1), v && (0, p.H)(t);
}, v ? f : _), () => {
  null != e && clearTimeout(e);
};
  }, [
g,
t,
v
  ]), v) ? null : N((e, t) => {
var n;
let {
  rotate: a
} = e;
return t && (0, i.jsx)(r.animated.div, {
  className: m.voiceChannelEffectEmojiContainer,
  style: {
    transform: a.to(C)
  },
  children: (0, i.jsx)(d.Z, {
    className: l()(m.voiceChannelEffectEmoji),
    emojiId: h.id,
    emojiName: h.name,
    animated: null !== (n = h.animated) && void 0 !== n && n
  })
});
  });
}