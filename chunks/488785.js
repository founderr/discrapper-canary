n.d(t, {
  Z: function() {
    return g
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(392711),
  o = n(772848),
  c = n(442837),
  u = n(570140),
  d = n(596454),
  h = n(607070),
  m = n(690736);
let p = [m.emoji1, m.emoji2, m.emoji3, m.emoji4],
  E = i.memo(function(e) {
    var t;
    let {
      emoji: n,
      onAnimationEnd: s
    } = e, o = (0, r.sample)(p), c = i.useCallback(() => {
      s(n.key)
    }, [n.key, s]);
    return (0, l.jsx)("div", {
      className: a()(m.emoji, o),
      onAnimationEnd: c,
      children: (0, l.jsx)(d.Z, {
        emojiId: n.id,
        emojiName: n.name,
        animated: null !== (t = n.animated) && void 0 !== t && t
      })
    })
  });

function g(e) {
  let {
    channelId: t,
    callHeight: n
  } = e, s = (0, c.e7)([h.Z], () => h.Z.useReducedMotion), [a, r] = i.useState([]);
  i.useEffect(() => {
    function e(e) {
      let {
        channelId: n,
        emoji: l
      } = e;
      if (n === t && !s && null != l) r(e => [...e, {
        key: (0, o.Z)(),
        ...l
      }])
    }
    return u.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      u.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, s]);
  let d = i.useCallback(e => {
    r(t => t.filter(t => t.key !== e))
  }, []);
  return s ? null : (0, l.jsx)("div", {
    className: m.container,
    style: {
      top: n - 16
    },
    "aria-hidden": !0,
    children: a.map(e => (0, l.jsx)(E, {
      emoji: e,
      onAnimationEnd: d
    }, e.key))
  })
}