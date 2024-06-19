n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(952265),
  r = n(481060),
  o = n(378298),
  c = n(444957),
  u = n(276618),
  d = n(367408),
  h = n(473092),
  m = n(819640),
  p = n(502568),
  E = n(134612),
  g = n(689938),
  f = n(286489);
t.Z = i.memo(function(e) {
  let {
    channel: t
  } = e, C = (0, c.h)(t.id), _ = (0, u.o)(t.id), I = (0, d.M)(t.id), x = (0, a.f9)(), T = (0, s.e7)([m.Z], () => m.Z.hasLayers()), N = i.useCallback(() => _ ? g.Z.Messages.INAPPROPRIATE_CONVERSATION_INITIAL_TOOLTIP : null != I ? g.Z.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP : null, [_, I]), Z = i.useMemo(() => (_ || null != I) && !x && !T, [_, I, x, T]), [S, v] = i.useState(N());
  i.useEffect(() => {
    null != I && null != C && (r.AccessibilityAnnouncer.announce(g.Z.Messages.INAPPROPRIATE_CONVERSATION_SAFETY_TOOLTIP_ANNOUNCEMENT), setTimeout(() => {
      (0, o.T)(t.id, [I.id])
    }, 5e3), (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: I.id,
      warningType: I.type,
      isNudgeWarning: null != I,
      viewName: h.pb.SAFETY_TOOLS_NUDGE_TOOLTIP
    })), _ && (r.AccessibilityAnnouncer.announce(g.Z.Messages.INAPPROPRIATE_CONVERSATION_INITIAL_TOOLTIP_ANNOUNCEMENT), setTimeout(() => {
      (0, o.Ot)(t.id)
    }, 5e3))
  }, [t, I, C, _]), i.useEffect(() => {
    null != C && (0, h.KQ)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: C.id,
      warningType: C.type,
      isNudgeWarning: null != I,
      viewName: h.pb.SAFETY_TOOLS_BUTTON
    })
  }, []), i.useEffect(() => {
    let e = N();
    null != e && v(e)
  }, [_, I, N]);
  let A = i.useCallback(() => {
    if (null != I && (0, o.T)(t.id, [I.id]), null != C)(0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("49237"), n.e("49508"), n.e("9738")]).then(n.bind(n, 611446));
      return n => {
        let {
          onClose: i,
          transitionState: s
        } = n;
        return (0, l.jsx)(e, {
          otherUserId: t.getRecipientId(),
          channelId: t.id,
          warningId: C.id,
          warningType: C.type,
          onClose: i,
          transitionState: s
        })
      }
    }, {
      modalKey: E.X_
    }), (0, h.qc)({
      channelId: t.id,
      senderId: t.getRecipientId(),
      warningId: C.id,
      warningType: C.type,
      cta: h.NM.USER_SAFETY_TOOLS_BUTTON_CLICK,
      isNudgeWarning: null != I
    })
  }, [I, C, t]);
  return null == C ? null : (0, l.jsx)(r.Tooltip, {
    forceOpen: Z,
    text: S,
    color: r.TooltipColors.BRAND,
    position: "bottom",
    tooltipClassName: f.tooltip,
    tooltipContentClassName: f.tooltipContent,
    children: () => (0, l.jsx)(p.ZP.Icon, {
      icon: r.ShieldIcon,
      onClick: A,
      tooltip: g.Z.Messages.SAFETY_TOOLS_BUTTON_LABEL,
      tooltipDisabled: null != I
    })
  })
})