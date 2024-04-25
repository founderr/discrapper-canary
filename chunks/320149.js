"use strict";
a.r(t), a.d(t, {
  default: function() {
    return N
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("442837"),
  i = a("481060"),
  r = a("541716"),
  o = a("910611"),
  u = a("355298"),
  d = a("333984"),
  c = a("26373"),
  f = a("486622"),
  E = a("718538"),
  h = a("359110"),
  _ = a("6025"),
  C = a("433355"),
  m = a("465670"),
  S = a("502568"),
  I = a("933557"),
  p = a("287746"),
  T = a("689938"),
  g = a("571770"),
  A = a("783913");

function N(e) {
  let {
    channel: t,
    baseChannelId: a
  } = e, N = (0, I.default)(t), v = (0, c.useListHasSingleMessageRequest)(), R = (0, c.useListHasSingleSpamMessageRequest)(), L = (0, l.useStateFromStores)([u.default], () => u.default.isMessageRequest(t.id)), O = (0, l.useStateFromStores)([d.default], () => d.default.isSpam(t.id)), P = (0, E.useLongestChannelMessageBeforeReply)(t.id, t.getRecipientId()), M = s.useCallback(() => {
    _.default.closeChannelSidebar(C.MESSAGE_REQUESTS_BASE_CHANNEL_ID), L && v && (0, h.transitionToChannel)(t.id), O && R && (0, h.transitionToChannel)(t.id)
  }, [t.id, O, R, L, v]), x = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(T.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, i.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: y
  } = (0, f.useMessageRequestActions)({
    onAcceptSuccess: M,
    onError: x
  });
  if (null == t || !t.isDM()) return null;
  let D = [(0, n.jsx)(S.default.Icon, {
    icon: m.default,
    tooltip: T.default.Messages.CLOSE,
    onClick: () => _.default.closeChannelSidebar(a)
  }, "close")];
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(S.default, {
      toolbar: D,
      "aria-label": T.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, o.renderTitle)({
        channel: t,
        channelName: N,
        inSidebar: !0
      })
    }), O && (0, n.jsxs)("div", {
      className: A.hamBanner,
      children: [(0, n.jsx)(i.Text, {
        className: A.__invalid_hamBannerText,
        variant: "text-sm/normal",
        children: T.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
      }), (0, n.jsx)(i.Button, {
        className: A.hamBannerButton,
        size: i.ButtonSizes.SMALL,
        onClick: () => y(t, P),
        children: T.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
      })]
    }), (0, n.jsx)("div", {
      className: g.chat,
      children: (0, n.jsx)(p.default, {
        channel: t,
        guild: null,
        chatInputType: r.ChatInputTypes.SIDEBAR
      }, t.id)
    })]
  })
}