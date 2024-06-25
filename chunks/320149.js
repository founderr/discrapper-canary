n.d(t, {
  Z: function() {
    return A
  }
});
var s = n(735250),
  i = n(470079),
  l = n(442837),
  a = n(481060),
  r = n(541716),
  o = n(910611),
  c = n(355298),
  u = n(333984),
  d = n(26373),
  E = n(486622),
  h = n(718538),
  _ = n(359110),
  I = n(6025),
  m = n(433355),
  T = n(502568),
  g = n(933557),
  p = n(287746),
  N = n(689938),
  S = n(415412),
  C = n(231110);

function A(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, A = (0, g.ZP)(t), f = (0, d.K)(), Z = (0, d.V)(), L = (0, l.e7)([c.Z], () => c.Z.isMessageRequest(t.id)), O = (0, l.e7)([u.Z], () => u.Z.isSpam(t.id)), v = (0, h.V)(t.id, t.getRecipientId()), R = i.useCallback(() => {
    I.Z.closeChannelSidebar(m.uZ), L && f && (0, _.Kh)(t.id), O && Z && (0, _.Kh)(t.id)
  }, [t.id, O, Z, L, f]), P = i.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(N.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, a.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: x
  } = (0, E.m)({
    onAcceptSuccess: R,
    onError: P
  });
  if (null == t || !t.isDM()) return null;
  let M = [(0, s.jsx)(T.ZP.Icon, {
    icon: a.CloseSmallIcon,
    tooltip: N.Z.Messages.CLOSE,
    onClick: () => I.Z.closeChannelSidebar(n)
  }, "close")];
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(T.ZP, {
      toolbar: M,
      "aria-label": N.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, o.ud)({
        channel: t,
        channelName: A,
        inSidebar: !0
      })
    }), O && (0, s.jsxs)("div", {
      className: C.hamBanner,
      children: [(0, s.jsx)(a.Text, {
        className: C.__invalid_hamBannerText,
        variant: "text-sm/normal",
        children: N.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
      }), (0, s.jsx)(a.Button, {
        className: C.hamBannerButton,
        size: a.ButtonSizes.SMALL,
        onClick: () => x(t, v),
        children: N.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
      })]
    }), (0, s.jsx)("div", {
      className: S.chat,
      children: (0, s.jsx)(p.Z, {
        channel: t,
        guild: null,
        chatInputType: r.I.SIDEBAR
      }, t.id)
    })]
  })
}