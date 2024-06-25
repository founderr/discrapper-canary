n.d(t, {
  Z: function() {
    return p
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  r = n(19780),
  a = n(436055),
  o = n(785792),
  u = n(190054),
  c = n(760373),
  d = n(689938),
  h = n(294903);

function p() {
  let e = (0, i.e7)([r.Z], () => {
      var e;
      return null === (e = r.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator
    }),
    t = (0, a.E)({
      codeBase64: e,
      chunkSize: c.y6,
      desiredLength: c.YP
    });
  return (0, l.jsxs)("div", {
    className: h.container,
    children: [(0, l.jsxs)("div", {
      className: h.tag,
      children: [(0, l.jsx)(s.LockIcon, {
        size: "xxs",
        color: s.tokens.colors.STATUS_POSITIVE
      }), (0, l.jsx)(s.Text, {
        variant: "text-xs/medium",
        color: "status-positive",
        children: d.Z.Messages.E2EE_END_TO_END_ENCRYPTED
      })]
    }), (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: d.Z.Messages.E2EE_RTC_PANEL_CALL_VERIFICATION_SUBTITLE
    }), (0, l.jsxs)("div", {
      className: h.header,
      children: [(0, l.jsx)(s.Heading, {
        variant: "text-sm/bold",
        color: "header-primary",
        children: d.Z.Messages.E2EE_VOICE_PRIVACY_CODE
      }), null != t && (0, l.jsx)(u.H, {
        chunks: t,
        color: s.tokens.colors.INTERACTIVE_NORMAL.css
      })]
    }), null != t && (0, l.jsx)(o.b, {
      className: h.code,
      chunks: t,
      columns: c.WK
    }), (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: d.Z.Messages.E2EE_CALL_VERIFICATION_FOOTER_TEXT.format({
        helpArticle: c.l4
      })
    })]
  })
}