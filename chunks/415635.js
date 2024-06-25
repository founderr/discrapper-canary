n.d(t, {
  Z: function() {
    return g
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(772848),
  a = n(442837),
  r = n(570140),
  o = n(607070),
  c = n(367907),
  u = n(37091),
  d = n(721264),
  h = n(963838),
  m = n(39127),
  E = n(981631),
  p = n(350983);

function g(e) {
  let {
    channelId: t,
    guildId: n,
    userId: g,
    containerDimensions: f
  } = e, C = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), [_, I] = i.useState([]), x = _.length < 50;
  i.useEffect(() => {
    function e(e) {
      var l;
      let {
        channelId: i,
        userId: a,
        emoji: r,
        animationType: o,
        animationId: m
      } = e;
      if (null != g && g !== a || u.Z.getEnabled() && (0, d.Z)(null !== (l = null == r ? void 0 : r.name) && void 0 !== l ? l : "")) return;
      let p = null != r && null != o && null != m;
      if (i === t && !C && x && p) {
        let e = (0, h._r)(r),
          l = null != r.id && !r.animated,
          i = {
            id: (0, s.Z)(),
            animationType: o,
            animationId: m,
            shouldResize: l,
            url: e,
            userId: a
          };
        I(e => [...e, i]), c.ZP.trackWithMetadata(E.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
          channel_id: t,
          guild_id: n
        })
      }
    }
    return r.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      r.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, n, g, C, x]);
  let T = i.useCallback(e => {
    I(t => {
      let n = [...t],
        l = n.findIndex(t => t.id === e);
      return n.splice(l, 1), n
    })
  }, []);
  return C ? null : (0, l.jsx)("div", {
    className: p.effectsWrapper,
    style: {
      width: f.width
    },
    children: (0, l.jsx)("div", {
      className: p.effects,
      children: _.map(e => (0, l.jsx)(m.Z, {
        containerDimensions: f,
        effect: e,
        onComplete: T
      }, e.id))
    })
  })
}