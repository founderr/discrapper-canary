"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("77078"),
  r = n("850391"),
  o = n("557809"),
  u = n("288518"),
  d = n("486503"),
  c = n("803524"),
  f = n("7643"),
  E = n("949067"),
  _ = n("144491"),
  h = n("208021"),
  C = n("982108"),
  I = n("945330"),
  T = n("664336"),
  S = n("679653"),
  p = n("176347"),
  m = n("782340"),
  A = n("768922"),
  g = n("421202");

function N(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, N = (0, S.default)(t), R = (0, c.useListHasSingleMessageRequest)(), O = (0, c.useListHasSingleSpamMessageRequest)(), L = (0, l.useStateFromStores)([u.default], () => u.default.isMessageRequest(t.id)), v = (0, l.useStateFromStores)([d.default], () => d.default.isSpam(t.id)), M = (0, E.useLongestChannelMessageBeforeReply)(t.id, t.getRecipientId()), P = s.useCallback(() => {
    h.default.closeChannelSidebar(C.MESSAGE_REQUESTS_BASE_CHANNEL_ID), L && R && (0, _.transitionToChannel)(t.id), v && O && (0, _.transitionToChannel)(t.id)
  }, [t.id, v, O, L, R]), D = s.useCallback(() => {
    (0, i.showToast)((0, i.createToast)(m.default.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, i.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: y
  } = (0, f.useMessageRequestActions)({
    onAcceptSuccess: P,
    onError: D
  });
  if (null == t || !t.isDM()) return null;
  let x = [(0, a.jsx)(T.default.Icon, {
    icon: I.default,
    tooltip: m.default.Messages.CLOSE,
    onClick: () => h.default.closeChannelSidebar(n)
  }, "close")];
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(T.default, {
      toolbar: x,
      "aria-label": m.default.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, o.renderTitle)({
        channel: t,
        channelName: N,
        inSidebar: !0
      })
    }), v && (0, a.jsxs)("div", {
      className: g.hamBanner,
      children: [(0, a.jsx)(i.Text, {
        className: g.hamBannerText,
        variant: "text-sm/normal",
        children: m.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
      }), (0, a.jsx)(i.Button, {
        className: g.hamBannerButton,
        size: i.ButtonSizes.SMALL,
        onClick: () => y(t, M),
        children: m.default.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
      })]
    }), (0, a.jsx)("div", {
      className: A.chat,
      children: (0, a.jsx)(p.default, {
        channel: t,
        guild: null,
        chatInputType: r.ChatInputTypes.SIDEBAR
      }, t.id)
    })]
  })
}