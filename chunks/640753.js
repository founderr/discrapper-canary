n(47120);
var i = n(735250),
  s = n(470079),
  a = n(442837),
  l = n(570140),
  o = n(607070),
  r = n(222677),
  u = n(695346),
  c = n(960020),
  d = n(347904),
  h = n(620652),
  m = n(815605),
  p = n(519282),
  g = n(775139);
t.Z = s.memo(function(e) {
  let {
    channelId: t,
    messageId: n,
    emoji: T,
    useChatFontScaling: f,
    color: v,
    count: E
  } = e, I = (0, a.e7)([c.Z], () => c.Z.getEffectForEmojiId(t, n, T)), N = f ? g : p, x = s.useMemo(() => (0, m.Zn)(T, v, t, {
    key: I,
    messageId: n
  }), [v, I, T, t, n]), [S, C] = s.useState(!1), R = (0, a.e7)([o.Z], () => o.Z.useReducedMotion), Z = u.Yk.useSetting(), _ = s.useCallback(() => {
    l.Z.dispatch({
      type: "BURST_REACTION_EFFECT_CLEAR",
      channelId: t,
      messageId: n,
      emoji: T
    })
  }, [T, t, n]);
  return (s.useEffect(() => {
    let e = () => {
      if (S) return;
      let e = (0, d.vJ)("".concat(Date.now()).concat(t).concat(n).concat(T.name)) % 10;
      (e += E > 4 ? 4 : E - 1) > 7 && (C(!0), (0, r.T6)({
        channelId: t,
        messageId: n,
        emoji: T,
        key: c.I.RANDOM
      }))
    };
    if (S || R && !Z || !Z) return;
    e();
    let i = setInterval(e, 5e3);
    return () => {
      clearInterval(i)
    }
  }, [Z, t, E, T, T.name, S, n, R]), null == I) ? null : (0, i.jsx)(h.Z, {
    className: N.effect,
    effect: x,
    onComplete: _
  })
})