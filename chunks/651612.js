n.d(t, {
  Z: function() {
    return _
  }
}), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(392711),
  a = n(442837),
  r = n(481060),
  o = n(481051),
  c = n(871499),
  u = n(306680),
  d = n(111583),
  h = n(459273),
  m = n(566620),
  p = n(317381),
  E = n(918559),
  g = n(981631),
  f = n(689938),
  C = n(856230);

function _(e) {
  let {
    channelId: t,
    className: n,
    ..._
  } = e, I = i.useRef(null), x = (0, a.e7)([p.ZP], () => p.ZP.getFocusedLayout() === E.MI.RESIZABLE), T = i.useCallback(() => {
    let e = x ? E.MI.NO_CHAT : E.MI.RESIZABLE;
    (0, m.gC)(e)
  }, [x]), {
    unreadCount: N,
    mentionCount: Z
  } = function(e) {
    let t = (0, a.e7)([d.Z], () => !(0, s.isEmpty)(d.Z.getTypingUsers(e)), [e]),
      {
        unreadCount: n,
        mentionCount: l
      } = (0, a.cj)([u.ZP], () => ({
        unreadCount: u.ZP.getUnreadCount(e),
        mentionCount: u.ZP.getMentionCount(e)
      }), [e]);
    return {
      unreadCount: n,
      mentionCount: l,
      isTyping: t
    }
  }(t), S = i.useCallback(() => {
    var e;
    null === (e = I.current) || void 0 === e || e.focus()
  }, []);
  (0, h.yp)({
    event: g.CkL.FOCUS_CHAT_BUTTON,
    handler: S
  });
  let v = x ? f.Z.Messages.HIDE_CHAT : f.Z.Messages.SHOW_CHAT,
    A = [v];
  Z > 0 && A.push(f.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
    mentionCount: Z
  })), N > 0 && A.push(f.Z.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD);
  let M = (0, a.e7)([p.ZP], () => p.ZP.getFocusedLayout()),
    R = Z > 0 ? Z : N,
    j = R > 0;
  return (0, l.jsxs)("div", {
    className: C.wrapper,
    children: [(0, l.jsx)(c.d, {
      buttonRef: I,
      onClick: T,
      label: v,
      "aria-label": A.join(", "),
      tooltipPosition: "top",
      iconComponent: M === E.MI.NO_CHAT ? r.ChevronLargeUpIcon : r.ChevronLargeDownIcon,
      themeable: !0,
      className: n,
      ..._
    }), j ? (0, l.jsx)(o.Z, {
      hasMentions: Z > 0,
      truncatedCount: R > 99 ? "99+" : R,
      className: C.badge
    }) : null]
  })
}