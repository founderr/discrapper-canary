n.d(t, {
  Z: function() {
    return A
  }
});
var i = n(735250),
  s = n(470079),
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
  g = n(502568),
  p = n(933557),
  T = n(287746),
  N = n(689938),
  S = n(415412),
  C = n(231110);

function A(e) {
  let {
    channel: t,
    baseChannelId: n
  } = e, A = (0, p.ZP)(t), f = (0, d.K)(), Z = (0, d.V)(), v = (0, l.e7)([c.Z], () => c.Z.isMessageRequest(t.id)), L = (0, l.e7)([u.Z], () => u.Z.isSpam(t.id)), O = (0, h.V)(t.id, t.getRecipientId()), R = s.useCallback(() => {
    I.Z.closeChannelSidebar(m.uZ), v && f && (0, _.Kh)(t.id), L && Z && (0, _.Kh)(t.id)
  }, [t.id, L, Z, v, f]), x = s.useCallback(() => {
    (0, a.showToast)((0, a.createToast)(N.Z.Messages.MESSAGE_REQUESTS_SPAM_ERROR_ALERT_TITLE, a.ToastType.FAILURE))
  }, []), {
    markAsNotSpam: M
  } = (0, E.m)({
    onAcceptSuccess: R,
    onError: x
  });
  if (null == t || !t.isDM()) return null;
  let P = [(0, i.jsx)(g.ZP.Icon, {
    icon: a.CloseSmallIcon,
    tooltip: N.Z.Messages.CLOSE,
    onClick: () => I.Z.closeChannelSidebar(n)
  }, "close")];
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(g.ZP, {
      toolbar: P,
      "aria-label": N.Z.Messages.CHANNEL_HEADER_BAR_A11Y_LABEL,
      children: (0, o.ud)({
        channel: t,
        channelName: A,
        inSidebar: !0
      })
    }), L && (0, i.jsxs)("div", {
      className: C.hamBanner,
      children: [(0, i.jsx)(a.Text, {
        className: C.__invalid_hamBannerText,
        variant: "text-sm/normal",
        children: N.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_HEADER
      }), (0, i.jsx)(a.Button, {
        className: C.hamBannerButton,
        size: a.ButtonSizes.SMALL,
        onClick: () => M(t, O),
        children: N.Z.Messages.MESSAGE_REQUESTS_CHANNEL_SIDEBAR_HAM_BUTTON
      })]
    }), (0, i.jsx)("div", {
      className: S.chat,
      children: (0, i.jsx)(T.Z, {
        channel: t,
        guild: null,
        chatInputType: r.I.SIDEBAR
      }, t.id)
    })]
  })
}