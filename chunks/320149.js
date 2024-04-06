"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("541716"),
  o = n("910611"),
  u = n("355298"),
  d = n("333984"),
  c = n("26373"),
  f = n("486622"),
  E = n("718538"),
  _ = n("359110"),
  h = n("6025"),
  C = n("433355"),
  m = n("465670"),
  S = n("502568"),
  I = n("933557"),
  T = n("287746"),
  p = n("689938"),
  g = n("571770"),
  A = n("783913");

function N(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, N = (0, I.default)(t), v = (0, c.useListHasSingleMessageRequest)(), R = (0, c.useListHasSingleSpamMessageRequest)(), O = (0, l.useStateFromStores)([u.default], () => u.default.isMessageRequest(t.id)), L = (0, l.useStateFromStores)([d.default], () => d.default.isSpam(t.id)), M = (0, E.useLongestChannelMessageBeforeReply)(t.id, t.getRecipientId()), P = s.useCallback(() => {
    h.default.closeChannelSidebar(C.MESSAGE_REQUESTS_BASE_CHANNEL_ID), O && v && (0, _.transitionToChannel)(t.id), L && R && (0, _.transitionToChannel)(t.id)
  }, [t.id, L, R, O, v]), y = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(p.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, i.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: D
  } = (0, f.useMessageRequestActions)({
    onAcceptSuccess: P,
    onError: y
  });
  if (null == t || !t.isDM()) return null;
  let x = [(0, a.jsx)(S.default.Icon, {
    icon: m.default,
    tooltip: p.default.Messages.CLOSE,
    onClick: () => h.default.closeChannelSidebar(n)
  }, "close")];
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S.default, {
      toolbar: x,
      "aria-label": p.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, o.renderTitle)({
        channel: t,
        channelName: N,
        inSidebar: !0
      })
    }), L && (0, a.jsxs)("div", {
      className: A.hamBanner,
      children: [(0, a.jsx)(i.Text, {
        className: A.__invalid_hamBannerText,
        variant: "text-sm/normal",
        children: p.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
      }), (0, a.jsx)(i.Button, {
        className: A.hamBannerButton,
        size: i.ButtonSizes.SMALL,
        onClick: () => D(t, M),
        children: p.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
      })]
    }), (0, a.jsx)("div", {
      className: g.chat,
      children: (0, a.jsx)(T.default, {
        channel: t,
        guild: null,
        chatInputType: r.ChatInputTypes.SIDEBAR
      }, t.id)
    })]
  })
}