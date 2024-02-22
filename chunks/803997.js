"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("917351"),
  o = n("446674"),
  u = n("996496"),
  d = n("981913"),
  c = n("660478"),
  f = n("191542"),
  h = n("256170"),
  m = n("378765"),
  p = n("550766"),
  E = n("191225"),
  g = n("272505"),
  S = n("49111"),
  C = n("782340"),
  _ = n("518958");

function I(e) {
  let {
    channelId: t,
    className: n,
    ...s
  } = e, I = a.useRef(null), T = (0, o.useStateFromStores)([E.default], () => E.default.getFocusedLayout() === g.FocusedActivityLayouts.RESIZABLE), v = a.useCallback(() => {
    let e = T ? g.FocusedActivityLayouts.NO_CHAT : g.FocusedActivityLayouts.RESIZABLE;
    (0, p.updateFocusedActivityLayout)(e)
  }, [T]), {
    unreadCount: x,
    mentionCount: N
  } = function(e) {
    let t = (0, o.useStateFromStores)([f.default], () => !(0, r.isEmpty)(f.default.getTypingUsers(e)), [e]),
      {
        unreadCount: n,
        mentionCount: l
      } = (0, o.useStateFromStoresObject)([c.default], () => ({
        unreadCount: c.default.getUnreadCount(e),
        mentionCount: c.default.getMentionCount(e)
      }), [e]);
    return {
      unreadCount: n,
      mentionCount: l,
      isTyping: t
    }
  }(t), A = a.useCallback(() => {
    var e;
    null === (e = I.current) || void 0 === e || e.focus()
  }, []);
  (0, m.useComponentAction)({
    event: S.ComponentActions.FOCUS_CHAT_BUTTON,
    handler: A
  });
  let M = T ? C.default.Messages.HIDE_CHAT : C.default.Messages.SHOW_CHAT,
    R = [M];
  N > 0 && R.push(C.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
    mentionCount: N
  })), x > 0 && R.push(C.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD);
  let j = (0, o.useStateFromStores)([E.default], () => E.default.getFocusedLayout()),
    L = N > 0 ? N : x,
    y = L > 0;
  return (0, l.jsxs)("div", {
    className: _.wrapper,
    children: [(0, l.jsx)(d.default, {
      buttonRef: I,
      onClick: v,
      label: M,
      "aria-label": R.join(", "),
      tooltipPosition: "top",
      iconComponent: h.default,
      themeable: !0,
      className: i(n, _.circularButton, j === g.FocusedActivityLayouts.NO_CHAT ? _.upArrow : _.downArrow),
      ...s
    }), y ? (0, l.jsx)(u.default, {
      hasMentions: N > 0,
      truncatedCount: L > 99 ? "99+" : L,
      className: _.badge
    }) : null]
  })
}