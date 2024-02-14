"use strict";
i.r(t), i.d(t, {
  default: function() {
    return f
  }
}), i("222007");
var a = i("37983"),
  n = i("884691"),
  l = i("446674"),
  o = i("913144"),
  s = i("206230"),
  r = i("166257"),
  u = i("845579"),
  d = i("15935"),
  c = i("103475"),
  h = i("512306"),
  p = i("941723"),
  T = i("757616"),
  m = i("957044"),
  f = n.memo(function(e) {
    let {
      channelId: t,
      messageId: i,
      emoji: f,
      useChatFontScaling: E,
      color: R,
      count: I
    } = e, g = (0, l.useStateFromStores)([d.default], () => d.default.getEffectForEmojiId(t, i, f)), _ = E ? m : T, N = n.useMemo(() => (0, p.buildEffect)(f, R, t, {
      key: g,
      messageId: i
    }), [R, g, f, t, i]), [C, v] = n.useState(!1), O = (0, l.useStateFromStores)([s.default], () => s.default.useReducedMotion), S = u.AnimateEmoji.useSetting(), j = n.useCallback(() => {
      o.default.dispatch({
        type: "BURST_REACTION_EFFECT_CLEAR",
        channelId: t,
        messageId: i,
        emoji: f
      })
    }, [f, t, i]);
    return (n.useEffect(() => {
      let e = () => {
        if (C) return;
        let e = (0, c.getBurstAnimationHash)("".concat(Date.now()).concat(t).concat(i).concat(f.name)),
          a = e % 10;
        (a += I > 4 ? 4 : I - 1) > 7 && (v(!0), (0, r.playBurstReaction)({
          channelId: t,
          messageId: i,
          emoji: f,
          key: d.BurstReactionEffectSource.RANDOM
        }))
      };
      if (C || O && !S || !S) return;
      e();
      let a = setInterval(e, 5e3);
      return () => {
        clearInterval(a)
      }
    }, [S, t, I, f, f.name, C, i, O]), null == g) ? null : (0, a.jsx)(h.default, {
      className: _.effect,
      effect: N,
      onComplete: j
    })
  })