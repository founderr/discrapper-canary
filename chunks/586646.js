n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250);
n(470079);
var l = n(442837),
  r = n(481060),
  a = n(19780),
  s = n(436055),
  o = n(785792),
  c = n(190054),
  u = n(760373),
  d = n(689938),
  h = n(294903);

function p() {
  let e = (0, l.e7)([a.Z], () => {
      var e;
      return null === (e = a.Z.getSecureFramesState()) || void 0 === e ? void 0 : e.epochAuthenticator
    }),
    t = (0, s.E)({
      codeBase64: e,
      chunkSize: u.y6,
      desiredLength: u.YP
    });
  return (0, i.jsxs)("div", {
    className: h.container,
    children: [(0, i.jsxs)("div", {
      className: h.tag,
      children: [(0, i.jsx)(r.LockIcon, {
        size: "xxs",
        color: r.tokens.colors.STATUS_POSITIVE
      }), (0, i.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "status-positive",
        children: d.Z.Messages.E2EE_END_TO_END_ENCRYPTED
      })]
    }), (0, i.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: d.Z.Messages.E2EE_RTC_PANEL_CALL_VERIFICATION_SUBTITLE
    }), (0, i.jsxs)("div", {
      className: h.header,
      children: [(0, i.jsx)(r.Heading, {
        variant: "text-sm/bold",
        color: "header-primary",
        children: d.Z.Messages.E2EE_VOICE_PRIVACY_CODE
      }), null != t && (0, i.jsx)(c.H, {
        chunks: t,
        color: r.tokens.colors.INTERACTIVE_NORMAL.css
      })]
    }), null != t && (0, i.jsx)(o.b, {
      className: h.code,
      chunks: t,
      columns: u.WK
    }), (0, i.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-secondary",
      children: d.Z.Messages.E2EE_CALL_VERIFICATION_FOOTER_TEXT.format({
        helpArticle: u.l4
      })
    })]
  })
}