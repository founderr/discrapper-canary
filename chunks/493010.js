var l = n(735250),
  i = n(470079),
  s = n(704215),
  a = n(481060),
  r = n(475179),
  o = n(561472),
  c = n(287746),
  u = n(325708),
  d = n(541716),
  h = n(605236),
  m = n(703558),
  E = n(502568),
  p = n(585483),
  g = n(909820),
  f = n(981631),
  C = n(921944),
  _ = n(689938),
  I = n(423289);
t.Z = function(e) {
  let {
    channel: t,
    guild: n,
    maxWidth: x
  } = e;
  i.useEffect(() => {
    (0, h.EW)(s.z.CALL_CHAT_BUTTON_TEXT_IN_VOICE_COACH_MARK, {
      dismissAction: C.L.AUTO
    })
  }, []);
  let T = i.useCallback(() => {
      r.Z.updateChatOpen(t.id, !1), p.S.safeDispatch(f.CkL.FOCUS_CHAT_BUTTON)
    }, [t.id]),
    N = (0, l.jsx)(E.ZP.Icon, {
      icon: a.CloseSmallIcon,
      tooltip: _.Z.Messages.CLOSE,
      onClick: T
    });
  return (0, l.jsxs)(u.Z, {
    sidebarType: u.y.CallChatSidebar,
    maxWidth: x,
    floatingLayer: g.ZP,
    children: [(0, l.jsx)(o.Z, {
      channel: t,
      draftType: m.d.ChannelMessage
    }), (0, l.jsxs)(E.ZP, {
      toolbar: N,
      "aria-label": _.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: [(0, l.jsx)(E.ZP.Icon, {
        icon: a.ChatIcon,
        disabled: !0,
        "aria-label": _.Z.Messages.VOICE_CHAT_TEXT_CHANNEL
      }), (0, l.jsx)(E.ZP.Title, {
        children: t.name
      })]
    }), (0, l.jsx)("div", {
      className: I.chat,
      children: (0, l.jsx)(c.Z, {
        channel: t,
        guild: n,
        chatInputType: d.I.SIDEBAR
      }, t.id)
    })]
  })
}