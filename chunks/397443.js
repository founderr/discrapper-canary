"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("748820"),
  i = n("446674"),
  r = n("913144"),
  u = n("206230"),
  o = n("716241"),
  d = n("170152"),
  c = n("391591"),
  f = n("397485"),
  h = n("738258"),
  m = n("49111"),
  p = n("83686");

function E(e) {
  let {
    channelId: t,
    guildId: n,
    userId: E,
    containerDimensions: g
  } = e, C = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion), [S, _] = a.useState([]), I = S.length < 50;
  a.useEffect(() => {
    function e(e) {
      var l;
      let {
        channelId: a,
        userId: i,
        emoji: r,
        animationType: u,
        animationId: h
      } = e;
      if (null != E && E !== i || d.default.getEnabled() && (0, c.default)(null !== (l = null == r ? void 0 : r.name) && void 0 !== l ? l : "")) return;
      let p = null != r && null != u && null != h;
      if (a === t && !C && I && p) {
        let e = (0, f.getEffectUrl)(r),
          l = null != r.id && !r.animated,
          a = {
            id: (0, s.v4)(),
            animationType: u,
            animationId: h,
            shouldResize: l,
            url: e,
            userId: i
          };
        _(e => [...e, a]), o.default.trackWithMetadata(m.AnalyticEvents.VOICE_CHANNEL_EFFECT_VIEWED, {
          channel_id: t,
          guild_id: n
        })
      }
    }
    return r.default.subscribe("VOICE_CHANNEL_EFFECT_SEND", e), () => {
      r.default.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e)
    }
  }, [t, n, E, C, I]);
  let T = a.useCallback(e => {
    _(t => {
      let n = [...t],
        l = n.findIndex(t => t.id === e);
      return n.splice(l, 1), n
    })
  }, []);
  return C ? null : (0, l.jsx)("div", {
    className: p.effectsWrapper,
    style: {
      width: g.width
    },
    children: (0, l.jsx)("div", {
      className: p.effects,
      children: S.map(e => (0, l.jsx)(h.default, {
        containerDimensions: g,
        effect: e,
        onComplete: T
      }, e.id))
    })
  })
}